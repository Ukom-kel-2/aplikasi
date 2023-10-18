import './style.css';

import React from 'react';
import { useNavigate } from "react-router-dom";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from 'react-router-dom';

// import AdminHome from './App2';

function Login() {
  const navigate = useNavigate ()
  return (
<div class="container">
	<div class="screen">
		<div class="screen__content">
			<form class="login" action='POST'>
				<div class="login__field">
					<i class="login__icon"></i>
          <label htmlFor="uname"><b>Username</b></label>
					<input type="text" class="login__input" placeholder="User name / Email" name="uname" required/>
				</div>
				<div class="login__field">
					<i class="login__icon"></i>
          <label htmlFor="psw"><b>Password</b></label>
					<input type="password" class="login__input" placeholder="Password" name="uname" required/>
				</div>
				<button class="button login__submit" type='submit' onClick={()=>navigate ('/admin')}>
					<span class="button__text">Log In Now</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			<div class="social-login">
				<h3>log in via</h3>
				<div class="social-icons">
					<a href="#" class="social-login__icon fab fa-instagram"></a>
					<a href="#" class="social-login__icon fab fa-facebook"></a>
					<a href="#" class="social-login__icon fab fa-twitter"></a>
				</div>
			</div>
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
  );
}

export default Login;
