import React from 'react'
import './Quiz.css'

const Quiz = () => {
  return (
    <div className='container'>
        <h1>Quiz</h1>
        <hr />
        <h2>1. Pergunta1</h2>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>

        </ul>
        <button>Next</button>
        <div className="index">1 de 5</div>

    </div>
  )
} 

export default Quiz