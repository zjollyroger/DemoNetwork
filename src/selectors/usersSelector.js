import {createSelector} from "reselect";

const getUsersSelector = (state) => {
    return state.usersPage.users;
};

export const simpleSelectorGetUsers = (state) => {
    return state.userPage.users;
}

export const getUsersSuperSelector = createSelector(getUsersSelector, (users) => {
    return users.filter(user => true);
})



export const getPageSizeSelector = (state) => {
    return state.usersPage.pageSize;
};

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
};

export const getSelectedPage = (state) => {
    return state.usersPage.selectedPage;
};

export const getIsDisable = (state) => {
    return state.usersPage.isDisable;
}


