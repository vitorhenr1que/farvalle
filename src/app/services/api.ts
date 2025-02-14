const { default: axios } = require("axios");

export const api = axios.create({
    baseURL: 'https://fazag-next.vercel.app/api'

})