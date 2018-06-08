import React, { Component } from 'react';
import { Icon , BackTop  } from 'antd';
import './CopyRight.css';

class CopyRight extends Component {
    render(){
        return(
            <div className="copy_right">
                <BackTop />
                Copyright <Icon type="copyright" /> 2018 Yangzilong
            </div>

        )
    }
}

export default CopyRight;