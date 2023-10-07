const BASE_EVENTS_PATH = "events";
const { generateRequestHeaders } = require("./../utils");

async function getEventsByHabit(userId, isAdmin, habId, start_date, end_date, limit = 10) {

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
        headers: generateRequestHeaders(userId, isAdmin)
    });

    return data.events;
}

async function getCalendarEventsByHabit(userId, isAdmin, habId, start_date, end_date) {

    if (!start_date)
        start_date = new Date().toISOString().split('T')[0];

    if (!end_date)
        // One week from now by default
        end_date = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

    const data = await this.get(
        `${BASE_EVENTS_PATH}/calendar/habit/${habId}`, {
        params: {
            start_date: start_date,
            end_date: end_date
        },
        headers: generateRequestHeaders(userId, isAdmin)
    });

    return data.events;
}
async function getCalendarEventsByUser(userId, isAdmin, start_date, end_date) {

    if (!start_date)
        start_date = new Date().toISOString().split('T')[0];

    if (!end_date)
        // One week from now by default
        end_date = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

    const data = await this.get(
        `${BASE_EVENTS_PATH}/calendar`, {
        params: {
            start_date: start_date,
            end_date: end_date
        },
        headers: generateRequestHeaders(userId, isAdmin)
    });

    return data.events;
}
module.exports = (HabitsAPI) => {
    HabitsAPI.prototype.getEventsByHabit = getEventsByHabit;
    HabitsAPI.prototype.getCalendarEventsByHabit = getCalendarEventsByHabit;
    HabitsAPI.prototype.getCalendarEventsByUser = getCalendarEventsByUser;
}