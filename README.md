Clone the ReactJS-Styled-Form-Components project by doing:

git clone https://github.com/DeivaTeam/ReactJS-Styled-Form-Components.git

```
cd ReactJS-Styled-Form-Components

```

 ## Install all dependencies & Start developing
 
```
npm install

npm start
```

## Forms using Styled-Components
1. Styled-Components is a new CSS tool, created by Max Stoiber and Glen Maddern, which helps you organize CSS in your React project. It also works well with React Native. In this article, I will walk you through the main concepts of Styled-Components along with coding examples.

2. Three main goals of Styled-Components
First of all, let us talk about the purpose of Styles-Components and the benefits you will gain from using it.

3. Getting rid of the mapping between styles and components? Most of the time, a dumb component always has its own small style.css file related. So, you need to create two files every time you want to create the dumb component. This seems to be fine at the beginning, however, when your project is getting bigger, you will end-up with a whole bunch of files. Styled-Components allows you to write CSS directly inside your component, which perfectly solved this problem.
Building small and reusable components? Small components can easily be reused and tested. By using Styled-Components, you can easily build a small component and extend its capability with props.

4. Reducing the risk of specificity clash? Everyone might have encounter the specificity clash problem before. For example, you just wanted to add a margin to a specific paragraph, but it unintentionally impacts the other paragraphs. You can easily solve this problem by applying a CSS class only once. Styled-Components is actually doing this for us. It automatically generates a unique class name and pass it to our component.

5. Styled-components enable writing of CSS in JavaScript using tagged template literals. It removes the mapping between components and styles — component is made into a low-level styling construct, e.g.

 ## ./src/util/Form.js
<!-- prettier-ignore -->
```JSX
import styled, { css } from 'styled-components';

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
`
```
## ./src/components/Header/index.jsx

<!-- prettier-ignore -->
```JSX
import React, { Component } from 'react';
import { HeaderElem, HeaderHeading, Divider } from '../../util/Form'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { showHeader: true };
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({ showHeader: window.innerHeight > 400 });
        });
    }

    render() {
        return (
            <HeaderElem visible={this.state.showHeader}><HeaderHeading>Authentication Forms using Styled Components</HeaderHeading><Divider header/></HeaderElem>
        );
    }
}

export default Header;
```

## It makes it easy to conditionally style components
6. The idea is that you can style components based on their props, e.g.
  ## ./src/util/Form.js
<!-- prettier-ignore -->
```JSX
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
```
## ./src/components/Signup/index.jsx
<!-- prettier-ignore -->
```JSX
            <FormOptions>
              <FormOptionsItem>
                <FormIcon big
                  onClick={this.revealPassword}
                  className='fa fa-google-plus'
                />
              </FormOptionsItem>

              <FormOptionsItem>
                <FormIcon big
                  onClick={this.revealPassword}
                  className='fa fa-twitter'
                />
              </FormOptionsItem>

              <FormOptionsItem>
                <FormIcon big
                  onClick={this.revealPassword}
                  className='fa fa-facebook'
                />
              </FormOptionsItem>
            </FormOptions>
 ```
 
 This makes a lot of sense in React world. After all, component behaviour is controlled using the props. Does it make sense to directly attach prop values to styles? Maybe. But lets look into the component implementation:
 
 Creating a style sheet conditionally using the power of JavaScript gives you a lot of power. However, that also means that the style is a lot harder to interpret. 
 



