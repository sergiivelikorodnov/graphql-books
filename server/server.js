const express = require('express')
const graphqlHTTP = require('express-graphql')
const cors = require('cors')
const { buildSchema } = require('graphql')
const { readFileSync } = require('fs')

const schemaString = readFileSync('./schema.graphql', { encoding: 'utf8' })
const schema = buildSchema(schemaString)

const allBooks = [
  {
    id: '1',
    title: 'Book 1',
    description: 'Book description 1',
    author: {
      id: '1',
      firstName: 'Sergii',
      lastName: 'Velikorodnov'
    }
  },
  {
    id: '2',
    title: 'Book 2',
    description: 'Book description 2',
    author: {
      id: '1',
      firstName: 'Sergii',
      lastName: 'Velikorodnov'
    }
  }
]

const root = {
  getAllBooks: () => {
    return allBooks
  },
  getBook: params => {
    return allBooks.find(({ id }) => params.id === id)
  },
  addBook: params => {
    allBooks.push({
      id: allBooks.length + 1,
      ...params.book,
      author: {
        id: '1',
        firstName: 'Sergii',
        lastName: 'Velikorodnov'
      }
    })
    return true
  }
}
