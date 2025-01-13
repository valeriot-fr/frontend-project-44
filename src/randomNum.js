const getRandomNumber = (min = 1, max = 10) => {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
};
export default getRandomNumber;
