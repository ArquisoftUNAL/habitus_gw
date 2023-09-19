const typeDefs = `#graphql
    type Habit {
        hab_id: String!
        hab_name: String!
        hab_description: String!
        hab_created_at: String!
        hab_updated_at: String!
        usr_id: String!
        hab_is_yn: Boolean!
        hab_is_favorite: Boolean!
        hab_color: String!
        recurrences: [Recurrence]
    }

    input HabitCreate {
        name: String!
        description: String!
        is_favorite: Boolean!
        kind: String!
        is_yn: Boolean!
        color: String!
        units: String!
        user_id: String!
        category: String!
    }

    input HabitUpdate {
        name: String
        description: String
        is_favorite: Boolean
        kind: String
        is_yn: Boolean
        color: String
        units: String
        user_id: String
        category: String
    }

    extend type Query {
        habitsByUser(id : String!, mode : String, page : Int, per_page : Int): [Habit]
        habitById(id: String!, mode : String): Habit
        habitsByCategory(id: String!, page : Int, per_page : Int): [Habit]
    }

    extend type Mutation {
        addHabit(habit: HabitCreate!): CreationResponse

        updateHabit(habId: String!, habit: HabitUpdate!): GeneralResponse

        deleteHabit(habId: String!): GeneralResponse
    }
`;

module.exports = typeDefs;