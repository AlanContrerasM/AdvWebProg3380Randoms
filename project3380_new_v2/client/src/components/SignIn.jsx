import React, {useEffect, useState} from 'react';
import { Link, useHistory} from 'react-router-dom';
import axios from 'axios';

const SignIn = ({setUser}) => {
	// set the sytle
	const style = {
		width: '100%',
		maxWidth: '330px',
		padding: '15px',
		margin: 'auto',
	};
	const [form, setForm] = useState({
		email: "",
		password: ""
	})
	const history = useHistory();



	async function logout(){
		try{
			const resp = await axios.get("http://localhost:5000/api/v1/users/logout",{
				headers: {
				  'Content-Type': 'application/json'
				},
				 withCredentials: true })
			console.log(resp);
			setUser({loggedIn:false, userEmail: ""});
		}catch(err){
		  console.log(err);
		}
	}

	async function login(){
		try{
			const resp = await axios.post("http://localhost:5000/api/v1/users/login", form,{
				headers: {
				  'Content-Type': 'application/json'
				},
				 withCredentials: true });

			console.log(resp);
			setUser({loggedIn:true, userEmail: form.email});
			history.push('/');
		}catch(err){
		  console.log(err);
		}
	}

	useEffect(()=>{
		logout();
	},[])


	return (
		<div style={style}>
			<h1>Sign In</h1>

			{/* email textbox  */}
			<div class="form-floating">
				<input
					type="email"
					class="form-control"
					id="floatingInput"
					value={form.email}
					onChange={(e)=>setForm({...form, email: e.target.value})}
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
					value={form.password}
					onChange={(e)=>setForm({...form, password: e.target.value})}
				/>
				<label for="floatingPassword">Password</label>
			</div>

			{/* signIn button  */}
			<div class="form-floating">
			<button class="w-100 btn btn-lg btn-primary" onClick={login}>
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
