import styled from 'styled-components'
import { ReactComponent as Logo } from '../../images/hacker.svg';

export const StyledMainPage = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

export const StyledTitel = styled.h1`
    font-size: 30px;
    text-decoration: none;
`

export const StyledLogo = styled(Logo)`
    display: block;
    width: 40px;
    height: 40px;
    margin-left: 10px;
`

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

