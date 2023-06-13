import React, { useState, useEffect } from 'react';
import './Effect.css';
import TextField from '@mui/material/TextField';
import { isPalindromo } from '../../Utils/Utils';

const Effect = () => {
  const [word, setWord] = useState('');
  const [palindromo, setPalindromo] = useState(false);

  useEffect(() => {
    if (word !== undefined) setPalindromo(isPalindromo(word));
  }, [word]);

  return (
    <div id="container">
      <p id="paragraph-container">
        A Palavra: <strong>{word}</strong> "é um <strong>Palindromo</strong>?"
        {palindromo === true ? 'Sim!' : 'Não!'}
      </p>

      <TextField
        className="form-container"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        id="filled-basic"
        label="Digite uma Palavra"
        variant="filled"
      />
    </div>
  );
};

export default Effect;
