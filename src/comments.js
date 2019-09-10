import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT} from './actions';

function comments(state =[], action) {
  switch(action.type) {
    case ADD_COMMENT:
      return [{
        id: action.id,
        text: action.text,
        votes: 0
        },
        ...state
      ];

    case REMOVE_COMMENT:
      return state.filter(comment => comment.id !== action.id);

    case EDIT_COMMENT:
      const editState = [...state];
      (editState.find(comment => comment.id === action.id)).text = action.text;
      return editState;

    case THUMB_UP_COMMENT:
      // const thumbUpState = state;
      // (thumbUpState.find(comment => comment.id === action.id)).votes++;
      // console.log(thumbUpState);
      // console.log(state);
      // return thumbUpState;

      const thumbUpState = [...state];
      (thumbUpState.find(comment => comment.id === action.id)).votes++;
      return thumbUpState;

    case THUMB_DOWN_COMMENT:
      const thumbDownState = [...state];
      (thumbDownState.find(comment => comment.id === action.id)).votes--;
      return thumbDownState;

    default:
      return state;
  }
}

export default comments;
