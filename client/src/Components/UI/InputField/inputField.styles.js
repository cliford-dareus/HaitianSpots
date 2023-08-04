import styled from 'styled-components';

export const InputFieldContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: .5em;
`;

export const LabelField = styled.label`

`;

export const InputField = styled.input`
    border-radius: 0.5em;
    padding: 0.5em;
    border: none;
    outline: none;
    background-color: var(--bg--primary-400);
    color: whitesmoke;
    &::placeholder{
        color: var(--accent--color-200);
    }
`;

export const SelectField = styled.select`
   border: none;
   border-radius: .5em;
   outline: none;
   padding: 0.5em;
   background-color: var(--bg--primary-400);
   color: var(--accent--color-200);
`;