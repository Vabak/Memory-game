import React from 'react';
import PageWrapper from '../wrappers/PageWrapper/PageWrapper';
import ContentWrapper from '../wrappers/ContentWrapper/ContentWrapper';
import Miniature from '../components/Miniature/Miniature';

const startPage = (props) => {
    return (
        <PageWrapper>
            <ContentWrapper>
                <Miniature />
                <h1>MEMORY GAME</h1>
                <button>Start</button>
            </ContentWrapper>
        </PageWrapper>
    );
}

export default startPage;