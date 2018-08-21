import React, { Component } from 'react';
import { FooterElem, Divider } from '../../util/Form'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { showFooter: true };
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({ showFooter: window.innerHeight > 830 });
        });
    }

    render() {
        return (
            <FooterElem visible={this.state.showFooter}><Divider />© 2018 Tendersoftware.</FooterElem>
        );
    }
}

export default Footer;