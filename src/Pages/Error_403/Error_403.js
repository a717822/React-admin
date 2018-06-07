import React, { Component } from 'react';

// 加载部分组件
import MenuSide from '../../components/MenuSide/MenuSide'
import TopHeader from '../../components/TopHeader/TopHeader'
import CopyRight from '../../components/CopyRight/CopyRight'

import { Layout } from 'antd';
const { Content } = Layout;

class Error_403 extends Component {
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
                    <Content style={{ margin: 24, minHeight: 900 }}>
                        Error
                    </Content>

                    {/*Content end*/}

                    {/*copyright start*/}

                    <CopyRight />

                    {/*copyright end*/}

                </Layout>
            </Layout>
        )
    }
}

export default Error_403;