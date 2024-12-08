import { useState } from 'react';

// Create a new component called Bookshelf.jsx and import useState at the top of the file:
const Bookshelf = () => {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
      ]);

      const [newBook, setNewBooks] = useState({ title: '', author: '' });




      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewBooks((newBook) => ({
          ...newBook,
          [name]: value,
        }));
      }

        const handleSubmit = (event) => {
            event.preventDefault();
            setBooks([...books, newBook]);
            setNewBooks({ title: '', author: '' });
        }

return (
<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    <form onSubmit={handleSubmit}>
      
        Title:
        <input
          type="text"
          name="title"
          value={newBook.title}
          onChange={handleInputChange}
        />

        Author:
        <input
          type="text"
          name="title"
          value={newBook.author}
          onChange={handleInputChange}
        />
    <button type="submit">Add Book</button>
    </form>
  </div>
  <div className="bookCardsDiv">
    {books.map((book, index) => 
        <div key={index} className="bookCard"> 
            <h4>{book.title}</h4>
            <p>{book.author}</p>    
        </div>
    
     )}
  </div>
</div>
);
}


export default Bookshelf;