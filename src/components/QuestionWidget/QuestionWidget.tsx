import React, { useEffect, useState } from 'react'
import { db, IQuestions } from '../../../db';
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
  const [selectedAlternative, setSelectedAlternative] = useState<number>();
  const [isFormSubmited, setIsFormSubmited] = useState(false);

  const hasAlternativeSelected = selectedAlternative !== undefined;
  const isCorrect = selectedAlternative === question.answer;

  // useEffect(() => {
  //   console.log(selectedAlternative);

  // }, [selectedAlternative])

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
    <Widget>
      <Widget.Header>
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>
      <img
        alt="Descricao"
        style={{
          width: '100%',
          height: '150px',
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
            Confirmar
          </Button>
          {isCorrect && isFormSubmited && <p>Acertou =]</p>}
          {!isCorrect && isFormSubmited && <p>Errou =/</p>}
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  )
}
export default QuestionWidget
