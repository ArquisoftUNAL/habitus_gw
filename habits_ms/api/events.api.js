const BASE_EVENTS_PATH = "events";

async function getEventsByHabit(habId, start_date, end_date, limit = 10) {

    if (!start_date)
        start_date = new Date().toISOString().split('T')[0];

    if (!end_date)
        // One week from now by default
        end_date = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

    const data = await this.get(
        `${BASE_EVENTS_PATH}/habit/${habId}`, {
        params: {
            events_limit: limit,
            start_date: start_date,
            end_date: end_date
        },
        headers: {
            "credentials": "test"
        }
    });

    return data.events;
}

module.exports = (HabitsAPI) => {
    HabitsAPI.prototype.getEventsByHabit = getEventsByHabit;
}