const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean,
} = require("graphql");

const CategoryType = new GraphQLObjectType({
    name: "Category",
    fields: {
        cat_id: { type: GraphQLString },
        cat_name: { type: GraphQLString },
    }
});

const HabitType = new GraphQLObjectType({
    name: "Habit",
    fields: {
        hab_id: { type: GraphQLString },
        hab_name: { type: GraphQLString },
        hab_description: { type: GraphQLString },
        hab_created_at: { type: GraphQLString },
        hab_updated_at: { type: GraphQLString },
        hab_is_favorite: { type: GraphQLBoolean },
        hab_is_yn: { type: GraphQLBoolean },
        hab_color: { type: GraphQLString },
        hab_units: { type: GraphQLString },
        usr_id: { type: GraphQLString },
        cat_id: { type: GraphQLString },
    }
});

const RecurrenceType = new GraphQLObjectType({
    name: "Recurrence",
    fields: {
        hab_rec_id: { type: GraphQLString },
        hab_id: { type: GraphQLString },
        hab_rec_data_type: { type: GraphQLString },
        hab_rec_goal: { type: GraphQLString },
        hab_rec_freq_data: { type: GraphQLString },
    }
});

const Data = new GraphQLObjectType({
    name: "Data",
    fields: {
        hab_dat_id: { type: GraphQLString },
        hab_dat_amount: { type: GraphQLString },
        hab_dat_collected_at: { type: GraphQLString },
        hab_rec_id: { type: GraphQLString },
    }
});


module.exports = {
    "category": CategoryType,
    "habit": HabitType,
    "recurrence": RecurrenceType,
    "data": Data,
}
