import { useState } from 'react'
import AllBooks from '../allBooks/AllBooks'
import * as React from 'react'
import Book from '../book/book'
import AddBook from '../addBook/AddBook'

function App(): JSX.Element {
  const [selectedBookId, setSelectedBookId] = useState<string>('')

  return (
    <div>
      <h1>Add Book</h1>
      <AddBook />

      <h1>List Books</h1>
      <AllBooks onSelect={book => setSelectedBookId(book.id)} />

      <h1>Selected Book</h1>
      {selectedBookId !== '' && (
        <div>
          <Book id={selectedBookId} />
        </div>
      )}
    </div>
  )
}

export default App
