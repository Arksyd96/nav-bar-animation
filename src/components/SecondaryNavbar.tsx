import React, { useState } from 'react';
import Styled from '@emotion/styled'

const Navbar = Styled.nav((props: any) => ({
    backgroundColor: '#25283d',
    height : '70px',
    width: '100%',
    transition: '-webkit-transform 0.6s',
    'ul' : {
        display : 'flex',
        flexDirection : 'row',
        height : '100%',
        marginBottom : 0
    },
    'li' : {
        listStyle : 'none',
        padding : '21px'
    },
    'a' : {
        height : '100%',
        color : '#fff',
        padding : '0 1em',
        fontSize : '1.1rem',
        opacity : 0.5,
        ':hover' : {
            opacity : 1
        }
    }
}))

interface LooseObject {
    [key: string]: any
}

const secondaryNavbar = (props : any) => {
    // style for when the subnav is fixed under header 
    // we use this LooseObject type because in normal typescript we cannot add fields on objects
    // objects are immutable so we have to use 'any' !
    // in this case we don't need it of course , i just add it to give the information
    const fixedState : LooseObject = {
        position : 'fixed',
        top : '64px'
    }
    // we must use another object , or the style won't change for the animation
    const slideState = {
        ...fixedState,
        transform : 'translateY(-64px)'
    }

    const [stick, setStick] = useState(false)
    const headerHeight = 64;  // 64px is the height of the header and 600px of the image
    const heroHeight = 600;   // so 600+64 is the position of the subnav
                              // it means that when the user scrolls the image it will be 600-64 ! quick maths

    // these are equivalent ! are equivalent :
    // -------------------------
    // componentDidMount() {
    //     window.addEventListener("scroll", this.handleScroll);
    // }
    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);
    // })
    // -------------------------
    // componentWillUnmount() {
    //     window.removeEventListener("scroll", this.handleScroll);
    // }
    // useEffect(() => {
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     }
    // })
    // -------------------------
    
    // thi method is the equivalent of adding an event listener with : 
    // window.addEventListener("scroll", this.handleScroll) in App.tsx
    // i tried both methods and i prefer this one cause you dont have to call lifecycle hooks
    window.onscroll = () => {
        if (window.scrollY >= heroHeight - headerHeight ){ // means after scroll , fix the subnav at 64px
            setStick(true)
        } else {
            setStick(false)
        }
        console.log(window.scrollY)
    }

    return (
        <Navbar style={stick ? props.slideUp ? slideState : fixedState : {}}>
            <ul>
                <li><a href="#">Intro</a></li>
                <li><a href="#">Our Products</a></li>
                <li><a href="#">Our Services</a></li>
                <li><a href="#">Shopping tools</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </Navbar>
    )

}

export default secondaryNavbar;