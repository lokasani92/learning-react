import React, { Component } from 'react';

class ItemList extends Component {
	handleDelete(id) {
		this.props.onDelete(id);
	}
	render() {
		const listItems = this.props.items.map(items => {
			return <li>{items.item} - ${items.price}</li>
		})
		return (
			<div>
				<button href="#" onClick={this.handleDelete.bind(this, this.props.items.id)}>Delete</button>
				{listItems}
			</div>
		);
	}
}

export default ItemList;
