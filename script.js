document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('posts');

    const fetchPosts = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const posts = await response.json();
            displayPosts(posts);
        } catch (error) {
            postsContainer.innerHTML = `<div class="alert alert-danger" role="alert">
                                            Error fetching posts: ${error.message}
                                        </div>`;
        }
    };

    const displayPosts = (posts) => {
        postsContainer.innerHTML = posts.map(post => 
            `<div class="post-title">${post.title}</div>`
        ).join('');
    };

    fetchPosts();
});
