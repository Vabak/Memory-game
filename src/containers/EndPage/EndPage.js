import React from 'react';
import PageWrapper from '../../wrappers/PageWrapper/PageWrapper';
import Logo from '../../components/Logo/Logo';
import Button from '../../components/Button/Button';

const EndPage = (props) => {
    return (
        <PageWrapper>
            <Logo />
            <h2>Поздравляем!</h2>
            <strong>Ваш итоговый счёт: 0</strong>
            <Button btnContent='Play again' link='/game' />
        </PageWrapper>
    );
}
 
export default EndPage;