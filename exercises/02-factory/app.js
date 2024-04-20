// Factory function to create blog post objects
function createBlogPost(title, content, author, date) {
    return {
        title,
        content,
        author,
        date: date || new Date().toLocaleDateString()
    };
}

// Get form elements
const blogPostForm = document.getElementById('blogPostForm');
const blogPostsContainer = document.getElementById('blogPosts');

// Event listener for form submission
blogPostForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const author = document.getElementById('author').value;

    // Create blog post object using factory function
    const blogPost = createBlogPost(title, content, author);

    // Create HTML for blog post
    const blogPostHTML = `
    <div class="blog-post">
      <h2>${blogPost.title}</h2>
      <p>${blogPost.content}</p>
      <div class="meta">
        Author: ${blogPost.author}<br>
        Date: ${blogPost.date}
      </div>
    </div>
  `;

    // Append blog post to container
    blogPostsContainer.insertAdjacentHTML('beforeend', blogPostHTML);

    // Reset form
    blogPostForm.reset();
});