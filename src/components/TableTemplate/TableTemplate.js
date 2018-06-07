// 集成ant design的Table和Modal

import React, { Component } from 'react';
import { Table , Modal} from 'antd';

import './TableTemplate.css'

class TableTemplate extends Component {
    render(){
        return(
            <div>
                <Table columns={this.props.columns}
                       dataSource={this.props.data}
                       rowSelection={this.props.rowSelection} />

                <Modal title={this.props.Modaltitle}
                       visible={this.props.visible}
                       confirmLoading={this.props.confirmLoading}
                       onOk={this.props.handleOk}
                       onCancel={this.props.handleCancel}
                       cancelText={"取消"}
                       okText={"确认"}>
                        <div id="content" dangerouslySetInnerHTML={
                            {
                                __html: this.props.ModalText
                            }
                        }></div>
                </Modal>
            </div>
        )
    }
}

export default TableTemplate;