import styled, {css} from "styled-components";
import {NavLink} from "react-router-dom";

function responsiveSelector (props, paramName, selectorName) {
    let ret = ``
    if(typeof props[paramName] === 'object') {
        if(props[paramName].sm) {
            ret += `
            @media only screen and (min-width: 200px) and (max-width: 425px) {
              ${selectorName}: ${props[paramName].sm};
            }
          `
        }
        if(props[paramName].md) {
            ret += `
          @media only screen and (min-width: 1024px) {
            ${selectorName}: ${props[paramName].md};
          }
        `
        }
        if(props[paramName].lg) {
            ret += `
              @media only screen and (min-width: 1440px) {
                ${selectorName}: ${props[paramName].lg};
              }
              `
        }
    } else if (typeof props[paramName] === 'string' || typeof props[paramName] === 'number'){
        ret += `${selectorName}: ${props[paramName]}`
    }

    return css`${ret}`
}

export const Body = styled.div`
  font-family: 'Calibri';
`
export const Header = styled.div`
  display: flex;
  padding: 40px;

  .logo {
    font-size: 50px;
    font-weight: bold;
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
  width: 100%;
  padding-left: 0;
  padding-right: 0;
  @media only screen and (min-width: 1024px) {
    width: 1024px;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media only screen and (min-width: 1280px) {
    width: 1280px;
    padding-left: 20px;
    padding-right: 20px;
  }
  margin: 0 auto;
`
export const Box = styled.div`
  display: ${props => props.display ? props.display : 'block'};
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'none'};
  align-items: ${props => props.alignItems ? props.alignItems : 'none'};
  gap: ${props => props.flexGap ? props.flexGap : 'none'};
  flex-wrap: ${props => props.flexWrap ? props.flexWrap : 'nowrap'};

  ${props => responsiveSelector(props,'width', 'width')}
  ${props => responsiveSelector(props,'mt', 'margin-top')}
  ${props => responsiveSelector(props,'mb', 'margin-bottom')}
  ${props => responsiveSelector(props,'flexWrap', 'flex-wrap')}
`
