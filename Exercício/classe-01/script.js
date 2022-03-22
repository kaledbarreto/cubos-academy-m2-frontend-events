const input = document.querySelector('input');
const list = document.querySelectorAll('li');

//"Enter" Verify
function hitEnter(key) {
  return key === 'Enter';
}

//List Filter
function listFilter(list, filter) {
  list.forEach(item => {
    item.classList.remove('hide');

    if (filter && item.textContent !== filter) {
      item.classList.add('hide');
    }
  });
}

//Clean Input
function cleanInput(input) {
  input.value = '';
}



//Adding event listener to input field - (listFilter)
input.addEventListener('keydown', function (event) {
  if (!hitEnter(event.code)) {
    return;
  }

  listFilter(list, event.target.value);
});

//Adding event listener to input field - (listFilter)
input.addEventListener('keydown', function (event) {
  if (!hitEnter(event.code)) {
    return;
  }

  cleanInput(event.target);
});