import { v4 as uuidv4 } from 'uuid';
import { ADD_NEW_TODO, COMPLETE_TODO, REMOVE_TODO } from '../constants/action_type';

export const addNewTodo = text => {
  return {
    type: ADD_NEW_TODO,
    newItem: {
      text,
      key: uuidv4(),
      completed: false
    }
  }
}

export const completeTodo = (index, item) => {
  return {
    type: COMPLETE_TODO,
    index, item
  }
}

export const removeTodo = (index) => {
  return {
    type: REMOVE_TODO,
    index
  };
}