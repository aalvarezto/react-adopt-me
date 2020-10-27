"use strict"

import React from "react"
import { Link } from "@reach/router"

const Pet = ({ name, animal, breed, media, location, id }) => (
	<div>
		<Link to={`/details/${id}`} className="pet">
			<div className="image-container">
				<img src={getHeroFrom(media)} alt={name} />
			</div>
			<div className="info">
				<h1>{name}</h1>
				<h2>{`${animal} - ${breed} - ${location}`}</h2>
			</div>
		</Link>
	</div>
)

export default Pet

function getHeroFrom(dataMedia) {
	return dataMedia.length
		? dataMedia[0].small
		: "http://placecorgi.com/300/300"
}
