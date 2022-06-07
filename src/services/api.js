import axios from "axios";

export const BASE_URL = 'https://fakestoreapi.com';

const getProducts = async () => {
    const api = await axios.get(`${BASE_URL}/products`);
    return api.data;
}

export default getProducts;