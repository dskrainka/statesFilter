import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from "react-router-dom";

import States from './components/states/States';
import Example from './components/example/Example';

import './p5.css';

ReactDOM.render(
	<HashRouter>
		<div>
			{/*<Route path="/" component={Switch} />*/}
			<p id="nav">
				<Link to="/states">STATES</Link>
				<span id="navSpacer"> </span>
				<Link to="/Example">EXAMPLE</Link>
			</p>
			<Route path="/states" component={States} />
			<Route path="/example" component={Example} />
		</div>
	</HashRouter>,
  document.getElementById('reactapp'),
);

