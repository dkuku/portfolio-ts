import * as React from 'react';
import {Header, Image, Segment} from 'semantic-ui-react';

interface IMyHeadingProps {
    frontPage: boolean;
}
const MyHeading: React.SFC<IMyHeadingProps> = (props) =>{
    const front = props.frontPage;
    return (
        <div>
            <Segment
            inverted = {front}
            textAlign='center'
        style={{ minHeight: 400, padding: '1em 0em' }}
        vertical={true}
    >
        <Image 
            src='images/daniel-sq.jpg' 
            size={front ? 'large' : 'small'} 
            circular={true} 
            centered={true}/>  
        <Header
            as='h1'
            content='Daniel Kukula'
        inverted = {front}
    style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '1em' }}
/>
<Header
    as='h2'
    content='Full Stack Developer'
inverted = {front}
            style={{ fontSize: '1.7em', fontWeight: 'normal' }}
        />
    </Segment>
</div>
    )
}

export default MyHeading;
