import  * as React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Divider, Header } from 'semantic-ui-react';

import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Home from './Home';
import Page404 from './Page404';
import Projects from './Projects';
import TopMenu from './TopMenu';

import './App.css';

class App extends React.Component<any, any> {
    public render() {
        const page = this.props.location.pathname.split('/')[1].toUpperCase();
        return (
            <div>
            <TopMenu />
            {/* Dont show header on main page */}
            {page.length > 0 &&
                <Divider horizontal={true}>
            <Header as='h1' textAlign='center'>{page}</Header>
            </Divider>
            }
            <Switch>
            <Route exact={true} component={About} path="/About" />
            <Route exact={true} component={Contact} path="/Contact" />
            <Route exact={true} component={Projects} path="/Projects" />
            <Route exact={true} component={Home} path="/" />
            <Route component={Page404} />
            </Switch>
            <Footer />
            </div>
        );
    };
};

export default withRouter( App );

