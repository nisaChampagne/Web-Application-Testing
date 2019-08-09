import React from 'react'

export default function Display (props){
    return(
        <div className='display'>
            <div className='score'>
                <div className='balls'>
                {props.balls}
                </div>
                <div className='strikes'>
                {props.strikes}
                </div>
                <div className='fouls'>
                {props.fouls}
                </div>
                <div className='hits'>
                {props.hits}
                </div>
            </div>

        </div>
    )
}