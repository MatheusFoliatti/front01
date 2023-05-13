import "./App.css";

import { Box } from "./App.style";

export const App = () => {
	const txt = "ZAWARUDO";
	return (
		<>
			<Box>
				<p>Hello World</p>
				<p>{txt}</p>
				<button>Request </button>
			</Box>
		</>
	);
};
