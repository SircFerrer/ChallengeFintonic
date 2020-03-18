import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><i class="fas fa-bars"></i> browse</li>
                    <li><i class="fas fa-plus"></i> add new questions</li>
                    <li><i class="fas fa-cogs"></i> api</li>
                    <li><i class="fas fa-comments"></i> discuss</li>
                    <li><i class="fas fa-sign-in-alt"></i> login</li>

                </ul>
            </div>
        )
    }
}
