const PAGE_SIZE = 3;
const DEFAULT_PAGE = 1;
const LAST_PAGE = 3;

let currentPage = DEFAULT_PAGE;

const postsWrapper = document.querySelector('.posts-wrapper');
const previousPageButton = document.querySelector('.prev-page-btn');
const nextPageButton = document.querySelector('.next-page-btn');
const pageIndicatorInput = document.querySelector('.page-input')

const renderPosts = (data) => {
    postsWrapper.innerHTML = '';

    if (data.length === 0) {
        postsWrapper.innerHTML = `<h3>No posts found</h3>`
    } else {
        data.forEach((post) => {
            const postWrapper = document.createElement('div');
            postWrapper.classList.add('post-wrapper');

            const postId = document.createElement('h4');
            postId.innerText = `Post id: ${post.id}`;

            const postTitle = document.createElement('p');
            postTitle.innerText = `Post title: ${post.title}`;

            const postBody = document.createElement('p');
            postBody.innerText = `Post text: ${post.body}`;

            postWrapper.appendChild(postId);
            postWrapper.appendChild(postTitle);
            postWrapper.appendChild(postBody);

            postsWrapper.appendChild(postWrapper)
        })
    }
}

const renderLoadingIndicator = () => {
    postsWrapper.innerHTML = `<div class="spinner"></div>`;
}

const updatePagination = () => {
    pageIndicatorInput.value = currentPage;

    if (currentPage === 1) {
        previousPageButton.disabled = true;
    } else if (currentPage === LAST_PAGE) {
        nextPageButton.disabled = true;
    } else {
        previousPageButton.disabled = false;
        nextPageButton.disabled = false;
    }
}

const handleClickNext = () => {
    currentPage += 1;
    updatePagination();
    fetchPosts();
}

const handleClickPrevious = () => {
    currentPage -= 1;
    updatePagination();
    fetchPosts();
}

nextPageButton.addEventListener('click', handleClickNext)
previousPageButton.addEventListener('click', handleClickPrevious)

const fetchPosts = () => {
    renderLoadingIndicator();

    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${PAGE_SIZE}`)
        .then(response => response.json())
        .then(currentPageData => {
            // setTimeout used to simulate request with some heavy data
            setTimeout(() => {
                renderPosts(currentPageData);
                updatePagination();
            }, 500)
        })
}

fetchPosts();
