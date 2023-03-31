export const BASE_API_URL = "http://localhost:3001/"


export const API_PRODUCTS = {
    create: "/inventory/product/create",
    deleteOne: "/inventory/product/deleteOne",
    update: "/inventory/product/update",
    getAll: "/inventory/product/getAll",
    getCategory: "/inventory/product/getCategory",
    getOne: (id) => `/inventory/product/getOne/${id}`,
    countProducts: "/inventory/product/countProducts",
    upload_CSV: "/inventory/product/uploadCSV",
}

export const API_USERS = {
    create: "/inventory/user/create",
    deleteOne: "/inventory/user/deleteOne",
    update: "/inventory/user/update",
    getAll: "/inventory/user/getAll",
    getOne: "/inventory/user/getOne",
    countUsers: "/inventory/user/countUsers",
    upload_CSV: "/inventory/user/uploadCSV",
}

export const API_LOGS = {
    getAll: "/inventory/userlogs/getAll",
}

