import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { db } from '../db';
import Footer from '../src/components/Footer/Footer';
import GitHubCorner from '../src/components/GitHubCorner/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground/QuizBackground';
import Widget from '../src/components/Widget/Widget';
import { useRouter } from 'next/router';
import QuizLogo from '../src/components/QuizLogo/QuizLogo';
import Input from '../src/components/Input/Input';
import Button from '../src/components/Button/Button';
 
// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {

  const [name, setName] = useState('');

  const router = useRouter();

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    router.push({
      pathname: `/quiz`,
      query: { name: name},
    })
    
  }


  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>The Simpsons</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Teste os seus conhecimentos sobre a série mais aclamada da galáxia...</p>
            <form onSubmit={handleSubmit}>
              <Input placeHolder="Qual seu nome?" onChange={handleName} name="NomeDoJogador" value={name} />
              <Button type="submit" disabled={name.length < 3}>Jogar</Button> 
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Título styled components</h1>
            <p>Lorem ipson dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Karosso" />
    </QuizBackground>
  );
}
