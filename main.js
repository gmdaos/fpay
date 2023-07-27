// Import our custom CSS
import './src/sass/main.scss';
import * as bootstrap from 'bootstrap';

const payContent = document.querySelector('.card__pay');
const receiptCotent = document.querySelector('.card__receipt');
const errorContet = document.querySelector('.card__error');

const btnPay = document.querySelector('.btn__pay');
const btnReceipt = document.querySelector('.btn__receipt');

//* cambiar entre true y false para ver la tarjeta de error o de recibo
let isError = false;

btnPay.addEventListener('click', (e) => {
  payContent.classList.add('hidden');
  if (isError) {
    errorContet.classList.remove('hidden');
  } else if (!isError) {
    receiptCotent.classList.remove('hidden');
  }
});

btnReceipt.addEventListener('click', (e) => {
  payContent.classList.remove('hidden');
  errorContet.classList.add('hidden');
  receiptCotent.classList.add('hidden');
});
