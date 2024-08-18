import { useState } from 'react'


const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const StatisticLine = ({type, value}) => {
  return (
    <tr>
      <td>{type}</td>
      <td>{value}</td>
    </tr>
  )
}

const Stats = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const average = (good + (bad * -1)) / total
  const positive = good / total * 100
  if(total === 0){
    return (
      <p>No feedback given yet</p>
    )
  }
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine type='good' value={good} />
          <StatisticLine type='neutral' value={neutral} />
          <StatisticLine type='bad' value={bad} />
          <StatisticLine type='all' value={total} />
          <StatisticLine type='average' value={average} />
          <StatisticLine type='positive' value={positive} />
        </tbody>
      </table>
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