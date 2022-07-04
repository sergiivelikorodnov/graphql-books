const express = require('express')
const graphqlHTTP = require('express-graphql')
const cors = require('cors')
const { buildSchema } = require('graphql')
const { readFileSync } = require('fs')

const schemaString = readFileSync('./schema.graphql', { encoding: 'utf8' })
const schema = buildSchema(schemaString)
