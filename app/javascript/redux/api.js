export const getRandomMessage = async () => {
  const response = await fetch(`api/greetings`);
  return response.json();
};
