import React from "react";
import sound from "./sound.mp3"
import sound1 from './click.mp3'
export default function Down() 
{
    const [Num,setNum] = React.useState(1)
    const [Die,setDie] = React.useState(1)
    const [UserChoose,setUserChoose] = React.useState(-1)
    const [Turn , setTurn] = React.useState(false)
    const [Win,setWin] = React.useState(false)
    const [Animation,setAnimation] = React.useState(false)
    const numbers = [1, 2, 3, 4, 5, 6];
    const x = numbers.map( (index) => <button onMouseEnter={chime} className="casino-button" onClick={() => UserClicks(index)} >{index}</button> )
    
    function handler(){
        const randomNum = Math.floor(Math.random() * 6) + 1
        setAnimation(true)
        setTimeout(function() {
            setAnimation(false)
          }, 2000);
        setDie(randomNum)
        setTurn(false)
        if (randomNum == UserChoose) {
            setWin(true)
            setNum(Num+5)
        }
        else{
            setNum(Num-1)
        }
    }
    function reset(){
        setNum(0)
    }
    function rules(){
        return (<div>fg</div>)
    }
    function UserClicks(index) {
        setUserChoose(index)
        setTurn(true)
        const audio = new Audio(sound1);
        
        audio.play();
    }
    function chime() {
        const audio = new Audio(sound);
        
        audio.play();
    }
    return (
        <div className="down">
            <nav>
                <div className="score">
                    <p className="number">{Num}</p>
                    <p className="string">Total score</p>
                </div>  
                <div className="select">
                    {x}
                </div>
            </nav>
            <div className="below">
                <div>
                    {!Animation && <img onClick={handler} src={"img/"+Die+".png"}/>}
                    {Animation && <img className="animation" src="img/roll.gif"/>}
                    {Turn && <p>Click On Dice To It</p> }
                    <button className="reset" onClick={reset}>Reset Score</button>
                    <button className="rules" onClick={rules}>Show Rules</button>
                    {Turn && <p>Now ROLL!!</p>}
                    {Turn && <p>Number Choosen {UserChoose}</p>}
                    {!Turn && <p>Choose a Number</p>}
                    {Win && <p>You win !!!</p>}
                </div>
            </div>
        </div>
    )
}