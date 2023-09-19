const typeDefs = `#graphql
    type HabitData {
        hab_dat_id: String!
        hab_dat_amount: String!
        hab_dat_collected_at: String!
        hab_rec_id: String!
    }

    input HabitDataCreate {
        amount: Float!
        collected_at: String!
        recurrence_id: String!
    }

    input HabitDataUpdate {
        amount: Float
        collected_at: String
        recurrence_id: String
    }

    extend type Query {
        habitdataById(id: String!): HabitData
        habitdataByRecurrence(id: String!, page: Int, per_page: Int): [HabitData]
    }

    extend type Mutation {
        addHabitdata(habitdata: HabitDataCreate!): CreationResponse

        updateHabitdata(datId: String!, habitdata: HabitDataUpdate!): GeneralResponse

        deleteHabitdata(datId: String!): GeneralResponse
    }
`;

module.exports = typeDefs;