import axios from 'axios';
const BASE_URL = 'https://localhost:5001/api';

export function getSummary() {
    const request = axios.get(`${BASE_URL}/sumario`);
    return {
        type: 'SUMMARY_FETCHED',
        payload: request
    }
}