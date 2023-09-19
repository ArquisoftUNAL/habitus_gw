const BASE_EVENTS_PATH = "events";

async function getEventsWithHabits(usrId, start_date, end_date, limit = 10) {

    if (!start_date)
        start_date = new Date().toISOString().split('T')[0];

    if (!end_date)
        // One week from now by default
        end_date = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

    const data = await this.get(
        `${BASE_EVENTS_PATH}/user/${usrId}/habits`, {
        params: {
            events_limit: limit,
            start_date: start_date,
            end_date: end_date
        }
    });


    return data.events;
}

async function getEventsCount(usrId, start_date, end_date) {

    if (!start_date)
        start_date = new Date().toISOString().split('T')[0];

    if (!end_date)
        // One week from now by default
        end_date = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

    const data = await this.get(`${BASE_EVENTS_PATH}/user/${usrId}/count`, {
        params: {
            start_date: start_date,
            end_date: end_date
        }
    });

    return data.events;
}

module.exports = (HabitsAPI) => {
    HabitsAPI.prototype.getEventsWithHabits = getEventsWithHabits;
    HabitsAPI.prototype.getEventsCount = getEventsCount;
}