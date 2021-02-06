import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { IQuestions } from '../../../db';
import { QuizLanguage, useQuizContext } from '../../context/QuizContext';
import AlternativesForm from '../AlternativesForm/AlternativeForms';
import Button from '../Button/Button';
import Widget from '../Widget/Widget';

interface IQuestionWidgetProps {
  question: IQuestions;
  totalQuestions: number;
  questionIndex: number;
  handleSubmit: () => void;
  setResults: React.Dispatch<React.SetStateAction<boolean[]>>
}

const QuestionWidget: React.FC<IQuestionWidgetProps> = ({ question, totalQuestions, questionIndex, handleSubmit, setResults }) => {

  const { language } = useQuizContext();
  const [selectedAlternative, setSelectedAlternative] = useState<number>();
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const hasAlternativeSelected = selectedAlternative !== undefined;
  const isCorrect = selectedAlternative === question.answer;
  const questionId = `question__${questionIndex}`;

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsFormSubmited(true)
    setTimeout(() => {
      setResults(prevState => (
        [
          ...prevState,
          isCorrect
        ]
      ))
      handleSubmit();
      setIsFormSubmited(false);
      setSelectedAlternative(undefined)
    }, 2 * 1000);
  }


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
        <h3>
          {
            language === QuizLanguage.ENGLISH
              ?
              `Question ${questionIndex + 1} of ${totalQuestions}`
              :
              `Pergunta ${questionIndex + 1} de ${totalQuestions}`
          }
        </h3>
      </Widget.Header>
      <img
        alt="Descricao"
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover'
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>
        <AlternativesForm
          onSubmit={(event: React.FormEvent<HTMLFormElement>) => submit(event)}
        >
          {question.alternatives.map((item, index) => {
            const alternativeId = `alternative__${index}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === index;
            return (
              <Widget.Topic
                key={index}
                as="label"
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isFormSubmited && alternativeStatus}
              >
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  onChange={() => setSelectedAlternative(index)}
                  type="radio"
                />
                {item}
              </Widget.Topic>
            );
          })}
          <Button type="submit" disabled={!hasAlternativeSelected}>
            {language === QuizLanguage.ENGLISH ? 'Confirm' : 'Confirmar'}
          </Button>
          {isCorrect && isFormSubmited && <p>{language === QuizLanguage.ENGLISH ? 'Right =]' : 'Acertou =]'}</p>}
          {!isCorrect && isFormSubmited && <p>{language === QuizLanguage.ENGLISH ? 'Wrong =]' : 'Errou =/'}</p>}
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  )
}
export default QuestionWidget
