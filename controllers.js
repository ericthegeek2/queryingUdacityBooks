
// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token;
if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  'Accept': 'application/json',
  'Authorization': token
};

// Function to get the status of the API
fetch(`${api}/status`, { headers })
  .then(res => res.json())
  .then(data => console.log('API Status:', data));


// Function to get all books
const getAll = () =>
    fetch(`${api}/books`, { headers })
      .then(res => res.json())
      .then(data => data.books);
  
  // Function to get a specific book by ID
  const get = (bookId) =>
    fetch(`${api}/books/${bookId}`, { headers })
      .then(res => res.json())
      .then(data => data.book);
  
  // Function to update a book's shelf
  const update = (book, shelf) =>
    fetch(`${api}/books/${book.id}`, {
      method: 'PUT',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ shelf })
    }).then(res => res.json());
  
  // Function to search for books
  const search = (query) =>
    fetch(`${api}/search`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query })
    }).then(res => res.json())
      .then(data => data.books);
  
  // Example Usage:
  getAll().then(books => console.log('All Books:', books));
  
  get('bookId').then(book => console.log('Specific Book:', book));
  
  const bookToUpdate = { id: 'bookId' };
  const newShelf = 'read';
  update(bookToUpdate, newShelf).then(updatedBook => console.log('Updated Book:', updatedBook));
  
  search('React').then(books => console.log('Search Results:', books));

  
  module.exports = {getAll,get,update,search}