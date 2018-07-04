/**
 * 原生ajax请求
 * @param config
 */
let yangAjax = (config) =>{
    config = config || {};
    config.method = (config.method || "GET").toUpperCase();
    config.dataType = config.dataType || "json";
    config.async = config.async || true;
    config.headers = config.headers || {};
    config.data = config.data || {};

    let xhr = new XMLHttpRequest();

    let params = [];
    let postData;

    if(!isFormData(config.data)){
        for (let key in config.data){
            let param = config.data[key]?config.data[key]:'';
            params.push(encodeURIComponent(key) + '=' + encodeURIComponent(param));
        }
        postData = params.join('&');
    }else {
        postData = config.data
    }


    if (config.method === 'POST'){
        xhr.open('POST', config.url, config.async );

        if(!isFormData(config.data)){
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        }

        if(config.headers){
            for (let key in config.headers){
                xhr.setRequestHeader(key,config.headers[key]);
            }
        }

        xhr.send(postData);
    } else {
        xhr.open('GET', config.url + '?' + postData, config.async);
        if(config.headers){
            for (let key in config.headers){
                xhr.setRequestHeader(key,config.headers[key]);
            }
        }
        xhr.send(null);
    }


    xhr.onreadystatechange = () => {
        let res = xhr.responseText;
        let ret = {};

        if(xhr.readyState === 4){
            if(xhr.status === 200){
                ret.msg = 'The request is successful';
                ret.data = JSON.parse(res);
                ret.statusText = xhr.statusText;
                ret.status = xhr.status;

                config.success && config.success(ret.data , ret.msg , ret.status);
            } else {
                ret.msg = 'The request failed';
                ret.statusText = xhr.statusText;
                ret.status = xhr.status;

                config.fail && config.fail(ret.status , ret.statusText);
            }
        }
    };
};

function isFormData(v) {
    return Object.prototype.toString.call(v) === '[object FormData]';
}

export {
    yangAjax
}