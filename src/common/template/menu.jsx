import React from 'react';
import MenuItem from './menuItem';
import MenuTree from './menuTree';

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='#/' label='Dashboard' icon='dashboard' />
        <MenuItem path='#/' label='Trabalhadores' icon='users' />
        <MenuTree label="Configurações" icon='gears'>
            <MenuItem path='#/' label='Parâmtros' icon='gear' />
        </MenuTree>
    </ul>
)