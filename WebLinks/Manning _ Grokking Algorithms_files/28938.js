var sa_cached=false;var sa_filename='/widgets/group2.0/28938.js';var sa_siteid='28938';var sa_product_stars=[];var sa_host='//www.shopperapproved.com/';var sa_css='.group-stars .on { width: 20px; height: 19px; background-image: url(\'https://www.shopperapproved.com/page/images_svg/star-full.svg\'); display: inline-block; } .group-stars .half { width: 20px; height: 19px; background-image: url(\'https://www.shopperapproved.com/page/images_svg/star-half.svg\'); display: inline-block; } .group-stars .off { width: 20px; height: 19px; background-image: url(\'https://www.shopperapproved.com/page/images_svg/star-empty.svg\'); display: none; } .group-stars .ind_cnt { font-size: 9px; display: block; width: 100%; text-align: center; margin: 0 auto;; } .sa_write_review { font-weight: bold; } ';var sa_index=0;var sa_link_eq=0;function loadStyle(css){var sastyle=document.createElement('style');sastyle.type='text/css';if(typeof(sastyle.styleSheet)!='undefined'&&typeof(sastyle.styleSheet.cssText)!='undefined'){sastyle.styleSheet.cssText=css;}
else{sastyle.innerHTML=css;}
document.getElementsByTagName('head')[0].appendChild(sastyle);}
function saLoadScript(src){var js=window.document.createElement("script");js.src=src;js.type="text/javascript";document.getElementsByTagName("head")[0].appendChild(js);}
function saStars(num){var stars='';for(var j=1;j<=5;j++){if(num>=0.75)
stars+='<span class="on"></span>';else if(num>=0.24)
stars+='<span class="on half"></span>';else
stars+='<span class="off"></span>';num--;}
return stars;}
sa_setCookie=function(c_name,value,exdays)
{var exdate=new Date();exdate.setDate(exdate.getDate()+exdays);var c_value=escape(value)+((exdays==null)?"":"; expires="+exdate.toUTCString());document.cookie=c_name+"="+c_value;}
sa_getCookie=function(c_name)
{var i,x,y,ARRcookies=document.cookie.split(";");for(i=0;i<ARRcookies.length;i++)
{x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);x=x.replace(/^\s+|\s+$/g,"");if(x==c_name)
{return unescape(y);}}
return null;}
var jQueryScriptOutputted=false;var sa_aggregates_loaded=[];function initsaJQGroupStars2(restart){if(typeof(restart)==='undefined')
restart=false;if(typeof(saJQ)=='undefined'){if(!jQueryScriptOutputted){jQueryScriptOutputted=true;var js=window.document.createElement('script');typeof(sa_jq_host)=='undefined'?sa_jq_host='www.shopperapproved.com':sa_jq_host;js.src="//"+sa_jq_host+"/page/js/jquery.noconflict.js";js.type='text/javascript';document.getElementsByTagName("head")[0].appendChild(js);}
setTimeout(initsaJQGroupStars2,50);}else{saJQ(function(){var has_containers=(saJQ('.star_container').length>0);var aggregate_cookie='';window.sa_product_values={'site':sa_siteid,'hold':true};var sa_popup_src='//www.shopperapproved.com/thankyou/product/'+sa_siteid+'.js';saLoadScript(sa_popup_src);function ReviewProduct(id,desc,image,loop){sa_product_values['products']={};sa_product_values['products'][id]=desc;saJQ('#shopper_approved_product .product_desc,#shopper_approved .product_desc').html(desc);if((!image||(typeof(image)!='string'&&typeof(image)!='String'))&&sa_product_image_src){image=sa_product_image_src;}
if(image){saJQ('#sa_product_product_image,#sa_product_image').css('margin','0 4px 4px 0').prop('src',image);}
else{saJQ('#sa_product_product_image,#sa_product_image').hide();}
if(typeof(StartShopperApprovedProduct)=='function'){StartShopperApprovedProduct();}}
if(has_containers){saJQ('.star_container').each(function(){var reverse=(typeof(sa_reverse)!='undefined')?sa_reverse+'/':'';var productid=saJQ(this).attr('class').replace('star_container','').replace(/\s+/g,'');if(productid){if(sa_aggregates_loaded.indexOf(productid)<0||(typeof(sa_filled_aggregate)!='undefined'&&sa_filled_aggregate[productid]!=undefined)){loadProduct(sa_siteid,productid,reverse);sa_aggregates_loaded.push(productid);aggregate_cookie+=productid+'|';}}
else{var box=this;do{var salink=saJQ(box).find('a');if(saJQ(salink).length>0){var linkid=saJQ(salink).attr('href').replace(/https?:\/\//,'');linkid=linkid.replace(/.*\//,'');linkid=linkid.replace(/\W/g,'');if(sa_aggregates_loaded.indexOf(linkid)<0||(typeof(sa_filled_aggregate)!='undefined'&&sa_filled_aggregate[linkid]!=undefined)){loadProduct(sa_siteid,linkid,reverse);saJQ(this).addClass(linkid);sa_aggregates_loaded.push(linkid);aggregate_cookie+=linkid+'|';}
break;}
box=saJQ(box).parent();}
while(saJQ(box).length>0&&!saJQ(box).hasClass('sa_product_container'));}}).promise().done(function(){if(document.URL.indexOf('shopperapproved_watch')>0||sa_getCookie('shopperapproved_watch')=='debug'){sa_setCookie('shopperapproved_watch','debug');saLoadScript('//www.shopperapproved.com/widgets/watch-page.php?siteid='+sa_siteid+'&aggregates='+aggregate_cookie);}});}
if(typeof(sa_infinite_scroll)!='undefined'&&sa_infinite_scroll){saJQ(window).scroll(function(){reloadShopperApprovedStars();});}});}}
function loadProduct(siteid,productid,reverse){var productkey=productid.replace(/[^0-9a-z]/gi,'').toLowerCase();if(typeof(sa_complete_aggregate)!='undefined'){if(reverse==''&&sa_complete_aggregate[productkey]){loadProductStars(productid,sa_complete_aggregate[productkey]['Average'],sa_complete_aggregate[productkey]['Count']);}}
else if(typeof(sa_filled_aggregate)!='undefined'&&productid in sa_filled_aggregate&&saJQ('#sa_grp_'+productid).length==0){loadProductStars(productid,sa_filled_aggregate[productid]['Average'],sa_filled_aggregate[productid]['Count']);}
else{saLoadScript('//www.shopperapproved.com/widgets/aggregates/'+reverse+sa_siteid+'/'+productid+'.js');}}
function loadProductStars(productid,num,count){var stars='';for(var j=1;j<=5;j++){if(num>=0.75)
stars+='<span class="on"></span>';else if(num>=0.24)
stars+='<span class="on half"></span>';else
stars+='<span class="off"></span>';num--;}
var rng=(count)?'low':'med';var html='<div id=\"sa_grp_'+productid+'\" class=\"group-stars\">'+stars+'<span class=\"ind_cnt '+rng+'\"><span class=\"ind_cnt_num\">'
+count+'</span> <span class=\"ind_cnt_desc\">reviews</span></span></div>';saJQ('.star_container.'+productid).html(html);}
var timerGroup2=setTimeout(initsaJQGroupStars2,150);loadStyle(sa_css);var sa_stagger_load=0;function reloadShopperApprovedStars(){if(sa_stagger_load==0){sa_stagger_load=1;initsaJQGroupStars2();setTimeout(clearShopperApprovedTimer,1000);}
else if(sa_stagger_load==1){sa_stagger_load=2;setTimeout(reloadShopperApprovedStars,1000);}}
function clearShopperApprovedTimer(){sa_stagger_load=0;}
setTimeout(function(){saJQ("body").on('DOMNodeRemoved',function(e){if(e.target.innerHTML!=undefined&&e.target.querySelectorAll('.star_container').length>0)
reloadShopperApprovedStars();});saJQ("body").on('DOMNodeInserted',function(e){if(e.target.innerHTML!=undefined&&e.target.querySelectorAll('.star_container').length>0)
reloadShopperApprovedStars();});},3000);