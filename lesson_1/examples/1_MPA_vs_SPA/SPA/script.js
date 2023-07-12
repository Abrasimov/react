const headerEl = document.createElement('h1');
headerEl.textContent = 'Page 1';

const linkEl = document.createElement('a');
linkEl.href = '#'
linkEl.textContent = 'Go to page 2';

document.body.appendChild(headerEl);
document.body.appendChild(linkEl);

let currentPage = 1;
let anotherPage = 2;

const handleRedirect = () => {
    currentPage = anotherPage;
    anotherPage = currentPage === 1 ? 2 : 1;

    headerEl.textContent = `Page ${currentPage}`;
    linkEl.textContent = `Go to page ${anotherPage}`;
}

linkEl.addEventListener('click', handleRedirect)
