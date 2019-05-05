import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { getList } from './trabalhadorActions';

import { formattedValue } from '../common/util/util';



class TrabalhadorList extends Component {
    componentWillMount() {
        this.props.getList();
    }

    renderRows() {
        const list = this.props.list || [];
        return list.map(t => (
            <tr key={t.id}>
                <td>{t.nome}</td>
                <td>{t.cpf}</td>
                <td>{formattedValue(t.salario)}</td>
            </tr>

        ));
    }
    
    render() {

        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Cpf</th>
                            <th>Salário</th>
                        </tr>
                    </thead> 
                    <tbody>
                        {this.renderRows()}
                    </tbody>           
                </table>
            </div>
        )
    }
}
const mapStateToProps = state => ({list: state.trabalhador.list});
const mapDispatchToProps = dispatch => bindActionCreators({getList}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TrabalhadorList);