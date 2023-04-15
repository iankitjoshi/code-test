import {
    ADD_FRIEND,
    DELETE_FRIEND,
    ADD_FAVORITE,
} from "../actions/actionTypes";

const initialState = {
    friends: [],
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FRIEND:
            const { value, id } = action.payload;
            return {
                ...state,
                friends: [
                    ...state.friends,
                    {
                        sno: state.friends.length + 1,
                        id,
                        value,
                        favorite: false
                    },
                ],
            };
        case DELETE_FRIEND:
            const delteteFriend = state.friends.filter((item) => item.id != action.id);
            return {
                ...state,
                friends: delteteFriend,
            };

        case ADD_FAVORITE:
            const updateFav = state?.friends?.map(data => {
                if (data.id === action?.id) return { ...data, favorite: !data.favorite }
                return data
            })
            return {
                ...state,
                friends: updateFav,
            };


        default:
            return state;
    }
};
export default todoReducer;