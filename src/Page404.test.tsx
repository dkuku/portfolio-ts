import { shallow } from 'enzyme';
import * as React from 'react';
import Page404 from './Page404';

describe('Page404', ()=>{
    it('should render without crashing and match snapshot', () => {
        const component = shallow(<Page404 />)
        expect(component).toMatchSnapshot();
    });
})
