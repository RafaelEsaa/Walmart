import axios from 'axios';

export const getAllProduct = async () => {
    const result = await axios.get(`${process.env.REACT_APP_API_URL}/product`);
    return result
}