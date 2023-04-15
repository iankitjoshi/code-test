import './App.css';
import { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, TableSortLabel, Box } from '@mui/material';
import { colorCode, ColumnHead, Favkey } from './utils';
import Paper from '@mui/material/Paper';
import CustomPagination, { PerPageResult } from './Common/Pagination';
import usePagination from './Common/usePagination';
import { useDispatch, useSelector } from 'react-redux';
import { addNewFriend, deleteFriend, addToFavorite } from "./Redux/actions";
import CustomModal from './Common/CustomModal';


function App() {
  const dispatch = useDispatch();

  const [value, setValue] = useState('')
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState("asc");
  const [constantFriends, setConstantFriends] = useState([])
  const [friends, setFriends] = useState([])
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const [friendId, setFriendId] = useState(null)

  const { friends: friendsValue = [] } = useSelector(state => state?.friendsReducer) || {}

  const friendsPagination = usePagination(friends, PerPageResult, search)
  const DataWithPagination = friendsPagination?.currentData()

  useEffect(() => {
    setConstantFriends(friendsValue)
    setFriends(friendsValue)
  }, [friendsValue])


  const handleChange = (e) => {
    const { value } = e.target
    setValue(value)
  }

  const handleAddFriend = (e) => {
    e.preventDefault()
    setValue('')
    dispatch(addNewFriend(value))
  }

  const handleFavorite = (id) => dispatch(addToFavorite(id))

  const handleSearch = (e) => {
    const { value } = e.target
    setPage(1)
    const searchResult = constantFriends.filter(data => {
      return data?.value.toLowerCase()?.includes(value.toLowerCase())
    })
    setFriends(searchResult)
    setSearch(value)
  }

  const handleDelete = (id) => {
    setOpenDeleteModal(true)
    setFriendId(id)
  }

  const handleConfirmDelete = () => {
    dispatch(deleteFriend(friendId))
    setOpenDeleteModal(false)
  }

  const handleCloseModal = () => {
    setOpenDeleteModal(false)
    setFriendId(null)
  }

  const handlePageChange = (e, page) => {
    setPage(page)
    friendsPagination.jump(page)
  }

  const handleSortFav = () => {
    setOrder(order === 'asc' ? "desc" : "asc");
    const sortFav = friends.sort((a, b) => order === 'asc' ? (a.favorite - b.favorite) : (b.favorite - a.favorite))
    setFriends(sortFav)
  };

  return (
    <div className='table-container' >
      <div  >
        <form className='input-container' onSubmit={handleAddFriend} >
          <TextField value={value} onChange={handleChange} label="Name" placeholder='Enter Friend Name' variant="outlined" fullWidth />
          <Button type='submit' variant="outlined" style={{ width: '200px', marginLeft: '20px' }} disabled={!value.length} > Add Friend </Button>
        </form>
      </div>

      <TextField value={search} onChange={handleSearch} label="Search" placeholder='Search Friend Name' variant="outlined" fullWidth style={{ marginTop: '10px' }} />

      <h3>Friends List : {constantFriends.length} </h3>

      <TableContainer component={Paper}>
        <Table>

          <TableHead>
            <TableRow >
              {ColumnHead?.map((headCell) => (
                <TableCell
                  key={headCell.id}
                  align="center">
                  <TableSortLabel
                    active={headCell.id === Favkey} direction={order}
                    onClick={headCell.id === Favkey ? handleSortFav : null}>
                    {headCell.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {DataWithPagination.length ?

              DataWithPagination?.map((friend) => {
                const { id, value, favorite, sno } = friend || {}
                return <TableRow key={id}>
                  <TableCell align="center"> {sno}.</TableCell>
                  <TableCell align="center"> {value}</TableCell>
                  <TableCell align="center" >
                    <span onClick={() => handleFavorite(id)} className='pointer'>
                      {favorite ? <StarOutlinedIcon sx={{ color: colorCode.yellow }} /> : <StarBorderOutlinedIcon sx={{ color: colorCode.yellow }} />}
                    </span>
                  </TableCell>
                  <TableCell align="center" >
                    <DeleteIcon onClick={() => handleDelete(id)} sx={{ color: colorCode.red }} className='pointer' />
                  </TableCell>
                </TableRow>
              })
              :
              <TableCell style={{ textAlign: 'center' }} colSpan={ColumnHead.length} >
                No Data
              </TableCell>
            }
          </TableBody>

        </Table>
      </TableContainer>
      <CustomPagination
        data={friendsValue}
        handlePageChange={handlePageChange}
        page={page}
      />

      <CustomModal
        open={openDeleteModal}
        handleClose={handleCloseModal}
        confirmAction={handleConfirmDelete}
      />
    </div>
  );
}

export default App;