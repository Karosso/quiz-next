import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components'
import { QuizLanguage, useQuizContext } from '../../context/QuizContext';

const FooterWrapper = styled.footer`
  background-color: #00000070;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 4px; 
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: ${({ theme }) => theme.colors.contrastText};
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  }
`;


const Footer: React.FC = () => {
  const { language } = useQuizContext();
  return (
    <FooterWrapper
      as={motion.footer}
      transition={{ delay: 1, duration: 0.5 }}
      variants={{
        show: { opacity: 1, x: '0' },
        hidden: { opacity: 0, x: '-100%' },
      }}
      initial="hidden"
      animate="show"
    >
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        {
          language === QuizLanguage.ENGLISH
            ?
            `Proudly created during the`
            :
            `Orgulhosamente criado duarante a `
        }
        <a href="https://www.alura.com.br/">
          <span>
            {
              language === QuizLanguage.ENGLISH
                ?
                ` Alura's React Immersion`
                :
                ` Imersão React da Alura`
            }
          </span>
        </a>
      </p>
    </FooterWrapper>
  );
}

export default Footer;