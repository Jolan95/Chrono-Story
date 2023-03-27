import {useEffect, useState} from 'react'
import Box from "./components/box";
import './App.css';
import Heart from './components/heart';
import Modal from './components/modalEndGame';
import Header from './components/header';
import Record from './components/getRecord.js';
import Restart from './components/restart';

function badgeToPretend(score, badge){
	if(score >= badge["gold"]){
		return "gold"
	} else if(score >= badge["silver"]){
		return "silver"
	} else if (score >= badge["bronze"]){
		return "bronze"
	} else {
		return "none"
	}
}

function Games(props) {
	const [isPlaying, setIsPlaying] = useState(true)
  	const [questionAvailable, setQuestionAvailable] = useState(props.datas)
  	const [life, setLife] = useState(3);
  	const [score, setScore] = useState(0);
  	const [picked, setPicked] = useState({id : 1000, question : "", date : null, answer : null})
  	const [questionAnswered, setQuestionAnswered] = useState([props.picked])
  	const [firstDate, setFirstDate] = useState(questionAnswered[0].date) 
	const [basicModal, setBasicModal] = useState(false);
	const [basicModalWin, setBasicModalWin] = useState(false);
	const [record, setRecord] = useState(0)
	const [badgeUnlocked, setBadgeUnlocked] = useState(false)
	const [isRecord, setIsRecord] = useState(false)

	let token = localStorage.getItem("user")
	useEffect (() =>{
		
		if(!isPlaying && localStorage.getItem("user") !== null){
			if(score > record){
				setIsRecord(true)
				let badge = badgeToPretend(score, props.badge)
				let user = JSON.parse(localStorage.getItem("user"));
				let id = user._id
				var myInit = { 
					method: 'POST',
					mode: 'cors',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({id : id, score : score,  game : props.name, badge : badge})
				}
				fetch(process.env.REACT_APP_URL_BACK+"record/highscore",myInit)
				.then(res => res.json())
				.then((response) =>{
					setBadgeUnlocked(response.newBadge);
				})
			} 
		} 
	},[isPlaying])

  	useEffect(()=> {
		if(questionAvailable.length > 0){
			questionAvailable.sort((a, b) => 0.5 - Math.random());
  	  		let copyQuestionAvailable = [...questionAvailable];
  	  		let QuestionPicked = copyQuestionAvailable.shift();
  	  		setPicked(QuestionPicked)
  	  		setQuestionAvailable(copyQuestionAvailable)
  	  		setFirstDate(questionAnswered[0].date)
		} else {
			setBasicModalWin(true)
		}
	}, [setQuestionAnswered, questionAnswered])

	useEffect(() => {
		if(token !== null){
		  	let user = JSON.parse(localStorage.getItem("user"));
		  	let id = user._id
		  	var myInit = { 
		  	method: 'POST',
		  	mode: 'cors',
		  	headers: { 'Content-Type': 'application/json' },
		  	body: JSON.stringify({id : id, game : props.name})
		  	}
		  	fetch(process.env.REACT_APP_URL_BACK+"record",myInit)
		  	.then(res => res.json())
		  	.then(
				(response) => {
					setRecord(response.record || 0)
				},
				(error) => {
					setRecord(0)
			}
		  	)
	  	}
	}, [])

  	const handleTiret= (e)=> {   
		console.log(record)
		let min = e.target.getAttribute("data-min");
  	    let max = e.target.getAttribute("data-max");
		if(min !== null && max !== null ){
		 	if(life > 0 && !questionAnswered.includes(picked)){
				if(picked.date >= min && picked.date <= max){
					picked.answer = "#49944c";
					setScore( score + 1 )
				}else if((picked.date < min || picked.date > max) && life === 1){
					setLife(life - 1)
					picked.answer = "rgb(135, 7, 7)";
					setBasicModal(true)
					setIsPlaying(false)
				}else{
					setLife(life - 1)
					picked.answer = "rgb(135, 7, 7)";
				}
				let copyQuestionAnswered = [...questionAnswered, picked]
				copyQuestionAnswered.sort((a, b) => (a.date > b.date ? 1 : -1))
				setQuestionAnswered(copyQuestionAnswered)
			}
		} 
	}
  	const displayLife = () => {
  	    const rows = [];
  	  	for (let i = 0; i < life; i++) {
  	  	  	rows.push(<Heart key={i} />);
  	  	}
		return rows;
  	}

	const reset = () => {
		let newStateQuestion = [...questionAnswered, ...questionAvailable, picked]
		let newStateAnswered = newStateQuestion.shift();
		newStateAnswered.answer = null;
		newStateQuestion.forEach((element) => element.answer = null)
		if(score > record) {
			setRecord(score)
		}
		setIsPlaying(true)
		setQuestionAvailable(newStateQuestion)
		setQuestionAnswered([newStateAnswered]);
		setLife(3)
		setScore(0)
		setBasicModal(false)
		setBasicModalWin(false)
		setBadgeUnlocked(false)
		setIsRecord(false)
	}

	const toggleShow = () => setBasicModal(!basicModal);
	const toggleShowWin = () => setBasicModalWin(!basicModalWin);

  	return (
	<div>
		<Header></Header>
		<div className='sticky'>
			<div className='px-2 mb-2 d-flex justify-content-between align-items-center d-lg-none'>
				<Record record={record} token={token}></Record>
				<div>{displayLife()}</div>
				 <Restart isDisplay={!isPlaying ? true : false } action={reset}></Restart> 
			</div>
  	   	 	<div className='wrapper-score d-lg-block d-none'>
				<Record record={record} token={token}></Record>
			</div>
			<div className='d-lg-block d-none'>
  	   	 		<div className='wrapper-heart'>
					{displayLife()}
				</div>
				 <Restart isDisplay={!isPlaying ? true : false} action={reset}></Restart> 
			</div>	
  	   	 	<div className="text-center box-question" ><h1  style={isPlaying ? { display: `block` } : {display : "none"} } className="text-center question ">{picked.question}</h1></div>
		</div> 
  	    <div className="area-answer" data-min="-30000000" data-max={firstDate} onClick={handleTiret}>
			<div className={isPlaying ? "tiret" : "" } data-min="-30000000" data-max={firstDate} ></div>
  	    </div>
		<div className='mb-5 mb-lg-0'>
  	    	{questionAnswered.map((data, index)=> {
  	    	 	return <Box animation={isPlaying} datas={data} key={data.id} handleTiret={handleTiret}  questionAnswered={questionAnswered} index={index} ></Box>
  	    	})}
		</div>
		<Modal actionReset={reset} badge={badgeUnlocked} isRecord={isRecord} name={props.name} basicModal={basicModal} setBasicModal={setBasicModal} toggleShow={toggleShow} score ={score}  >Vous n'avez plus de vies !</Modal>
		<Modal actionReset={reset} badge={badgeUnlocked} isRecord={isRecord} name={props.name} basicModal={basicModalWin} setBasicModal={setBasicModalWin} toggleShow={toggleShowWin}  score={score} >Vous êtes arrivés au bout des questions !</Modal>
		<div className='footer'>
			<div className='text-center'>
			Score : {score}
			</div>
		</div>
	</div>
  	);
}	

export default Games;