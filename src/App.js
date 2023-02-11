import './App.css';
import Games from "./games.js"
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
import datasPSG from "./datas/ol.json"
import datasNBA from "./datas/nba.json"
import datasFranceRois from "./datas/FranceRois.json"

function App() {
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
		  <Route path="/middle-age" element={<Games datas={datasMiddleAge} picked={pickedMiddleAge}/>} />
		  <Route path="/from-1789" element={<Games datas={datas1789} picked={picked1789}/>}/>
		  <Route path="/humanity" element={<Games datas={datasHuman} picked={pickedHuman}/>}/>
		  <Route path="/renaissance" element={<Games datas={datasRenaissance} picked={pickedRenaissance}/>}/>
		  <Route path="/XXèmeSiecle" element={<Games datas={datasXX} picked={pickedXX}/>}/>
		  <Route path="/XXIèmeSiecle" element={<Games datas={datasXXI} picked={pickedXXI}/>}/>
		  <Route path="/sport" element={<Games datas={datasSport} picked={pickedSport}/>}/>
		  <Route path="/guerre-froide" element={<Games datas={datasColdWar} picked={pickedColdWar}/>}/>
		  <Route path="/presidents-americains" element={<Games datas={datasUSAPresident} picked={pickedUSAPresident}/>}/>
		  <Route path="/presidents-français" element={<Games datas={datasFrancePresident} picked={pickedFrancePresident}/>}/>
		  <Route path="/ol" element={<Games datas={datasOL} picked={pickedOL}/>}/>
		  <Route path="/psg" element={<Games datas={datasPSG} picked={pickedPSG}/>}/>
		  <Route path="/om" element={<Games datas={datasOM} picked={pickedOM}/>}/>
		  <Route path="/nba" element={<Games datas={datasNBA} picked={pickedNBA}/>}/>
		  <Route path="/rois-de-france" element={<Games datas={datasFranceRois} picked={pickedFranceRois}/>}/>
		</Routes>
	  	</BrowserRouter>
		);
		
	}

export default App;
