function hookTemplate(){var a=DUOSHUO.templates.post;DUOSHUO.templates.post=function(b,c){var d=a(b,c),e=b.post.agent,f=b.post.author.user_id,g="";return f&&f==CONFIG.duoshuo.userId&&(g='<span class="duoshuo-ua-admin">'+CONFIG.duoshuo.author+"</span>"),e&&/^Mozilla/.test(e)&&(d=d.replace(/<\/div><p>/,g+getAgentInfo(e)+"</div><p>")),d}}function getAgentInfo(a){function l(){var a=g.toLowerCase();return a.match(/WeChat/i)?"wechat":a.match(/QQBrowser/i)?"qq":a}function m(){var a=window.navigator.userAgent,b=null!==a.match(/iPad/i),c=["iphone","android","phone","mobile","wap","netfront","x11","java","opera mobi","opera mini","ucweb","windows ce","symbian","symbianos","series","webos","sony","blackberry","dopod","nokia","samsung","palmsource","xda","pieplus","meizu","midp","cldc","motorola","foma","docomo","up.browser","up.link","blazer","helio","hosin","huawei","novarra","coolpad","webos","techfaith","palmsource","alcatel","amoi","ktouch","nexian","ericsson","philips","sagem","wellcom","bunjalloo","maui","smartphone","iemobile","spice","bird","zte-","longcos","pantech","gionee","portalmmm","jig browser","hiptop","benq","haier","^lct","320x320","240x320","176x220"],d=new RegExp(c.join("|"),"i");return!b&&a.match(d)}$.ua.set(a);var b="Unknown",c=$.ua,d=m()?"<br><br>":'<span class="duoshuo-ua-separator"></span>',e=c.os.name||b,f=c.os.version||b,g=c.browser.name||b,h=c.browser.version||b,i={os:{android:"android",linux:"linux",windows:"windows",ios:"apple","mac os":"apple",unknown:"desktop"},browser:{chrome:"chrome",chromium:"chrome",firefox:"firefox",opera:"opera",safari:"safari",ie:"internet-explorer",wechat:"wechat",qq:"qq",unknown:"globe"}},j=i.os[e.toLowerCase()],k=i.browser[l()];return d+'<span class="duoshuo-ua-platform duoshuo-ua-platform-'+e.toLowerCase()+'"><i class="fa fa-'+j+'"></i>'+e+" "+f+"</span>"+d+'<span class="duoshuo-ua-browser duoshuo-ua-browser-'+g.toLowerCase()+'"><i class="fa fa-'+k+'"></i>'+g+" "+h+"</span>"}"undefined"!=typeof DUOSHUO?hookTemplate():$("#duoshuo-script")[0].onload=hookTemplate;