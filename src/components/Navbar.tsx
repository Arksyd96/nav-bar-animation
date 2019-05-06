import React, { useState, useEffect } from 'react';
import Styled from '@emotion/styled'
import '../App.css'

const Ul = Styled.ul({
	display: 'flex',
	flexDirection: 'row',
	zIndex: 2
})

const Li = Styled.li({
	marginLeft: '2vw',
	listStyle: 'none'
})

const A = Styled.a({
	color: '#25283D',
	fontSize: '1.1rem',
	':hover': {
		color: '#8F3985'
	}
})

const NavBar = Styled.header( (props : any) => ({
    backgroundColor : 'white',
    width: '100%',
    height : '60px',
    padding: '10px',
    position: 'fixed',
    top: props.visible ? 0 : -60,
    transition: 'top 0.6s'
}))

const navBar = () => {
    const [ state , setState ] = useState({prevScrollpos : window.pageYOffset, visible : true})
    // constructor(props: any) {
    //     super(props);

    //     this.state = {
    //         prevScrollpos: window.pageYOffset,
    //         visible: true
    //     };
    // }
    
    // // Adds an event listener when the component is mount.
    // componentDidMount() {
    //     window.addEventListener("scroll", this.handleScroll);
    // }

    // // Remove the event listener when the component is unmount.
    // componentWillUnmount() {
    //     window.removeEventListener("scroll", this.handleScroll);
    // }

    // Hide or show the menu.
    const handleScroll = () => {
        const { prevScrollpos } = state;

        const currentScrollPos = window.pageYOffset;
        const visible = !(currentScrollPos > prevScrollpos && currentScrollPos > 700)

        setState({
            prevScrollpos: currentScrollPos,
            visible
        });
    };

    useEffect (() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    })

    
        return (
            <NavBar visible={state.visible}>
                <a href="#">logo</a>
                <nav style={{ float: 'right', padding: '0vw 2vw' }}>
                    <Ul>
                        <Li><A href="#">The team</A></Li>
                        <Li><A href="#">Our Products</A></Li>
                        <Li><A href="#">Our Services</A></Li>
                        <Li><A href="#">Shopping tools</A></Li>
                        <Li><A href="#">Contact Us</A></Li>
                    </Ul>
                </nav>
            </NavBar>
        )
    
}

export default navBar;