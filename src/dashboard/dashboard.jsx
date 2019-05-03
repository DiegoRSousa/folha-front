import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getSummary } from './dashboardActions';
import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import ValueBox from '../common/widget/valueBox';
import Row from '../common/layout/row';

import { formattedValue } from '../common/util/util';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    
    componentWillMount() {
        this.props.getSummary()
    }
    
    
    render() {
        const { quantidadeTrabalhadores, totalSalario} = this.props.summary;
        return (
            <div>
                <ContentHeader title='Dashboard' subtitle='Versão 0.1' />
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

const mapStateToProps = state => ({summary: state.dashboard.summary});
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);