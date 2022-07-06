import { useQuery } from '@apollo/client'
import { loader } from 'graphql.macro'
import * as React from 'react'

const queryBook = loader('../../graphql/GetBook.graphql')

type BookProps = {
  id: string
}

function Book({ id }: BookProps): JSX.Element {
  const { data, loading } = useQuery(queryBook, {
    variables: {
      id
    }
  })

  return (
    <div>
      {loading && <div>Loading...</div>}
      {!loading && data && (
        <h2>
          {data.getBook.title} - {data.getBook.description}
        </h2>
      )}
    </div>
  )
}

export default Book
