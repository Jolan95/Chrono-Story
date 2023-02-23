import {useEffect, useState} from 'react'
import Box from "./box";
import './App.css';
import Heart from './heart';
import Modal from './modal';

function Games(props) {
  	const [questionAvailable, setQuestionAvailable] = useState(props.datas)
  	const [life, setLife] = useState(3);
  	const [score, setScore] = useState(0);
  	const [picked, setPicked] = useState({id : 1000, question : "", date : null, answer : null})
  	const [questionAnswered, setQuestionAnswered] = useState([props.picked])
  	const [firstDate, setFirstDate] = useState(questionAnswered[0].date) 
	const [basicModal, setBasicModal] = useState(false);
	const [basicModalWin, setBasicModalWin] = useState(false);

	useEffect (() =>{
		let user = JSON.parse(localStorage.getItem("user"));
		let id = user._id
		var myInit = { 
			method: 'POST',
			mode: 'cors',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({id : id, score : score,  game : props.name})
		}
		fetch("http://localhost:3000/api/auth/highscore",myInit)
		.then(res => res.json())
		.then(
		  (response) => {
				console.log(response)
		  },
		  (error) => {
			console.log(error)
		  }
		)
	},[score, setScore])

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

  	const handleTiret= (e)=> {   
		let min = e.target.getAttribute("data-min");
  	    let max = e.target.getAttribute("data-max");
		if(min !== null && max !== null ){
		 	if(life > 0 && !questionAnswered.includes(picked)){
				if(picked.date >= min && picked.date <= max){
					picked.answer = "green";
					setScore( score + 1 )
				}else if((picked.date < min || picked.date > max) && life === 1){
					setLife(life - 1)
					picked.answer = "red";
					setBasicModal(true)
				}else{
					setLife(life - 1)
					picked.answer = "red";
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
	const trim = () => {
		let newStateQuestion = [...questionAnswered, ...questionAvailable, picked]
		let newStateAnswered = newStateQuestion.shift();
		newStateAnswered.answer = null;
		newStateQuestion.forEach((element) => element.answer = null)
		setQuestionAvailable(newStateQuestion)
		setQuestionAnswered([newStateAnswered]);
		setLife(3)
		setScore(0)
		setBasicModal(false)
		setBasicModalWin(false)
	}


	const toggleShow = () => setBasicModal(!basicModal);
	const toggleShowWin = () => setBasicModalWin(!basicModalWin);

  	return (
  	  <div className="App">
  	    <header className="App-header">
			<div className='sticky'>
				<div className='text-center d-lg-none'>{displayLife()}</div>
				<div className='text-center d-lg-none'>score : {score}</div>
  	   	 		<div className='wrapper-score d-lg-block d-none'>Score : {score}</div>
  	   	 		<div className='wrapper-heart d-lg-block d-none'>{displayLife()}</div>
  	   	 		<h1 className="text-center question ">{picked.question}</h1>
			</div>
  	    	<div className="area-answer" data-min="-30000000" data-max={firstDate} onClick={handleTiret}>
				<div className="tiret" data-min="-30000000" data-max={firstDate} ></div>
  	    	</div>
  	    	{questionAnswered.map((data, index)=> {
  	    	 	return <Box datas={data} key={data.id} handleTiret={handleTiret}  questionAnswered={questionAnswered} index={index}></Box>
  	    	})}
			<Modal actionReset={trim}  basicModal={basicModal} setBasicModal={setBasicModal} toggleShow={toggleShow} score ={score}  >Oops...Vous n'avez plus de vies</Modal>
			<Modal actionReset={trim} basicModal={basicModalWin} setBasicModal={setBasicModalWin} toggleShow={toggleShowWin}  score={score} >Bravo !!!</Modal>
  	    </header>
  	  </div>
  	);
}	

export default Games;