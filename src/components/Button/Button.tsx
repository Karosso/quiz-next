import React from 'react'
import styled from 'styled-components'

const ButtonBase = styled.button`
	height: 40px;
	width: 100%;
	font-size: 14px;
	background-color: ${({ theme }) => theme.colors.contrastText};
	border-radius: ${({ theme }) => theme.borderRadius};
	color: ${({ theme }) => theme.colors.mainBg};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
	outline: 0;
  padding: 10px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  transition: .3s;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: .5;
  }
  &:disabled {
    background-color:${({ theme }) => theme.colors.mainBg};
    border: 2px solid ${({ theme }) => theme.colors.secondary};
	  color: ${({ theme }) => theme.colors.contrastText};
    cursor: not-allowed;
  }
`
interface IButtonProps {
  type?: "button" | "submit" | "reset" | undefined,
  disabled?: boolean,
  onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined
}

const Button: React.FC<IButtonProps> = ({ type = 'submit', children, disabled, onClick }) => {
  return (
    <div>
      <ButtonBase type={type} disabled={disabled} onClick={onClick}>
        {children}
      </ButtonBase>

    </div>
  )
}

export default Button;
