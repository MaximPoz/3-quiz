import React from 'react';
import './index.scss';


const questions = [
  {
    title: 'Пиво сегодня будем брать?',
    variants: ['да', 'нет', 'для разгона'],
    correct: 2,
  },
  {
    title: 'Сколько джина? ',
    variants: ['0.5', '0.7', 'ну в говно, это будет сильно'],
    correct: 1,
  },
  {
    title: 'Закуску берём?',
    variants: [
      'Сухарики',
      'шоколад',
      'овощи на салат',
    ],
    correct: 2,
  },
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <a href='https://maximpoz.github.io/3-quiz/'>
      <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({ step, question, onClickVariant }) {
  const percentage = Math.round((step / questions.length) * 100)

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => onClickVariant(index)} key={text}>{text}</li>
        ))}

      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0)
  const [correct, setCorrect] = React.useState(0)
  const question = questions[step]

  const onClickVariant = (index) => {
    console.log(step, index)
    setStep(step + 1)

    if (index === question.correct) {
      setCorrect(correct + 1)
    }
  }

  return (
    <div className="App">
      {
        step !== questions.length ? (
          <Game
            step={step}
            question={question}
            onClickVariant={onClickVariant} />
        ) : (
          <Result 
            correct={correct}
          />
        )
      }
    </div>
  );
}

export default App;
