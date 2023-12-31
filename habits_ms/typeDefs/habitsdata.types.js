const typeDefs = `#graphql
    type HabitData {
        hab_dat_id: String!
        hab_dat_amount: String!
        hab_dat_collected_at: String!
        hab_id: String!
    }

    type HabitsDataCreateResponse {
        message: String!
        data: HabitData!
    }

    type HabitDataUpdateDeleteResponse {
        message: String!
        data: HabitData!
    }

    input HabitDataCreate {
        amount: Float!
        collected_at: String
        habit_id: String!
    }

    input HabitDataUpdate {
        amount: Float
    }

    extend type Query {
        habitdataById(id: String!): HabitData!
        habitdataByHabit(id: String!, start_date : String, end_date: String, page: Int, per_page: Int): [HabitData]!
        habitdataByUser(start_date : String, end_date: String, page: Int, per_page: Int): [HabitData]!
    }

    extend type Mutation {
        addHabitdata(data: HabitDataCreate!): HabitsDataCreateResponse!

        updateHabitdata(datId: String!, data: HabitDataUpdate!): HabitDataUpdateDeleteResponse!

        deleteHabitdata(datId: String!): HabitDataUpdateDeleteResponse!
    }
`;

module.exports = typeDefs;