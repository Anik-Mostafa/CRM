import { BarChart } from '@material-ui/icons'
import { Apps, } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
function Header(props) {
    return (
        <div className="header">
            <div className="header__title">
                <Apps className="header__title__icon"/>
                <p className="header__title__text">{props.name}</p>
            </div>
            {props.name==="Dashboard"?(
                <div className="header__routes">
                <p className="header__routes__text">Dashboard</p>
            </div>
            ):(
                <div className="header__routes">
                    <Link to="/"><p className="header__routes__link">Dashboard</p></Link>
                    <p className="header__routes__line">/</p>
                    <p className="header__routes__text">{props.name}</p>
                </div>
            )}
            
        </div>
    )
}

export default Header
