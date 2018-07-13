import * as React from 'react';
import { Container, Grid, Header, Segment } from 'semantic-ui-react';

const Footer: React.SFC<any> = () => {
    return (
        <div>
            <Segment inverted={true} vertical={true} style={{ padding: '5em 0em' }}>
                <Container>
                    <Grid divided={true} inverted={true} stackable={true}>
                        <Grid.Row>
                            <Grid.Column width={7}>
                                <Header as='h4' inverted={true}>Created by:</Header>
                                <p>Daniel Kukula<br/>
                                    All Rights Reserved</p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </div>
    )
}
export default Footer;
