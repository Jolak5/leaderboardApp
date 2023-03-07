/* eslint-disable import/prefer-default-export */
export const getData = async () => {
  const res = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/AJs6oseRhAwLgsTmDlVP/scores',
  );
  const result = await res.json();
  return result;
};
