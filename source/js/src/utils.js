NexT.utils=NexT.$u={wrapImageWithFancyBox:function(){$(".content img").not("[hidden]").not(".group-picture img, .post-gallery img").each(function(){var a=$(this),b=a.attr("title"),c=a.parent("a");c.size()<1&&(c=a.wrap('<a href="'+this.getAttribute("src")+'"></a>').parent("a")),c.addClass("fancybox fancybox.image"),c.attr("rel","group"),b&&(c.append('<p class="image-caption">'+b+"</p>"),c.attr("title",b))}),$(".fancybox").fancybox({helpers:{overlay:{locked:!1}}})},lazyLoadPostsImages:function(){$("#posts").find("img").lazyload({placeholder:"/images/loading.gif",effect:"fadeIn"})},registerESCKeyEvent:function(){$(document).on("keyup",function(a){27===a.which&&$(".search-popup").is(":visible")&&($(".search-popup").hide(),$(".search-popup-overlay").remove(),$("body").css("overflow",""))})},registerBackToTop:function(){var b=$(".back-to-top");$(window).on("scroll",function(){b.toggleClass("back-to-top-on",window.pageYOffset>50);var c=$(window).scrollTop(),d=$("#content").height(),e=$(window).height(),f=c/(d-e),g=Math.round(100*f),h=g>100?100:g;$("#scrollpercent>span").html(h)}),b.on("click",function(){$("body").velocity("scroll")})},embeddedVideoTransformer:function(){function d(a){return{width:a.width(),height:a.height()}}function e(a,b){return b/a*100}var a=$("iframe"),b=["www.youtube.com","player.vimeo.com","player.youku.com","music.163.com","www.tudou.com"],c=new RegExp(b.join("|"));a.each(function(){var g,a=this,b=$(this),f=d(b);if(this.src.search(c)>0){var h=e(f.width,f.height);b.width("100%").height("100%").css({position:"absolute",top:"0",left:"0"});var i=document.createElement("div");i.className="fluid-vids",i.style.position="relative",i.style.marginBottom="20px",i.style.width="100%",i.style.paddingTop=h+"%";if(a.parentNode.insertBefore(i,a),i.appendChild(a),this.src.search("music.163.com")>0){g=d(b);(g.width>f.width||g.height<f.height)&&(i.style.paddingTop=e(g.width,f.height)+"%")}}})},addActiveClassToMenuItem:function(){var a=window.location.pathname;a="/"===a?a:a.substring(0,a.length-1),$('.menu-item a[href="'+a+'"]').parent().addClass("menu-item-active")},hasMobileUA:function(){return/iPad|iPhone|Android|Opera Mini|BlackBerry|webOS|UCWEB|Blazer|PSP|IEMobile|Symbian/g.test(window.navigator.userAgent)},isTablet:function(){return window.screen.width<992&&window.screen.width>767&&this.hasMobileUA()},isMobile:function(){return window.screen.width<767&&this.hasMobileUA()},isDesktop:function(){return!this.isTablet()&&!this.isMobile()},escapeSelector:function(a){return a.replace(/[!"$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g,"\\$&")},displaySidebar:function(){this.isDesktop()&&!this.isPisces()&&$(".sidebar-toggle").trigger("click")},isMist:function(){return"Mist"===CONFIG.scheme},isPisces:function(){return"Pisces"===CONFIG.scheme},getScrollbarWidth:function(){var a=$("<div />").addClass("scrollbar-measure").prependTo("body"),b=a[0],c=b.offsetWidth-b.clientWidth;return a.remove(),c},needAffix:function(){return this.isPisces()}};