import styled from 'styled-components';
import { ReactComponent as UpArrow } from '../../images/upArrow.svg';

type Props = {
    level:number
}

export const StyledSubCommentItemWrapper = styled.div<Props>`
    display: flex;
    flex-direction: column;
    margin-left: ${({level})=>5*level}px;
    width: calc(100%-${({level})=>5*level}px);
    margin-top: 5px;
    margin-bottom: 5px;
    height: 75px;
    border-radius: 5px;
    background-color:  rgba(145, 153, 158, 0.541);
`

export const StyledNickNameWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 15px;
    background-color: rgba(192, 198, 201, 0.541);
`

export const StyledUpArrow = styled(UpArrow)`
    margin-left: 2px;
    width: 15px;
    height: 15px;
    fill: rgba(255, 255, 255, 0.699);
`

export const StyledNickName = styled.span`
    align-self:center;
    margin-left: 5px;
    font-size: 12px;
`

export const StyledText = styled.span<Props>`
    margin-left: 10px;
    width: calc(100%-${({level})=>5*level}px);
    height: 50px;
    overflow: hidden;
    font-size: 14px;
    &:hover{
        overflow-y: scroll;
        overflow-x: scroll;
    }
    &::-webkit-scrollbar {
    width: 8px;
    }
    &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 12px;
    }
    &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    }

`