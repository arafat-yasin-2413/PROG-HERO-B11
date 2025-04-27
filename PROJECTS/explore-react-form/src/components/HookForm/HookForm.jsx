import React from "react";
import useInputField from "../../hooks/useInputField";

const HookForm = () => {
	const [name, nameOnChange] = useInputField('');
    const [email, emailOnChange] = useInputField('');
    const [password, passwordOnChange] = useInputField('')

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("submit", name);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					defaultValue={name}
					type="text"
					onChange={nameOnChange}
                    placeholder="name"
				/>

                <br />

                <input onChange={emailOnChange} type="email" placeholder="email" />
                <br />

                <input onChange={passwordOnChange} type="password" placeholder="password" />

                <input type="submit" value="Submit" />
			</form>
		</div>
	);
};

export default HookForm;
