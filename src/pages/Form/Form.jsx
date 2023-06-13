import React, { useState } from 'react';
import './Form.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { isPalindromo } from '../../Utils/Utils';

const Form = () => {
  const [word, setWord] = useState();
  const [palindromo, setPalindromo] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPalindromo(isPalindromo(word));
  };

  return (
    <div id="container">
      <p id="paragraph-container">
        A Palavra: <strong>{word}</strong> "é um <strong>Palindromo</strong>?"
        {palindromo === true ? 'Sim!' : 'Não!'}
      </p>
      <form onSubmit={handleSubmit}>
        <TextField
          value={word}
          onChange={(e) => setWord(e.target.value)}
          id="filled-basic"
          label="Digite uma palavra"
          variant="filled"
        />
        <Button id="btn" type="submit" variant="contained">
          Verificar
        </Button>
      </form>
    </div>
  );
};

export default Form;
