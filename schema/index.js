const { buildSchema } = require("graphql");

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
    hacktiv8: String
    getAllUsers: [User]
		getCreatedUsers: [CreatedUser]
  }
	type Mutation {
		createUser(id: Int!, username: String!): String
	}
	type CreatedUser {
		id: Int,
		username: String
	}
  type User {
    id: Int
    name: String
    username: String
    email: String
    address: Address
    phone: String
    website: String
    company: Company
	}
	type Address {
			street: String
			suite: String
			city: String
			zipcode: String
			geo: Geo
	}
	type Geo {
			lat: String
			lng: String
	}
	type Company {
			name: String
			catchPhrase: String
			bs: String
	}
`);

module.exports = schema;
