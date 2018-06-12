import React, { Component } from 'react';

import './MenuSide.css'
import { Layout, Menu , Icon} from 'antd';
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class MenuSide extends  Component {
    constructor(props){
        super(props);
        this.state = {
            menus:[
                {
                    title:'数据管理',
                    menu:[
                        {
                            id:1,
                            url:'#/Dashboard',
                            icon:'dashboard',
                            title:'数据显示'
                        }
                    ]
                },
                {
                    title:'显示页面',
                    menu:[
                        {
                            id:2,
                            url:'#/TableShow',
                            icon:'table',
                            title:'表格'
                        },
                        {
                            id:3,
                            icon:'warning',
                            title:'异常页面',
                            child:[
                                {
                                    id:4,
                                    url:'#/ErrorPage/403',
                                    icon:'warning',
                                    title:'403'
                                },
                                {
                                    id:5,
                                    url:'#/ErrorPage/404',
                                    icon:'warning',
                                    title:'404'
                                },
                                {
                                    id:10,
                                    url:'#/ErrorPage/500',
                                    icon:'warning',
                                    title:'500'
                                },
                            ]
                        }
                    ]
                },
                {
                    title:'输入页面',
                    menu:[
                        {
                            id:6,
                            icon:'form',
                            title:'富文本编辑器',
                            url:'#/Input/Editor'
                        },
                        {
                            id:7,
                            icon:'user',
                            title:'nav 3',
                            child:[
                                {
                                    id:8,
                                    url:'/',
                                    icon:'mail',
                                    title:'Option 3'
                                },
                                {
                                    id:9,
                                    url:'/',
                                    icon:'mail',
                                    title:'Option 4'
                                }
                            ]
                        }
                    ]
                },
            ],
            current:sessionStorage.getItem('current') ? sessionStorage.getItem('current'):'1',
            sub:sessionStorage.getItem('sub') ? sessionStorage.getItem('sub'):'',
        };
    }
    chooseMenu = (e) => {
        let props = e.item.props;

        this.setState({
            current: e.key
        });

        sessionStorage.setItem('menuItem',props.menu);
        sessionStorage.setItem('cate',props.cate);
        sessionStorage.setItem('parentMenu',props.parent);
        sessionStorage.setItem('current',e.key);
        sessionStorage.setItem('sub',props.sub);
    };
    render(){
        return(
            <Sider breakpoint="lg" collapsedWidth="0">
                <div className="logo"></div>
                <div className={"menu"}>
                    <Menu mode="inline"
                          theme="dark"
                          selectedKeys={[this.state.current]}
                          onClick={this.chooseMenu}
                          defaultOpenKeys={[this.state.sub]}>
                        {
                            this.state.menus.map((cate) => {
                                return <Menu.ItemGroup key={cate.title}
                                            title={cate.title}>
                                            {
                                                cate.menu.map((m)=>{
                                                    if (m.url)
                                                        return <Menu.Item key={m.id}
                                                                          cate={cate.title}
                                                                          menu={m.title}
                                                                          parent="">
                                                                    <a href={m.url}>
                                                                        <Icon type={m.icon} />
                                                                        {m.title}
                                                                    </a>
                                                                </Menu.Item>;
                                                    else
                                                    {
                                                        if (!m.child)
                                                            return <Menu.Item key={m.id}
                                                                              cate={cate.title}
                                                                              menu={m.title}
                                                                              parent="">
                                                                        <a href="#/Dashboard">
                                                                            <Icon type={m.icon} />
                                                                            {m.title}
                                                                        </a>
                                                                    </Menu.Item>;
                                                        else
                                                            return <SubMenu key={m.id} title={
                                                                        <span>
                                                                            <Icon type={m.icon} />
                                                                            <span>{m.title}</span>
                                                                        </span>}>
                                                                {
                                                                    m.child.map((menu) => {
                                                                        return <Menu.Item key={menu.id}
                                                                                          cate={cate.title}
                                                                                          menu={menu.title}
                                                                                          parent={m.title}
                                                                                          sub={m.id}>
                                                                                    <a href={menu.url}>
                                                                                        <Icon type={menu.icon} />
                                                                                        {menu.title}
                                                                                    </a>
                                                                                </Menu.Item>;
                                                                    })
                                                                }

                                                            </SubMenu>
                                                    }

                                                })
                                            }
                                       </Menu.ItemGroup>
                            })
                        }
                    </Menu>
                </div>
            </Sider>
        )
    }
}

export default MenuSide