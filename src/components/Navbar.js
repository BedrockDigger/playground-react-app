import React, { Component } from 'react'
import { Menu, Progress, Container, Grid, Segment } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
    state = { activeItem: 'cover', activeItemColor: 'red' }

    handleItemClick = (e, { name, color }) => {
        this.setState({ activeItem: name, activeItemColor: color })
    }

    handle

    render() {
        const { activeItem, activeItemColor } = this.state
        return (
            <div id='Navbar'>
                <Menu fluid borderless widths={4} size='large' style={{ margin: 0, borderRadius: 0 }}>
                    <Menu.Item
                        header
                        name='cover'
                        color='red'
                        active={activeItem === 'cover'}
                        onClick={this.handleItemClick}
                        as={NavLink}
                        to='/cover'
                        style={{ borderRadius: 0 }}
                    >
                        Pano
                    </Menu.Item>
                    <Menu.Item
                        name='num'
                        color='yellow'
                        active={activeItem === 'num'}
                        onClick={this.handleItemClick}
                        as={NavLink}
                        to='/num'
                    >
                        Numbers
                    </Menu.Item>
                    <Menu.Item
                        name='art'
                        color='teal'
                        active={activeItem === 'art'}
                        onClick={this.handleItemClick}
                        as={NavLink}
                        to='/art'
                    >
                        Arts
                    </Menu.Item>
                    <Menu.Item
                        name='lit'
                        color='purple'
                        active={activeItem === 'lit'}
                        onClick={this.handleItemClick}
                        as={NavLink}
                        to='/lit'
                    >
                        Literature
                    </Menu.Item>
                </Menu>
                <Progress percent={11} attached='bottom' color={activeItemColor} />
            </div>
        )
    }
}

export default Navbar