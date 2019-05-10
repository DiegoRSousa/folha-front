import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { initialize } from 'redux-form';
import { BASE_URL } from '../common/constants';
import {showTabs, selectTab} from '../common/tab/tabActions';

const INITIAL_VALUES = {}
export function getList() {
    const request = axios.get(`${BASE_URL}/trabalhador`);
    return {
        type: 'TRABALHADOR_FETCHED',
        payload: request
    }
}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function remove (values) {
    return submit(values, 'delete');
}

function submit(values, method) {

    return dispatch => {
        const id = values.id ? values.id : '';
        axios[method](`${BASE_URL}/trabalhador/${id}`, values)
        .then(resp => {
            toastr.success('Sucesso', 'Operação realizada com sucesso!');
            dispatch(init());
        }).catch(e => {
            toastr.error('Erro', 'Não foi possível realizar a operação!');
        });
    }
}

export function showUpdate(trabalhador) {
    return showTab(trabalhador, 'tabUpdate');
}

export function showDelete(trabalhador) {
    return showTab(trabalhador, 'tabDelete')
}

function showTab(trabalhador, tab) {
    return [
        showTabs(tab),
        selectTab(tab),
        initialize('trabalhadorForm', trabalhador)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('trabalhadorForm', INITIAL_VALUES)
    ]
}