import styled from 'styled-components';

export const LocationModal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 60%;
    padding: 1em;
    border-radius: 0.5em;
    background-color: var(--bg--primary-800);
    z-index: 9999;
`;

