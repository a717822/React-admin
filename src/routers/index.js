import React, { Component } from 'react';
import {Route,HashRouter as Router} from 'react-router-dom';
import Dashboard from '../Pages/Dashboard/Dashboard';

/**账户管理**/
// 登录
import Login from '../Pages/Login/Login'
import '../assets/css/App.css';

// 表格
import TableShow from '../Pages/Table/TableShow'

// 错误页面
import Error_403 from '../Pages/Error_403/Error_403'

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
        component:TableShow
    },
    {
        path:'/Error_403',
        component:Error_403
    },
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
                                              key={r.path}/>;
                        })
                    }

                </div>
            </Router>
        );
    }
}

export default Routers;