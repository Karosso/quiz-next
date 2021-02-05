import React, { createContext, useContext, useEffect, useState } from "react";
import { IQuizModel, questions_en } from "../../db";
import { getQuizData } from "../services/api";

export enum QuizLanguage {
  ENGLISH = 1,
  PORTUGUESE = 2
}

interface IQuizContext {
  quizData: IQuizModel;
  setLanguage: React.Dispatch<React.SetStateAction<QuizLanguage>>;
  language: QuizLanguage;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  results: boolean[];
  setResults: React.Dispatch<React.SetStateAction<boolean[]>>
}

const QuizContext = createContext<IQuizContext>({} as IQuizContext);

export const QuizProvider: React.FC = ({ children }) => {

  const [language, setLanguage] = useState(QuizLanguage.ENGLISH);
  const [quizData, setQuizData] = useState<IQuizModel>(questions_en);
  const [name, setName] = useState<string>('');
  const [results, setResults] = useState<boolean[]>([])

  useEffect(() => {
    getQuiz(language);
  }, [language])

  const getQuiz = async (language: QuizLanguage) => {
    switch (language) {
      case QuizLanguage.PORTUGUESE:
        const result_pt = await getQuizData('questions_pt')

        setQuizData(result_pt);
        break;
      case QuizLanguage.ENGLISH:
        const result_en = await getQuizData('questions_en')
        setQuizData(result_en);
        break;
      default:
        break;
    }
  }

  return (
    <QuizContext.Provider
      value={{
        quizData,
        setLanguage,
        language,
        name,
        setName,
        results,
        setResults
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => {
  const Quiz = useContext(QuizContext)
  return Quiz;
};