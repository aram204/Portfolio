function renderHeader() {
  const headerTag = document.querySelectorAll('.js-header-tag')
  headerTag.forEach((tag) => {

    tag.addEventListener('click', () => {
      headerTag.forEach((tag) => {
        if (tag.classList.contains('checked')) {
          tag.classList.remove('checked')
          document.querySelector('.checked-tag').remove()
        }
      });


      tag.innerHTML += '<img class="checked-tag" src="./images/image3.png">'
      tag.classList.add('checked')

    });
  });
}

renderHeader()