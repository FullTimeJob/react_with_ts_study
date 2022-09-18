import React from "react"
import styled from "styled-components"
import Gyusik from "./pages/Gyusik"
import Heesang from "./pages/Heesang"

const SGrid = styled.div`
	display: flex;
`

export default function App() {
	return (
		<SGrid>
			<Gyusik />
			<Heesang />
		</SGrid>
	)
}
