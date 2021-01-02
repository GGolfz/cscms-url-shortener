import { gql } from 'apollo-server-express'

const schema = gql`
	type Query {
		getLongUrl(shortenPath: String!): URL!
	}

	type URL {
		longUrl: String!
		shortUrl: String!
	}
`

export default schema