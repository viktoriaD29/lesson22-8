const inputElem = document.querySelector('.task-status');
function handleChange(event) {
  const res = event.target.checked;
  if (res) {
    console.log(true);
  } else {
    console.log(false);
  }
}
inputElem.addEventListener('change', handleChange);
