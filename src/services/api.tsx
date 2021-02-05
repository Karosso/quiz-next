import { IQuizModel } from "../../db";

export async function getQuizData(language: string): Promise<IQuizModel> {
  return fetch(`https://quiz-next.karosso.vercel.app/api/${language}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    })
    .catch((error: Error) => {
      throw error 
    })
}