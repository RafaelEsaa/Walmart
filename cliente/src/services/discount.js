import axios from 'axios';

export const getAllDiscount = async () => {
    const result = await axios.get(`${process.env.REACT_APP_API_URL}/discount`);
    return result
}