"use strict"

import React from "react"

const heroFrom = media =>
	media.length
		? media[0].small
		: "http://placecorgi.com/300/300"

const Pet = ({
	name,
	animal,
	breed,
	media,
	location,
	id,
}) => (
	<div>
		<a href={`/details/${id}`} className="pet">
			<div className="image-container">
				<img src={heroFrom(media)} alt={name} />
			</div>
			<div className="info">
				<h1>{name}</h1>
				<h2>{`${animal} - ${breed} - ${location}`}</h2>
			</div>
		</a>
	</div>
)

export default Pet
