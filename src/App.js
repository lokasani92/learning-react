import React, { Component } from 'react';
import './App.css';
import Project from "./components/project";
import AddProject from "./components/add-project";
import Items from "./components/items";
import ItemList from "./components/item-list";

class App extends Component {
	constructor() {
		super()
		this.state = {
			projects: [],
			items: [],
		};
	}

	// life cycle method - it triggers when ever component is re-rendered
	componentWillMount() {
		this.setState({
			projects: [
				{
					name: "Personal Website",
					category: "Web design",
				},
				{
					name: "Social App",
					category: "Web development",
				},
				{
					name: "Shopping cart",
					category: "Web devlopment",
				},
			],
			items: [
				{
					id: 1,
					item: "Ipad",
					price: 500,
				},
				{
					id: 2,
					item: "Iphone",
					price: 999,
				},
				{
					id: 3,
					item: "Airpods",
					price: 180,
				},
			]
		});
	}

	handleProject(project) {
		let newProjects = this.state.projects;
		newProjects.push(project);
		this.setState({ projects: newProjects });
		console.log(this.state.projects);
	}

	handleItems(item) {
		let newItems = this.state.items;
		newItems.push(item);
		this.setState({ items: newItems });
	}

	handleDeletItems(id) {
		let newItems = this.state.items;
		let index = newItems.findIndex(x => x.id === id);
		newItems.splice(index, 1);
		this.setState({ items: newItems });
	}

	render() {
		return (
			<div>
				<AddProject addProject={this.handleProject.bind(this)} /><br />
				<h3>Projects</h3>
				<Project projects={this.state.projects} /><br />
				<Items addItems={this.handleItems.bind(this)} /><br />
				<h3>Items to buy</h3>
				<ItemList items={this.state.items} onDelete={this.handleDeletItems.bind(this)} />
			</div>
		);
	}
}

export default App;
