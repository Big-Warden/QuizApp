import { connect } from 'react-redux'
import QuizDisplay from '../components/QuizDisplay'

const mapStateToProps = (state, ownProps) => {
	return {
		quizzes: state.quizzes
	}
}

export default connect(mapStateToProps)(QuizDisplay)