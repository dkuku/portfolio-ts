import * as React from 'react';
import { Card, Image, Label } from 'semantic-ui-react';
import {IProject} from './constants';
import Techlist from './Techlist';

const Project = ( {title, img, desc, color, description, technology, link}: IProject) => {

    return (
        <Card
        centered={true}
    raised={true}
href={link}
target='_blank'
    >
        <Image src={"images/".concat(img)} />
        <Card.Content>
            <Label style={{marginBottom: '0.5em'}} as='a' color={color} ribbon={true}>
            {technology[0]}
        </Label>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>{desc}</Card.Meta>
        <Card.Description>{description}</Card.Description>
    </Card.Content>
    <Card.Content extra={true}>
        <Techlist technology={technology}/>
    </Card.Content>
</Card>

    );
};
export default Project;
