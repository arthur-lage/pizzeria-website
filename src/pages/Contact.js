import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SubmitContainer = styled.div`
  text-align: center;

  input[type="submit"] {
    background-color: #df163e;
    width: 300px;
    height: 40px;
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
    border: 0;
    margin-top: 1rem;
    font-size: 1rem;
    transition: 0.2s ease;

    &:hover {
      background-color: #af0628;
    }
  }
`;

const InputField = styled.div`
  input {
    outline: none;
    width: 600px;
    margin: 2rem 0;
    height: 40px;
    border-radius: 5px;
    padding: 5px;
    font-size: 1rem;
    border: 1px solid #333;
    &:focus {
      border: 1px solid #1c7dfcbe;
      box-shadow: 0px 0px 10px #1c7dfcbe;
    }
  }

  input[type="email"] {
    margin-top: 0;
  }

  textarea {
    outline: none;
    width: 600px;
    resize: none;
    border-radius: 5px;
    padding: 5px;
    font-size: 1rem;
    border: 1px solid #333;
    &:focus {
      border: 1px solid #1c7dfcbe;
      box-shadow: 0px 0px 10px #1c7dfcbe;
    }
  }
`;

const Contact = () => {
  return (
    <div>
      <Navbar />
      <ContactContainer>
        <h1
          style={{
            marginTop: "7.5rem",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          Contato
        </h1>
        <p>Gostaria de nos contatar? Utilize o campo abaixo: </p>
        <form>
          <InputField>
            <input type="text" autocomplete="off" name="name" required placeholder="Nome" id="name" />
          </InputField>
          <InputField>
            <input type="email" name="email" required placeholder="Email" id="email" />
          </InputField>
          <InputField>
            <textarea name="message" id="message" required cols="30" rows="8"></textarea>
          </InputField>
          <SubmitContainer>
            <input type="submit" className="submitBtn" />
          </SubmitContainer>
        </form>
      </ContactContainer>
    </div>
  );
};

export default Contact;
