"use strict"

import React, { useState } from "react"

const useDropdown = (label, defaultState, options) => {
	const [state, setState] = useState(defaultState)
	const id = `use-dropdown-${label
		.replace(" ", "")
		.toLowerCase()}`

	const Dropdown = () => (
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
				{options.map((item, index) => (
					<option key={index} value={item}>
						{item.slice(0, 1).toUpperCase() +
							item.slice(1)}
					</option>
				))}
			</select>
		</label>
	)
	return [state, Dropdown, setState]
}

export default useDropdown
