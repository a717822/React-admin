import React, { Component } from 'react';

// 加载部分组件
import MenuSide from '../../components/MenuSide/MenuSide'
import TopHeader from '../../components/TopHeader/TopHeader'
import CopyRight from '../../components/CopyRight/CopyRight'

import './Dashboard.css'

import { Layout ,  Card, Col, Row } from 'antd';
// const { Content} = Layout;


class Dashboard extends  Component {
    render(){
        return(
            <Layout>

                {/*MenuSide start*/}
                <MenuSide />
                {/*MenuSide end*/}

                <Layout>

                    {/*TopHeader start*/}
                    <TopHeader />
                    {/*TopHeader end*/}

                    {/*Content start*/}
                    <div style={{ background: '#ECECEC', padding: '30px' , minHeight:'1000px'}}>
                        <Row gutter={16}>
                            <Col md={8}>
                                <Card title="新用户"
                                      bordered={false}
                                      extra={<a href="#/Dashboard">查看更多</a>} style={{marginBottom:20}}>
                                      0个
                                </Card>
                            </Col>
                            <Col md={8}>
                                <Card title="新文章"
                                      bordered={false}
                                      extra={<a href="#/Dashboard">查看更多</a>} style={{marginBottom:20}}>
                                    0篇
                                </Card>
                            </Col>
                            <Col md={8}>
                                <Card title="新表格"
                                      bordered={false}
                                      extra={<a href="#/Dashboard">查看更多</a>} style={{marginBottom:20}}>
                                    1个
                                </Card>
                            </Col>
                        </Row>

                    </div>

                    {/*Content end*/}

                    {/*copyright start*/}

                    <CopyRight />

                    {/*copyright end*/}

                </Layout>
            </Layout>
        )
    }
}

export default Dashboard