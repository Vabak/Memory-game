import React from 'react';
import PageWrapper from '../../wrappers/PageWrapper/PageWrapper';
import Miniature from '../../components/Miniature/Miniature';
import Button from '../../components/Button/Button';

const StartPage = (props) => {
    return (
        <PageWrapper>
                <Miniature page='start' />
                <h1>MEMORY GAME</h1>
                <Button btnContent='Start' />
        </PageWrapper>
    );
}

export default StartPage;