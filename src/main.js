import { getRequest } from './js/pixabay-api';
import { changeLoader, pastemarkUp } from './js/render-functions';

const form = document.querySelector('.form');
form.addEventListener('submit', submitHandler);

function submitHandler(event) {
  event.preventDefault();
  const searchData = this.elements['search-text'].value.trim();
  if (!searchData) {
    form.reset();
    return;
  }
  pastemarkUp();
  changeLoader('block');
  setTimeout(getRequest, 2000, searchData);
  // таймаут для імітації затримки відповіді
}
