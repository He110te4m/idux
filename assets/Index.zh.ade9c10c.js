import{e as n,f as s,g as a,h as t,j as l,u as o,a as e}from"./index.21961830.js";import{e as c,v as p,x as u,h as i,H as d,F as k,r,i as g,u as m,a1 as h,z as f,G as w}from"./vendor.f0d17684.js";var b=c({setup:()=>({isBrowser:n,isBlink:s,isWebKit:a,isIOS:t,isAndroid:l})});const B=i("h2",null,"Platform:",-1);b.render=function(n,s,a,t,l,o){return p(),u(k,null,[B,i("p",null,"Is Browser: "+d(n.isBrowser),1),i("p",null,"Is Blink: "+d(n.isBlink),1),i("p",null,"Is Webkit: "+d(n.isWebKit),1),i("p",null,"Is iOS: "+d(n.isIOS),1),i("p",null,"Is Android: "+d(n.isAndroid),1)],64)};var I=c({name:"cdk-platform-Basic",components:{"raw-demo":b},setup(){const{copy:n}=o(),s=r(!1),{lang:a}=g(e);return{copied:s,onCopy:()=>{s.value||n("copied").then((n=>{s.value=!0,console.log("copied ",n),setTimeout((()=>s.value=!1),1e3)}))},lang:a}}});const x={key:0},y=i("p",null,"平台环境信息",-1),v={key:1},A=i("div",null,[i("pre",{class:"language-html"},[i("code",null,[i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),w("template")]),i("span",{class:"token punctuation"},">")]),w("\n  "),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),w("h2")]),i("span",{class:"token punctuation"},">")]),w("Platform:"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),w("h2")]),i("span",{class:"token punctuation"},">")]),w("\n  "),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),w("p")]),i("span",{class:"token punctuation"},">")]),w("Is Browser: {{ isBrowser }}"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),w("p")]),i("span",{class:"token punctuation"},">")]),w("\n  "),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),w("p")]),i("span",{class:"token punctuation"},">")]),w("Is Blink: {{ isBlink }}"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),w("p")]),i("span",{class:"token punctuation"},">")]),w("\n  "),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),w("p")]),i("span",{class:"token punctuation"},">")]),w("Is Webkit: {{ isWebKit }}"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),w("p")]),i("span",{class:"token punctuation"},">")]),w("\n  "),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),w("p")]),i("span",{class:"token punctuation"},">")]),w("Is iOS: {{ isIOS }}"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),w("p")]),i("span",{class:"token punctuation"},">")]),w("\n  "),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),w("p")]),i("span",{class:"token punctuation"},">")]),w("Is Android: {{ isAndroid }}"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),w("p")]),i("span",{class:"token punctuation"},">")]),w("\n"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),w("template")]),i("span",{class:"token punctuation"},">")]),w("\n\n"),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"<"),w("script")]),w(),i("span",{class:"token attr-name"},"lang"),i("span",{class:"token attr-value"},[i("span",{class:"token punctuation attr-equals"},"="),i("span",{class:"token punctuation"},'"'),w("ts"),i("span",{class:"token punctuation"},'"')]),i("span",{class:"token punctuation"},">")]),i("span",{class:"token script"},[i("span",{class:"token language-javascript"},[w("\n"),i("span",{class:"token keyword"},"import"),w(),i("span",{class:"token punctuation"},"{"),w(" defineComponent "),i("span",{class:"token punctuation"},"}"),w(),i("span",{class:"token keyword"},"from"),w(),i("span",{class:"token string"},"'vue'"),w("\n"),i("span",{class:"token keyword"},"import"),w(),i("span",{class:"token punctuation"},"{"),w(" isBrowser"),i("span",{class:"token punctuation"},","),w(" isBlink"),i("span",{class:"token punctuation"},","),w(" isWebKit"),i("span",{class:"token punctuation"},","),w(" isIOS"),i("span",{class:"token punctuation"},","),w(" isAndroid "),i("span",{class:"token punctuation"},"}"),w(),i("span",{class:"token keyword"},"from"),w(),i("span",{class:"token string"},"'@idux/cdk/platform'"),w("\n\n"),i("span",{class:"token keyword"},"export"),w(),i("span",{class:"token keyword"},"default"),w(),i("span",{class:"token function"},"defineComponent"),i("span",{class:"token punctuation"},"("),i("span",{class:"token punctuation"},"{"),w("\n  "),i("span",{class:"token function"},"setup"),i("span",{class:"token punctuation"},"("),i("span",{class:"token punctuation"},")"),w(),i("span",{class:"token punctuation"},"{"),w("\n    "),i("span",{class:"token keyword"},"return"),w(),i("span",{class:"token punctuation"},"{"),w(" isBrowser"),i("span",{class:"token punctuation"},","),w(" isBlink"),i("span",{class:"token punctuation"},","),w(" isWebKit"),i("span",{class:"token punctuation"},","),w(" isIOS"),i("span",{class:"token punctuation"},","),w(" isAndroid "),i("span",{class:"token punctuation"},"}"),w("\n  "),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},","),w("\n"),i("span",{class:"token punctuation"},"}"),i("span",{class:"token punctuation"},")"),w("\n")])]),i("span",{class:"token tag"},[i("span",{class:"token tag"},[i("span",{class:"token punctuation"},"</"),w("script")]),i("span",{class:"token punctuation"},">")]),w("\n")])])],-1);I.render=function(n,s,a,t,l,o){const e=m("raw-demo"),c=m("global-code-box");return p(),u(c,{packageName:"cdk",componentName:"platform",demoName:"Basic",title:"zh"===n.lang?"基本使用":"Basic usage",copied:n.copied,onCopy:n.onCopy},{description:h((()=>["zh"===n.lang?(p(),u("span",x,[y])):f("",!0),"en"===n.lang?(p(),u("span",v)):f("",!0)])),rawCode:h((()=>[i(e)])),highlightCode:h((()=>[A])),_:1},8,["title","copied","onCopy"])};var S={name:"Demoplatform",components:{Basic:I},setup(){const n=r(!1);return{goLink:n=>{window&&(window.location.hash=n)},expanded:n,expandAll:()=>{n.value=!n.value}}}};const C={class:"toc-wrapper"},O=i("a",{href:"#cdk-platform-demo-Basic",title:"基本使用"},"基本使用",-1),W=w(),K=i("a",{href:"#api",title:"API"},null,-1),P={class:"markdown header-wrapper"},j=w("Platform"),z=i("span",{class:"subtitle"},"平台",-1),E={class:"edit-button","aria-label":"Edit this page on Github",href:"https://github.com/IduxFE/idux/edit/main/cdk/platform/docs/Index.zh.md",target:"_blank",rel:"noopener noreferrer"},F=i("section",{class:"markdown"},[i("p",null,"一组用于判断当前浏览器环境的工具"),i("h2",{id:"何时使用"},[i("span",null,"何时使用"),i("a",{onclick:"window.location.hash = '何时使用'",class:"anchor"},"#")]),i("p",null,"需要对不同环境做兼容性处理时")],-1),_=i("span",null,"代码演示",-1),N={class:"example-wrapper"},T=i("section",{class:"markdown api-wrapper"},[i("h2",{id:"api"},[i("span",null,"API"),i("a",{onclick:"window.location.hash = 'api'",class:"anchor"},"#")]),i("table",null,[i("thead",null,[i("tr",null,[i("th",null,"属性"),i("th",null,"说明"),i("th",null,"类型")])]),i("tbody",null,[i("tr",null,[i("td",null,[i("code",null,"isBrowser")]),i("td",null,"是否为浏览器环境"),i("td",null,[i("code",null,"boolean")])]),i("tr",null,[i("td",null,[i("code",null,"isEdge")]),i("td",null,[w("是否为 "),i("code",null,"Microsoft Edge"),w(" 浏览器")]),i("td",null,[i("code",null,"boolean")])]),i("tr",null,[i("td",null,[i("code",null,"isTrident")]),i("td",null,[w("是否为 "),i("code",null,"Microsoft Trident"),w(" 渲染引擎")]),i("td",null,[i("code",null,"boolean")])]),i("tr",null,[i("td",null,[i("code",null,"isBlink")]),i("td",null,[w("是否为 "),i("code",null,"Blink"),w(" 渲染引擎")]),i("td",null,[i("code",null,"boolean")])]),i("tr",null,[i("td",null,[i("code",null,"isWebKit")]),i("td",null,[w("是否为 "),i("code",null,"WebKit"),w(" 渲染引擎")]),i("td",null,[i("code",null,"boolean")])]),i("tr",null,[i("td",null,[i("code",null,"isFirefox")]),i("td",null,[w("是否为 "),i("code",null,"Firefox"),w(" 浏览器")]),i("td",null,[i("code",null,"boolean")])]),i("tr",null,[i("td",null,[i("code",null,"isSafari")]),i("td",null,[w("是否为 "),i("code",null,"Safari"),w(" 浏览器")]),i("td",null,[i("code",null,"boolean")])]),i("tr",null,[i("td",null,[i("code",null,"isIOS")]),i("td",null,[w("是否为 "),i("code",null,"IOS"),w(" 平台")]),i("td",null,[i("code",null,"boolean")])]),i("tr",null,[i("td",null,[i("code",null,"isAndroid")]),i("td",null,[w("是否为 "),i("code",null,"Android"),w(" 平台")]),i("td",null,[i("code",null,"boolean")])])])])],-1);S.render=function(n,s,a,t,l,o){const e=m("ix-icon"),c=m("Basic"),d=m("ix-col"),k=m("ix-row");return p(),u("article",null,[i("a",C,[i("a",{onClick:s[1]||(s[1]=n=>t.goLink(n))},[O,W,K])]),i("section",P,[i("h1",null,[j,z,i("a",E,[i(e,{name:"edit"})])]),F,i("h2",null,[_,i(e,{name:"appstore",class:"code-box-expand-trigger",title:"展开全部",onClick:s[2]||(s[2]=n=>t.expandAll())})])]),i("section",N,[i(k,{gutter:"16"},{default:h((()=>[i(d,{lg:"12",span:"24"},{default:h((()=>[i(c)])),_:1}),i(d,{lg:"12",span:"24"})])),_:1})]),T])};export default S;
