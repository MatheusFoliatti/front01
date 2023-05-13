import styled from "styled-components";

export const Box = styled.div`
	width: 400px;
	height: 400px;
	background-color: aliceblue;
	border: 2px solid red;
	border-radius: 10px;

	p {
		font-size: 50px;
		font-weight: bold;
		color: blueviolet;
	}

	button{
		padding: 15px;
		border: 0;
		border-radius: 8px;
		background: #3f3f;
		outline: 1px solid black;
		color: red;

		&:hover{
			background: white;
			color: black;

		&:focus{
			border: 3px solid blue;
		}

		&:active{
			background:cyan;
			box-shadow: 3px 5px 8px 3px #000;
		}
	}
}
`;