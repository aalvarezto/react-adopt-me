"use strict"

import React, { Component } from "react"
import pet from "@frontendmasters/pet"

class Details extends Component {
	constructor(props) {
		super(props)

		this.state = {
			loading: true,
		}
	}

	componentDidMount = () =>
		pet
			.animal(this.props.id)
			.then(({ animal }) =>
				this.setState({
					name: animal.name,
					animal: animal.type,
					location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
					description: animal.description,
					media: animal.photos,
					breed: animal.breeds.primary,
					loading: false,
				})
			)
			.catch(console.error)

	render = () =>
		this.state.loading
			? displayLoading()
			: displayPetFrom(this.state)
}

export default Details

function displayLoading() {
	return <h1>loading...</h1>
}

function displayPetFrom({
	animal,
	breed,
	location,
	description,
	name,
}) {
	return (
		<div className="details">
			<div>
				<h1>{name}</h1>
				<h2>{`${animal} - ${breed} - ${location}`}</h2>
				<button>Adopt {name}</button>
				<p>{fixEntitiesOf(description)}</p>
			</div>
		</div>
	)
}

function fixEntitiesOf(x) {
	return x ? x.replaceAll("&#039;", "'") : ""
}
