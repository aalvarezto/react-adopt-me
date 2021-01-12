"use strict"

import React, { useEffect, useState, useContext } from "react"
import pet, { ANIMALS } from "@frontendmasters/pet"
import useDropdown from "./useDropdown"
import Results from "./Results"
import { chain, prop, compose, nullish } from "./utils"
import ThemeContext from "./ThemeContext"

const SearchParams = () => {
	const [breeds, setBreeds] = useState([])
	const [pets, setPets] = useState([])
	const [location, setLocation] = useState("Seattle, WA")
	const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS)
	const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds)
	const [theme, setTheme] = useContext(ThemeContext)

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
				<label htmlFor="theme">
					Theme
					<select
						value={theme}
						onChange={e => setTheme(e.target.value)}
						onBlur={e => setTheme(e.target.value)}
					>
						<option value="peru">Peru</option>
						<option value="darkblue">Darkblue</option>
						<option value="mediumorchid">Medium Orchid</option>
						<option value="chartreuse">Chartreuse</option>
					</select>
				</label>
				<button style={{ backgroundColor: theme }}>Submit</button>
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
