import * as React from 'react';
import { Button, Grid, Header, Icon } from 'semantic-ui-react';

import ContactForm from './ContactForm';
import MyHeading from './MyHeading';

const Contact: React.SFC<any> = () => {
    return (
        <Grid divided='vertically'>
            <Grid.Row columns={2}>
                <Grid.Column>
                    <MyHeading frontPage={false} />
                </Grid.Column>
                <Grid.Column>
                    <Header as='h3' style={{ margin: '1em' }}>Send me a message:</Header>
                    <ContactForm/>
                    <Header as='h3' style={{ margin: '1em' }}>Spy on me:</Header>
                    <Button.Group>
                        <Button color='linkedin' as='a' href='https://www.linkedin.com/in/daniel-kukula-55057a57/'>
                            <Icon name='linkedin' /> LinkedIn
                        </Button>
                        <Button color='black' as='a' href='https://github.com/dkuku'>
                            <Icon name='github' /> Github
                        </Button>
                    </Button.Group>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
export default Contact;
