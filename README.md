# ws-webhostmost 部署vmess节点和哪吒

# 简单文字步骤

先利用worker反代webhostmost给的域名，填入nodejs里面，更改uuid，然后按步骤部署

1.上传文件index.js和package.json到domains/用户名.freewebhostmost.com/public_html文件夹，删掉文件夹下的index.html

2.创建nodejs，选16.20版本，product环境，目录填domains/用户名.freewebhostmost.com/public_html，启动文件index.js，保存

3.第二部保存完，页面上会出现source /home/zjavrgwa/nodevenv/domains/fkmv.freewebhostmost.com/public_html/16/bin/activate && cd /home/zjavrgwa/domains/xxx.freewebhostmost.com/public_html这句话，复制下来到tools里面的terminal终端，然后再执行npm install安装依赖

4.安装完依赖回到nodejs创建页面restart即可

输入网址/uuid可查看订阅
