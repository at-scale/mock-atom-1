import Chance from 'chance';
import MockReactHeaderComponent from '../../src/mock-react-header-component';
import React from 'react';
import {expect} from 'code';
import {mockReactHeaderComponent as identifyingClassName} from '../../styles/mock-react-header-component.scss';
import {shallow} from 'enzyme';

describe('Given the <MockReactHeaderComponent/>', () => {
    const chance = new Chance();
    const requiredProps = () => {
        return {
            title: chance.string()
        };
    };

    const render = (props = requiredProps()) => {
        return shallow(<MockReactHeaderComponent {...props}/>);
    };

    it('should be a header', () => {
        const component = render();

        expect(component.type()).equal('header');
    });

    it('should have an identifying class name', () => {
        const component = render();

        expect(component.props().className).equal(identifyingClassName);
    });

    it('should have a title heading', () => {
        const props = requiredProps();
        const component = render(props).find('h1');

        expect(component.text()).equal(props.title);
    });
});
