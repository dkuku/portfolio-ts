import * as React from 'react';
import MyHeading from './MyHeading';

const Home: React.SFC<any> = () => {
    return (
        <div>
            <MyHeading frontPage={true} />
        </div>
    )
}

export default Home;
