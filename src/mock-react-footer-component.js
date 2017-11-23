import PropTypes from 'prop-types';
import React from 'react';
import {mockReactFooterComponent as identifyingClassName} from '../styles/mock-react-footer-component.scss';

const MockReactFooterComponent = props => {
    return (
        <footer className={identifyingClassName}>{props.text}</footer>
    );
};

MockReactFooterComponent.propTypes = {
    text: PropTypes.string.isRequired
};

export default MockReactFooterComponent;
