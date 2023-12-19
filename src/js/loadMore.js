let currentPage = 1;

const loadMoreBtn = document.getElementById('loadMoreBtn');
const elements = document.querySelectorAll('.newProducts_card');

loadMoreBtn.addEventListener('click', loadMore);

function loadMore() {
  for (let i = 0; i < elements.length; i++) {
    const ind = currentPage * 2 + 1;
    document.querySelector(`.newProducts_card:nth-child(${ind})`).classList.remove('not-shown');
    document.querySelector(`.newProducts_card:nth-child(${ind + 1})`).classList.remove('not-shown');
  }

  currentPage++;

  if (currentPage >= elements.length / 2) {
    loadMoreBtn.style.display = 'none';
  }
}
