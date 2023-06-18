import { GET_USER_LIST, MAKE_REQUEST } from "./ActionType"

export const makeRequest = () => {
  return {
    type: MAKE_REQUEST
  }
}

export const getUserList = (data) => {
  return {
    type: GET_USER_LIST,
    payload: data
  }
}