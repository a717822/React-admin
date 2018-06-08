import React, { Component } from 'react';

// 加载部分组件
import MenuSide from '../../components/MenuSide/MenuSide'
import TopHeader from '../../components/TopHeader/TopHeader'
import CopyRight from '../../components/CopyRight/CopyRight'
import ErrorTemplate from '../../components/ErrorTemplate/ErrorTemplate'

import { Layout } from 'antd';

class Error_403 extends Component {
    constructor(props){
        super(props);
        this.state = {
            errorSet:{
                type:'404'
            },
            pageType:'error'
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
                    <TopHeader type={this.state.pageType} />
                    {/*TopHeader end*/}

                    {/*Content start*/}
                    <ErrorTemplate errorSet={this.state.errorSet} />
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