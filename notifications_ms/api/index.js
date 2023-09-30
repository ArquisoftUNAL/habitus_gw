const { RESTDataSource } = require("@apollo/datasource-rest");
const axios = require("axios");

const { NOTIFICATIONS_MS_URL } = require("./../../config");

const BASE_PATH = "notifications_controller";

class NotificationsAPI extends RESTDataSource {
    baseURL = NOTIFICATIONS_MS_URL;

    async getNotifications() {
        const response = await this.get(`${BASE_PATH}/get_notifications`);
        return response;
    }

    async getNotification(id) {
        const response = await this.get(
            `${BASE_PATH}/show_notification`,
            { params: { id } }
        );
        return response;
    }

    async getNotificationsUser(id) {
        const response = await this.get(
            `${BASE_PATH}/get_notifications_user`,
            { params: { id } }
        );
        return response;
    }

    async addNotification(data) {
        const response = await this.post(`${BASE_PATH}/add_notification`, data);
        return response;
    }

    async updateNotification(id, data) {
        const response = await this.put(
            `${BASE_PATH}/update_notification`,
            {
                ...data,
                id,
            }
        );
        return response;
    }

    async deleteNotification(id) {
        const response = await this.delete(
            `${BASE_PATH}/delete_notification`,
            { params: { id } }
        );
        return response;
    }
}

module.exports = NotificationsAPI;
