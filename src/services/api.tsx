import { IQuizModel } from "../../db";

export async function getQuizData(language: string): Promise<IQuizModel> {
  return fetch(`http://localhost:3000/api/${language}`)
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