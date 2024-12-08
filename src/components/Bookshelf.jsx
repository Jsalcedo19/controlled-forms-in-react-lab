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
    {/* Form will go here */}
  </div>
  <div className="bookCardsDiv">{/* Book cards will display here */}</div>
</div>
);
}


export default Bookshelf;