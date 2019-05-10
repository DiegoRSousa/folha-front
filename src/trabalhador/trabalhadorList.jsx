import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { getList, showUpdate, showDelete } from './trabalhadorActions';

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
                <td>
                    <button className='btn btn-warning' onClick={() => this.props.showUpdate(t)} >
                        <i className='fa fa-pencil'></i>
                    </button>
                    <button className='btn btn-danger' onClick={() => this.props.showDelete(t)} >
                        <i className='fa fa-trash-o'></i>
                    </button>
                    
                </td>
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
                            <th className='table-actions'>Ações</th>
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
const mapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate, showDelete}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TrabalhadorList);