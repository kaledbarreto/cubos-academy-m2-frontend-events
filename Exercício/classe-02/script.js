const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  input.addEventListener('change', function (event) {
    const modifiedInput = event.target;

    if (modifiedInput.dataset.resposta === modifiedInput.value) {
      modifiedInput.classList.remove('wrong');
      modifiedInput.classList.add('right');
    }
    else {
      modifiedInput.classList.remove('right');
      modifiedInput.classList.add('wrong');
    }
  });
});