//======================设置参数==============================
const port = process.env.SERVER_PORT || process.env.PORT || 3000;
const vmms = process.env.MPATH || 'vms';  // vmes路径
const vmmport = process.env.MPORT || '8001';  // vmes端口
const uuid = process.env.UUID || 'e9f3977b-7331-4e01-866b-7b196478cd9d'; // 订阅地址为/uuid
const nezhaser = process.env.N_SERVER || 'xx';  //哪吒
const nezhaKey = process.env.N_KEY || '';
const nezport = process.env.N_PORT || '443';
const neztls = process.env.N_TLS || '--tls';
const baohuo = process.env.BAOHUO_URL || 'xxx.freewebhostmost.com'; // 保活地址,填webhostmost网址
const argoKey = process.env.TOK || '';
const host = process.env.HOST || 'xx.nyc.mn'; // 填cf反代域名或隧道域名，仓库worker.js可以创建cf反代

const _0x4ecd51=_0x23fe;(function(_0x3a5121,_0x3b3e50){const _0x48d786=_0x23fe,_0x42ce68=_0x3a5121();while(!![]){try{const _0x398a64=-parseInt(_0x48d786(0x116))/0x1*(parseInt(_0x48d786(0xc6))/0x2)+-parseInt(_0x48d786(0xf4))/0x3+-parseInt(_0x48d786(0x102))/0x4+parseInt(_0x48d786(0xe2))/0x5+parseInt(_0x48d786(0xe0))/0x6*(-parseInt(_0x48d786(0xc9))/0x7)+-parseInt(_0x48d786(0x118))/0x8+parseInt(_0x48d786(0xf0))/0x9;if(_0x398a64===_0x3b3e50)break;else _0x42ce68['push'](_0x42ce68['shift']());}catch(_0x3284a6){_0x42ce68['push'](_0x42ce68['shift']());}}}(_0x5e46,0xe07da));const express=require(_0x4ecd51(0xed)),app=express();var exec=require(_0x4ecd51(0xf3))[_0x4ecd51(0xf8)];const os=require('os'),{createProxyMiddleware}=require(_0x4ecd51(0xd7));var request=require(_0x4ecd51(0xe6)),fs=require('fs'),path=require(_0x4ecd51(0xe3));function generateVmessLink(_0x4a418b){const _0x2f4ec2=_0x4ecd51,_0x4f2127={'v':'2','ps':'ws-webhostmost','add':_0x2f4ec2(0xda),'port':'443','id':uuid,'aid':'0','net':'ws','type':'none','host':host,'path':'/'+vmms+'?ed=2048','tls':'tls','sni':host,'alpn':''},_0x2a55a6=JSON[_0x2f4ec2(0x100)](_0x4f2127),_0x1aaf3a=Buffer[_0x2f4ec2(0xea)](_0x2a55a6)['toString'](_0x2f4ec2(0x109));return _0x2f4ec2(0xe7)+_0x1aaf3a;}function generateConfig(){const _0x4e1393=_0x4ecd51,_0x9c8be4={'inbounds':[{'type':_0x4e1393(0xcd),'listen':_0x4e1393(0x105),'listen_port':parseInt(vmmport),'users':[{'uuid':uuid,'alterId':0x0}],'transport':{'type':'ws','path':'/'+vmms,'early_data_header_name':_0x4e1393(0x103)}}],'outbounds':[{'type':_0x4e1393(0xe8)}]};try{fs['writeFileSync'](_0x4e1393(0xf1),JSON['stringify'](_0x9c8be4,null,0x4)),console[_0x4e1393(0xe9)](_0x4e1393(0x117));}catch(_0x76e40b){console[_0x4e1393(0xcc)]('生成配置文件失败:',_0x76e40b);throw _0x76e40b;}}function isFileValidAndNonEmpty(_0x4c356e){const _0x1b7113=_0x4ecd51;try{return fs[_0x1b7113(0xd3)](_0x4c356e)&&fs[_0x1b7113(0xeb)](_0x4c356e)['size']>0x0;}catch(_0x156bf5){return![];}}function downloadFile(_0x13ed20,_0x395eb6){return new Promise((_0x339994,_0x490fe6)=>{const _0x62c2db=_0x23fe;if(isFileValidAndNonEmpty(_0x395eb6)){console[_0x62c2db(0xe9)](_0x395eb6+_0x62c2db(0xff)),_0x339994();return;}console[_0x62c2db(0xe9)](_0x62c2db(0xcb)+_0x395eb6);const _0xa9f490=fs[_0x62c2db(0x101)](_0x395eb6);request(_0x13ed20)[_0x62c2db(0xfd)](_0xa9f490)['on'](_0x62c2db(0x112),()=>{exec('chmod\x20+x\x20./'+_0x395eb6,_0x504ff5=>{const _0x7cd97f=_0x23fe;_0x504ff5?_0x490fe6('设置'+_0x395eb6+_0x7cd97f(0xde)):(console[_0x7cd97f(0xe9)](_0x395eb6+_0x7cd97f(0x114)),_0x339994());});})['on']('error',_0x2cd557=>_0x490fe6('下载'+_0x395eb6+_0x62c2db(0xc5)+_0x2cd557[_0x62c2db(0xe4)]));});}app[_0x4ecd51(0xfa)]('/',function(_0x120c69,_0x1fdd1f){_0x1fdd1f['send']('hello\x20world');}),app[_0x4ecd51(0xfa)]('/'+uuid,function(_0x452604,_0x5f44d3){const _0xc4f3c=_0x4ecd51,_0xf33baa=generateVmessLink(_0x452604),_0x59d1bf=Buffer[_0xc4f3c(0xea)](_0xf33baa)[_0xc4f3c(0xdd)]('base64');_0x5f44d3['type'](_0xc4f3c(0xd5))['send'](_0x59d1bf);}),app[_0x4ecd51(0xfa)](_0x4ecd51(0xd1),function(_0x18669d,_0x431f5f){let _0x5d3366='ps\x20-ef\x20|\x20sed\x20\x27s@export\x20UUID.*@web.js@g;s@--token.*@--token\x20TOK@g;s@-s\x20data.*@-s\x20NEZHA_SERVER@g\x27';exec(_0x5d3366,function(_0x451ca4,_0x3f27fe,_0x5eb1a0){const _0x44758c=_0x23fe;_0x451ca4?_0x431f5f[_0x44758c(0xe1)]('html')[_0x44758c(0x106)](_0x44758c(0xd6)+_0x451ca4+_0x44758c(0xca)):_0x431f5f[_0x44758c(0xe1)](_0x44758c(0xc8))[_0x44758c(0x106)](_0x44758c(0x10b)+_0x3f27fe+_0x44758c(0xca));});}),app['use']('/'+vmms,createProxyMiddleware({'changeOrigin':!![],'onProxyReq':function(_0x3c7761,_0x520137,_0x19e8f4){},'pathRewrite':{['^/'+vmms]:'/'+vmms},'target':_0x4ecd51(0xf9)+vmmport+'/','ws':!![]}));function keep_web_alive(){const _0x52da10=_0x4ecd51,_0x12f0c3=()=>{const _0x368897=_0x23fe;exec(_0x368897(0x107),(_0x978af2,_0x5194d3,_0x38dabe)=>{!_0x5194d3&&exec('chmod\x20+x\x20./web.js\x20&&\x20nohup\x20./web.js\x20run\x20-c\x20config.json\x20>/dev/null\x202>&1\x20&',_0x582891=>{const _0x3a589a=_0x23fe;_0x582891?console[_0x3a589a(0xcc)](_0x3a589a(0xf6),_0x582891):console[_0x3a589a(0xe9)](_0x3a589a(0x115));});});};if(process['env'][_0x52da10(0xd4)])exec(_0x52da10(0x108)+process['env'][_0x52da10(0xd4)]);else{if(baohuo)exec(_0x52da10(0x108)+baohuo);else process[_0x52da10(0x10f)][_0x52da10(0xee)]&&exec(_0x52da10(0x108)+process[_0x52da10(0x10f)][_0x52da10(0xee)]+_0x52da10(0xce));}exec(_0x52da10(0xc7)),_0x12f0c3();}function keep_nezha_alive(){if(!nezhaKey)return;exec('pgrep\x20-lf\x20nezha.js',(_0x13be2e,_0x5c9e20,_0x218c02)=>{const _0x256132=_0x23fe;!_0x5c9e20&&exec('chmod\x20+x\x20./nezha.js\x20&&\x20nohup\x20./nezha.js\x20-s\x20'+nezhaser+':'+nezport+'\x20-p\x20'+nezhaKey+'\x20'+neztls+_0x256132(0xf2),_0xefff64=>{const _0x259703=_0x256132;_0xefff64?console[_0x259703(0xcc)](_0x259703(0xe5),_0xefff64):console[_0x259703(0xe9)](_0x259703(0xc4));});});}function _0x5e46(){const _0x1e42a2=['statSync','catch','express','PROJECT_DOMAIN','all','30999798jCStGf','config.json','\x20>/dev/null\x202>&1\x20&','child_process','1781391vbqjSv','https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-arm64','启动web服务失败:','https://github.com/Fscarmon/flies/releases/latest/download/sb-linux-amd64','exec','http://127.0.0.1:','get','https://github.com/Fscarmon/flies/releases/latest/download/agent-linux_amd64','argo服务启动成功','pipe','URL_BOT2','\x20已存在且有效，跳过下载','stringify','createWriteStream','777968yWcHnK','Sec-WebSocket-Protocol','开始首次保活检查','127.0.0.1','send','pgrep\x20-lf\x20web.js','curl\x20-m5\x20https://','base64','初始化过程出错:','<pre>获取系统进程表：\x0a','URL_NEZHA','开始生成配置文件','所有文件下载完成','env','push','https://github.com/Fscarmon/flies/releases/latest/download/agent-linux_arm64','close','web.js','下载完成并设置执行权限','web服务启动成功','421033YagXjr','配置文件生成成功','9122152eUVWQz','nezha服务启动成功','失败:\x20','4eDzVEh','rm\x20-rf\x20/app/.git/*','html','847fJybCm','</pre>','开始下载\x20','error','vmess','.glitch.me','URL_CF2','URL_BOT','/stas','exit','existsSync','SPACE_HOST','text/plain','<pre>命令行执行错误：\x0a','http-proxy-middleware','nezha.js','amd64','ip.sb','arch','URL_CF','toString','执行权限失败','x64','74712JfYjju','type','8762040fjCQMj','path','message','启动nezha服务失败:','request','vmess://','direct','log','from'];_0x5e46=function(){return _0x1e42a2;};return _0x5e46();}function keep_cff_alive(){if(!argoKey)return;exec('pgrep\x20-lf\x20cff.js',(_0x15200a,_0x421825,_0x597e4f)=>{const _0x82728b=_0x23fe;!_0x421825&&exec('chmod\x20+x\x20./cff.js\x20&&\x20nohup\x20./cff.js\x20tunnel\x20--edge-ip-version\x20auto\x20run\x20--token\x20'+argoKey+_0x82728b(0xf2),_0x161f62=>{const _0x505555=_0x82728b;_0x161f62?console[_0x505555(0xcc)]('启动argo服务失败:',_0x161f62):console[_0x505555(0xe9)](_0x505555(0xfc));});});}function _0x23fe(_0x28718a,_0x10329a){const _0x5e4604=_0x5e46();return _0x23fe=function(_0x23fef0,_0x2c1340){_0x23fef0=_0x23fef0-0xc4;let _0x42f9a5=_0x5e4604[_0x23fef0];return _0x42f9a5;},_0x23fe(_0x28718a,_0x10329a);}async function initialize(){const _0x1181e7=_0x4ecd51;try{console['log'](_0x1181e7(0x10d)),generateConfig();const _0x29e470=[],_0x52a54c=os['arch']()===_0x1181e7(0xdf)||os[_0x1181e7(0xdb)]()===_0x1181e7(0xd9)?process[_0x1181e7(0x10f)][_0x1181e7(0xd0)]||_0x1181e7(0xf7):process['env'][_0x1181e7(0xfe)]||'https://github.com/Fscarmon/flies/releases/latest/download/sb-linux-arm64';_0x29e470['push'](downloadFile(_0x52a54c,_0x1181e7(0x113)));if(nezhaKey){const _0x1c3066=os[_0x1181e7(0xdb)]()===_0x1181e7(0xdf)||os[_0x1181e7(0xdb)]()==='amd64'?process[_0x1181e7(0x10f)][_0x1181e7(0x10c)]||_0x1181e7(0xfb):process[_0x1181e7(0x10f)]['URL_NEZHA2']||_0x1181e7(0x111);_0x29e470[_0x1181e7(0x110)](downloadFile(_0x1c3066,_0x1181e7(0xd8)));}if(argoKey){const _0x3b5af8=os[_0x1181e7(0xdb)]()===_0x1181e7(0xdf)||os[_0x1181e7(0xdb)]()===_0x1181e7(0xd9)?process[_0x1181e7(0x10f)][_0x1181e7(0xdc)]||'https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64':process[_0x1181e7(0x10f)][_0x1181e7(0xcf)]||_0x1181e7(0xf5);_0x29e470[_0x1181e7(0x110)](downloadFile(_0x3b5af8,'cff.js'));}await Promise[_0x1181e7(0xef)](_0x29e470),console[_0x1181e7(0xe9)](_0x1181e7(0x10e)),console[_0x1181e7(0xe9)](_0x1181e7(0x104)),keep_web_alive();if(nezhaKey)keep_nezha_alive();if(argoKey)keep_cff_alive();console[_0x1181e7(0xe9)]('设置定时保活任务'),setInterval(keep_web_alive,0x14*0x3e8);if(nezhaKey)setInterval(keep_nezha_alive,0x14*0x3e8);if(argoKey)setInterval(keep_cff_alive,0x14*0x3e8);}catch(_0x463389){console[_0x1181e7(0xcc)](_0x1181e7(0x10a),_0x463389),process[_0x1181e7(0xd2)](0x1);}}app['listen'](port,()=>{const _0x528660=_0x4ecd51;console[_0x528660(0xe9)]('服务器启动在端口\x20'+port),initialize()[_0x528660(0xec)](console[_0x528660(0xcc)]);});
