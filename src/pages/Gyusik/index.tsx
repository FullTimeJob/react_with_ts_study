import React from "react"
import styled from "styled-components"
import Chapter1 from "./강의1"
import Chapter2 from "./강의2"

const SPage = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: ${() => window.innerHeight}px;
	text-align: center;
	align-items: center;
	justify-content: center;
`

const SContents = styled.div`
	display: flex;
	flex-direction: column;
	background-color: grey;
	height: 300px;
	width: 400px;
	justify-content: center;
	align-items: center;
`
const SText = styled.div`
	margin: 0 0 30px 0;
`

const SButtonWrapper = styled.div`
	display: flex;
`

const SButton = styled.div`
	display: flex;
	width: 100px;
	height: 35px;
	color: white;
	background-color: red;
	margin: 0 30px 0 0;
	align-items: center;
	justify-content: center;
`
const SButton2 = styled.div`
	display: flex;
	width: 100px;
	height: 35px;
	color: white;
	background-color: red;
	margin: 0 0 0 0;
	align-items: center;
	justify-content: center;
`

export default function Gyusik() {
	const handleClick1 = () => {
		alert("당신은 누구입니까?")
	}

	const handleClick2 = () => {
		alert("반갑습니다.")
	}
	return (
		<SPage>
			<SContents>
				<SText>저장하시겠습니까?</SText>
				<SButtonWrapper>
					<SButton onClick={handleClick1}>확인</SButton>
					<SButton2 onClick={handleClick2}>취소</SButton2>
				</SButtonWrapper>
			</SContents>
			<Chapter1 />
			<Chapter2 />
		</SPage>
	)
}
