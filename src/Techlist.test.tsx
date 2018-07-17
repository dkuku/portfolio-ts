import { shallow } from 'enzyme';
import * as React from 'react';
import Techlist from './Techlist';

describe('Techlist', ()=>{
    it('should render without crashing and match snapshot', () => {
        const component = shallow(<Techlist technology={[]} />)
        expect(component).toMatchSnapshot();
    });
})
