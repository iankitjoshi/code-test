import {
    ADD_FRIEND,
    DELETE_FRIEND,
    ADD_FAVORITE,
} from "./actionTypes";

export const addNewFriend = (friend) => {
    return {
        type: ADD_FRIEND,
        payload: {
            id: Date.now(),
            value: friend,
        },
    };
};
export const deleteFriend = (id) => {
    return {
        type: DELETE_FRIEND,
        id,
    };
};

export const addToFavorite = (id) => {
    return {
        type: ADD_FAVORITE,
        id
    }
}
