const BASE_CATEGORIES_PATH = "categories";
const { generateRequestHeaders } = require("./../utils");

async function getCategory(id, userId, isAdmin) {
    return this.get(
        `${BASE_CATEGORIES_PATH}/${encodeURIComponent(id)}`,
        {
            headers: generateRequestHeaders(userId, isAdmin)
        }
    ).category;
}

async function getAllCategories(userId, isAdmin, page = 1, perPage = 10) {
    const data = await this.get(
        `${BASE_CATEGORIES_PATH}`, {
        params: {
            categories_page: page,
            categories_per_page: perPage
        },
        headers: generateRequestHeaders(userId, isAdmin)
    });

    return data.categories;
}

async function addCategory(userId, isAdmin, category) {
    return this.post(`${BASE_CATEGORIES_PATH}/`, {
        body: category,
        headers: generateRequestHeaders(userId, isAdmin)
    });
}

async function updateCategory(userId, isAdmin, id, category) {
    return this.patch(`${BASE_CATEGORIES_PATH}/${encodeURIComponent(id)}`, {
        body: category,
        headers: generateRequestHeaders(userId, isAdmin)
    });
}

async function deleteCategory(userId, isAdmin, id) {
    return this.delete(`${BASE_CATEGORIES_PATH}/${encodeURIComponent(id)}`, {
        headers: generateRequestHeaders(userId, isAdmin)
    });
}

module.exports = (HabitsAPI) => {
    HabitsAPI.prototype.getCategory = getCategory;
    HabitsAPI.prototype.getAllCategories = getAllCategories;
    HabitsAPI.prototype.addCategory = addCategory;
    HabitsAPI.prototype.updateCategory = updateCategory;
    HabitsAPI.prototype.deleteCategory = deleteCategory;
}