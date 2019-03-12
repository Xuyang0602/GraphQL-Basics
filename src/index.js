// console.log("hello GraphQL, Xuyang Wnag")

import { message } from "./myModule";

import { GraphQLServer } from 'graphql-yoga'

message();


const typeDefs = `
    type Query {
        title: String!
        name: String!
        soldout: Boolean!
        rating: Float!
        age: Int!
    }
`;

const resolvers = {
    Query: {
        title() {
            return "Front-end Engineer"
        },
        name() {
            return "Xuyang Wang"
        },
        soldout() {
            return false
        },
        rating() {
            return 3.18
        },
        age() {
            return 30
        }

    }
};

const server = new GraphQLServer({
    typeDefs,
    resolvers
});

server.start(() => {
    console.log("The server is UP")
});