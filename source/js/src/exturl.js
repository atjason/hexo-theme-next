$(document).ready(function(){var a={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(b){var d,e,f,g,h,i,j,c="",k=0;for(b=a._utf8_encode(b);k<b.length;)d=b.charCodeAt(k++),e=b.charCodeAt(k++),f=b.charCodeAt(k++),g=d>>2,h=(3&d)<<4|e>>4,i=(15&e)<<2|f>>6,j=63&f,isNaN(e)?i=j=64:isNaN(f)&&(j=64),c=c+this._keyStr.charAt(g)+this._keyStr.charAt(h)+this._keyStr.charAt(i)+this._keyStr.charAt(j);return c},decode:function(b){var d,e,f,g,h,i,j,c="",k=0;for(b=b.replace(/[^A-Za-z0-9+\/=]/g,"");k<b.length;)g=this._keyStr.indexOf(b.charAt(k++)),h=this._keyStr.indexOf(b.charAt(k++)),i=this._keyStr.indexOf(b.charAt(k++)),j=this._keyStr.indexOf(b.charAt(k++)),d=g<<2|h>>4,e=(15&h)<<4|i>>2,f=(3&i)<<6|j,c+=String.fromCharCode(d),64!=i&&(c+=String.fromCharCode(e)),64!=j&&(c+=String.fromCharCode(f));return c=a._utf8_decode(c)},_utf8_encode:function(a){a=a.replace(/rn/g,"n");for(var b="",c=0;c<a.length;c++){var d=a.charCodeAt(c);d<128?b+=String.fromCharCode(d):d>127&&d<2048?(b+=String.fromCharCode(d>>6|192),b+=String.fromCharCode(63&d|128)):(b+=String.fromCharCode(d>>12|224),b+=String.fromCharCode(d>>6&63|128),b+=String.fromCharCode(63&d|128))}return b},_utf8_decode:function(a){for(var b="",c=0,d=c1=c2=0;c<a.length;)d=a.charCodeAt(c),d<128?(b+=String.fromCharCode(d),c++):d>191&&d<224?(c2=a.charCodeAt(c+1),b+=String.fromCharCode((31&d)<<6|63&c2),c+=2):(c2=a.charCodeAt(c+1),c3=a.charCodeAt(c+2),b+=String.fromCharCode((15&d)<<12|(63&c2)<<6|63&c3),c+=3);return b}};$(".exturl").on("click",function(){var b=$(this).attr("data-url"),c=a.decode(b);return window.open(c,"_blank"),!1})});