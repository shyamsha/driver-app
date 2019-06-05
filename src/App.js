import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Login from "./components/users/Login";
import Logout from "./components/users/Logout";
import Routes from "./components/driver/Routes";
import "./App.css";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			//login: false,
			//logout: false
		};
	}
	handleLogin = () => {
		this.setState(() => ({
			// login: true,
			// logout: false
		}));
	};
	handleLogout = () => {
		this.setState(() => ({
			// logout: true,
			// login: false
		}));
	};

	render() {
		let login = false;
		let logout = false;

		if (localStorage.getItem("token")) {
			login = true;
		} else {
			logout = true;
		}

		return (
			<BrowserRouter>
				<div className="App-header">
					<IconButton style={{ color: "white" }}>
						<MenuIcon />
					</IconButton>
					<Link
						to="/user/routes"
						style={{
							color: "white",
							textDecoration: "none",
							marginLeft: "2rem",
							marginTop: "0.6rem"
						}}
					>
						Driver
					</Link>
					{logout && (
						<div>
							<Link
								to="/user/login"
								style={{
									color: "white",
									textDecoration: "none",
									marginTop: "15rem",
									marginLeft: "50rem",
									marginBottom: "2rem"
								}}
							>
								Login
							</Link>
						</div>
					)}
					{login && (
						<div>
							<Link
								to="/user/logout"
								style={{
									color: "white",
									textDecoration: "none",
									marginLeft: "50rem"
								}}
							>
								Logout
							</Link>
						</div>
					)}
				</div>

				<div>
					<Switch>
						<Route
							path="/user/login"
							render={props => {
								return (
									<Login {...props} handleLogin={this.handleLogin} exact />
								);
							}}
							exact
						/>

						<Route path="/user/routes" component={Routes} exact />
						<Route path="/" component={Login} exact />
						<Route
							path="/user/logout"
							render={props => {
								return (
									<Logout {...props} handleLogout={this.handleLogout} exact />
								);
							}}
							exact
						/>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
