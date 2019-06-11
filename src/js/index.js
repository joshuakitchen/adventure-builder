import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { Menu, Sidebar } from 'semantic-ui-react';
import RaceCreator from './pages/RaceCreator.jsx';

ReactDOM.render(
    <BrowserRouter>
        <div>
        <Sidebar as={Menu} width='thin' visible vertical inverted>
            <Menu.Item>
                <Menu.Header content='Lore' />

                <Menu.Menu>
                    <Menu.Item as={Link} to='/create/world' link content='World Systems' />
                    <Menu.Item as={Link} to='/create/race' link content='Races' />
                </Menu.Menu>
            </Menu.Item>
            <Menu.Item>
                <Menu.Header content='World' />

                <Menu.Menu>
                    <Menu.Item as={Link} to='/create/continent' link content='Continents' />
                    <Menu.Item as={Link} to='/create/city' link content='Cities' />
                    <Menu.Item as={Link} to='/create/town' link content='Towns' />
                </Menu.Menu>
            </Menu.Item>
            <Menu.Item>
                <Menu.Header content='Adventure' />

                <Menu.Menu>
                    <Menu.Item as={Link} to='/create/me' link content='Me' />
                    <Menu.Item as={Link} to='/list/companion' link content='My Companions' />
                    <Menu.Item as={Link} to='/list/items' link content='My Inventory' />
                    <Menu.Item as={Link} to='/list/quests' link content='My Quests' />
                    <Menu.Item as={Link} to='/list/log' link content='Adventure Log' />
                    <Menu.Item as={Link} to='/adventure' link content='Continue Adventure' />
                </Menu.Menu>
            </Menu.Item>
        </Sidebar>
        <Route path='/create/race' component={RaceCreator} />
        </div>
    </BrowserRouter>,
    document.getElementById('react-container')
);