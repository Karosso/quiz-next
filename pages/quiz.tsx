import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { db } from '../db';
import Button from '../src/components/Button/Button';
import QuestionWidget from '../src/components/QuestionWidget/QuestionWidget';
import QuizBackground from '../src/components/QuizBackground/QuizBackground';
import QuizContainer from '../src/components/QuizContainer/QuizBackground';
import QuizLogo from '../src/components/QuizLogo/QuizLogo';
import Widget from '../src/components/Widget/Widget';

interface IResultProps {
  results: boolean[]
}

const ResultWidget: React.FC<IResultProps> = ({ results }) => {



  return (
    <Widget>
      <Widget.Header>
        Resultado
      </Widget.Header>

      <Widget.Content>
        <p>Você acertou{' '}
          {results.reduce((sum, item) => {
            const correct = item === true;
            if (correct) {
              return sum + 1;
            }
            return sum;
          }, 0)}
          {' '}perguntas</p>
        <ul>
          {
            results.map((result, index) => (
              <li key={index}>
                {`Pergunta ${index + 1} :  ${result ? 'Acertou' : 'Errou'} `}
              </li>
            ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
}

const LoadingWidget = () => {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        [Desafio do Loading]
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

interface IQuizProps {
  name: string;
}

const Quiz: React.FC<IQuizProps> = () => {
  const router = useRouter();

  const [name, setName] = useState(router.query.name)

  const [screenState, setScreenState] = useState(screenStates.LOADING)
  const [results, setResults] = useState<boolean[]>([])
  const [totalQuestions, setTotalQuestions] = useState(db.questions.length);
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = db.questions[questionIndex];

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ)
    }, 1 * 1000);
  }, [])

  const handleSubmit = () => {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setQuestionIndex(questionIndex + 1)
    } else {
      setScreenState(screenStates.RESULT)
    }
  }

  

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {
          screenState === screenStates.LOADING
            ? <LoadingWidget />
            : screenState === screenStates.QUIZ
              ? <QuestionWidget
                question={question}
                totalQuestions={totalQuestions}
                questionIndex={questionIndex}
                handleSubmit={handleSubmit}
                setResults={setResults}
              />
              : <>
                <ResultWidget results={results} />
              </>
        }

      </QuizContainer>
    </QuizBackground>
  )
}

export default Quiz;
