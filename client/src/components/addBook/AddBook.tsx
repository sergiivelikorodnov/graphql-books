import { useMutation } from '@apollo/client'
import { loader } from 'graphql.macro'
import * as React from 'react'
import { useRef, useState } from 'react'

const mutationAddBook = loader('../../graphql/AddBook.graphql')
const queryAllBooks = loader('../../graphql/GetAllBooks.graphql')

function AddBook(): JSX.Element {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const [addBook, { error, loading }] = useMutation(mutationAddBook, {
    refetchQueries: [
      { query: queryAllBooks }, // DocumentNode object parsed with gql
      'getAllBooks' // Query name
    ]
  })

  if (loading) return <h1>Submitting...</h1>

  if (error) return <h1>Submission error! ${error.message}</h1>

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()

          addBook({
            variables: {
              book: {
                title,
                description
              }
            }
          })
          setTitle('')
          setDescription('')
        }}
      >
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder='Title' required />
        <input value={description} onChange={e => setDescription(e.target.value)} placeholder='Description' required />

        <button type='submit'>Add Book</button>
      </form>
    </div>
  )
}

export default AddBook
