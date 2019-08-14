import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
	render() {
		return (
			<div style={{ width: "100%", margin: "auto" }}>
				<Grid className="Landing-grid">
					<Cell col={12}>
						<img
							src="https://previews.123rf.com/images/volmon/volmon1702/volmon170200103/72876729-cute-color-vector-illustration-of-beard-afro-black-guy-face-avatar-positive-young-black-guy-smiling-.jpg"
							alt=""
							className="avatar-img"
						/>

						<div className="banner-text">
							<h1>Full Stack Web Developer </h1>

							<hr />
							
							<p>HTML/CSS | JavaScript | React | NodeJS | Express | MongoDB </p>
						
							<div className="social-links">
							
							{/*Linkedin*/}
							<a href="http://google.com" rel="noopener noreferrer" target="blank">
							<i class="fa fa-linkedin-square" arial-hidden="true"/>
							</a>

							{/*GitHub*/}
							<a href="http://google.com" rel="noopener noreferrer" target="blank">
							<i class="fa fa-github-square"  arial-hidden="true"/>
							</a>

							{/*CodePen */}
							<a href="http://google.com" rel="noopener noreferrer" target="blank">
							<i className="fa fa-codepen"  arial-hidden="true"/>
							</a>
									{/*Twitter*/}
									<a href="http://google.com" rel="noopener noreferrer" target="blank">
							<i className="fa fa-twitter-square"  arial-hidden="true"/>
							</a>
							
							</div>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Landing;
