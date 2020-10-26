import { API_BASE_URL } from '../utils/constants';
import http from './httpService';

export const getPosts = async (tagName, pageNumber) => {
    const apiEndPoint = `/search_by_date?tags=${tagName}&page=${pageNumber}`;
    await http.get(API_BASE_URL + apiEndPoint)
        .then(response => {
            return response;
        })
        .catch((error) => {
            return error;
        })
        ;
};
