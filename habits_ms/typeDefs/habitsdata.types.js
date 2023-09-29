const typeDefs = `#graphql
    type HabitData {
        hab_dat_id: String!
        hab_dat_amount: String!
        hab_dat_collected_at: String!
        hab_id: String!
    }

    type HabitsDataCreateResponse {
        message: String!
        id: String!
        habit_id: String!
    }

    type HabitDataUpdateDeleteResponse {
        message: String!
        habit_id: String!
    }

    input HabitDataCreate {
        amount: Float!
        collected_at: String
        habit_id: String!
    }

    input HabitDataUpdate {
        amount: Float
        collected_at: String
        recurrence_id: String
    }

    extend type Query {
        habitdataById(id: String!): HabitsDataCreateResponse!
        habitdataByHabit(id: String!, page: Int, per_page: Int): [HabitData]!
        habitdataByUser(page: Int, per_page: Int): [HabitData]!
    }

    extend type Mutation {
        addHabitdata(habitdata: HabitDataCreate!): CreationResponse!

        updateHabitdata(datId: String!, habitdata: HabitDataUpdate!): HabitDataUpdateDeleteResponse!

        deleteHabitdata(datId: String!): HabitDataUpdateDeleteResponse!
    }
`;

module.exports = typeDefs;