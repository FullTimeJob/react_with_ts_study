import React from "react"
import styled from "styled-components"

const SPage = styled.div`
	display: flex;
	width: 100%;
	height: ${() => window.innerHeight}px;
	text-align: center;
	align-items: center;
	justify-content: center;
`

export default function Chapter2() {
	const handleClick1 = () => {
		alert("당신은 누구입니까?")
	}

	const handleClick2 = () => {
		alert("반갑습니다.")
	}
	return <SPage>반가워</SPage>
}
