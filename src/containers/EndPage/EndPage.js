import React from 'react';
import PageWrapper from '../../wrappers/PageWrapper/PageWrapper';
import Logo from '../../components/Logo/Logo';
import Button from '../../components/Button/Button';

const EndPage = (props) => {
    return (
        <PageWrapper>
            <Logo />
            <h2>Congratulations!</h2>
            <strong>Your score: 0</strong>
            <Button btnContent='Play again' link='/game' />
        </PageWrapper>
    );
}
 
export default EndPage;