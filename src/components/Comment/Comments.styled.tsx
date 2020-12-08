import styled from 'styled-components';
import { ReactComponent as DownArrow } from '../../images/downArrow.svg';

export const StyledDownArrow = styled(DownArrow)`
    margin-left: auto;
    margin-right: auto;
    width: 70px;
    height: 35px;
    cursor: pointer;
`

export const StyledComments = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%; 
`