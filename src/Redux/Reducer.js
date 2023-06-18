import { MAKE_REQUEST } from "./ActionType"
import { GET_USER_LIST } from "./ActionType"

const initialState = {
  loading: true,
  userList: [],
  userObj: {},

}

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_REQUEST:
      return {
        ...state,
        loading: true
      }
    case GET_USER_LIST:
      return {
        ...state,
        loading: false,
        userList: action.payload,
        userObj: {}

      }
    default: return state
  }
}