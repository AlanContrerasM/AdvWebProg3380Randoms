import React from 'react';

const SignUp = () => {
	const style = {
		width: '100%',
		maxWidth: '330px',
		padding: '15px',
		margin: 'auto',
	};
	return (
		<div style={style}>
			<h1>Sign Up</h1>

			{/* email textbox  */}
			<div class="form-floating">
				<input
					type="email"
					class="form-control"
					id="floatingInput"
					placeholder="name@example.com"
				/>
				<label for="floatingInput">Email address</label>
			</div>

			{/* password textbox  */}
			<div class="form-floating">
				<input
					type="password"
					class="form-control"
					id="floatingPassword"
					placeholder="Password"
				/>
				<label for="floatingPassword">Password</label>
			</div>

			{/* password confirm textbox  */}
			<div class="form-floating">
				<input
					type="password"
					class="form-control"
					id="floatingPassword"
					placeholder="Re-enter Password"
				/>
				<label for="floatingPassword">Password Confirm</label>
			</div>

			{/* sign up button  */}
			<button class="w-100 btn btn-lg btn-primary" type="submit">
				Sign Up
			</button>
		</div>
	);
};

export default SignUp;
