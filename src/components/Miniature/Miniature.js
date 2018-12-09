import React from 'react';
import StartGameLogo from '../../assets/img/Miniatures/StartGame@2x.png';
import EndGameLogo from '../../assets/img/Miniatures/Group 2@2x.png';

// const pathLogo = (name) => import('../../assets/img/Miniatures/' + name + '.png').then(path => path.default);

const miniature = (props) => {
    return <img alt="Miniature" src={props.page === 'start' ? StartGameLogo : EndGameLogo} />
}
export default miniature;