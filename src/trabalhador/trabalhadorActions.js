import axios from 'axios';

const BASE_URL = 'https://localhost:5001/api';

export function getList() {
    const request = axios.get(`${BASE_URL}/trabalhador`);
    return {
        type: 'TRABALHADOR_FETCHED',
        payload: request
    }
}
