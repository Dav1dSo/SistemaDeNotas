import styled from 'styled-components'

const content = styled.div`
    background-color: white;
    max-width: 800px;
    min-height: 600px;
    margin: auto;
    border-radius: 20px;

    h1 {
        color: #164cd3;
        padding-top: 70px;

    }

    `

export const Form = styled.div`
    color: black;
    display: flex;
    flex-direction: column;
    
    input {
        margin: auto;
        width: 400px;
        margin-top: 40px;
        padding: 10px;
    }

    button {
        background-color: #164cd3;
        margin: auto;
        padding: 15px;
        border: none;
        color: white;
        margin-top: 30px;
        border-radius: 5px;
        width: 130px;
    };

    button:hover {
        box-shawdow: 1px 2px 1px 2px #164cd2;
    }

`

export default content;