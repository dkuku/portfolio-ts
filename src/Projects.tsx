import * as React from 'react'
import { Card, Container } from 'semantic-ui-react'
import { projects } from './constants'
import Project from './Project';

const Projects: React.SFC<any> = () => {
    return (
        <Container style={{ marginBottom: '1em' }}>
        <Card.Group>
        {projects.map((r, index) => {
            return (
                <Project key={index} {...r} />
            )
        })}
        </Card.Group>
        </Container>
    )
}

export default Projects;
