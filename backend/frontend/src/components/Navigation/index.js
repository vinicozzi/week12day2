import React from 'react';
import {useState, useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'
import ProfileButton from "./ProfileButton"

function Navigation() {

const sessionUser = useSelector(state => state.session.user)

let sessionLinks

if (sessionUser) {

    sessionLinks = (<ProfileButton user={sessionUser} />
    )

} else {

    sessionLinks = (

        <>
        <NavLink to="/login">Log in</NavLink>
        <NavLink to="signup">Sign up</NavLink>

        </>
    )

}

return (

<ul>
<li>
<NavLink exact to="/">Home</NavLink>
{sessionLinks}
</li>
</ul>
);
}

export default Navigation;




