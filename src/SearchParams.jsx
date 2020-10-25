"use strict"

import React, { useEffect, useState } from "react"
import pet, { ANIMALS } from "@frontendmasters/pet"
import useDropdown from "./useDropdown"
import Results from "./Results"

const SearchParams = () => {
	const [location, setLocation] = useState("Seattle, WA")
	const [breeds, setBreeds] = useState([])
	const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS)
	const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds)
	const [pets, setPets] = useState([])

	useEffect(() => {
		setBreeds([])
		setBreed("")

		pet.breeds(animal).then(responseWith(setBreeds)).catch(console.error)
	}, [animal, setBreed, setBreeds])

	return (
		<div className="search-params">
			<form
				onSubmit={e => {
					e.preventDefault()
					requestPets()
				}}
			>
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

	async function requestPets() {
		const { animals } = await pet.animals({
			location,
			breed,
			type: animal,
		})

		setPets(animals ?? [])
	}
}

export default SearchParams

function responseWith(setter) {
	return ({ breeds }) => {
		const breedStrings = breeds.map(({ name }) => name)
		setter(breedStrings)
	}
}
