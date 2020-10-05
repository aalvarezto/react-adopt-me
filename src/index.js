import "./style.css"
import React from "react"
import ReactDOM from "react-dom"

const App = () => React.createElement("div",{}, React.createElement(
		"h1", {},"Adopt Me!"
	))


const root = document.getElementById("root")
const element = React.createElement(App)

ReactDOM.render(element, root)