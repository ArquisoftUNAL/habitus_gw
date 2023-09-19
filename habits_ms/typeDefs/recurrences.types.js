const typeDefs = `#graphql
    type Recurrence {
        hab_rec_id: String!
        hab_id: String!
        hab_rec_freq_type: String!
        hab_rec_goal: String!
        hab_rec_freq_data: String!
        data: [HabitData]
    }

    input RecurrenceCreate {
        frequency_type: String!
        frequency_data: String!
        goal: Float!
        habit_id: String!
    }

    input RecurrenceUpdate {
        frequency_type: String
        frequency_data: String
        goal: Float
        habit_id: String
    }

    extend type Query {
        recurrenceById(id: String!, mode : String): Recurrence
        recurrencesByHabit(id: String!, page: Int, per_page: Int): [Recurrence]
    }

    extend type Mutation {
        addRecurrence(recurrence: RecurrenceCreate!): CreationResponse

        updateRecurrence(recId: String!, recurrence: RecurrenceUpdate!): GeneralResponse

        deleteRecurrence(recId: String!): GeneralResponse
    }
`;

module.exports = typeDefs;