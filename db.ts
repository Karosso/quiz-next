import { bg } from "./bg";

export interface IQuestions {
  image: string,
  title: string,
  description: string,
  answer: number,
  alternatives: string[],
}

export interface ITheme {
  colors: {
    primary: string,
    secondary: string,
    mainBg: string,
    contrastText: string,
    wrong: string,
    success: string,
    white: string
  },
  borderRadius: string
}
export interface IQuizModel {
  bg: string,
  title: string,
  playerNameQuestion: string,
  description: string,
  questions: IQuestions[],
  external: string[],
  theme: ITheme,
}

export const db: IQuizModel = {
  "bg": "https://quiz-next.karosso.vercel.app/api/simpson_bg",
  "title": "The Simpsons Quiz",
  "playerNameQuestion": "Qual seu Nome",
  "description": "Teste os seus conhecimentos sobre a família mais amada das telinhas",
  "questions": [
    {
      "image": "https://pa1.narvii.com/6735/eec96583c81bb057c652cc0605d946556a7d841d_hq.gif",
      "title": "Como fazer um seletor por id via CSS?",
      "description": "Essa é pra aquecer",
      "answer": 2,
      "alternatives": [
        ".elemento",
        "*elemento",
        "#elemento",
        "%elemento"
      ]
    },
    {
      "image": "https://media.giphy.com/media/13FrpeVH09Zrb2/giphy.gif",
      "title": "Como fazer um background gradiente com css?",
      "description": "Faz tempo em haha",
      "answer": 0,
      "alternatives": [
        "background: linear-gradient(#e66465, #9198e5);",
        "background: gradient(#e66465, #9198e5);"
      ]
    }
  ],
  "external": [
    ""
  ],
  "theme": {
    "colors": {
      "primary": "#0d47a1",
      "secondary": "#29b6f6",
      "mainBg": "#171B35",
      "contrastText": "#FDD23A",
      "wrong": "#FF5722",
      "success": "#4CAF50",
      "white": "#FFFFFF"
    },
    "borderRadius": "4px"
  }
}

export const questions_pt: IQuizModel = {
  "bg": bg,
  "title": "Os Simpsons Quiz",
  "playerNameQuestion": "Qual seu Nome",
  "description": "Teste os seus conhecimentos sobre a família mais amada das telinhas!",
  "questions": [
    {
      "image": "https://media.giphy.com/media/xUOxf3yDKCuwpOlT3i/giphy.gif",
      "title": "Como fazer um seletor por id via CSS?",
      "description": "Essa é pra aquecer",
      "answer": 2,
      "alternatives": [
        ".elemento",
        "*elemento",
        "#elemento",
        "%elemento"
      ]
    },
    {
      "image": "https://media.giphy.com/media/13FrpeVH09Zrb2/giphy.gif",
      "title": "Como fazer um background gradiente com css?",
      "description": "Faz tempo em haha",
      "answer": 0,
      "alternatives": [
        "background: linear-gradient(#e66465, #9198e5);",
        "background: gradient(#e66465, #9198e5);"
      ]
    }
  ],
  "external": [
    ""
  ],
  "theme": {
    "colors": {
      "primary": "#0d47a1",
      "secondary": "#29b6f6",
      "mainBg": "#171B35",
      "contrastText": "#FDD23A",
      "wrong": "#FF5722",
      "success": "#4CAF50",
      "white": "#FFFFFF"
    },
    "borderRadius": "4px"
  }
}

export const questions_en: IQuizModel = {
  "bg": bg,
  "title": "The Simpsons Quiz",
  "playerNameQuestion": "What's your name?",
  "description": "Test your knowledge of the most loved family on the screens!",
  "questions": [
    {
      "image": "https://media.giphy.com/media/xUOxf3yDKCuwpOlT3i/giphy.gif",
      "title": "Como fazer um seletor por id via CSS?",
      "description": "Essa é pra aquecer",
      "answer": 2,
      "alternatives": [
        ".elemento",
        "*elemento",
        "#elemento",
        "%elemento"
      ]
    },
    {
      "image": "https://media.giphy.com/media/13FrpeVH09Zrb2/giphy.gif",
      "title": "Como fazer um background gradiente com css?",
      "description": "Faz tempo em haha",
      "answer": 0,
      "alternatives": [
        "background: linear-gradient(#e66465, #9198e5);",
        "background: gradient(#e66465, #9198e5);"
      ]
    }
  ],
  "external": [
    ""
  ],
  "theme": {
    "colors": {
      "primary": "#0d47a1",
      "secondary": "#29b6f6",
      "mainBg": "#171B35",
      "contrastText": "#FDD23A",
      "wrong": "#FF5722",
      "success": "#4CAF50",
      "white": "#FFFFFF"
    },
    "borderRadius": "4px"
  }
}