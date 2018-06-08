import React, { Component } from 'react';
import './TopHeader.css'

import { Layout,Menu, Dropdown, Avatar , Icon , Breadcrumb} from 'antd';
const { Header } = Layout;


const menu = (
    <Menu className="top_menu">
        <Menu.Item key="1">
            <Icon type="setting" />
            <span>个人中心</span>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="2">
            <a href="#/">
                <Icon type="logout" />
                <span>退出登录</span>
            </a>
        </Menu.Item>
    </Menu>
);

class TopHeader extends  Component {
    constructor(props) {
        super(props);
        let style;
        if(props.type === 'error') {
            style = {display:'none'};
        }
        this.state = {
            cate:sessionStorage.getItem('cate')?sessionStorage.getItem('cate'):'数据管理',
            parentMenu:sessionStorage.getItem('parentMenu')?sessionStorage.getItem('parentMenu'):'',
            menuItem:sessionStorage.getItem('menuItem')?sessionStorage.getItem('menuItem'):'数据显示',
            style:style
        };
    }
    render(){
        return(
            <div>
                <Header className='topHeader'>
                    <div className="header">
                        <Dropdown overlay={menu}>
                            <div className="ant-dropdown-link">
                                <Avatar  icon="user" />
                                <span>admin</span>
                            </div>
                        </Dropdown>
                    </div>
                </Header>
                <div className="pageHeader" style={this.state.style}>
                    <div className="breadcrumb">
                        <Breadcrumb>
                            <Breadcrumb.Item href="#/Dashboard">
                                <Icon type="home" />
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <span>{this.state.cate}</span>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                {this.state.menuItem}
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <h1>{this.state.menuItem}</h1>
                </div>
            </div>

        )
    }
}

export default TopHeader;