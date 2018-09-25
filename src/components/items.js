import React, { Component } from 'react';

class Items extends Component {
	constructor() {
		super();
		this.state ={
			newItems: {},
		}
	}

	handleItemSubmit(e) {
		e.preventDefault();
		if (!this.refs.item.value && this.refs.item.price) {
			alert("Please enter an item.");
		} else {
			this.setState({
				newItems: {
					item: this.refs.item.value,
					price: this.refs.price.value,
				}
			}, function() {
				this.props.addItems(this.state.newItems);
			});
		}
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleItemSubmit.bind(this)}>
					<div>
						<label>Item: </label>
						<input type="text" ref="item" />
					</div>
					<div>
						<label>Price: </label>
						<input type="number" ref="price" />
					</div><br />
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default Items;
