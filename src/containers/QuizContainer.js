import { connect } from 'react-redux'
import Quiz from '../components/Quiz'
import { answerClick } from '../ducks/Quiz'

const mapStateToProps = (state, ownProps) => {
	return {
		quiz: state.quizzes[ownProps.match.params.id],
		id: ownProps.match.params.id
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		answerClick: (value) => { dispatch(answerClick(value)) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)