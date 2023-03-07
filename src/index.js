/* eslint-disable no-unused-vars */
import _, { method } from 'lodash';
import './style.css';
import { getData } from '../modules/getData.js';
import { postData } from '../modules/postData.js';

const submit = document.getElementById('button');
const refresh = document.querySelector('.refresh');
const container = document.querySelector('.container');
const deleteBtn = document.querySelector('.delete');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  postData();
});

const refreshResult = async () => {
  let type = '';
  const eachResult = await getData();
  const allResult = eachResult.result;
  allResult.forEach((item) => {
    type += `<li>${item.user}: ${item.score}</li>`;
  });
  container.innerHTML = type;
};

refresh.addEventListener('click', (e) => {
  e.preventDefault();
  refreshResult();
});

const deleteData = async () => {
  const res = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/AJs6oseRhAwLgsTmDlVP/scores/4',
    { method: 'DELETE' },
  );
  const result = await res.json();
  return result;
};

deleteBtn.addEventListener('click', (e) => {
  e.preventDefault();
  deleteData();
});