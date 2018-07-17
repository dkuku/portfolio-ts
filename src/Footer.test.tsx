import { shallow } from 'enzyme';
import * as React from 'react';
import Footer from './Footer';

describe('Footer', ()=>{
    it('should render without crashing and match snapshot', () => {
        const component = shallow(<Footer />)
        expect(component).toMatchSnapshot();
    });
})
