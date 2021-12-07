import React, {useState} from 'react';
import axios from 'axios';
import { Link, useHistory} from 'react-router-dom';

const SignUp = () => {
	const [form, setForm] = useState({
		email: "",
		password: "",
		confPass: ""
	})
	
	const style = {
		width: '100%',
		maxWidth: '330px',
		padding: '15px',
		margin: 'auto',
	};
	const history = useHistory();


	async function register(){
		try{
			const {email, password, confPass} = form;
			if(password === confPass){
				const resp = await axios.post("http://localhost:5000/api/v1/users/register", {email, password});
				console.log(resp.data);
				history.push('/');
			}
			
		}catch(err){
		  console.log(err);
		}
	}
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
					value={form.email}
					onChange={(e)=>setForm({...form, email: e.target.value})}
					
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

			{/* password confirm textbox  */}
			<div class="form-floating">
				<input
					type="password"
					class="form-control"
					id="floatingPassword"
					placeholder="Re-enter Password"
					value={form.confPass}
					onChange={(e)=>setForm({...form, confPass: e.target.value})}
				/>
				<label for="floatingPassword">Password Confirm</label>
			</div>

			{/* sign up button  */}
			<button class="w-100 btn btn-lg btn-primary" onClick={register}>
				Sign Up
			</button>
		</div>
	);
};

export default SignUp;
