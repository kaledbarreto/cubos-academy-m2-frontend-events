const btnSubscriber = document.querySelector('.btn');
const btnModal = document.querySelectorAll('.modal button');
const btnConfirm = document.querySelector('.confirm');
const modal = document.querySelector('.modal');

// >>> Subscribe function
btnSubscriber.addEventListener('click', subscribe);

//Subscribe function
function subscribe(event) {
  btnSubscriber.textContent = 'INSCRITO';
  btnSubscriber.classList.add('subscriber');

  btnSubscriber.removeEventListener('click', subscribe);
  btnSubscriber.addEventListener('click', showModal);
}

//Modal (show/hide) Function
function showModal() {
  modal.classList.remove('hide');
}

// >>> Modal Buttons
btnModal.forEach(btn => {
  btn.addEventListener('click', function () {
    modal.classList.add('hide');
  });
});

// >>> Modal Confirm Button
btnConfirm.addEventListener('click', unsubscribe);

function unsubscribe(event) {
  btnSubscriber.textContent = 'INSCREVER-SE';
  btnSubscriber.classList.remove('subscriber');
  btnSubscriber.removeEventListener('click', showModal);
  btnSubscriber.addEventListener('click', subscribe);
}
