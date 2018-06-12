import React, { Component } from 'react';
import {Route,HashRouter as Router} from 'react-router-dom';
import Dashboard from '../Pages/Dashboard/Dashboard';

/**账户管理**/
// 登录
import Login from '../Pages/Login/Login'

// 表格
import TableShow from '../Pages/Table/TableShow'

// 错误页面
import ErrorPage_403 from '../Pages/ErrorPage/403'
import ErrorPage_404 from '../Pages/ErrorPage/404'
import ErrorPage_500 from '../Pages/ErrorPage/500'

// 表单
import Editor from '../Pages/Input/Editor/Editor'

const router = [
    {
        path:'/',
        component:Login,
    },
    {
        path:'/Dashboard',
        component:Dashboard
    },
    {
        path:'/TableShow',
        component:TableShow,
    },
    {
        path:'/ErrorPage/403',
        component:ErrorPage_403
    },
    {
        path:'/ErrorPage/404',
        component:ErrorPage_404
    },
    {
        path:'/ErrorPage/500',
        component:ErrorPage_500
    },
    {
        path:'/Input/Editor',
        component:Editor
    }
];

class Routers extends Component {
    render() {
        return (
            <Router>
                <div className='test'>
                    {
                        router.map((r) => {
                            if(r.path === '/')
                                return <Route  exact
                                               path={r.path}
                                               component={r.component}
                                               key={r.path}/>;
                            else
                                return <Route path={r.path}
                                              component={r.component}
                                              key={r.path}  />;
                        })
                    }

                </div>
            </Router>
        );
    }
}

export default Routers;