import React, { Component } from 'react';

// 加载部分组件
import MenuSide from '../../components/MenuSide/MenuSide'
import TopHeader from '../../components/TopHeader/TopHeader'
import CopyRight from '../../components/CopyRight/CopyRight'

import TableTemplate from '../../components/TableTemplate/TableTemplate'

import { Layout , Button , Popconfirm, message} from 'antd';

class Table extends  Component {
    constructor(props){
        super(props);
        this.state = {
            tableSetting:{
                columns:[
                    {
                        title: '规则编号',
                        dataIndex: 'id',
                        width:'100px',
                        sorter: (ele1 , ele2) => {
                            return ele1.key - ele2.key;
                        },
                    },
                    {
                        title: '描述',
                        width:'100px',
                        dataIndex: 'description',
                    },
                    {
                        title: '状态',
                        width:'100px',
                        dataIndex: 'status',
                    },
                    {
                        title: '操作',
                        width:'100px',
                        dataIndex: 'operate',
                        render:  (text, record) => (
                            <span>
                            {
                                <Button type="primary" onClick={
                                    () => {
                                        this.setState({
                                            modalSetting:{
                                                visible:true
                                            }
                                        })
                                    }
                                }>编辑</Button>
                            }
                                <Popconfirm title="确定删除该组？"
                                            okText="删除"
                                            cancelText="取消"
                                            onConfirm={this.confirm}>
                                    <Button className="del_btn">删除</Button>
                                </Popconfirm>

                        </span>
                        ),
                    },
                ],
                data:[
                    {
                        key: '1',
                        id: 'TradeCode 1',
                        description: '这是一段描述',
                        status: '运行中'
                    },
                    {
                        key: '2',
                        id: 'TradeCode 2',
                        description: '这是一段描述',
                        status: '运行中'
                    },
                    {
                        key: '3',
                        id: 'TradeCode 3',
                        description: '这是一段描述',
                        status: '运行中'
                    },
                    {
                        key: '4',
                        id: 'TradeCode 4',
                        description: '这是一段描述',
                        status: '运行中'
                    },
                    {
                        key: '5',
                        id: 'TradeCode 5',
                        description: '这是一段描述',
                        status: '运行中'
                    },
                    {
                        key: '6',
                        id: 'TradeCode 6',
                        description: '这是一段描述',
                        status: '运行中'
                    },
                    {
                        key: '7',
                        id: 'TradeCode 7',
                        description: '这是一段描述',
                        status: '运行中'
                    },
                    {
                        key: '8',
                        id: 'TradeCode 8',
                        description: '这是一段描述',
                        status: '运行中'
                    },
                    {
                        key: '9',
                        id: 'TradeCode 9',
                        description: '这是一段描述',
                        status: '运行中'
                    },
                    {
                        key: '10',
                        id: 'TradeCode 10',
                        description: '这是一段描述',
                        status: '运行中'
                    },
                    {
                        key: '11',
                        id: 'TradeCode 11',
                        description: '这是一段描述',
                        status: '运行中'
                    },
                    {
                        key: '12',
                        id: 'TradeCode 12',
                        description: '这是一段描述',
                        status: '运行中'
                    },
                ],
                rowSelection:{}
            },
            modalSetting:{
                visible:false,
                confirmLoading:false
            },
            Modaltitle:"编辑",
            ModalText:"<p>测试</p>"
        }
    }
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

                        <TableTemplate columns={this.state.tableSetting.columns}
                                       data={this.state.tableSetting.data}
                                       rowSelection={this.state.tableSetting.rowSelection}

                                       Modaltitle={this.state.Modaltitle}
                                       visible={this.state.modalSetting.visible}
                                       confirmLoading={this.state.modalSetting.confirmLoading}
                                       handleOk={this.handleOk}
                                       handleCancel={this.handleCancel}
                                       ModalText={this.state.ModalText}/>
                    </div>

                    {/*Content end*/}

                    {/*copyright start*/}

                    <CopyRight />

                    {/*copyright end*/}

                </Layout>
            </Layout>
        )
    }
    handleOk = () => {
        this.setState({
            modalSetting:{
                visible:false,
                confirmLoading:true
            }
        });
    }
    handleCancel = () => {
        this.setState({
            modalSetting:{
                visible:false
            }
        });
    }
    confirm = () =>{
        message.success('删除成功');
    }
}

export default Table;