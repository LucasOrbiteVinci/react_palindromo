const isPalindromo = (str) => {
  let reversed = [...str.toLowerCase()].reverse().join('');
  return str.toLowerCase() === reversed;
};

export { isPalindromo };
