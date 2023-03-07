/* eslint-disable no-unused-vars */
import _, { method } from 'lodash';
import './style.css';
import { getData } from '../modules/getData.js';
import { postData } from '../modules/postData.js';

const submit = document.getElementById('button');
const refresh = document.querySelector('.refresh');
const container = document.querySelector('.container');

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

submit.addEventListener('click', (e) => {
  e.preventDefault();
  postData();
  refreshResult();
});

window.addEventListener('load', () => {
  refreshResult();
});