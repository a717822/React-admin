// 登录

import React, { Component } from 'react';
import './Login.css'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import CopyRight from '../../components/CopyRight/CopyRight'

class Login extends Component {
    state = {
        loading: false,
        iconLoading: false,
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.setState({ iconLoading: true });
            }
        });

    };
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div id="login">
                <div className="content_login">
                    <div className="login_top">
                        <div className="head_login">
                            <a>
                                <span>后台管理系统</span>
                            </a>
                        </div>
                    </div>
                    <div className="login_main">
                        <div className="login_content">
                            <Form  className="login-form" layout='vertical'>
                                <Form.Item>
                                    {getFieldDecorator('userName', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '用户名不得为空!'
                                            }],
                                    })(
                                        <Input size="large" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" />
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('password', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '密码不得为空!'
                                            }],
                                    })(
                                        <Input size="large" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
                                    )}
                                </Form.Item>
                                <div>
                                    {getFieldDecorator('remember', {
                                        valuePropName: 'checked',
                                        initialValue: true,
                                    })(
                                        <Checkbox>自动登录</Checkbox>
                                    )}
                                </div>
                                <Form.Item>
                                    <Button size='large'
                                            type="primary"
                                            htmlType="submit"
                                            className="login-form-button" onClick={this.handleSubmit} loading={this.state.iconLoading}>
                                        登录
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
                <CopyRight />
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(Login);

export default WrappedNormalLoginForm;