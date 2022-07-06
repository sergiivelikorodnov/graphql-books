import { useMutation } from '@apollo/client'
import { loader } from 'graphql.macro'
import * as React from 'react'
import { useRef, useState } from 'react'

const mutationDeleteBook = loader('../../graphql/DeleteBook.graphql')
const queryAllBooks = loader('../../graphql/GetAllBooks.graphql')

type DeleteBookProps = {
  id: string
}

function DeleteBook({ id }: DeleteBookProps): JSX.Element {
  const [deleteBook, { error, loading }] = useMutation(mutationDeleteBook, {
    refetchQueries: [
      { query: queryAllBooks }, // DocumentNode object parsed with gql
      'getAllBooks' // Query name
    ]
  })

  const deleteHandler = () => {
    deleteBook({
      variables: {
        id: {
          id
        }
      }
    })
  }

  if (loading) return <h4>Deleting...</h4>

  if (error) return <h4>Deleting error! ${error.message}</h4>

  return <button onClick={deleteHandler}>Delete Book</button>
}

export default DeleteBook
