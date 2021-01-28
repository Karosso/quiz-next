import React from 'react'
import styled from 'styled-components'

const InputBase = styled.input`
	height: 40px;
	width: 100%;
	font-size: 14px;
	background-color: ${({ theme }) => theme.colors.mainBg};
	border: 2px solid ${({ theme }) => theme.colors.secondary};
	border-radius: ${({ theme }) => theme.borderRadius};
	color: ${({ theme }) => theme.colors.contrastText};
	padding: 15px;
	outline: 0;
	margin-bottom: 25px;
`

interface IInputProps {
	onChange: ((event: React.ChangeEvent<HTMLInputElement>) => void),
	placeHolder: string,
	name: string,
	value: string
}

const Input: React.FC<IInputProps> = ({ onChange, placeHolder, name, value }) => {



	return (
		<div>
			<InputBase
				placeholder={placeHolder}
				onChange={onChange}
				name={name}
				value={value}
			/>
		</div>
	)
}

export default Input;
