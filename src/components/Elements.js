import styled from "styled-components";
import {Link} from "react-router-dom";

export const Body = styled.div`
  font-family: 'Calibri';
`
export const Header = styled.div`
  display: flex;
  padding: 40px;

  .logo {
    font-size: 40px;
  }
`
export const HeaderNavigation = styled.div`
  display: flex;
`
export const HeaderNavigationItem = styled(Link)`
  display: flex;
`
export const Container = styled.div`
  display: ${props => props.display ? props.display : 'block'};
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'none'};
  align-items: ${props => props.alignItems ? props.alignItems : 'none'};
  width: 1280px;
  margin: 0 auto;
`
