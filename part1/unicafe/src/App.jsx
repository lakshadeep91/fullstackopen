import { useState } from 'react'


const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Stats = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  return (
    <div>
      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {(good + (bad * -1)) / total}</p>
      <p>positive {good / total * 100}</p>
    </div>
  )
}



const App = () => {
  const HandleGood = () => {
    setGood(good + 1)
  }

  const HandleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const HandleBad = () => {
    setBad(bad + 1)
  }
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={HandleGood} text='Good'/>
      <Button handleClick={HandleNeutral} text='Neutral'/>
      <Button handleClick={HandleBad} text='Bad'/>
      <Stats good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App