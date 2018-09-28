import React, { Component } from 'react';
import styled from "styled-components";
// own
import AxieBadges from "./AxieBadges";
import Axie from "./Axie";

// CSS
const StyledAxieTeam = styled.div`
	/* component */
	display:flex; 
	align-items: center;
	justify-content: space-between;
	width: auto;
	padding: 10px 15px;
	margin:10px;
	border: 2px solid white;
	border-radius:8px;
	background:white;
	:hover {}
	/* team */
	.team_title {font-size: 18px; color: #a146ef; font-weight: bold;}
	/* teammember */
	.members {display:flex; margin-top:10px;}
	.teammember { border-radius: 8px; padding-bottom:10px;  margin-right: 10px; position:relative;}
	.teammember .axie {margin:0;}
	.teammember .title {font-size:12px; color:grey; margin-bottom:5px;}
	.teammember .img {width:120px; height:auto; margin-right:0; margin-top:10px;}
	.teammember .img_box {width:120px; height:90px; position:relative;}
	.teammember .axie_badges {position: absolute; top:0; left:0;}
	.teammember .removeAxieButton {display:none; position: absolute; user-select:none; width:25px; height:25px; cursor:pointer; font-size: 12px; align-items: center; justify-content: center; border-radius: 50%; }
	.teammember .removeAxieButton {top: 15px; right: 15px; background: rgba(255, 91, 91, 0.1); color: #ea5353; font-weight: bold;}
	.teammember:hover .removeAxieButton {display:flex;}
	/* name */
	.name {font-size: 12px; color: grey;}
	/* delete button */
	.deleteButton {margin-left: 10px; user-select:none; color:grey; width:25px; height:25px; display:flex; cursor:pointer; font-size: 12px; align-items: center; justify-content: center; border-radius: 50%;  }
	.deleteButton:hover {color:#383838;}
`;

class AxieTeam extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			name: this.props.name,
		}
	}

	componentDidMount() {

	}

	/*componentWillReceiveProps({team}) {
		this.setState({...this.state, team.members});
	}*/

	render() {
		// members
		var members = "";
		//console.log("m", this.props.team);
		if(this.props.team.members.length){
			members = this.props.team.members.map((member)=>(
					<div key={member.axie.id} className="teammember">
					 <Axie data={member.axie.axieData} img={member.image} />
					 <div onClick={() => { this.props.removeAxieFromTeam(this.props.team, member) }} className="removeAxieButton">X</div>
					</div>
			));
		}

		// view
		return (
			<StyledAxieTeam className="team" onClick={this.props.onClick}>
				<div className="left">
					<p className="team_title">{this.state.name}</p>
					{members ? <div className="members">{members}</div> : ""}
				</div>
				<div className="right">
					<div className="deleteButton" onClick={this.props.deleteTeam}>X</div>
				</div>
			</StyledAxieTeam>
		);
	}
}
export default AxieTeam;