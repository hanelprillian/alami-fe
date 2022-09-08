import styled from "styled-components";
import {NavLink} from "react-router-dom";

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
  gap: 30px;
`
export const HeaderNavigationItem = styled(NavLink)`
  display: flex;
  font-size: 20px;
  text-decoration: none;
  color: #333;
  font-weight: 400;

  &.active {
    font-weight: 700;
  }
`
export const Container = styled.div`
  display: ${props => props.display ? props.display : 'block'};
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'none'};
  align-items: ${props => props.alignItems ? props.alignItems : 'none'};
  width: 1280px;
  margin: 0 auto;
`
