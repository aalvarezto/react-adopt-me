"use strict"

import React from "react"
import SearchParams from "./SearchParams"
import { Link, Router } from "@reach/router"
import Details from "./Details"

const App = () => (
	<div>
		<header>
			<Link to="/">Adopt Me!</Link>
		</header>
		<Router>
			<SearchParams path="/" />
			<Details path="/details/:id" />
		</Router>
	</div>
)

export default App
