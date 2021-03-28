import React from "react";
import Home from "./Home.js";
import Council from "./Council.js";
import Events from "./Events.js";
import GymkhanaAwards from "./GymkhanaAwards.js";
import { Switch, Route, Redirect } from "react-router-dom";
import SimpleDialogDemo from "./Teams.js";

import "./App.css";

class App extends React.Component {
	state = { clicked: false };

	handleClick = () => {
		this.setState({ clicked: !this.state.clicked });
	};

	render() {
		return (
			<>
				<div className="navbar">
					<h1 className="menu-icon" onClick={this.handleClick}>
						<i
							className={
								this.state.clicked
									? "fas fa-times"
									: "fas fa-bars"
							}
						></i>
					</h1>
				</div>
				<nav
					className={
						this.state.clicked ? "nav-menu-active" : "nav-menu"
					}
				>
					<ul className="nav-menu-items">
						<li className="navlinks">
							<a href="/">Home</a>
						</li>
						<li className="navlinks">
							<a href="/council">Council</a>
						</li>
						<li className="teams-btn">
							<SimpleDialogDemo></SimpleDialogDemo>
						</li>
						<li className="navlinks">
							<a href="/events">Events</a>
						</li>
						<li className="navlinks">
							<a href="/gymkhanaawards">Gymkhana Awards</a>
						</li>
					</ul>
				</nav>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/council" component={Council} />
					<Route exact path="/events" component={Events} />
					<Route
						exact
						path="/gymkhanaawards"
						component={GymkhanaAwards}
					/>
					<Redirect to="/" />
				</Switch>
			</>
		);
	}
}

export default App;
