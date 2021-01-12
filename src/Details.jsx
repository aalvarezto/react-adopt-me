"use strict"

import React, { Component } from "react"
import pet from "@frontendmasters/pet"
import { navigate } from "@reach/router"
import Modal from "./Modal"
import Carousel from "./Carousel"
import ErrorBoundary from "./ErrorBoundary"
import ThemeContext from "./ThemeContext"

class Details extends Component {
	constructor(props) {
		super(props)

		this.state = {
			loading: true,
			showModal: false,
		}
	}

	componentDidMount = () =>
		pet
			.animal(this.props.id)
			.then(({ animal }) =>
				this.setState({
					url: animal.url,
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

	displayPetFrom = ({
		animal,
		breed,
		location,
		description,
		name,
		media,
		showModal,
	}) => (
		<div className="details">
			<Carousel media={media} />
			<div>
				<h1>{name}</h1>
				<h2>{`${animal} - ${breed} - ${location}`}</h2>
				<ThemeContext.Consumer>
					{([theme]) => (
						<button
							onClick={this.toggleModal}
							style={{ backgroundColor: theme }}
						>
							Adopt {name}{" "}
						</button>
					)}
				</ThemeContext.Consumer>
				<p>{fixEntitiesOf(description)}</p>
				{showModal ? (
					<Modal>
						<div>
							<h1>Would you like to adopt {name}?</h1>
							<div className="buttons">
								<button onClick={this.adopt}>Yes</button>
								<button onClick={this.toggleModal}>
									No, I'm a monster
								</button>
							</div>
						</div>
					</Modal>
				) : null}
			</div>
		</div>
	)

	toggleModal = () => this.setState({ showModal: !this.state.showModal })

	adopt = () => navigate(this.state.url)

	render = () =>
		this.state.loading ? displayLoading() : this.displayPetFrom(this.state)
}

export default function DetailsWithErrorBoundary(props) {
	return (
		<ErrorBoundary>
			<Details {...props} />
		</ErrorBoundary>
	)
}

function displayLoading() {
	return <h1>loading...</h1>
}

function fixEntitiesOf(x) {
	return x ? x.replaceAll("&#039;", "'") : ""
}
