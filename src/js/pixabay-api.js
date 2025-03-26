import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { createMarkup, changeLoader } from './render-functions';

const options = {
  key: '49539312-1d6717d33bfa63c1c4ab44e48',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

export function getRequest(searchData) {
  options.q = searchData;
  axios({
    url: getUrl(options),
  })
    .then(response => checkData(response.data.hits))
    .catch(error => console.log(error));
}

function getUrl({ key, q, image_type, orientation, safesearch }) {
  return `https://pixabay.com/api/?key=${key}&q=${q}&image_type=${image_type}&orientation=${orientation}&safesearch=${safesearch}`;
}

function checkData(data) {
  if (!data.length) {
    iziToast.show({
      title:
        'Sorry, there are no images matching your search query. Please try again!',
      titleColor: '#ffffff',
      titleSize: '16px',
      backgroundColor: '#ef4040',
      iconUrl: '/img/Group.png',
      position: 'topRight',
      width: '300px',
    });
    changeLoader('none');
    return;
  }
  createMarkup(data);
}
