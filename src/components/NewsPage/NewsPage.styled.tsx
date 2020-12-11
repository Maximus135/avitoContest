import styled from 'styled-components';
import { ReactComponent as Back } from '../../images/back.svg';
import { Link } from 'react-router-dom';
import { ReactComponent as LinkIcon } from '../../images/link.svg';
import { ReactComponent as Date } from '../../images/date.svg';
import { ReactComponent as User } from '../../images/user.svg';
import { ReactComponent as Counter } from '../../images/counter.svg';

export const StyledNewsPage = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`
export const StyledHeader = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
`
export const StyledBack = styled(Back)`
    width: 20px;
    height: 20px;
    margin-left: 10px;
`

export const StyledTitle = styled.h1`
    margin-left: auto;
    margin-right: auto;
    font-size: 18px;
    text-align: center;
`

export const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
`

export const StyledContent = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
`

export const StyledWrapper = styled.div`
    display: flex;
    height: 30px;
    width: 100%;
    justify-content: center;
    align-items: center;
    border-bottom: 1px black solid;
`

export const StyledLinkIcon = styled(LinkIcon)`
    margin-right: 10px;
    width: 20px;
    height: 20px;
`

export const StyledText = styled.span`
    font-size: 13px;
`

export const StyledTextLink = styled.span`
    font-size: 13px;
    cursor: pointer;
`

export const StyledDate = styled(Date)`
    margin-right: 10px;
    width: 20px;
    height: 20px;
`

export const StyledUser = styled(User)`
    margin-right: 10px;
    width: 20px;
    height: 20px;
`

export const StyledCounter = styled(Counter)`
    margin-right: 10px;
    width: 20px;
    height: 20px;
`

export const StyledCommentsTitle = styled.h2`
    margin-left: auto;
    margin-right: auto;
    font-size: 16px;
`