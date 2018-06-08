import React, { Component } from 'react';
import './ErrorTemplate.css'
import error_403 from '../../assets/img/403.svg'
import error_404 from '../../assets/img/404.svg'
import error_500 from '../../assets/img/500.svg'

import { Layout , Button} from 'antd';
const { Content } = Layout;


class ErrorTemplate extends Component {
    constructor(props){
        super(props);
        let data;
        switch (props.errorSet.type){
            case '403':
                data = {
                    imgSrc:error_403,
                    title:'403',
                    dec:'抱歉，你无权访问该页面'
                };
                break;
            case '404':
                data = {
                    imgSrc:error_404,
                    title:'404',
                    dec:'抱歉，你访问的页面不存在'
                };
                break;
            case '500':
                data = {
                    imgSrc:error_500,
                    title:'500',
                    dec:'抱歉，服务器出错了'
                };
                break;
            default:
                    break;
        }
        this.state = {
            data
        }
    }
    render(){
        return(
            <Content style={{ margin: 24, minHeight: 900}}>
                <div className="error_info">
                    <div className="error_bg">
                        <div className="error_img" style={{backgroundImage:"url("+this.state.data.imgSrc+")"}}/>
                    </div>

                    <div className="error_content">
                        <h1>{this.state.data.title}</h1>
                        <div className="error_text">{this.state.data.dec}</div>
                        <div className="error_btn">
                            <a onClick={this.returnHome} href="#/Dashboard">
                                <Button type="primary">返回主页</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </Content>
        )
    }
    returnHome = () => {
        sessionStorage.setItem('cate','');
        sessionStorage.setItem('parentMenu','');
        sessionStorage.setItem('menuItem','');
        sessionStorage.setItem('current','');
    }
}

export default ErrorTemplate;