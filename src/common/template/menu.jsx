import React from 'react';
import MenuItem from './menuItem';
import MenuTree from './menuTree';

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='dashboard' label='Dashboard' icon='dashboard' />
        <MenuItem path='trabalhadores' label='Trabalhadores' icon='users' />
        <MenuTree label="Configurações" icon='gears'>
            <MenuItem path='parametros' label='Parâmtros' icon='gear' />
        </MenuTree>
    </ul>
)