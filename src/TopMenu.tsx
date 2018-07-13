import * as React from 'react';
import {NavLink} from 'react-router-dom';
import {Container, Icon, Menu } from 'semantic-ui-react';

const FixedMenu = () => (
    <Menu size='large' inverted={true} style={{borderRadius: 0}}>
        <Container>
            <Menu.Item as={NavLink} to="/"><Icon name='home'/> Home</Menu.Item>
            <Menu.Menu position="right">
                <Menu.Item as={NavLink} to='/projects'><Icon name='code'/>Projects</Menu.Item>
                <Menu.Item as={NavLink} to='/about'><Icon name='user'/>About Me</Menu.Item>
                <Menu.Item as={NavLink} to='/contact'><Icon name='mail'/>Contact</Menu.Item>
            </Menu.Menu>
        </Container>
    </Menu>
)

const TopMenu = () => {
    return (
        <div>
            <FixedMenu />
        </div>
    )
};

export default TopMenu
