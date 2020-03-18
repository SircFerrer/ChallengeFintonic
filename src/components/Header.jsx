import React, { Component } from 'react'
import "../stylesheets/Header.scss"

export default class Header extends Component {
    render() {
        return (
            <div className="menu">
                
                    <button className="menu__btn"><i className="fas fa-bars"></i> browse</button>
                    <button className="menu__btn"><i className="fas fa-plus"></i> add new questions</button>
                    <button className="menu__btn"><i className="fas fa-cogs"></i> api</button>
                    <button className="menu__btn"><i className="fas fa-comments"></i> discuss</button>
                    <button className="menu__btn"><i className="fas fa-sign-in-alt"></i> login</button>

                
            </div>
            
        )
    }
}
