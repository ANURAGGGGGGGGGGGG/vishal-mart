export const generateRandomID = (prefix) => {
  return `${prefix}${Math.floor(10000000000 + Math.random() * 90000000000)}`;
};

export const generateRandomCaptcha = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const generateRandomGrade = (total) => {
  if (total >= 85) return "A2";
  if (total >= 75) return "B1";
  if (total >= 65) return "B2";
  return "C1";
};

export const generateRandomScore = (min, max) => {
  return Math.floor(min + Math.random() * (max - min));
};