import { db, IQuizModel } from "../../db";

export async function getQuizData(language: string): Promise<IQuizModel> {
  // return fetch(`http://localhost:3000/api/${language}`)
  return fetch(`https://quiz-next.karosso.vercel.app/api/${language}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    })
    .then((quizData) => {
      return quizData
    })
    .catch((error: Error) => {
      throw error 
    })
}

export async function getCrowdQuizData(index: number): Promise<IQuizModel> {
  return fetch(`${db.external[index]}api/db`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    })
    .then((crowdQuizData) => {
      return crowdQuizData
    })
    .catch((error: Error) => {
      throw error 
    })
}
