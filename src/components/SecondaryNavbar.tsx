import React, { useState } from 'react';
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

const NavBar = Styled.nav((props: any) => ({
    backgroundColor: 'blue',
    height : '50px',
    width: '100%'
}))

const secondaryNavbar = () => {
    const [stick, setStick] = useState(false)
    const [ pos, setPos ] = useState(60)
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

    const sticky = {
        position : 'fixed',
        top : pos,
        width : '100%',
        transition : 'top 0.6s'
    }

    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     }
    // })
    window.onscroll = () => {
        if(window.pageYOffset > 540){
            if (window.pageYOffset > 700){
                setPos(0)
            }else {
                setPos(60)
            }
            setStick(true)
        } else {
            setStick(false)
        }
    }

    return (
        <NavBar style={stick ? sticky : null}>
            <Ul>
                <Li><A href="#">Intro</A></Li>
                <Li><A href="#">Our Products</A></Li>
                <Li><A href="#">Our Services</A></Li>
                <Li><A href="#">Shopping tools</A></Li>
                <Li><A href="#">Contact Us</A></Li>
            </Ul>
        </NavBar>
    )

}

export default secondaryNavbar;