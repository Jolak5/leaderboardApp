/* eslint-disable import/prefer-default-export */
export const postData = async () => {
  const name = document.getElementById('name');
  const score = document.getElementById('score');
  const res = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/qLWw3yASRSYkoopgHgL7/scores',
    {
      method: 'POST',
      body: JSON.stringify({
        user: name.value,
        score: score.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    },
  );
  const data = await res.text();
  return data;
};
