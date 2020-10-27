"use strict"

import React, { Component } from "react"
import { Link, Redirect } from "@reach/router"

class ErrorBoundary extends Component {
	constructor(props) {
		super(props)

		this.state = { hasError: false, redirect: false }
	}

	static getDerivedStateFromError() {
		return { hasError: true }
	}

	componentDidCatch(error, info) {
		console.error("ErrorBoundary caught an error", error, info)
	}

	componentDidUpdate() {
		if (this.state.hasError) {
			setTimeout(() => this.setState({ redirect: true }), 5000)
		}
	}

	render = () =>
		this.state.redirect ? (
			<Redirect to="/" />
		) : this.state.hasError ? (
			<h1>
				There was an error with this listing.{" "}
				<Link to="/">Click here</Link> to go back to the home page or
				wait five seconds.
			</h1>
		) : (
			this.props.children
		)
}

export default ErrorBoundary
