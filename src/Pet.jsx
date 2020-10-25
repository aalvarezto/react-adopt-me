"use strict"

import React from "react"

const Pet = ({ name, animal, breed, media, location, id }) => (
	<div>
		<a href={`/details/${id}`} className="pet">
			<div className="image-container">
				<img src={getHeroFrom(media)} alt={name} />
			</div>
			<div className="info">
				<h1>{name}</h1>
				<h2>{`${animal} - ${breed} - ${location}`}</h2>
			</div>
		</a>
	</div>
)

export default Pet

function getHeroFrom(dataMedia) {
	return dataMedia.length
		? dataMedia[0].small
		: "http://placecorgi.com/300/300"
}
