const ANSWER_CLICK = 'ANSWER_CLICK';

export function answerClick(value){
  return {
    type: ANSWER_CLICK,
    value
  }
}

export default function reducer(state = {}, action){
	console.log("REDUCER STATE", state, action)
  switch (action.type){
	case ANSWER_CLICK:
		if(action.value.answer === action.value.correct) {
			console.log(action.value.answer, action.value.correct)
			let score = state[action.value.id].score + 1;
			let current = state[action.value.id].current + 1;
			let newState = state.slice();
			newState[action.value.id].score = score;
			newState[action.value.id].current = current;
			console.log(newState);
			return newState;
		} else {
			let current = state[action.value.id].current + 1;
			let newState = state.slice();
			newState[action.value.id].current = current;
						console.log(newState);

			return newState;
		}
		return state;
  default:
    return state;
  }
}