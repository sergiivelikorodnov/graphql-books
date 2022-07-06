import { useQuery } from '@apollo/client'
import { loader } from 'graphql.macro'
import { BooksType, BookType } from '../../types/Book'
import * as React from 'react'
import DeleteBook from '../deleteBook/deleteBook'

const queryAllBooks = loader('../../graphql/GetAllBooks.graphql')
const mutationDeleteBook = loader('../../graphql/DeleteBook.graphql')

type AllBooksProps = {
  onSelect: (arg: BookType) => void
}

function AllBooks({ onSelect }: AllBooksProps): JSX.Element {
  const { data, loading } = useQuery<BooksType>(queryAllBooks)

  return (
    <div>
      {loading && <div>Loading...</div>}
      {!loading && data && data.getAllBooks && (
        <div>
          <ul>
            {data.getAllBooks.map(book => (
              <li key={book.id}>
                {book.id} : {book.title} - Author: {book.author.firstName} {book.author.lastName} -{' '}
                <button onClick={() => onSelect(book)}> Select Book</button>
                <DeleteBook id={book.id} key={book.id} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default AllBooks
