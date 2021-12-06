import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
	// set the sytle
	const style = {
		width: '100%',
		maxWidth: '330px',
		padding: '15px',
		margin: 'auto',
	};
	return (
		<div style={style}>
			<h1>Sign In</h1>

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

			{/* signIn button  */}
			<div class="form-floating">
			<button class="w-100 btn btn-lg btn-primary" type="submit">
				Sign in
			</button>
			</div>

			{/* navigate to signUp page  */}
			<div class="form-floating">
			<Link to="./signup">New around here? Sign up</Link>
			<br />
			</div>

			{/* we assume that if user forget password, they need to create a new account. 
			So when they click to forgot password, it will go to signUp page to create a new one  */}
			<div class="form-floating">
			<Link to="/signup">Forgot password?</Link>
			</div>
		</div>
	);
};

export default SignIn;
