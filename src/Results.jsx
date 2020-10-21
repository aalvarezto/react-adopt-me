"use strict"

import React from "react"
import Pet from "./Pet"

const displayNoPets = () => <h1>No Pets Found</h1>
const formatAllPets = ({
	type,
	id,
	name,
	breeds,
	photos,
	contact,
}) => (
	<Pet
		animal={type}
		id={id}
		key={id}
		name={name}
		breed={breeds.primary}
		media={photos}
		location={`${contact.address.city}, ${contact.address.state}`}
	/>
)

const Results = ({ pets }) => (
	<div className="search">
		{pets.length === 0
			? displayNoPets()
			: pets.map(formatAllPets)}
	</div>
)

export default Results
