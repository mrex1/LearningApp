import React, {Component} from 'react';
import * as screens from './screens'

export default class App extends Component{
	state={screen:'Main'}
	
	render() {
	  let screenName=this.state.screen
	  let CurrentScreen=screens[screenName]
		return (
		  <CurrentScreen go={screen=>this.setState({screen})}/>
		);
	}
}


