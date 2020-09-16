import React, { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [question1, setQuestion1] = useState('')
  const [question2, setQuestion2] = useState('')
  const [question3, setQuestion3] = useState('')
  const [myQuestion, setMyQuestion] = useState([])
  const [check, setCheck] = useState([])
  const [correct, setCorrect] = useState([])

  const myQuestions = [
    {
      question: "1 + 2 is?",
      answers: ["1", "2", "3"],
      correctAnswer: 2
    },
    {
      question: "What is the best site for Web Programmer ?",
      answers: ["Stack Overflow", "Quora", "w3school"],
      correctAnswer: 0
    },
    {
      question: "Who is Prime minister fo Thailand?",
      answers:
        [
          "Prayut Chan-o-cha",
          "Yingluck Shinawatra",
          "Abhisit Vejjajiva",
          "Somchai Wongsawat"
        ]
      ,
      correctAnswer: 0
    }
  ]

  useEffect(() => {
    setMyQuestion(myQuestions.map(item => item.question))
    setCheck(myQuestions.map(item => item.correctAnswer))
    setCorrect(myQuestions.map(item => item.answers[item.correctAnswer]))

  }, [])

  const handleOptionChange = (e) => {
    if (e.name === myQuestion[0]) {
      setQuestion1(e.value)
    } else if (e.name === myQuestion[1]) {
      setQuestion2(e.value)
    } else {
      setQuestion3(e.value)
    }
  }



  const handleFormSubmit = (formSubmitEvent) => {
    formSubmitEvent.preventDefault();
    console.log("You have submitted:", question1);
    console.log("You have submitted:", question2);
    console.log("You have submitted:", question3);
    checkAnswer()
  }

  const checkAnswer = () => {
    if (question1 == correct[0] && question2 == correct[1] && question3 == correct[2]) {
      alert("ถูกทุกข้อ")
    } else {
      alert("ตอบผิด")
    }
    checkUserAnswerAllQuestion()
  }


  const checkUserAnswerAllQuestion = () => {
    let text = ''
    if (!question1) {
      text += "ไม่ได้ทำข้อ 1"
    }
    if (!question2) {
      text += "ไม่ได้ทำข้อ 2"
    }
    if (!question3) {
      text += "ไม่ได้ทำข้อ 3"
    }
    if(question1 && question2 && question3) {
      text = "ทำหมดทุกข้อเลย"
    }
    alert(text)
  }
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        {myQuestions.map(item => (
          <div className="form-check">
            {/* {console.log(item)} */}
            <h1>{item.question}</h1>
            {item.answers.map((select) => (
              <label >
                <li>
                  <input
                    type="radio"
                    name={item.question}
                    value={select}
                    onChange={(e) => handleOptionChange(e.target)}
                    className="form-check-input"
                  />
                  {select}
                </li>
              </label>
            ))}
          </div>
        ))}
        <div className="form-group">
          <button className="btn btn-primary mt-2" type="submit">Reply</button>
        </div>
      </form>
    </div >
  )
}

export default App
