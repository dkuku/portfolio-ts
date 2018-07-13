import * as React from 'react';
import { Container, Header, Image, Segment } from 'semantic-ui-react';
import MyHeading from './MyHeading';

const About: React.SFC<any> = () => {
    return (
        <div>
            <MyHeading frontPage={false}/>
            <Segment>
                <Container text={true}>
                    <Header as='h2'>Education</Header>
                    <ul>
                        <li>
                            Currently a student on OpenClassrooms Bachelors Degree path :Full Stack Developer.
                        </li>
                        <li>
                            Masters Degree in Production Engineering and Management.
                        </li>
                        <li>
                            Electro-Mechanical Engineer of Industrial Equipment.
                        </li>
                    </ul>
                    <Header as='h2'>Experience</Header>
                    <p>
                        I have 10+ years of experience working as Multi Skilled Maintenance Engineer. 
                        I really like to solve problems, find bugs and improvements.
                        The problem is that I don't feel that I'm learning new things anymore. 
                        That's why I decided to change my career path to something different. 
                        Something where I have some small experience but there's still a lot to learn.
                        On this website, you can find some of my projects that I've done when learning development.
                    </p>
                    <p>
                        <Image src='https://www.linuxcounter.net/cert/282399.png' floated='left'/>
                        Beside these projects, I've also a lot of experience with the Linux operating system. 
                        I'm using Linux for the last 15 years or more. 
                        I have lots of experience with Debian/Ubuntu based distros, Gentoo Linux, openWRT/LEDE and lately with Arch Linux.
                    </p>
                    <p>
                        Another of my hobbies is electronics and simple programmes for embedded systems like Arduinos and similar boards.

                    </p>
                </Container>
            </Segment>
        </div>
    )
}

export default About;
