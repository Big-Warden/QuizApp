const UPDATE_SCORE = 'UPDATE_SCORE';

export function updateScore(score){
  return {
    type: UPDATE_SCORE,
    index
  }
}

export default function reducer(state = {}, action = {}){
  switch (action.type){
  case UPDATE_SCORE:
    return Object.assign(
      {},
      state,
      {
        
      }
    );
  default:
    return state;
  }
}