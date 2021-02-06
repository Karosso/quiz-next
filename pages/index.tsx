import React, { useEffect } from 'react';
import Footer from '../src/components/Footer/Footer';
import GitHubCorner from '../src/components/GitHubCorner/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground/QuizBackground';
import Widget from '../src/components/Widget/Widget';
import { useRouter } from 'next/router';
import QuizLogo from '../src/components/QuizLogo/QuizLogo';
import Input from '../src/components/Input/Input';
import Button from '../src/components/Button/Button';
import QuizContainer from '../src/components/QuizContainer/QuizBackground';
import { QuizLanguage, useQuizContext } from '../src/context/QuizContext';
import LanguageRadio from '../src/components/LanguageRadio/LanguageRadio';
import { db } from '../db';
import { motion } from 'framer-motion';

const Home = () => {

  const { quizData, language, name, setName, getQuiz } = useQuizContext();
  const router = useRouter();

  useEffect(() => {
    getQuiz(language)
  }, [])

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push({ pathname: `/quiz` })
  }

  const handleCrowdQuizClick = (externalQuiz: string, index: number) => {
    if(name.length < 3){
      alert('entre com seu nome para continuar')
    } else{
      router.push({
        pathname: `/quiz/${externalQuiz}`,
        query: { index: index }
      })
    }
  }

  return (
    <QuizBackground backgroundImage={quizData.bg}>

      <QuizContainer>
        <QuizLogo/>
        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 0.5}}
          variants={{
            show: {opacity: 1, x: '0'},
            hidden: { opacity: 0, x: '-100%'},
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>{quizData.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{quizData.description}</p>
            <form onSubmit={handleSubmit}>
              <Input placeHolder={quizData.playerNameQuestion} onChange={handleName} name="NomeDoJogador" value={name} />
              <Button type="submit" disabled={name.length < 3}>{language === QuizLanguage.ENGLISH ? 'Play  ' : 'Jogar  '}{` ${name}`}</Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5}}
          variants={{
            show: {opacity: 1, x: '0'},
            hidden: { opacity: 0, x: '-100%'},
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Content>
            <h1>
              {
                language === QuizLanguage.ENGLISH
                  ?
                  `Crowd quizzes...`
                  :
                  `Quizes da galera...`
              }
            </h1>
            <ul>
              {
                db.external.map((item, index) => {
                  const linkText = item
                    .replace(/\//g, '')
                    .replace('https:', '')
                    .replace('.vercel.app', '')

                  return (
                    <li key={index}>
                      <Widget.Topic onClick={() => handleCrowdQuizClick(linkText, index)}>
                        {linkText}
                      </Widget.Topic>
                    </li>
                  )
                })
              }
            </ul>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Karosso" />
      <LanguageRadio />

    </QuizBackground>
  );
}

export default Home;