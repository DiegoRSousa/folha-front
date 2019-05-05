import {combineReducers} from 'redux';

import DashboardReducer from '../dashboard/dashboardReducer';
import TabReducer from '../common/tab/tabReducer';
import TrabalhadorReducer from '../trabalhador/trabalhadorReducer';
import trabalhadorReducer from '../trabalhador/trabalhadorReducer';

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    trabalhador: trabalhadorReducer
});

export default rootReducer;