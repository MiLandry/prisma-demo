const { prisma } = require("./generated/prisma-client")
const { GraphQLServer } = require("graphql-yoga")

const resolvers = {
  Query: {
    courtCase(root, args, context) {
      return context.prisma.courtCase({ id: args.courtCaseId })
    },
    courtCases(root, args, context) {
      return context.prisma.courtCases()
    },
  },
  Mutation: {
    async createCourtCase(root, args, context) {
      const courtPlaintiff = await context.prisma.createPerson({
        firstName: args.plaintiffFirstName,
        lastName: args.plaintiffLastName,
      })

      const courtDefendant = await context.prisma.createPerson({
        firstName: args.defendantFirstName,
        lastName: args.defendantLastName,
      })

      const courtLawyer = await context.prisma.createPerson({
        firstName: args.lawyerFirstName,
        lastName: args.lawyerLastName,
      })

      return context.prisma.createCourtCase({
        plaintiff: {
          connect: { id: courtPlaintiff.id },
        },
        defendant: {
          connect: { id: courtDefendant.id },
        },
        lawyer: {
          connect: { id: courtLawyer.id },
        },
      })
    },
  },
  CourtCase: {
    plaintiff(courtCase, args, context) {
      return context.prisma
        .courtCase({
          id: courtCase.id,
        })
        .plaintiff()
    },
    defendant(courtCase, args, context) {
      return context.prisma
        .courtCase({
          id: courtCase.id,
        })
        .defendant()
    },
    lawyer(courtCase, args, context) {
      return context.prisma
        .courtCase({
          id: courtCase.id,
        })
        .lawyer()
    },
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
