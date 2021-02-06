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
    "https://aluraquiz-base.alura-challenges.vercel.app/",
    "https://aluraquiz-coffee.leonardot07.vercel.app/",
    "https://quiz-cavaleiro-zodiaco.vercel.app/",
    "https://harry-potter-quiz.brunogerbasi.vercel.app/"
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
      "image": "http://cdn.lowgif.com/small/0704b934a03225ba-.gif",
      "title": "Qual nome completo do Bart?",
      "description": "Essa é pra aquecer",
      "answer": 1,
      "alternatives": [
        "Bart Simpson",
        "Bartholomew JoJo Simpson",
        "Bartolomew Simpson",
        "Bartholomew J Simpson"
      ]
    },
    {
      "image": "https://i.pinimg.com/originals/60/3f/19/603f19757f2a4a0e6b61d3248cbf0768.gif",
      "title": "Qual o nome do cachorro dos Simpsons?",
      "description": "É aquele marronzinho",
      "answer": 3,
      "alternatives": [
        "Toto",
        "Papai Noel",
        "Bola de Neve III",
        "Ajudante de Papai Noel"
      ]
    },
    {
      "image": "https://i.pinimg.com/originals/fa/d0/51/fad051682468ebd7f43163984dd75206.gif",
      "title": "A serie Simpsons está no ar a quanto tempo?",
      "description": "Faz tempo em haha...",
      "answer": 0,
      "alternatives": [
        "31 anos",
        "26 anos",
        "39 anos",
        "34 anos"
      ]
    },
    {
      "image": "https://thumbs.gfycat.com/GloriousNiceFlyingsquirrel-size_restricted.gif",
      "title": "Quais destes famosos não apereceram nos Simpsons?",
      "description": "Foram tantos...",
      "answer": 2,
      "alternatives": [
        "Ronaldo Fenômeno",
        "Stephen Hawking",
        "Neymar Junior",
        "Michelle Obama"
      ]
    },
    {
      "image": "https://i.pinimg.com/originals/0c/b9/c7/0cb9c7e91468b11d6e4e3d1ec473a5ec.gif",
      "title": "Em que ano foi lançado o filme dos Simpsons?",
      "description": "O Filme",
      "answer": 0,
      "alternatives": [
        "2007",
        "2003",
        "2014",
        "2011"
      ]
    }
  ],
  "external": [
    "https://aluraquiz-base.alura-challenges.vercel.app/",
    "https://aluraquiz-coffee.leonardot07.vercel.app/",
    "https://quiz-cavaleiro-zodiaco.vercel.app/",
    "https://harry-potter-quiz.brunogerbasi.vercel.app/"
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
      "image": "http://cdn.lowgif.com/small/0704b934a03225ba-.gif",
      "title": "What is Bart's full name",
      "description": "This is to warm up",
      "answer": 1,
      "alternatives": [
        "Bart Simpson",
        "Bartholomew JoJo Simpson",
        "Bartolomew Simpson",
        "Bartholomew J Simpson"
      ]
    },
    {
      "image": "https://i.pinimg.com/originals/60/3f/19/603f19757f2a4a0e6b61d3248cbf0768.gif",
      "title": "What is the name of the Simpsons dog?",
      "description": "It's that brownie",
      "answer": 3,
      "alternatives": [
        "Charlie",
        "Santa",
        "Snowball III",
        "Santa's Little Helper"
      ]
    },
    {
      "image": "https://i.pinimg.com/originals/fa/d0/51/fad051682468ebd7f43163984dd75206.gif",
      "title": "The Simpsons series has been in the air for how long?",
      "description": "It's been a while huh...",
      "answer": 0,
      "alternatives": [
        "31 years",
        "26 years",
        "39 years",
        "34 years"
      ]
    },
    {
      "image": "https://thumbs.gfycat.com/GloriousNiceFlyingsquirrel-size_restricted.gif",
      "title": "Which of these celebrities did not appear in the Simpsons?",
      "description": "There were so many",
      "answer": 2,
      "alternatives": [
        "Ronaldo Fenômeno",
        "Stephen Hawking",
        "Neymar Junior",
        "Michelle Obama"
      ]
    },
    {
      "image": "https://i.pinimg.com/originals/0c/b9/c7/0cb9c7e91468b11d6e4e3d1ec473a5ec.gif",
      "title": "What year was the Simpsons movie released?",
      "description": "The Movie",
      "answer": 0,
      "alternatives": [
        "2007",
        "2003",
        "2014",
        "2011"
      ]
    }
  ],
  "external": [
    "https://aluraquiz-base.alura-challenges.vercel.app/",
    "https://aluraquiz-coffee.leonardot07.vercel.app/",
    "https://quiz-cavaleiro-zodiaco.vercel.app/",
    "https://harry-potter-quiz.brunogerbasi.vercel.app/"
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