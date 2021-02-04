import styled, { DefaultTheme, StyledComponentBase } from 'styled-components';

// interface IAlternativesFormProps extends StyledComponentBase<"form", DefaultTheme, {}, never> {
//   dataSelected: string,
//   dataStatus: string
// }

const AlternativesForm = styled.form`
  label {
    &[data-selected="true"] {
      background-color: ${({ theme }) => theme.colors.primary};

      &[data-status="SUCCESS"] {
        background-color: ${({ theme }) => theme.colors.success};
      }
      &[data-status="ERROR"] {
        background-color: ${({ theme }) => theme.colors.wrong};
      }
    }
    &:focus {
      opacity: 1;
    } 
  }
  button {
    margin-top: 24px;
  }
`;

export default AlternativesForm


// import React from 'react'
// import styled, { DefaultTheme, StyledComponentBase } from 'styled-components';

// type formProps = {
//   dataSelected: string,
//   dataStatus: string,
// }

// const AlternativesFormBase = styled.form<formProps>`
//   label {
//     &[${(props) => props.dataSelected}="true"] {
//       background-color: ${({ theme }) => theme.colors.primary};
      
//       &[${(props) => props.dataStatus}="SUCCESS"] {
//         background-color: ${({ theme }) => theme.colors.success};
//       }
//       &[${(props) => props.dataStatus}="ERROR"] {
//         background-color: ${({ theme }) => theme.colors.wrong};
//       }
//     }
//     &:focus {
//       opacity: 1;
//     } 
//   }
//   button {
//     margin-top: 24px;
//   }
// `;

// interface IAlternativesFormProps {
//   dataSelected: string,
//   dataStatus: string,
//   onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
// }

// const AlternativesForm: React.FC<IAlternativesFormProps> = ({ dataSelected, dataStatus, children, onSubmit }) => {
//   return (
//     <AlternativesFormBase dataSelected={dataSelected} dataStatus={dataStatus} onSubmit={onSubmit}>
//       {children}
//     </AlternativesFormBase>
//   )
// }

// export default AlternativesForm