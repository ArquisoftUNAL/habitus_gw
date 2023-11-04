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
        hab_next_closure_date: String!
        hab_color: String!
        hab_units: String!
        hab_goal: Float!
        hab_freq_type: String!
        hab_location: String
        cat_id: String!
        data: [HabitData]
    }

    input HabitCreate {
        name: String!
        description: String!
        is_favorite: Boolean!
        is_yn: Boolean!
        color: String!
        units: String!
        goal: Float!
        frequency_type: String!
        category: String!
        location: String
    }

    input HabitUpdate {
        name: String
        description: String
        is_favorite: Boolean
        is_yn: Boolean
        color: String
        units: String
        goal: Float
        frequency_type: String
        category: String
        location: String
    }

    extend type Query {
        habitsByUser(mode : String, page : Int, per_page : Int): [Habit]
        habitById(id: String!, mode : String): Habit
        habitsByCategory(id: String!, page : Int, per_page : Int): [Habit]
    }

    extend type Mutation {
        addHabit(habit: HabitCreate!): CreationResponse

        updateHabit(id: String!, habit: HabitUpdate!): GeneralResponse

        deleteHabit(id: String!): GeneralResponse
    }
`;

module.exports = typeDefs;