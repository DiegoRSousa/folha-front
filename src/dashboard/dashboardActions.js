import axios from 'axios';
import { BASE_URL } from '../common/constants';


export function getSummary() {
    const request = axios.get(`${BASE_URL}/sumario`);
    return {
        type: 'SUMMARY_FETCHED',
        payload: request
    }
}