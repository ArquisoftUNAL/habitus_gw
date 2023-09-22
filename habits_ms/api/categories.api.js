const BASE_CATEGORIES_PATH = "categories";

async function getCategory(id) {
    return this.get(
        `${BASE_CATEGORIES_PATH}/${encodeURIComponent(id)}`,
        {
            headers: {
                "credentials": "administrator"
            }
        }
    ).category;
}

async function getAllCategories(page = 1, perPage = 10) {
    const data = await this.get(
        `${BASE_CATEGORIES_PATH}`, {
        params: {
            categories_page: page,
            categories_per_page: perPage
        },
        headers: {
            "credentials": "administrator"
        }
    });

    return data.categories;
}

async function addCategory(category) {
    return this.post(`${BASE_CATEGORIES_PATH}/`, {
        body: category,
        headers: {
            "credentials": "administrator"
        }
    });
}

async function updateCategory(id, category) {
    return this.patch(`${BASE_CATEGORIES_PATH}/${encodeURIComponent(id)}`, {
        body: category,
        headers: {
            "credentials": "administrator"
        }
    });
}

async function deleteCategory(id) {
    return this.delete(`${BASE_CATEGORIES_PATH}/${encodeURIComponent(id)}`, {
        headers: {
            "credentials": "administrator"
        }
    });
}

module.exports = (HabitsAPI) => {
    HabitsAPI.prototype.getCategory = getCategory;
    HabitsAPI.prototype.getAllCategories = getAllCategories;
    HabitsAPI.prototype.addCategory = addCategory;
    HabitsAPI.prototype.updateCategory = updateCategory;
    HabitsAPI.prototype.deleteCategory = deleteCategory;
}