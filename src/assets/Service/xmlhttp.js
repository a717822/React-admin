/**
 *  原生JS请求方法
 * @type {{
 *          init: xmlhttp.init   初始化,
 *          method: xmlhttp.method  非表单请求方法 ,
 *          formMethod: xmlhttp.formMethod  表单提交方法
 * }}
 */

let xmlhttp = {
    config: () => {
        return  {
            URL: 'xxx'
        };
    },

    init: () => {
        return new XMLHttpRequest();
    },

    /**
     * 原生JS 非表单Ajax请求方法
     * @param method   GET/POST
     * @param url     请求数据接口
     * @param async 同/异步
     * @param data    需要传输的值 Object/string
     * @param callback  回调函数
     */

    method: (method, url , async , data , callback) => {
        let xhr = xmlhttp.init();
        let config = xmlhttp.config();
        let baseUrl = config.URL + url;

        let params = [];

        for (let key in data){
            let param = data[key]?data[key]:''
            params.push(key + '=' + param);
        }
        let postData = params.join('&');

        if (method.toUpperCase() === 'POST'){
            xhr.open('post',baseUrl,async);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            xhr.send(postData);
        } else {
            xhr.open('get', baseUrl + '?' + postData, async);
            xhr.send(null);
        }

        let ret = {};

        xhr.onreadystatechange = () => {
            let res = xhr.responseText;

            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    ret.msg = 'The request is successful';
                    ret.data = JSON.parse(res);
                } else {
                    ret.msg = 'The request failed';
                }

                ret.statusText = xhr.statusText;
                ret.status = xhr.status;

                return callback(ret);
            }
        };
    },

    /**
     * 纯JS 表单提交请求方法 用于图片上传
     * @param url   数据接口名
     * @param data  表单数据
     * @param callback  回调函数
     */
    formMethod:(url,data,callback) => {
        let xhr = xmlhttp.init();
        let config = xmlhttp.config();
        let baseUrl = config.URL + url;
        xhr.open('post',baseUrl,true);
        xhr.send(data);

        let ret = {};
        xhr.onreadystatechange = function () {
            let res = xhr.responseText;

            if(xhr.readyState === 4){
                if(xhr.status === 200){

                    ret.msg = 'The request is successful';
                    ret.data = JSON.parse(res);

                } else {

                    ret.msg = 'The request failed';

                }

                ret.statusText = xhr.statusText;
                ret.status = xhr.status;

                return callback(ret);
            }
        };
    }
};

export {
    xmlhttp
}