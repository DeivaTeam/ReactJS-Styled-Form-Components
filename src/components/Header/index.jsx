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