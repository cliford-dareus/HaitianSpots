import styled from "styled-components";

export const AuthPageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AuthPageInner = styled.div`
    width: 30%;
    padding: 1em;
    background-color: var(--bg--primary-800);
    border-radius: 0.5em;

    p{
        text-align: center;
        margin-top: 1em;
        a{
            color: var(--accent--color-200);
        }
    }
`;

export const AuthForm = styled.form`
    margin-top: 1em;
    /* background-color: red; */
`;

export const AuthButton = styled.button`
    border: none;
    outline: none;
    padding: 0.5em 1.5em;
    font-weight: bold;
    margin-top: 2em;
    border-radius: 0.5em;
    background-color: var(--accent--color-200);
    color: var(--txt--color-100);
    cursor: pointer;
`;