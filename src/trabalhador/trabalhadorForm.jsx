import React, { Component } from 'react';
import { reduxForm, Field }  from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { init } from './trabalhadorActions';
import labelAndInput from '../common/fom/labelAndInput'

class TrabalhadorForm extends Component {
    render() {
        const { handleSubmit, readOnly } = this.props;
        return (
            
            <form role='form' onSubmit={handleSubmit}>
            
                <div className='box-body'>
                    <Field name='nome' component={labelAndInput} readOnly={readOnly}
                    label='Nome' cols='12 4' placeholder='Informe o nome'/>
                    <Field name='cpf' component={labelAndInput} readOnly={readOnly}
                    label='Cpf' cols='12 4' placeholder='Informe o Cpf' />
                    <Field name='salario' component={labelAndInput} readOnly={readOnly}
                    label='Salario' cols='12 4' placeholder='Informe o salário' type='number' />
                </div>
                <div className='box-footer'>
                    <div className='btn-group'>
                        <button type='submit' className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                        <button type='button' className='btn btn-default'
                            onClick={this.props.init}>Cancelar</button>
                    </div>
                </div>
            
            </form>
            
        )
    }
}
TrabalhadorForm = reduxForm({form: 'trabalhadorForm', destroyOnUnmount: false})(TrabalhadorForm);
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch);
export default connect(null, mapDispatchToProps)(TrabalhadorForm)