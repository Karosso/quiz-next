import React, { useEffect, useState } from 'react'
import GitHubCorner from '../src/components/GitHubCorner/GitHubCorner';
import LanguageRadio from '../src/components/LanguageRadio/LanguageRadio';
import QuestionWidget from '../src/components/QuestionWidget/QuestionWidget';
import QuizBackground from '../src/components/QuizBackground/QuizBackground';
import QuizContainer from '../src/components/QuizContainer/QuizBackground';
import QuizLogo from '../src/components/QuizLogo/QuizLogo';
import ResultWidget from '../src/components/Results/Results';
import Widget from '../src/components/Widget/Widget';
import { QuizLanguage, useQuizContext } from '../src/context/QuizContext';

interface ILoadingProps {
  language: QuizLanguage
}

const LoadingWidget: React.FC<ILoadingProps> = ({ language }) => {
  return (
    <Widget>
      <Widget.Header>
        {language ===  QuizLanguage.ENGLISH ? 'Loading...' : 'Carregando...'}
      </Widget.Header>

      <Widget.Content style={{ padding: 0 }}>
        <img
          alt="Descricao"
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover'
          }}
          src="http://studentedgecontent.blob.core.windows.net/images/articles/2015/06/simpsons.gif"
        />
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

  const { quizData, language,setResults } = useQuizContext();
  const [screenState, setScreenState] = useState(screenStates.LOADING)
  const [totalQuestions, setTotalQuestions] = useState(quizData.questions.length);
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = quizData.questions[questionIndex];

  useEffect(() => {
    setTotalQuestions(quizData.questions.length)
  }, [quizData])

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ)
    }, 2 * 1000);
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
    <QuizBackground backgroundImage={quizData.bg}>
      <LanguageRadio />
      <QuizContainer>
        <QuizLogo />
        {
          screenState === screenStates.LOADING
            ? <LoadingWidget language={language} />
            : screenState === screenStates.QUIZ
              ? <QuestionWidget
                question={question}
                totalQuestions={totalQuestions}
                questionIndex={questionIndex}
                handleSubmit={handleSubmit}
                setResults={setResults}
              />
              : <>
                <ResultWidget/>
              </>
        }
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Karosso" />
    </QuizBackground>
  )
}

export default Quiz;
