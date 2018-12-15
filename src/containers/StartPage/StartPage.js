import React from 'react';
import PageWrapper from '../../wrappers/PageWrapper/PageWrapper';
import Logo from '../../components/Logo/Logo';
import Button from '../../components/Button/Button';

const StartPage = (props) => {
    return (
        <PageWrapper>
            <Logo page='start' />
            <h1>MEMORY GAME</h1>
            <Button btnContent='Start' link='/game' />
        </PageWrapper>
    );
}

export default StartPage;