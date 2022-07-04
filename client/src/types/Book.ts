export interface BookType {
  id: string
  title: string
  description: number
  author: {
    id: string
    firstName: string
    lastName: string
  }
}

export interface BooksType {
  getAllBooks: BookType[]
}
