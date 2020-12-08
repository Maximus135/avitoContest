import styled from 'styled-components';
import { ReactComponent as User } from '../../images/user.svg';
import { ReactComponent as DownArrow } from '../../images/downArrow.svg';

export const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    background-color: wheat;
    border-radius: 5px;
`

export const UserWrapper = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-right: 1px black solid;
`
export const StyledUser = styled(User)`
    width: 20px;
    height: 20px;
    margin-left: auto;
    margin-right: auto;
`

export const StyledUserName = styled.span`
    font-size: 14px;
    margin-left: auto;
    margin-right: auto;
`
export const StyledMessageWrapper = styled.div`
    margin-left: 4px;
    width: 500px;
    height: 100px;
    overflow-y: hidden;
    overflow-x: hidden;
    &:hover{
        overflow-y: scroll;
        overflow-x: scroll;
    }
`

export const StyledMessage = styled.span`
    font-size: 14px;
`

export const StyledDownArrow = styled(DownArrow)`
    width: 20px;
    height: 20px;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
`
