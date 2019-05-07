import React from 'react';
import Styled from '@emotion/styled'
import { Layout } from 'antd'

const { Header } = Layout

const Nav = Styled.ul({
    float: 'right',
    padding: '0vw 2vw',
    'ul': {
        display: 'flex',
        flexDirection: 'row',
        zIndex: 2,
        marginBottom: 0
    },
    'li': {
        marginLeft: '2vw',
        listStyle: 'none'
    },
    'a': {
        color: '#25283D',
        fontSize: '1.1rem',
        ':hover': {
            color: '#8F3985'
        }
    }
})

const Navbar = Styled(Header)`
    background-color : white;
    width: 100%;
    position: fixed;
    transition : -webkit-transform 0.6s;
`


const navbar = (props: any) => {

    // // Adds an event listener when the component is mount.
    // componentDidMount() {
    //     window.addEventListener("scroll", this.handleScroll);
    // }

    // // Remove the event listener when the component is unmount.
    // componentWillUnmount() {
    //     window.removeEventListener("scroll", this.handleScroll);
    // }

    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     }
    // })
    return (
        <Navbar style={props.visible ? {} : { transform: 'translateY(-100%)' }}>
            <a href="#">logo</a>
            <Nav>
                <ul>
                    <li><a href="#">The team</a></li>
                    <li><a href="#">Our Products</a></li>
                    <li><a href="#">Our Services</a></li>
                    <li><a href="#">Shopping tools</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </Nav>
        </Navbar>
    )

}

export default navbar;