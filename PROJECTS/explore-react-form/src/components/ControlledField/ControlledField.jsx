import React, { useState } from "react";

const ControlledField = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("secret");
	const [error, setError] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log("submitted");
		console.log(name ,email, password);

		if (password.length < 6) {
			setError("Password must be 6 character or longer.");
		} else {
			setError("");
		}
	};

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const handlePasswordOnChange = (e) => {
		console.log(e.target.value);
		setPassword(e.target.value);

		if (password.length < 6) {
			setError("Password must be 6 character or longer.");
		} else {
			setError("");
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					onChange={handleNameChange}
					type="text"
					defaultValue={name}
                    placeholder="name"
				/>

                <br />

				<input
					onChange={handleEmailChange}
					defaultValue={email}
					type="email"
					name="email"
					id=""
					placeholder="Email"
					required
				/>
				<br />
				<input
					type="password"
					name="password"
					id=""
					placeholder="Password"
					required
					onChange={handlePasswordOnChange}
					defaultValue={password}
				/>
				<br />
				<input type="submit" value="Submit" />
			</form>

			<p style={{ color: "red" }}>
				<small>{error}</small>
			</p>
		</div>
	);
};

export default ControlledField;
