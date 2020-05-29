import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {  // 1. 初始化state
  articles: []
};
// 2.
const rootReducer = (state = initialState, action) => {
  switch (action.type) {  // 2.
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };;
    default:
      return state;
  }
};

export default rootReducer;