# translation-mate package

A short description of your package.

![A screenshot of your package](https://f.cloud.github.com/assets/69169/2290250/c35d867a-a017-11e3-86be-cd7c5bf3ff9b.gif)

有道翻译API

API key: 346426218keyfrom: translate-sublime
创建时间：2015-11-27网站名称：translate-sublime网站地址：http://dimpagger.github.io
* 使用API key 时，请求频率限制为每小时1000次，超过限制会被封禁。
* 如果您的应用确实需要超过每小时1000次请求，请与 translate-service@corp.youdao.com 联系。 并提供您的应用的详细信息（名称、功能、网站地址、使用API的方式、API key、预计访问频率、是否商业行为、截屏等等） 以及该应用访问有道翻译API时所使用的服务器IP，审核通过后可放宽访问限制。

参数说明：

* type：返回结果的类型，固定为data
* doctype：返回结果的数据格式，xml | json | jsonp
* version：当前版本
* q：要翻译的文本，UTF-8编码，200字符以内
* only：可选，dict表示之获取词典数据，translate表示之获取翻译数据，默认都获取
数据接口：http://fanyi.youdao.com/openapi.do?keyfrom=translate-sublime&key=346426218&type=data&doctype=<doctype>&version=1.1&q=要翻译的文本
http://fanyi.youdao.com/openapi?path=data-mode