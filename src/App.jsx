import styled from "styled-components";
import "./App.css";

const PStyle = styled.p`
	font-size: 20px;
	color: purple;
`;

const Box = styled.div`
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
`;

export const App = () => {
	const txt = "ZAWARUDO";
	return (
		<>
			<Box>
				<PStyle>Hello World</PStyle>
				<p>{txt}</p>
			</Box>
		</>
	);
};
