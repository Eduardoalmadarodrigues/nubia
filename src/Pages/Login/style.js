import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: antiquewhite;
`

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 300px;
    border: 1px solid black;
`;

export const EmailInput = styled.input`
    width: 150px;
`;

export const PasswordInput = styled.input`
    width: 150px;
`

export const SubmitButton = styled.button`
    width: 50px;
`;