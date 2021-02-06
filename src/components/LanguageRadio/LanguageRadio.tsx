import styled from 'styled-components';
import React from 'react';
import { QuizLanguage, useQuizContext } from '../../context/QuizContext';

const RadioDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #00000070;
  border-radius: 4px; 
  padding: 3px;
  margin: 3px;
  max-width: 260px;
  z-index: 10;
`;

const LanguageRadio: React.FC = () => {
  const { language, setLanguage } = useQuizContext();
  return (
    <RadioDiv>
      <label >{language === QuizLanguage.ENGLISH ? 'Language:' : 'Idioma:'}</label>
      <input
        type="radio"
        id="english"
        name="english"
        value="english"
        onChange={() => setLanguage(QuizLanguage.ENGLISH)}
        checked={language === QuizLanguage.ENGLISH}
      />
      <label >{language === QuizLanguage.ENGLISH ? 'English' : 'Inglês'}</label>
      <input
        type="radio"
        id="portuguese"
        name="portuguese"
        value="portuguese"
        onChange={() => setLanguage(QuizLanguage.PORTUGUESE)}
        checked={language === QuizLanguage.PORTUGUESE}
      />
      <label >{language === QuizLanguage.ENGLISH ? 'Portuguese' : 'Português'}</label>
    </RadioDiv>
  );
}
export default LanguageRadio;