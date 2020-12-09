import styled from 'styled-components';


type Props = {
    level:number
}

export const StyledSubCommentItemWrapper = styled.div<Props>`
    margin-left: ${({level})=>level*5}px;
    width: 100px;
    height: 50px;
    background-color: orange;
`