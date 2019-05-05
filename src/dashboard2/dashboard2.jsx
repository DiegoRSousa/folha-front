import axios from 'axios';
import React, {Component} from 'react';

import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import ValueBox from '../common/widget/valueBox';
import Row from '../common/layout/row';

import { formattedValue } from '../common/util/util';
import Axios from 'axios';

const BASE_URL = 'https://localhost:5001/api';
export default class Dashboard extends Component {
    
    constructor(props) {
        super(props);
        this.state = {quantidadeTrabalhadores: 0, totalSalario: 0}
    }
    
    componentWillMount() {
        axios.get(`${BASE_URL}/sumario`)
            .then(resp => this.setState(resp.data))
    }
    
    render() {
        const { quantidadeTrabalhadores, totalSalario} = this.state
        return (
            <div>
                <ContentHeader title='Dashboard' subtitle='sem redux Versão 0.1' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='users'
                            value={`${quantidadeTrabalhadores}`} text='Trabalhadores cadastrados' />
                        <ValueBox cols='12 4' color='blue' icon='money'
                            value={`${formattedValue(totalSalario)}`} text='Total de salário dos trabalhores' />
                        <ValueBox cols='12 4' color='red' icon='money'
                            value={`${formattedValue(quantidadeTrabalhadores * totalSalario)}`} text='Despesa total com salários' />
                    </Row>
                </Content>
            </div>
        )
    }
}