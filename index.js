// const { prisma } = require("./generated/prisma-client")

// // A `main` function so that we can use async/await
// async function main() {
//   // Create a new user with a new post
//   const newLawyer = await prisma.createLawyer({
//     person: {
//       create: {
//         firstName: "Ben",
//         lastName: "Finegold",
//       },
//     },
//   })
//   console.log(`Created new user: ${newLawyer.name} (ID: ${newLawyer.id})`)

//   // Read all users from the database and print them to the console
//   const allLawyers = await prisma.lawyers()
//   console.log(allLawyers)
// }

// main().catch(e => console.error(e))

const { prisma } = require("./generated/prisma-client")
const { GraphQLServer } = require("graphql-yoga")

const resolvers = {
  Query: {
    // courtCase(root, args, context) {
    //   return context.prisma.courtCase({ id: "12345" })
    // },
    person(root, args, context) {
      return context.prisma.person({ id: "person12345" })
    },
  },
  // Lawyer: {
  //   person(lawyer, args, context) {
  //     return {}
  //     // return context.prisma
  //     //   .user({
  //     //     id: root.id,
  //     //   })
  //     //   .posts()
  //   },
  // },
  // Person: {
  //   firstName(person, args, context) {
  //     return "foo"
  //   },
  //   lastName(person, args, context) {
  //     return "bar"
  //   },
  // },
  Mutation: {
    createPerson(root, args, context) {
      return context.prisma.createPerson({
        firstName: args.firstName,
        lastName: args.lastName,
      })
    },
    // createCourtCase(root, args, context) {
    //   return context.prisma.createCourtCase({
    //     // plaintiff: {},
    //     // defendant: {},
    //     // lawyer: {},
    //     context.prisma.createPlaintiff({
    //       context.prisma.createPerson({
    //         firstName: "foo",
    //         lastName: "bar",
    //       })
    //     })
    //   })
    // },
  },
}

const server = new GraphQLServer({
  typeDefs: "./schema.graphql",
  resolvers,
  context: {
    prisma,
  },
})
server.start(() => console.log("Server is running on http://localhost:4000"))

// publishedPosts(root, args, context) {
//   return context.prisma.posts({ where: { published: true } })
// },
// post(root, args, context) {
//   return context.prisma.post({ id: args.postId })
// },
// postsByUser(root, args, context) {
//   return context.prisma
//     .user({
//       id: args.userId,
//     })
//     .posts()
// },

// Post: {
//   author(root, args, context) {
//     return context.prisma
//       .post({
//         id: root.id,
//       })
//       .author()
//   },
// },

//mutation stuff
// title: args.title,
// author: {
//   connect: { id: args.userId },
// },
//   publish(root, args, context) {
//     return context.prisma.updatePost({
//       where: { id: args.postId },
//       data: { published: true },
//     })
//   },
//   createUser(root, args, context) {
//     return context.prisma.createUser({ name: args.name })
//   },
// },
// },
