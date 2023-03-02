import './App.css';
import Games from "./games.js"
import React,{ useState } from 'react';
import {  BrowserRouter,  Routes,  Route} from "react-router-dom";
import Home from "./home.js"
import datas from "./datas/data.json"
import Login from "./login"
import Signup from './signup';
import Records from './records';
import VerificationEmail from './sendVerificationEmail';


function App() {
	const getToken = () => {
		const tokenString = localStorage.getItem('token');
		if(tokenString !== undefined){
			const userToken = JSON.parse(tokenString);
			return userToken?.token
		}
		return ""
	  };
	  const [token, setToken] = useState(getToken() || "");
	  const loginRoute = ()=>{
		const tokenString = localStorage.getItem('token')
		if(!tokenString){
			return   <>
					<Route path="/login" element={<Login setToken={setToken} token={token} getToken={getToken}/>}/>
					<Route path="/verificationEmail" element={<VerificationEmail></VerificationEmail>}/>
					<Route path="/signup" element={<Signup></Signup>}/>
					</>
		}
	  }



	return (
		<BrowserRouter>
		<Routes>
		  <Route index element={<Home/>} />
		  <Route path="/records" element={<Records></Records>}/>
		  {/* create route for every game in the data file */}
		  {	datas.map((data)=> {
			if(data.active){
			data.data.sort((a, b) => 0.5 - Math.random());
			data.picked = data.data.shift()
			return <Route path={data.url} element={<Games datas={data.data} picked={data.picked} name={data.db}/>}/>
			}
		})}
		  {loginRoute()}
		</Routes>
	  	</BrowserRouter>
		);
		
	}

export default App;
