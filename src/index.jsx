"use strict"

import "./style.css"
import React from "react"
import { render } from "react-dom"
import App from "./App"

const Deploy = () => (
	<React.StrictMode>
		<App />
	</React.StrictMode>
)

render(<Deploy />, document.getElementById("root"))
