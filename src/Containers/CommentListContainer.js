import {connect} from 'react-redux';
import CommentsList from '../Components/CommentsList';

const mapStateToProps = (state) => ({
  comments: state.comments
});

export default connect(mapStateToProps)(CommentsList);
