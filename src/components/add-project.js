import React, { Component } from 'react';

class AddProject extends Component {
	constructor() {
		super()
		this.state ={
			newProject: {},
		};
	}

	static defaultProps = {
		categories: ["Web Design", "Web Development", "Mobile Development"],
	}

	handleSubmit(e) {
		if (!this.refs.title.value) {
			alert("Please enter a title")
		} else {
			this.setState({newProject: {
				name: this.refs.title.value,
				category: this.refs.category.value,
			}}, function() {
				this.props.addProject(this.state.newProject);
			});
		}
		e.preventDefault();
	};

	render() {
		const categoryList = this.props.categories.map(category => {
			return <option key={category} value={category}>{category}</option>
		});
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<div>
					<label>Enter Title: </label>
					<input type="text" ref="title" />
				</div><br />
				<div>
					<label>Category: </label>
					<select ref="category">
						{categoryList}
					</select>
				</div><br />
				<button type="submit" value="Submit">Submit</button>
			</form>
		);
	}
}

export default AddProject;
