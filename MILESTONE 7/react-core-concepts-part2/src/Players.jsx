import { useEffect, useState } from "react";

export default function Players() {
	const [players, setPlayers] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((data) => setPlayers(data));
	}, []);

	return (
		<div>
			<h2>Players: {players.length}</h2>

			<ol>
				{players.map((player) => (
					<li>{player.name}</li>
				))}
			</ol>
		</div>
	);
}
