/* eslint-disable no-console */
const heyData = async () => {
  const res = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
    {
      method: 'POST',
      body: JSON.stringify({
        name: 'Today is the day',
      }),
      headers: { 'Content-Type': 'application/json' },
    },
  );
  const data = await res.json();
  console.log('this is the Api', data);
  // return data;
};

heyData();