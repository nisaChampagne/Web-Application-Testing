import React, { useState } from 'react'
import Display from './Display'
import { userInfo } from 'os';

export default function Dashboard (){

    const [balls, setBalls] = useState(0);
    const [strikes, setStrikes] = useState(0);
    const [fouls, setFouls] = useState(0)
    const [hits, setHits] = useState(0)

    const ballsIncrement = () => {
        if(balls < 4){
            setBalls(balls + 1);
        } else {
            setBalls(0)
        }
    }
    const strikesIncrement = () => {
        if(strikes < 3){
            setStrikes(strikes + 1);
        } else {
            setStrikes(0)
        }
    }

    const foulsIncrement = () => {
        if(strikes === 0){
            setStrikes(1);
        } else if (strikes === 1) {
            setStrikes(2);
        } else {
            setStrikes(strikes);
        }
    }

    const hitsIncrement = () => {
       if(hits >= 0){
           setStrikes(0);
           setBalls(0);
           setHits(hits + 1)
       }else {
           setBalls(strikes);
           setStrikes(balls);
           setHits(hits + 1);
       }
       console.log('THIS', hits);
    }
    // balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
// balls and strikes reset to 0 when a hit is recorded.

    return(
        <div className='dashboard'>
            <button onClick={() => ballsIncrement()}>Ball</button>
            <button onClick={() => strikesIncrement()}>Strike</button>
            <button onClick={() => foulsIncrement()}>Foul</button>
            <button onClick={() => hitsIncrement()}>Hit</button>
            <Display balls={balls}
                     setBalls={setBalls}
                     strikes={strikes}
                     setStrikes={setStrikes}
                     fouls={fouls}
                     setFouls={setFouls} 
                     hits={hits}
                     setHits={setHits}/>
        </div>
    )
}