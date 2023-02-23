import './App.css';
import Games from "./games.js"
import React,{ useState } from 'react';
import {  BrowserRouter,  Routes,  Route} from "react-router-dom";
import datas1789 from './datas/1789.json'
import datasMiddleAge from "./datas/middleAge.json"
import Home from "./home.js"
import datasHuman from "./datas/human.json"
import datasRenaissance from "./datas/renaissance.json"
import datasXX from "./datas/XX.json"
import datasXXI from "./datas/XXI.json"
import datasSport from "./datas/sport.json"
import datasColdWar from "./datas/coldWar.json"
import datasUSAPresident from "./datas/USAPresident.json"
import datasFrancePresident from "./datas/FrancePresident.json"
import datasOM from "./datas/om.json"
import datasOL from "./datas/ol.json"
import datasPSG from "./datas/psg.json"
import datasNBA from "./datas/nba.json"
import datasFranceRois from "./datas/FranceRois.json"
import Login from "./login"
import Signup from './signup';


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

	datas1789.sort((a, b) => 0.5 - Math.random());
	let picked1789 = datas1789.shift()
	datasMiddleAge.sort((a, b) => 0.5 - Math.random());
	let pickedMiddleAge = datasMiddleAge.shift()
	datasHuman.sort((a, b) => 0.5 - Math.random());
	let pickedHuman = datasHuman.shift()
	datasRenaissance.sort((a, b) => 0.5 - Math.random());
	let pickedRenaissance = datasRenaissance.shift()
	datasXX.sort((a, b) => 0.5 - Math.random());
	let pickedXX = datasXX.shift()
	datasXXI.sort((a, b) => 0.5 - Math.random());
	let pickedXXI = datasXXI.shift()
	datasSport.sort((a, b) => 0.5 - Math.random());
	let pickedSport = datasSport.shift()
	datasColdWar.sort((a, b) => 0.5 - Math.random());
	let pickedColdWar = datasColdWar.shift()
	datasUSAPresident.sort((a, b) => 0.5 - Math.random());
	let pickedUSAPresident = datasUSAPresident.shift()
	datasFrancePresident.sort((a, b) => 0.5 - Math.random());
	let pickedFrancePresident = datasFrancePresident.shift()
	datasOL.sort((a, b) => 0.5 - Math.random());
	let pickedOL = datasOL.shift()
	datasOM.sort((a, b) => 0.5 - Math.random());
	let pickedOM = datasOM.shift()
	datasPSG.sort((a, b) => 0.5 - Math.random());
	let pickedPSG = datasPSG.shift()
	datasNBA.sort((a, b) => 0.5 - Math.random());
	let pickedNBA = datasNBA.shift()
	datasFranceRois.sort((a, b) => 0.5 - Math.random());
	let pickedFranceRois = datasFranceRois.shift()

	return (
		<BrowserRouter>
		<Routes>
		  <Route index element={<Home/>} />
		  <Route path="/middle-age" element={<Games datas={datasMiddleAge} picked={pickedMiddleAge} name={"middleAge"}/>} />
		  <Route path="/from-1789" element={<Games datas={datas1789} picked={picked1789} name={"sinceFrenchRevolution"}/>}/>
		  <Route path="/humanity" element={<Games datas={datasHuman} picked={pickedHuman} name={"humanity"}/>}/>
		  <Route path="/renaissance" element={<Games datas={datasRenaissance} picked={pickedRenaissance} name={"renaissance"}/>}/>
		  <Route path="/XXèmeSiecle" element={<Games datas={datasXX} picked={pickedXX} name={"centuryXX"}/>}/>
		  <Route path="/XXIèmeSiecle" element={<Games datas={datasXXI} picked={pickedXXI} name={"centuryXXI"}/>}/>
		  <Route path="/sport" element={<Games datas={datasSport} picked={pickedSport} name={"sport"}/>}/>
		  <Route path="/guerre-froide" element={<Games datas={datasColdWar} picked={pickedColdWar} name={"coldWar"}/>}/>
		  <Route path="/presidents-americains" element={<Games datas={datasUSAPresident} picked={pickedUSAPresident} name={"americansPresidents"}/>}/>
		  <Route path="/presidents-français" element={<Games datas={datasFrancePresident} picked={pickedFrancePresident} name={"frenchsPresidents"}/>}/>
		  <Route path="/ol" element={<Games datas={datasOL} picked={pickedOL} name={"ol"}/>}/>
		  <Route path="/psg" element={<Games datas={datasPSG} picked={pickedPSG} name={"psg"}/>}/>
		  <Route path="/om" element={<Games datas={datasOM} picked={pickedOM} name={"om"}/>}/>
		  <Route path="/nba" element={<Games datas={datasNBA} picked={pickedNBA} name={"nba"}/>}/>
		  <Route path="/rois-de-france" element={<Games datas={datasFranceRois} picked={pickedFranceRois} name={"frenchsKings"}/>}/>
		  <Route path="/signup" element={<Signup></Signup>}/>
		  {loginRoute()}
		</Routes>
	  	</BrowserRouter>
		);
		
	}

export default App;
