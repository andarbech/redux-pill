import { CREATE_DATA, DELETE_DATA, NO_DATA, READ_ALL_DATA, UPDATE_DATA } from "../../types";

export const createActions = (data) => ({
    type: CREATE_DATA,
    payload:data
})
export const readAllActions = (data) => ({
    type: READ_ALL_DATA,
    payload:data
})

export const updateAllActions = (data) => ({
    type: UPDATE_DATA,
    payload:data
})
export const noActions = (id) => ({
    type: NO_DATA,
    payload:id
})

