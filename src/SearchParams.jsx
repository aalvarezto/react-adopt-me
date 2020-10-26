"use strict"

import React, { useEffect, useState } from "react"
import pet, { ANIMALS } from "@frontendmasters/pet"
import useDropdown from "./useDropdown"
import Results from "./Results"
import { chain, prop, compose, nullish } from "./utils"

const SearchParams = () => {
	const [breeds, setBreeds] = useState([])
	const [pets, setPets] = useState([])

	const [location, setLocation] = useState("Seattle, WA")
	const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS)
	const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds)

	useEffect(() => {
		setBreeds([])
		setBreed("")
		requestBreeds(animal, setBreeds)
	}, [animal, setBreed, setBreeds])

	return (
		<div className="search-params">
			<form onSubmit={requestData}>
				<label htmlFor="location">
					Location
					<input
						id="location"
						value={location}
						placeholder="Location"
						onChange={e => setLocation(e.target.value)}
					></input>
				</label>
				<AnimalDropdown />
				<BreedDropdown />
				<button>Submit</button>
			</form>
			<Results pets={pets} />
		</div>
	)

	function requestData(e) {
		e.preventDefault()
		requestPets({ location, breed, type: animal }, setPets)
	}
}

export default SearchParams

async function requestBreeds(fetchThisData, useSetter) {
	compose(
		useSetter,
		nullish,
		chain("name"),
		prop("breeds")
	)(await pet.breeds(fetchThisData))
}

async function requestPets(fetchThisData, useSetter) {
	compose(
		useSetter,
		nullish,
		prop("animals")
	)(await pet.animals(fetchThisData))
}
