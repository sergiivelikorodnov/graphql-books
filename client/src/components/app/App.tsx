import { useState } from 'react'
import AllBooks from '../allBooks/AllBooks'
import * as React from 'react'
import Book from '../book/book'

function App() {
  const [selectedBookId, setSelectedBookId] = useState<string>('')

  console.log(selectedBookId)

  return (
    <div>
      <h1>Hello World</h1>
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
