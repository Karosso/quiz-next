import React from 'react';
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

export default function Home() {

  const { quizData, language, name, setName } = useQuizContext();
  const router = useRouter();

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push({ pathname: `/quiz` })
  }

  return (
    <QuizBackground backgroundImage={quizData.bg}>
      <LanguageRadio />
      
      <QuizContainer>
        <QuizLogo />
        <Widget>
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
        <Widget>
          <Widget.Content>
            <h1>Lorem ipson dolor sit amet...</h1>
            <p>Lorem ipson dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Karosso" />
    </QuizBackground>
  );
}
