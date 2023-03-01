import './App.css';
import Games from "./games.js"
import React,{ useState } from 'react';
import {  BrowserRouter,  Routes,  Route} from "react-router-dom";
// import datas1789 from './datas/1789.json'
// import datasMiddleAge from "./datas/middleAge.json"
import Home from "./home.js"
// import datasHuman from "./datas/human.json"
// import datasRenaissance from "./datas/renaissance.json"
// import datasXX from "./datas/XX.json"
// import datasXXI from "./datas/XXI.json"
// import datasSport from "./datas/sport.json"
// import datasColdWar from "./datas/coldWar.json"
// import datasUSAPresident from "./datas/USAPresident.json"
// import datasFrancePresident from "./datas/FrancePresident.json"
// import datasOM from "./datas/om.json"
// import datasOL from "./datas/ol.json"
// import datasPSG from "./datas/psg.json"
// import datasNBA from "./datas/nba.json"
// import datasFranceRois from "./datas/FranceRois.json"
import datas from "./datas/data.json"
import Login from "./login"
import Signup from './signup';
import Records from './records';


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
			return <Route path="/login" element={<Login setToken={setToken} token={token} getToken={getToken}/>}/>
		}
	  }



	return (
		<BrowserRouter>
		<Routes>
		  <Route index element={<Home/>} />
		  <Route path="/signup" element={<Signup></Signup>}/>
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
