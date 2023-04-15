import { Pagination, PaginationItem } from "@mui/material";
import Stack from "@mui/material/Stack";

export const PerPageResult = 4;

function CustomPagination({ data, handlePageChange, page = 1 }) {
    const count = Math.ceil(data?.length / PerPageResult);

    return (
        <Stack spacing={2}>
            <Pagination
                count={count}
                variant="outlined"
                shape="rounded"
                onChange={handlePageChange}
                page={page}
                size="small"
                style={{marginTop : '10px'}}
            />
        </Stack>
    );
}

export default CustomPagination
