"use strict"

import React, { useState } from "react"
import { lowerNoSpaces, capFirstOf } from "./utils"

const useDropdown = (label, defaultState, options) => {
	const [state, setState] = useState(defaultState)
	const id = `use-dropdown-${lowerNoSpaces(label)}`

	return [state, Dropdown, setState]

	function Dropdown() {
		return (
			<label htmlFor={id}>
				<select
					name=""
					id={id}
					value={state}
					onChange={e => setState(e.target.value)}
					onBlur={e => setState(e.target.value)}
					disabled={options.length === 0}
				>
					<option>All</option>
					{options.map(displayAllItems)}
				</select>
			</label>
		)
	}
}

export default useDropdown

function displayAllItems(item, index) {
	return (
		<option key={index} value={item}>
			{capFirstOf(item)}
		</option>
	)
}
