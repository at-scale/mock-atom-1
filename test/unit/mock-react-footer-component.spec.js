import Chance from 'chance';
import MockReactFooterComponent from '../../src/mock-react-footer-component';
import React from 'react';
import {expect} from 'code';
import {mockReactFooterComponent as identifyingClassName} from '../../styles/mock-react-footer-component.scss';
import {shallow} from 'enzyme';

describe('Given the <MockReactFooterComponent/> component', () => {
    const chance = new Chance();
    const requiredProps = () => {
        return {
            text: chance.string()
        };
    };

    const render = (props = requiredProps()) => {
        return shallow(<MockReactFooterComponent {...props}/>);
    };

    it('should be a footer', () => {
        const component = render();

        expect(component.type()).equal('footer');
    });

    it('should have an identifying class name', () => {
        const component = render();

        expect(component.props().className).equal(identifyingClassName);
    });

    it('should have a footer text', () => {
        const props = requiredProps();
        const component = render(props);

        expect(component.text()).equal(props.text);
    });
});
