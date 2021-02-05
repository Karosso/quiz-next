import { useRouter } from "next/router";
import React from "react";
import { QuizLanguage, useQuizContext } from "../../context/QuizContext";
import Button from "../Button/Button";
import Widget from "../Widget/Widget";

const ResultWidget: React.FC = () => {
  const router = useRouter();
  const { setName, setResults } = useQuizContext();

  const handleBack = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setName('');
    setResults([]);
    router.push({ pathname: `/` });
  }

  const { language, results, name } = useQuizContext();
  return (
    <Widget>
      <Widget.Header>
        {
          language === QuizLanguage.ENGLISH
            ?
            `${name} here is your score!!!`
            :
            `${name} aqui está seu resultado!!!`
        }
      </Widget.Header>

      <Widget.Content>
        <p>
          {
            language === QuizLanguage.ENGLISH
              ?
              `You got `
              :
              `Você acertou `
          }
          {results.reduce((sum, item) => {
            const correct = item === true;
            if (correct) {
              return sum + 1;
            }
            return sum;
          }, 0)}
          {
            language === QuizLanguage.ENGLISH
              ?
              ` questions`
              :
              ` perguntas`
          }
        </p>
        <ul>
          {
            results.map((result, index) => (
              <li key={index}>
                {
                  language === QuizLanguage.ENGLISH
                    ?
                    `Question ${index + 1} :  ${result ? 'Hit' : 'Miss'} `
                    :
                    `Pergunta ${index + 1} :  ${result ? 'Acertou' : 'Errou'} `
                }
              </li>
            ))}
        </ul>

        <Button onClick={handleBack}>{language === QuizLanguage.ENGLISH ? 'Back  ' : 'Voltar  '}</Button>
      </Widget.Content>
    </Widget>
  );
}

export default ResultWidget;