import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux'
import { createStore, combineReducers  } from 'redux'
import createBrowserHistory from "history/createBrowserHistory";

import AppContainer from "./containers/AppContainer";
import QuizContainer from "./containers/QuizContainer";
import GameContainer from "./containers/GameContainer";

import About from "./components/About";
import NoMatch from "./components/NoMatch";

import initialStore from "./api";
import quizzes from "./ducks/Quiz"
import profile from "./ducks/Profile"

console.log("SET MAIN STATE");

const browserHistory = createBrowserHistory();

const persistedState = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : initialStore;

const reducer = combineReducers({
  quizzes,
  profile
});

let store = createStore(reducer, persistedState);

render( 
	<Provider store={store}>
		<Router history={browserHistory}>
			<AppContainer>
				<Switch>
					<Route exact={true} path="/" component={GameContainer}/>
					<Route path="/about" component={About} />
					<Route path="/quiz/:id" component={QuizContainer}/>		

					<Route component={NoMatch}/>
				</Switch>
			</AppContainer>
		</Router>
	</Provider>
	, document.querySelector(".app")
);

/*


					<Route path="/trueorfalse/:id" component={QuizContainer}/>	
*/