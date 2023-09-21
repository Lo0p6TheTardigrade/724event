function selectorTest() {
  const selected = document.querySelector('.SelectTitle--show');
  const selectorAll = document.querySelector('.Select > ul > li > input:checked');
  selected.textContent = selectorAll.textContent;
}
