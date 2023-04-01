import './App.css';
import Games from "./games.js"
import React,{ useEffect, useState } from 'react';
import {  BrowserRouter,  Routes,  Route } from "react-router-dom";
import Home from "./home.js"
import datas from "./datas/data.json"
import Login from "./login"
import Signup from './signup';
import VerificationEmail from './sendVerificationEmail';
import PasswordForgot from './passwordForgot';
import PasswordReset from "./passwordReset"
import Rules from "./rules"
import Users from './users';
import User from './user';
import Profil from './profil';
import RequireAuth from './components/requireAuth';
import RequireNoAuth from './components/requireNoAuth';
import {store} from './app/store'
import { useDispatch } from 'react-redux';
import { deconnexion } from './store/user'

function App() {
	const dispatch = useDispatch()
	const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));
	useEffect(()=> {
		if((localStorage.getItem('token') !== null && store.getState().userStore.user === null) || (localStorage.getItem('token') === null && store.getState().userStore.user != null)){
			dispatch(deconnexion());
		}
	}, [])

	return (
		<>
		<BrowserRouter>
		<Routes>
		  	<Route index element={<Home/>} />
			<Route path="/login" element={<RequireNoAuth token={token}><Login setToken={setToken} token={token}/></RequireNoAuth>}/>
			<Route path="/verificationEmail" element={<RequireNoAuth ><VerificationEmail></VerificationEmail></RequireNoAuth>}/>
			<Route path="/signup" element={<RequireNoAuth token={token}><Signup></Signup></RequireNoAuth>}/>
			<Route path="/passwordForgot" element={<RequireNoAuth token={token}><PasswordForgot></PasswordForgot></RequireNoAuth>}/>
			<Route path="/passwordReset" element={<RequireNoAuth token={token}><PasswordReset></PasswordReset></RequireNoAuth>}/>
			<Route path="/rules" element={<Rules></Rules>}/>
			<Route path="/profil" element={<RequireAuth token={token}><Profil></Profil></RequireAuth>}/>
		  	{datas.map((data, index)=> {
				if(data.active){
				return <Route key={index} path={data.url} element={<Games datas={data.data} name={data.db} title={data.name} badge={data.badge}/>}/>
				}
			})}
			<Route path="/users" element={<RequireAuth token={token}><Users></Users></RequireAuth>}/>
			<Route path="/user/:userId" element={<RequireAuth token={token}><User></User></RequireAuth>}/>
		</Routes>
	  	</BrowserRouter>
		</>
		);
		
	}

export default App;
