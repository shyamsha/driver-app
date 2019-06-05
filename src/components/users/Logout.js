import React from "react";
import axios from "axios";

const Logout = props => {
	// axios
	// 	.delete("/users/logout", {
	// 		headers: {
	// 			Authorization: localStorage.getItem("token")
	// 		}
	// 	})
	// 	.then(responce => {
	// 		localStorage.removeItem("token");
	props.handleLogout();
	// 	})
	// 	.catch(err => {
	// 		console.log(err);
	// 	});
	props.history.push("/user/Login/");
	return <div />;
};

export default Logout;
