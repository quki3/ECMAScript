const typeDefinitions = 
  `
  type Post {
    id: Int
    text: String
  }
  type RootQuery {
    posts: [Post]
  }
  schema {
    query: RootQuery
  }
  `

module.exports = [typeDefinitions];
