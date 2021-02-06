import { GetServerSideProps, NextPage } from 'next'
import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { IQuizModel } from '../../db'
import { useQuizContext } from '../../src/context/QuizContext'
import { getCrowdQuizData } from '../../src/services/api'
import Quiz from '../quiz'

const CrowdQuizzes: NextPage<Props> = ({ result }) => {
  const { setQuizData, quizData } = useQuizContext()

  useEffect(() => {
    setQuizData(result)
  }, [result])

  return (
    <ThemeProvider theme={ quizData.theme }>
      <Quiz />
    </ThemeProvider>
  )
}

export default CrowdQuizzes

interface Props {
  result: IQuizModel
}
export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const { index } = context.query;
  const result = await getCrowdQuizData(parseInt(index as string));
  return {
    props: {
      result
    },
  }
}