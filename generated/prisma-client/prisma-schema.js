module.exports = {
        typeDefs: /* GraphQL */ `type AggregateCourtCase {
  count: Int!
}

type AggregateDefendant {
  count: Int!
}

type AggregateLawyer {
  count: Int!
}

type AggregatePerson {
  count: Int!
}

type AggregatePlaintiff {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type CourtCase {
  id: ID!
  plaintiff: Plaintiff!
  defendant: Defendant!
  lawyer: Lawyer!
}

type CourtCaseConnection {
  pageInfo: PageInfo!
  edges: [CourtCaseEdge]!
  aggregate: AggregateCourtCase!
}

input CourtCaseCreateInput {
  plaintiff: PlaintiffCreateOneInput!
  defendant: DefendantCreateOneInput!
  lawyer: LawyerCreateOneInput!
}

type CourtCaseEdge {
  node: CourtCase!
  cursor: String!
}

enum CourtCaseOrderByInput {
  id_ASC
  id_DESC
}

type CourtCasePreviousValues {
  id: ID!
}

type CourtCaseSubscriptionPayload {
  mutation: MutationType!
  node: CourtCase
  updatedFields: [String!]
  previousValues: CourtCasePreviousValues
}

input CourtCaseSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CourtCaseWhereInput
  AND: [CourtCaseSubscriptionWhereInput!]
  OR: [CourtCaseSubscriptionWhereInput!]
  NOT: [CourtCaseSubscriptionWhereInput!]
}

input CourtCaseUpdateInput {
  plaintiff: PlaintiffUpdateOneRequiredInput
  defendant: DefendantUpdateOneRequiredInput
  lawyer: LawyerUpdateOneRequiredInput
}

input CourtCaseWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  AND: [CourtCaseWhereInput!]
  OR: [CourtCaseWhereInput!]
  NOT: [CourtCaseWhereInput!]
}

input CourtCaseWhereUniqueInput {
  id: ID
}

type Defendant {
  id: ID!
  person: Person
}

type DefendantConnection {
  pageInfo: PageInfo!
  edges: [DefendantEdge]!
  aggregate: AggregateDefendant!
}

input DefendantCreateInput {
  person: PersonCreateOneInput
}

input DefendantCreateOneInput {
  create: DefendantCreateInput
  connect: DefendantWhereUniqueInput
}

type DefendantEdge {
  node: Defendant!
  cursor: String!
}

enum DefendantOrderByInput {
  id_ASC
  id_DESC
}

type DefendantPreviousValues {
  id: ID!
}

type DefendantSubscriptionPayload {
  mutation: MutationType!
  node: Defendant
  updatedFields: [String!]
  previousValues: DefendantPreviousValues
}

input DefendantSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: DefendantWhereInput
  AND: [DefendantSubscriptionWhereInput!]
  OR: [DefendantSubscriptionWhereInput!]
  NOT: [DefendantSubscriptionWhereInput!]
}

input DefendantUpdateDataInput {
  person: PersonUpdateOneInput
}

input DefendantUpdateInput {
  person: PersonUpdateOneInput
}

input DefendantUpdateOneRequiredInput {
  create: DefendantCreateInput
  update: DefendantUpdateDataInput
  upsert: DefendantUpsertNestedInput
  connect: DefendantWhereUniqueInput
}

input DefendantUpsertNestedInput {
  update: DefendantUpdateDataInput!
  create: DefendantCreateInput!
}

input DefendantWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  AND: [DefendantWhereInput!]
  OR: [DefendantWhereInput!]
  NOT: [DefendantWhereInput!]
}

input DefendantWhereUniqueInput {
  id: ID
}

type Lawyer {
  id: ID!
  person: Person
}

type LawyerConnection {
  pageInfo: PageInfo!
  edges: [LawyerEdge]!
  aggregate: AggregateLawyer!
}

input LawyerCreateInput {
  person: PersonCreateOneInput
}

input LawyerCreateOneInput {
  create: LawyerCreateInput
  connect: LawyerWhereUniqueInput
}

type LawyerEdge {
  node: Lawyer!
  cursor: String!
}

enum LawyerOrderByInput {
  id_ASC
  id_DESC
}

type LawyerPreviousValues {
  id: ID!
}

type LawyerSubscriptionPayload {
  mutation: MutationType!
  node: Lawyer
  updatedFields: [String!]
  previousValues: LawyerPreviousValues
}

input LawyerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LawyerWhereInput
  AND: [LawyerSubscriptionWhereInput!]
  OR: [LawyerSubscriptionWhereInput!]
  NOT: [LawyerSubscriptionWhereInput!]
}

input LawyerUpdateDataInput {
  person: PersonUpdateOneInput
}

input LawyerUpdateInput {
  person: PersonUpdateOneInput
}

input LawyerUpdateOneRequiredInput {
  create: LawyerCreateInput
  update: LawyerUpdateDataInput
  upsert: LawyerUpsertNestedInput
  connect: LawyerWhereUniqueInput
}

input LawyerUpsertNestedInput {
  update: LawyerUpdateDataInput!
  create: LawyerCreateInput!
}

input LawyerWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  AND: [LawyerWhereInput!]
  OR: [LawyerWhereInput!]
  NOT: [LawyerWhereInput!]
}

input LawyerWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createCourtCase(data: CourtCaseCreateInput!): CourtCase!
  updateCourtCase(data: CourtCaseUpdateInput!, where: CourtCaseWhereUniqueInput!): CourtCase
  upsertCourtCase(where: CourtCaseWhereUniqueInput!, create: CourtCaseCreateInput!, update: CourtCaseUpdateInput!): CourtCase!
  deleteCourtCase(where: CourtCaseWhereUniqueInput!): CourtCase
  deleteManyCourtCases(where: CourtCaseWhereInput): BatchPayload!
  createDefendant(data: DefendantCreateInput!): Defendant!
  updateDefendant(data: DefendantUpdateInput!, where: DefendantWhereUniqueInput!): Defendant
  upsertDefendant(where: DefendantWhereUniqueInput!, create: DefendantCreateInput!, update: DefendantUpdateInput!): Defendant!
  deleteDefendant(where: DefendantWhereUniqueInput!): Defendant
  deleteManyDefendants(where: DefendantWhereInput): BatchPayload!
  createLawyer(data: LawyerCreateInput!): Lawyer!
  updateLawyer(data: LawyerUpdateInput!, where: LawyerWhereUniqueInput!): Lawyer
  upsertLawyer(where: LawyerWhereUniqueInput!, create: LawyerCreateInput!, update: LawyerUpdateInput!): Lawyer!
  deleteLawyer(where: LawyerWhereUniqueInput!): Lawyer
  deleteManyLawyers(where: LawyerWhereInput): BatchPayload!
  createPerson(data: PersonCreateInput!): Person!
  updatePerson(data: PersonUpdateInput!, where: PersonWhereUniqueInput!): Person
  updateManyPersons(data: PersonUpdateManyMutationInput!, where: PersonWhereInput): BatchPayload!
  upsertPerson(where: PersonWhereUniqueInput!, create: PersonCreateInput!, update: PersonUpdateInput!): Person!
  deletePerson(where: PersonWhereUniqueInput!): Person
  deleteManyPersons(where: PersonWhereInput): BatchPayload!
  createPlaintiff(data: PlaintiffCreateInput!): Plaintiff!
  updatePlaintiff(data: PlaintiffUpdateInput!, where: PlaintiffWhereUniqueInput!): Plaintiff
  upsertPlaintiff(where: PlaintiffWhereUniqueInput!, create: PlaintiffCreateInput!, update: PlaintiffUpdateInput!): Plaintiff!
  deletePlaintiff(where: PlaintiffWhereUniqueInput!): Plaintiff
  deleteManyPlaintiffs(where: PlaintiffWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Person {
  id: ID!
  firstName: String
  lastName: String
}

type PersonConnection {
  pageInfo: PageInfo!
  edges: [PersonEdge]!
  aggregate: AggregatePerson!
}

input PersonCreateInput {
  firstName: String
  lastName: String
}

input PersonCreateOneInput {
  create: PersonCreateInput
  connect: PersonWhereUniqueInput
}

type PersonEdge {
  node: Person!
  cursor: String!
}

enum PersonOrderByInput {
  id_ASC
  id_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
}

type PersonPreviousValues {
  id: ID!
  firstName: String
  lastName: String
}

type PersonSubscriptionPayload {
  mutation: MutationType!
  node: Person
  updatedFields: [String!]
  previousValues: PersonPreviousValues
}

input PersonSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PersonWhereInput
  AND: [PersonSubscriptionWhereInput!]
  OR: [PersonSubscriptionWhereInput!]
  NOT: [PersonSubscriptionWhereInput!]
}

input PersonUpdateDataInput {
  firstName: String
  lastName: String
}

input PersonUpdateInput {
  firstName: String
  lastName: String
}

input PersonUpdateManyMutationInput {
  firstName: String
  lastName: String
}

input PersonUpdateOneInput {
  create: PersonCreateInput
  update: PersonUpdateDataInput
  upsert: PersonUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: PersonWhereUniqueInput
}

input PersonUpsertNestedInput {
  update: PersonUpdateDataInput!
  create: PersonCreateInput!
}

input PersonWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  AND: [PersonWhereInput!]
  OR: [PersonWhereInput!]
  NOT: [PersonWhereInput!]
}

input PersonWhereUniqueInput {
  id: ID
}

type Plaintiff {
  id: ID!
  person: Person
}

type PlaintiffConnection {
  pageInfo: PageInfo!
  edges: [PlaintiffEdge]!
  aggregate: AggregatePlaintiff!
}

input PlaintiffCreateInput {
  person: PersonCreateOneInput
}

input PlaintiffCreateOneInput {
  create: PlaintiffCreateInput
  connect: PlaintiffWhereUniqueInput
}

type PlaintiffEdge {
  node: Plaintiff!
  cursor: String!
}

enum PlaintiffOrderByInput {
  id_ASC
  id_DESC
}

type PlaintiffPreviousValues {
  id: ID!
}

type PlaintiffSubscriptionPayload {
  mutation: MutationType!
  node: Plaintiff
  updatedFields: [String!]
  previousValues: PlaintiffPreviousValues
}

input PlaintiffSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PlaintiffWhereInput
  AND: [PlaintiffSubscriptionWhereInput!]
  OR: [PlaintiffSubscriptionWhereInput!]
  NOT: [PlaintiffSubscriptionWhereInput!]
}

input PlaintiffUpdateDataInput {
  person: PersonUpdateOneInput
}

input PlaintiffUpdateInput {
  person: PersonUpdateOneInput
}

input PlaintiffUpdateOneRequiredInput {
  create: PlaintiffCreateInput
  update: PlaintiffUpdateDataInput
  upsert: PlaintiffUpsertNestedInput
  connect: PlaintiffWhereUniqueInput
}

input PlaintiffUpsertNestedInput {
  update: PlaintiffUpdateDataInput!
  create: PlaintiffCreateInput!
}

input PlaintiffWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  AND: [PlaintiffWhereInput!]
  OR: [PlaintiffWhereInput!]
  NOT: [PlaintiffWhereInput!]
}

input PlaintiffWhereUniqueInput {
  id: ID
}

type Query {
  courtCase(where: CourtCaseWhereUniqueInput!): CourtCase
  courtCases(where: CourtCaseWhereInput, orderBy: CourtCaseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CourtCase]!
  courtCasesConnection(where: CourtCaseWhereInput, orderBy: CourtCaseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CourtCaseConnection!
  defendant(where: DefendantWhereUniqueInput!): Defendant
  defendants(where: DefendantWhereInput, orderBy: DefendantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Defendant]!
  defendantsConnection(where: DefendantWhereInput, orderBy: DefendantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DefendantConnection!
  lawyer(where: LawyerWhereUniqueInput!): Lawyer
  lawyers(where: LawyerWhereInput, orderBy: LawyerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Lawyer]!
  lawyersConnection(where: LawyerWhereInput, orderBy: LawyerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LawyerConnection!
  person(where: PersonWhereUniqueInput!): Person
  persons(where: PersonWhereInput, orderBy: PersonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Person]!
  personsConnection(where: PersonWhereInput, orderBy: PersonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PersonConnection!
  plaintiff(where: PlaintiffWhereUniqueInput!): Plaintiff
  plaintiffs(where: PlaintiffWhereInput, orderBy: PlaintiffOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Plaintiff]!
  plaintiffsConnection(where: PlaintiffWhereInput, orderBy: PlaintiffOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PlaintiffConnection!
  node(id: ID!): Node
}

type Subscription {
  courtCase(where: CourtCaseSubscriptionWhereInput): CourtCaseSubscriptionPayload
  defendant(where: DefendantSubscriptionWhereInput): DefendantSubscriptionPayload
  lawyer(where: LawyerSubscriptionWhereInput): LawyerSubscriptionPayload
  person(where: PersonSubscriptionWhereInput): PersonSubscriptionPayload
  plaintiff(where: PlaintiffSubscriptionWhereInput): PlaintiffSubscriptionPayload
}
`
      }
    