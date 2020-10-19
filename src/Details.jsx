"use strict"

import React, { Component } from "react"
import pet from "@frontendmasters/pet"

class Details extends Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		pet.animal(this.props.id).then(({ animal }) => {
			this.setState({
				name: animal.name,
				animal: animal.type,
				location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
				description: animal.description,
				media: animal.photos,
				breed: animal.breeds.primary,
				loading: false,
			})
		})
	}

	render() {}
}

export default Details
