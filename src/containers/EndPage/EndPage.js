import React from 'react';
import { connect } from 'react-redux';

import PageWrapper from '../../wrappers/PageWrapper/PageWrapper';
import Logo from '../../components/Logo/Logo';
import Button from '../../components/Button/Button';

const EndPage = (props) => {
    return (
        <PageWrapper>
            <Logo />
            <h2>Congratulations!</h2>
            <strong style={{"margin-bottom": "10px"}}>Your score: {props.score}</strong>
            <Button btnContent='Play again' link='/game' />
        </PageWrapper>
    );
}

const mapStateToProps = state => {
    return {
        score: state.score
    }
}

export default connect(mapStateToProps)(EndPage);