import { combineReducers } from "redux";

// 버튼을 관리하는 리듀서를 만들고 디덕스로 contextAPI객체로 이용할 꺼임
const initialized = false;

export const ISTOGGLED = "ISTOGGLED";

const isToggled = (state = initialized, action) => {
  switch (action.type) {
    case ISTOGGLED:
      console.log(action);
      return !state;
    default:
      return state;
  }
};
const rootReducer = combineReducers({ isToggled });

export default rootReducer;
