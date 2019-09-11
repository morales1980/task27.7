import uuid from 'uuid';

//action types
const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

//action creators
function addComment(comment) {
  return {
    type: ADD_COMMENT,
    text: comment,
    id: uuid.v4()
  }
}

function editComment(id, comment) {
  return {
    type: EDIT_COMMENT,
    text: comment,
    id: id
  }
}

function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id: id
  }
}

function thumbUpComment(id) {
  return {
    type: THUMB_UP_COMMENT,
    id: id
  }
}

function thumbDownComment(id) {
  return {
    type: THUMB_DOWN_COMMENT,
    id: id
  }
}

export {ADD_COMMENT, addComment, EDIT_COMMENT, editComment, REMOVE_COMMENT, removeComment, THUMB_UP_COMMENT, thumbUpComment, THUMB_DOWN_COMMENT, thumbDownComment};
// export {ADD_COMMENT};
// export {addComment};
// export {EDIT_COMMENT};
// export {editComment};
// export {REMOVE_COMMENT};
// export {removeComment};
// export {THUMB_UP_COMMENT};
// export {thumbUpComment};
// export {THUMB_DOWN_COMMENT};
// export {thumbDownComment};
