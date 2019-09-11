import {connect} from 'react-redux';
import Comment from '../Components/Comment';
import {removeComment, editComment, thumbUpComment, thumbDownComment} from '../redux/actions';

const mapDispatchToProps = (dispatch) => ({
  thumbUpComment: (id) => dispatch(thumbUpComment(id)),
  thumbDownComment: (id) => dispatch(thumbDownComment(id)),
  removeComment: (id) => dispatch(removeComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);
