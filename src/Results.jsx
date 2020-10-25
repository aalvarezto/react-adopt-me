"use strict"

import React from "react"
import Pet from "./Pet"
import { map } from "./utils"

const displayNoPets = () => <h1>No Pets Found</h1>
const displayAll = map(({ type, id, name, breeds, photos, contact }) => (
	<Pet
		animal={type}
		id={id}
		key={id}
		name={name}
		breed={breeds.primary}
		media={photos}
		location={`${contact.address.city}, ${contact.address.state}`}
	/>
))

const Results = ({ pets }) => (
	<div className="search">
		{pets.length === 0 ? displayNoPets() : displayAll(pets)}
	</div>
)

export default Results
