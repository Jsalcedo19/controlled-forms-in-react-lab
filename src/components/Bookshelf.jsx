import { useState } from 'react';

// Create a new component called Bookshelf.jsx and import useState at the top of the file:
const Bookshelf = () => {
const [books, setBooks] = useState([]);

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