import PropTypes from 'prop-types';
import React from 'react';
import {mockReactHeaderComponent as identifyingClassName} from '../styles/mock-react-header-component.scss';

const MockReactHeaderComponent = props => {
    return (
        <header className={identifyingClassName}>
            <h1>{props.title}</h1>
        </header>
    );
};

MockReactHeaderComponent.propTypes = {
    title: PropTypes.string.isRequired
};

export default MockReactHeaderComponent;
