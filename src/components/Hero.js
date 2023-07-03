import React from 'react'
import Down from './Down'

export default function Hero() {
    const [State,setState] = React.useState(true)
    function handler() {
        console.log('HI')
        setState( (prev) => !prev )
    }
    function up()
    {
        console.log('ref')
        return (
    <div className='Hero'>
        <div className='imga'>
            <img src='img/hero.webp'></img>
        </div>
        <div className='Hero-content'>
            <p>Dice Game</p>
            <button onClick={handler}>Play Now</button>
        </div>
    </div>
        )
    }
    return (
        <div>
            {State &&   up()}
            {!State && <Down/>  }
        </div>
    )
}