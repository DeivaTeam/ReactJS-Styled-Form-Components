import styled, { css } from 'styled-components';

export const FormContainer = document.querySelector('.Form-container')

export const HeaderElem = styled.header`
  padding-top: 32px;
  padding-bottom: 15px;
`

export const HeaderHeading = styled.h1`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  color: #585858;
`

export const FormWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
  border-radius: 5px;
`

export const FormHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
`

export const FormHeading = styled.h1`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  color: #585858;
`

export const FormBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`

export const FormFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 35px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: center;
  }
`

export const FormInput = styled.input`
  padding: 10px 0;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color .25s ease-in;

  &:focus {
    border-bottom-color: #ff6699;
    outline: 0;
  }

  &:focus { 
    &::-webkit-input-placeholder {
      position: relative;
      color: #ff6699;
      top: -10px;
      font-size: 12px;
	    left: 0px;
      opacity: 1;
    }
  }
`

export const FormIcon = styled.span`
  color: ff6699;
  cursor: pointer;
  opacity: .25;
  transition: opacity .25s ease-in;

  &:hover {
    opacity: .95;
    color: #ff6699;
  }

  ${props => props.big && css`
    font-size: 26px;
  `}

  ${props => props.eye && css`
    position: absolute;
    top: 8px;
    right: 0;
  `}
  
  ${props => props.small && css`
    font-size: 14px;
  `}
`

export const FormOptionsNote = styled.small`
  padding-top: 8px;
  display: block;
  width: 100%;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
`

export const FormOptions = styled.ul`
  padding: 0;
  margin: 16px 0 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  list-style-type: none;
`

export const FormOptionsItem = styled.li`
  &:nth-of-type(n+2) {
    margin-left: 16px;
  }
`

export const FormButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #ff6699;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, .08);
  cursor: pointer;
  transition: all .25s cubic-bezier(.02, .01, .47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, .16);
    transform: translate(0, -5px);
  }
`

export const FormLink = styled.a`
  display: inline-block;
  font-size: 12px;
  text-decoration: none;
  color: #aaa;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: color .25s ease-in;

  &:hover {
    color: #ff6699;
  }
`

export const Divider = styled.hr`
  height: 10px;
  border: 1;
  box-shadow: inset 0 9px 9px -3px #ff6699;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  border-radius: 5px;

  ${props => props.header && css`
    height: 2px;
    box-shadow: inset 0 5px 5px -3px #ff6699;
    width: 500px;
  `}
`;

export const FooterElem = styled.footer`
  position: fixed;
  bottom: 0;
  padding: 5px 0px;
  color: #585858;
  text-align: center;
  left: 0;
  width: 100%;
  transform: translateY(${props => props.visible ? '0px' : '60px'});
  transition: transform .5s ease-in;
`;