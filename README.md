# webhostmost 部署vmess单协议节点和哪吒

# 简单文字步骤

先利用仓库里的worker.js在cf的worker里反代webhostmost给的域名，然后绑定自定义域名，把绑定的自定义域名即cf反代域名填入nodejs里面，更改uuid，哪吒等参数，然后按以下步骤部署

1.上传文件index.js和package.json到domains/用户名.freewebhostmost.com/public_html文件夹，删掉文件夹下的index.html

2.创建nodejs，选16.20版本(必须)，product环境，目录填domains/用户名.freewebhostmost.com/public_html，启动文件index.js，保存

3.第2步保存完，页面上会出现source /home/xxx/nodevenv/domains/fkmv.freewebhostmost.com/public_html/16/bin/activate && cd /home/xxx/domains/xxx.freewebhostmost.com/public_html这句话，复制下来打开Development Tools➡terminal终端粘贴回车，然后再执行npm install安装依赖

4.安装完依赖回到nodejs创建页面restart即可

输入网址/你的uuid值，可查看订阅
