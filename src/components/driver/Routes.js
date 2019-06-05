/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";
import PropTypes from "prop-types";
// import classNames from "classnames";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import axios from "axios";
const styles = theme => ({
	root: {
		display: "flex",
		justifyContent: "center",
		flexWrap: "wrap"
	},
	fabs: {
		margin: theme.spacing.unit
	},
	iconButton: {
		padding: 10
	},
	chip: {
		margin: theme.spacing.unit
	},
	icon: {
		marginRight: theme.spacing.unit * 2
	},
	heroUnit: {
		backgroundColor: theme.palette.background.paper
	},
	heroContent: {
		maxWidth: 600,
		margin: "0 auto",
		padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
	},
	heroButtons: {
		marginTop: theme.spacing.unit * 4
	},
	layout: {
		width: "auto",
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
			width: 1100,
			marginLeft: "auto",
			marginRight: "auto"
		}
	},
	cardGrid: {
		padding: `${theme.spacing.unit * 8}px 0`
	},
	card: {
		height: "100%",
		display: "flex",
		flexDirection: "column"
	},
	cardMedia: {
		paddingTop: "56.25%" // 16:9
	},
	cardContent: {
		flexGrow: 1
	},
	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25)
		},
		marginRight: theme.spacing.unit * 2,
		marginLeft: 0,
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing.unit * 3,
			width: "auto"
		}
	}
});
class Routes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			routes: [
				{
					_id: 1,
					vehicle_id: "s124shj",
					attributes: {
						vehicle: "range rover",
						customer_name: "paypal",
						destination: "jayanagar 4th block",
						source: "bda complex hsr"
					}
				},
				{
					_id: 2,
					vehicle_id: "s125shj",
					attributes: {
						vehicle: "honda city",
						customer_name: "mobikwik",
						destination:
							"Brigade Rubix, Unit No 604, 6th Floor, 20, Watch Factory Rd, Phase -1, Peenya, Bengaluru, Karnataka 560013",
						source: "slik board,bangalore"
					}
				}
			],
			metter: "300",
			start: true,
			load: true
		};
	}
	componentDidMount() {
		// axios
		// 	.get("http://10.84.1.25:3000/api/v1/transport_plans", {
		// 		headers: {
		// 			Authorization: localStorage.getItem("token")
		// 		}
		// 	})
		// 	.then(response => {
		// 		console.log(response.data.data.attributes, 12);
		// 		const data = response.data.data;
		// 		this.setState(() => ({
		// 			routes: response.data.data,
		// 			load: true
		// 		}));
		// 	})
		// 	.catch(err => {
		// 		console.log(err);
		// 	});
	}

	handleStart = id => {
		if (id) {
			this.setState(prevState => ({
				start: !prevState.start,
				metter: "300"
			}));
		}
	};

	render() {
		const { classes } = this.props;

		return (
			<div>
				<br />
				<CssBaseline />
				<main>
					<div className={classes.layout}>
						<Grid container spacing={4}>
							{this.state.load &&
								this.state.routes.map(route => (
									<Grid item key={route._id} md={6}>
										<Card className={classes.card}>
											<CardContent className={classes.cardContent}>
												<Typography>
													<span
														style={{
															fontFamily: "Courier New",
															fontSize: "20px",
															fontWeight: "700"
														}}
													>
														vehicle
													</span>
													:{" "}
													<span style={{ fontFamily: "Courier New" }}>
														{route.attributes.vehicle}
													</span>
												</Typography>
												<Typography>
													<span
														style={{
															fontFamily: "Courier New",
															fontSize: "20px",
															fontWeight: "700"
														}}
													>
														Customer_name
													</span>
													:{" "}
													<span style={{ fontFamily: "Courier New" }}>
														{route.attributes.customer_name}
													</span>
												</Typography>
												<Typography>
													<span
														style={{
															fontFamily: "Courier New",
															fontSize: "20px",
															fontWeight: "700"
														}}
													>
														Route_Plan
													</span>
													:{" "}
													<span style={{ fontFamily: "Courier New" }}>
														{route.attributes.destination} <br /> To <br />
														{route.attributes.source}
													</span>
												</Typography>
											</CardContent>

											{route._id ? (
												<Button
													onClick={() => {
														this.handleStart(route._id);
													}}
												>
													{this.state.start ? "START" : "STOP"}
												</Button>
											) : (
												""
											)}
											{route._id ? (
												<center>
													Readding:{" "}
													{!this.state.start ? this.state.metter : "0"}
												</center>
											) : (
												""
											)}
											<center>
												<a
													href={`http://maps.google.com/?saddr=${
														route.attributes.source
													}&daddr=${route.attributes.destination}`}
													// eslint-disable-next-line react/jsx-no-target-blank
													target="_blank"
												>
													<Button fullWidth>Map</Button>
												</a>
											</center>
										</Card>
									</Grid>
								))}
						</Grid>
					</div>
				</main>
			</div>
		);
	}
}
Routes.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Routes);
