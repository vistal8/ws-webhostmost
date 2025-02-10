# webhostmost 部署vmess单协议节点和哪吒

## 简单文字步骤

#### 1、 CF反代

先利用仓库里的worker.js在cf的worker里反代webhostmost给的域名，然后绑定自定义域名，把绑定的自定义域名即cf反代域名填入nodejs里面，更改uuid，哪吒等参数

##### 2、 上传文件

上传文件index.js和package.json到domains/xxx.freewebhostmost.com/public_html文件夹里，删掉文件夹下的index.html

##### 3、 创建nodejs项目

创建nodejs，选16.20版本(必须)，product环境，目录填上一步文件夹domains/xxx.freewebhostmost.com/public_html，启动文件填index.js，保存


##### 4、 开启权限，安装依赖

上一步保存完，页面上方会出现source /home/xxx/nodevenv/domains/xxx.freewebhostmost.com/public_html/16/bin/activate && cd /home/xxx/domains/xxx.freewebhostmost.com/public_html这样一句话，复制下来打开Development Tools➡terminal终端粘贴回车，然后，再输入npm install安装依赖

##### 5、 重启nodejs

安装完依赖回到nodejs创建页面restart即可

##### 6、 再次部署

先停止nodejs运行，再进Development Tools➡terminal面板输入pkill -kill -u $(whoami)，停止旧进程

然后上传新文件，开启nodejs即可

####  订阅地址

输入网址/你的uuid值，可查看订阅
