const express = require('express')
var { graphqlHTTP } = require('express-graphql')
const cors = require('cors')
const { buildSchema } = require('graphql')
const { readFileSync } = require('fs')

const schemaString = readFileSync('./schema.graphql', { encoding: 'utf8' })
const schema = buildSchema(schemaString)

let id = 2

let allBooks = [
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
    id++
    allBooks.push({
      id: id.toString(),
      ...params.book,
      author: {
        id: '1',
        firstName: 'Sergii',
        lastName: 'Velikorodnov'
      }
    })
    return true
  },
  deleteBook: params => {
    allBooks = allBooks.filter(({ id }) => id !== params.id.id)
    return true
  }
}

const app = express()
app.use(cors())

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
)
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'))
