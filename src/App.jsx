import "./App.css";
import axios from "axios";

import { Box } from "./App.style";
import { useState } from "react";

export const App = () => {
	const [person, setPerson] = useState({
		name: {
			first: "???",
		},
	});

	//Váriavel não reativa. Não irá renderizar
	//const PersonNReact = {};

	async function handleGet() {
		const data = await axios.get("https://randomuser.me/api/?nat=br");

		setPerson(data.data.results[0]);
		// console.log(data.data.results[0].name.first);

		console.log(person);
	}

	const txt = "ZAWARUDO";
	return (
		<>
			<Box>
				<p>Nome: {person.name.first} </p>

				<button onClick={handleGet}>Request </button>
			</Box>
		</>
	);
};
