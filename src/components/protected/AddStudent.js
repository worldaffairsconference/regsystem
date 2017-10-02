import React, { Component } from "react";
import { hashHistory } from 'react-router-dom'
import Speakers from '../img/speaker-medley.png';
import { FormGroup, Label, Input } from "reactstrap";
import firebase from "firebase";

export default class AddStudent extends Component {
	 constructor(props) {
    super(props);
		this.state = {
			name: '',
			grade: '',
			accessability: '',
			school: '',
			panel1: '',
			panel2: '',
			panel3: '',
			panel4: '',
			panel5: '',
			panel6: '',
			panel: []
		};

		var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('users/' + userId + '/info/').once('value', (snapshot) => this.setState({
      school: snapshot.val().school,
    }));

		this.handleChangeName = this.handleChangeName.bind(this);
		this.handleChangeGrade = this.handleChangeGrade.bind(this);
		this.handleChangeAccessability = this.handleChangeAccessability.bind(this);
		this.handleChangePanel1 = this.handleChangePanel1.bind(this);
		this.handleChangePanel2 = this.handleChangePanel2.bind(this);
		this.handleChangePanel3 = this.handleChangePanel3.bind(this);
		this.handleChangePanel4 = this.handleChangePanel4.bind(this);
		this.handleChangePanel5 = this.handleChangePanel5.bind(this);
		this.handleChangePanel6 = this.handleChangePanel6.bind(this);


		this.handleSubmitStudent = this.handleSubmitStudent.bind(this);
    this.writeStudentData = this.writeStudentData.bind(this);
  }

	handleChangeName(event) {
   this.setState({
     name: event.target.value,
   });
  }

	handleChangeGrade(event) {
   this.setState({
     grade: event.target.value,
   });
  }

	handleChangeAccessability(event) {
   this.setState({
     accessability: event.target.value,
   });
  }

	handleChangePanel1(event) {
   this.setState({
     panel1: event.target.value,
   });
	 this.state.panel.push('1');
  }
	handleChangePanel2(event) {
   this.setState({
     panel2: event.target.value,
   });
	 this.state.panel.push('2');
  }
	handleChangePanel3(event) {
   this.setState({
     panel3: event.target.value,
   });
	 this.state.panel.push('3');
  }
	handleChangePanel4(event) {
   this.setState({
     panel4: event.target.value,
   });
	 this.state.panel.push('4');
  }
	handleChangePanel5(event) {
   this.setState({
     panel5: event.target.value,
   });
	 this.state.panel.push('5');
  }
	handleChangePanel6(event) {
   this.setState({
     panel6: event.target.value,
   });
	 this.state.panel.push('6');
  }
	handleSubmitStudent(event) {
     event.preventDefault();
     this.writeStudentData(
			 this.state.name,
			 this.state.school,
			 this.state.grade,
			 this.state.accessability,
			 this.state.panel
		 );
   }

	 writeStudentData(name, school, grade, accessability, panel) {
		 var userId = firebase.auth().currentUser.uid;
     firebase.database().ref('users/' + userId + '/students/').push({
			 name: name,
			 school: school,
			 grade: grade,
			 accessability: accessability,
			 panel: panel
     });
   }

	render () {
		return (
			<div className="row">
				<div className="col">
					<br/>
					<div className="card">
						<div className="card-block">
							<form onSubmit={this.handleSubmitStudent}>
								<div className="form-group">
									<FormGroup onChange={this.handleChangeName}>
					          <Label for="studentName">Name</Label>
					          <Input type="text" name="name" id="studentName" placeholder="Student Name" />
					        </FormGroup>
									<FormGroup onChange={this.handleChangeGrade}>
							      <Label for="exampleSelect">Grade</Label>
							      <Input type="select" name="select" id="exampleSelect">
							        <option>8</option>
							        <option>9</option>
							        <option>10</option>
							        <option>11</option>
							        <option>12</option>
							      </Input>
							    </FormGroup>
									<FormGroup onChange={this.handleChangeAccessability}>
					          <Label for="accessability">Accessability Issues</Label>
					          <Input type="text" name="name" id="accessability" placeholder="If so, please describe." />
					        </FormGroup>
									{/* {this.state.panel} */}
									<FormGroup check>
										<Label>Choose plenaries (pick 4 of the 6) </Label>
					        </FormGroup>
									<FormGroup check onChange={this.handleChangePanel1}>
										 <Label check>
											 <Input type="checkbox" />{' '}
											 	Panel 1
										 </Label>
									 </FormGroup>
									 <FormGroup check onChange={this.handleChangePanel2}>
 										 <Label check>
 											 <Input type="checkbox" />{' '}
 											 	Panel 2
 										 </Label>
 									 </FormGroup>
									 <FormGroup check onChange={this.handleChangePanel3}>
 										 <Label check>
 											 <Input type="checkbox" />{' '}
 											 	Panel 3
 										 </Label>
 									 </FormGroup>
									 <FormGroup check onChange={this.handleChangePanel4}>
 										 <Label check>
 											 <Input type="checkbox" />{' '}
 											 	Panel 4
 										 </Label>
 									 </FormGroup>
									 <FormGroup check onChange={this.handleChangePanel5}>
 										 <Label check>
 											 <Input type="checkbox" />{' '}
 											 	Panel 5
 										 </Label>
 									 </FormGroup>
									 <FormGroup check onChange={this.handleChangePanel6}>
 										 <Label check>
 											 <Input type="checkbox" />{' '}
 											 	Panel 6
 										 </Label>
 									 </FormGroup>
									 <button type="submit" className="btn btn-primary" onClick={() => hashHistory.push(`/dashboard`)}>Add Student</button>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className="col">
				<br/>
					<div className="card">
					  <img className="card-img-top" src={Speakers} alt="Past Speakers" width="100%"/>
					  <div className="card-block">
					    <h4 className="card-title">Plenaries</h4>
					    <p className="card-text">More info on plenaries on the offical World Affairs Conference website.</p>
					    <a href="https://world.ac" className="btn btn-primary" target="_blank">world.ac</a>
					  </div>
					</div>
				</div>
			</div>
		)
	}
}