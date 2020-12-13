import styled from 'styled-components'
import { ReactComponent as Date } from '../../images/date.svg';
import { ReactComponent as Rating } from '../../images/rating.svg';
import { ReactComponent as User } from '../../images/user.svg';

export const StyledNewsHeader = styled.div`
    width: 100%;
    height: 45px;
    border-top: 1px solid rgba(0, 0, 0, 0.651);
    border-bottom: 1px solid rgba(0, 0, 0, 0.651);
    margin-bottom: 5px;
    margin-top: 5px;
    &:hover {
        background-color: rgba(0, 0, 0, 0.151);
        cursor: pointer;
    }
`

export const StyledTitle = styled.div`
    display: flex;
    width: 700px;
    height: 20px;
    font-size: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
`

export const StyledInfo = styled.div`
    display: flex;
    flex-direction: row;
    width: 700px;
    height: 25px;
    justify-content: center;
`

export const StyledUserIcon = styled(User)`
    width: 18px;
    height: 18px;
    align-self: center;
    fill: rgb(0, 0, 0);
    margin-left: 15px;
`

export const StyledUser = styled.span`
    font-size: 14px;
    align-self: center;
    margin-right: 15px;
    margin-left: 2px;
`

export const StyledDateIcon = styled(Date)`
    width: 18px;
    height: 18px;
    align-self: center;
    fill: rgb(0, 0, 0);
`

export const StyledDate = styled.span`
    font-size: 13px;
    align-self: center;
    margin-left: 2px;
`

export const StyledRatingIcon = styled(Rating)`
    width: 18px;
    height: 18px;
    align-self: center;
    fill: rgb(0, 0, 0);
`

export const StyledRating = styled.span`
    font-size: 14px;
    align-self: center;
`

