import React, { Component , ajax} from 'react';
import { Layout , Button  } from 'antd';

// 加载部分组件
import MenuSide from '../../../components/MenuSide/MenuSide'
import TopHeader from '../../../components/TopHeader/TopHeader'
import CopyRight from '../../../components/CopyRight/CopyRight'

import E from 'wangeditor'

import './Editor.css'

class Editor extends  Component {
    constructor(props){
        super(props);
        this.state = {
            editorContent: ''
        };
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
                    <div style={{ background: '#fff', minHeight:'1000px',marginTop:10}}>
                        <div className="editor_content">
                            {/* 将生成编辑器 */}
                            <div ref="editorElem" style={{textAlign: 'left'}} />

                            <div className="editor_btn">
                                <Button  type="primary" onClick={this.clickHandle.bind(this)}>获取HTML</Button>
                            </div>

                            <div className="editor_con">
                                <h1>显示编辑器内容</h1>
                                <div  dangerouslySetInnerHTML={
                                    {
                                        __html: this.state.editorContent
                                    }
                                }>
                            </div>

                        </div>



                        </div>
                    </div>

                    {/*copyright start*/}

                    <CopyRight />

                    {/*copyright end*/}

                </Layout>
            </Layout>
        )
    }
    componentDidMount() {
        const elem = this.refs.editorElem;
        const editor = new E(elem);
        // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
        editor.customConfig.onchange = (html) => {
            this.setState({
                editorContent: html
            })
        };

        editor.customConfig.uploadImgShowBase64 = true;
        editor.create()
    }
    clickHandle() {
        alert(this.state.editorContent)
    }
}

export default Editor;