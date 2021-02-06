import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import GitHubCorner from '../src/components/GitHubCorner/GitHubCorner';
import QuestionWidget from '../src/components/QuestionWidget/QuestionWidget';
import QuizBackground from '../src/components/QuizBackground/QuizBackground';
import QuizContainer from '../src/components/QuizContainer/QuizBackground';
import QuizLogo from '../src/components/QuizLogo/QuizLogo';
import ResultWidget from '../src/components/Results/Results';
import Widget from '../src/components/Widget/Widget';
import { QuizLanguage, useQuizContext } from '../src/context/QuizContext';
import Lottie from 'react-lottie';
import loading_yellow from './../public/loading.json'

const loading = {
  loop: true,
  autoplay: true,
  animationData: loading_yellow,
};
interface ILoadingProps {
  language: QuizLanguage
}

const LoadingWidget: React.FC<ILoadingProps> = ({ language }) => {
  return (
    <Widget
      as={motion.section}
      transition={{ delay: 0, duration: 0.5 }}
      variants={{
        show: { opacity: 1, x: '0' },
        hidden: { opacity: 0, x: '-100%' },
      }}
      initial="hidden"
      animate="show"
    >
      <Widget.Header>
        {language === QuizLanguage.ENGLISH ? 'Loading...' : 'Carregando...'}
      </Widget.Header>

      <Widget.Content style={{ padding: 0 }}>
        <Lottie
          speed={1.5}
          options={loading}
          isStopped={false}
          isPaused={false}
          style={{ background: "none !important", boxShadow: "none !important" }}
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


const Quiz: React.FC = () => {

  const { quizData, language, setResults } = useQuizContext();
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
                <ResultWidget />
              </>
        }
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Karosso" />
    </QuizBackground>
  )
}

export default Quiz;
