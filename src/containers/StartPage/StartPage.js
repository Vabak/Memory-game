import React from 'react';
import PageWrapper from '../../wrappers/PageWrapper/PageWrapper';
import ContentWrapper from '../../wrappers/ContentWrapper/ContentWrapper';
import Miniature from '../../components/Miniature/Miniature';
import Button from '../../components/Button/Button';

const StartPage = (props) => {
    return (
        <PageWrapper>
                <Miniature />
                <h1>MEMORY GAME</h1>
                <Button />
        </PageWrapper>
    );
}

export default StartPage;