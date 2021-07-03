import{u as n,a}from"./index.21961830.js";import{u as t,v as s,x as e,h as o,a1 as l,F as c,G as p,e as u,r as i,i as k,z as r,ai as d}from"./vendor.f0d17684.js";const g={},m=p(" Title "),h=p(" This is a subtitle "),x=p(" This is a description ");g.render=function(n,a){const p=t("ix-header");return s(),e(c,null,[o(p,{title:"Title",subTitle:"This is a subtitle",description:"This is a description"}),o(p,null,{subTitle:l((()=>[h])),description:l((()=>[x])),default:l((()=>[m])),_:1})],64)};var f=u({name:"components-header-Basic",components:{"raw-demo":g},setup(){const{copy:t}=n(),s=i(!1),{lang:e}=k(a);return{copied:s,onCopy:()=>{s.value||t("copied").then((n=>{s.value=!0,console.log("copied ",n),setTimeout((()=>s.value=!1),1e3)}))},lang:e}}});const v={key:0},C=o("p",null,"显示标题，二级标题以及描述文字。",-1),w={key:1},y=o("p",null,[p("Display "),o("code",null,"title"),p(", "),o("code",null,"subTitle"),p(" and "),o("code",null,"description"),p(".")],-1),T=o("div",null,[o("pre",{class:"language-html"},[o("code",null,[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),p("template")]),o("span",{class:"token punctuation"},">")]),p("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),p("ix-header")]),p(),o("span",{class:"token attr-name"},"title"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),p("Title"),o("span",{class:"token punctuation"},'"')]),p(),o("span",{class:"token attr-name"},"subTitle"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),p("This is a subtitle"),o("span",{class:"token punctuation"},'"')]),p(),o("span",{class:"token attr-name"},"description"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),p("This is a description"),o("span",{class:"token punctuation"},'"')]),p(),o("span",{class:"token punctuation"},"/>")]),p("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),p("ix-header")]),o("span",{class:"token punctuation"},">")]),p("\n    Title\n    "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),p("template")]),p(),o("span",{class:"token attr-name"},"#subTitle"),o("span",{class:"token punctuation"},">")]),p(" This is a subtitle "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),p("template")]),o("span",{class:"token punctuation"},">")]),p("\n    "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),p("template")]),p(),o("span",{class:"token attr-name"},"#description"),o("span",{class:"token punctuation"},">")]),p(" This is a description "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),p("template")]),o("span",{class:"token punctuation"},">")]),p("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),p("ix-header")]),o("span",{class:"token punctuation"},">")]),p("\n"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),p("template")]),o("span",{class:"token punctuation"},">")]),p("\n")])])],-1);f.render=function(n,a,c,p,u,i){const k=t("raw-demo"),d=t("global-code-box");return s(),e(d,{packageName:"components",componentName:"header",demoName:"Basic",title:"zh"===n.lang?"基本使用":"Basic usage",copied:n.copied,onCopy:n.onCopy},{description:l((()=>["zh"===n.lang?(s(),e("span",v,[C])):r("",!0),"en"===n.lang?(s(),e("span",w,[y])):r("",!0)])),rawCode:l((()=>[o(k)])),highlightCode:l((()=>[T])),_:1},8,["title","copied","onCopy"])};const b={},E=p(" Title "),z=p(" Title "),B=p(" Title "),P=p(" Title ");b.render=function(n,a){const p=t("ix-header");return s(),e(c,null,[o(p,{showBar:"",size:"extraLarge"},{default:l((()=>[E])),_:1}),o(p,{showBar:""},{default:l((()=>[z])),_:1}),o(p,{showBar:"",size:"medium"},{default:l((()=>[B])),_:1}),o(p,{showBar:"",size:"small"},{default:l((()=>[P])),_:1})],64)};var _=u({name:"components-header-SizeBar",components:{"raw-demo":b},setup(){const{copy:t}=n(),s=i(!1),{lang:e}=k(a);return{copied:s,onCopy:()=>{s.value||t("copied").then((n=>{s.value=!0,console.log("copied ",n),setTimeout((()=>s.value=!1),1e3)}))},lang:e}}});const q={key:0},N=o("p",null,"标题共分为 4 种：超大、大、中和小, 默认为大号。",-1),L=o("p",null,[p("可以通过设置 "),o("code",null,"showBar"),p(" 来显示一个竖条，避免标题单调。")],-1),M={key:1},S=o("p",null,[p("There are 4 types of titles: "),o("code",null,"extraLarge"),p(", "),o("code",null,"large"),p(", "),o("code",null,"medium"),p(" and "),o("code",null,"small"),p(". The default is "),o("code",null,"large"),p(".")],-1),j=o("p",null,[p("You can display a vertical bar by setting "),o("code",null,"showBar"),p(" to avoid monotonous title.")],-1),A=o("div",null,[o("pre",{class:"language-html"},[o("code",null,[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),p("template")]),o("span",{class:"token punctuation"},">")]),p("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),p("ix-header")]),p(),o("span",{class:"token attr-name"},"showBar"),p(),o("span",{class:"token attr-name"},"size"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),p("extraLarge"),o("span",{class:"token punctuation"},'"')]),o("span",{class:"token punctuation"},">")]),p(" Title "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),p("ix-header")]),o("span",{class:"token punctuation"},">")]),p("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),p("ix-header")]),p(),o("span",{class:"token attr-name"},"showBar"),o("span",{class:"token punctuation"},">")]),p(" Title "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),p("ix-header")]),o("span",{class:"token punctuation"},">")]),p("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),p("ix-header")]),p(),o("span",{class:"token attr-name"},"showBar"),p(),o("span",{class:"token attr-name"},"size"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),p("medium"),o("span",{class:"token punctuation"},'"')]),o("span",{class:"token punctuation"},">")]),p(" Title "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),p("ix-header")]),o("span",{class:"token punctuation"},">")]),p("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),p("ix-header")]),p(),o("span",{class:"token attr-name"},"showBar"),p(),o("span",{class:"token attr-name"},"size"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),p("small"),o("span",{class:"token punctuation"},'"')]),o("span",{class:"token punctuation"},">")]),p(" Title "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),p("ix-header")]),o("span",{class:"token punctuation"},">")]),p("\n"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),p("template")]),o("span",{class:"token punctuation"},">")]),p("\n")])])],-1);_.render=function(n,a,c,p,u,i){const k=t("raw-demo"),d=t("global-code-box");return s(),e(d,{packageName:"components",componentName:"header",demoName:"SizeBar",title:"zh"===n.lang?"大小和竖条":"Size and bar",copied:n.copied,onCopy:n.onCopy},{description:l((()=>["zh"===n.lang?(s(),e("span",q,[N,L])):r("",!0),"en"===n.lang?(s(),e("span",M,[S,j])):r("",!0)])),rawCode:l((()=>[o(k)])),highlightCode:l((()=>[A])),_:1},8,["title","copied","onCopy"])};var I=u({setup:()=>({extras:["setting","menu"],onExtraClick:(n,a)=>console.log(n,a)})});const D=p(" Title "),F=p(" Title "),G=p(" Title "),Y=p("More");I.render=function(n,a,p,u,i,k){const r=t("ix-header"),d=t("ix-button");return s(),e(c,null,[o(r,{extra:"setting",onExtraClick:n.onExtraClick},{default:l((()=>[D])),_:1},8,["onExtraClick"]),o(r,{extra:n.extras,onExtraClick:n.onExtraClick},{default:l((()=>[F])),_:1},8,["extra","onExtraClick"]),o(r,null,{extra:l((()=>[o(d,{mode:"link",onClick:a[1]||(a[1]=a=>n.onExtraClick(a,"more"))},{default:l((()=>[Y])),_:1})])),default:l((()=>[G])),_:1})],64)};var H=u({name:"components-header-Extra",components:{"raw-demo":I},setup(){const{copy:t}=n(),s=i(!1),{lang:e}=k(a);return{copied:s,onCopy:()=>{s.value||t("copied").then((n=>{s.value=!0,console.log("copied ",n),setTimeout((()=>s.value=!1),1e3)}))},lang:e}}});const $={key:0},J=o("p",null,"在标题的右侧可以自定义操作按钮。",-1),K={key:1},O=o("p",null,"You can customize the operation buttons on the right side of the title.",-1),Q=o("div",null,[o("pre",{class:"language-html"},[o("code",null,[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),p("template")]),o("span",{class:"token punctuation"},">")]),p("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),p("ix-header")]),p(),o("span",{class:"token attr-name"},"extra"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),p("setting"),o("span",{class:"token punctuation"},'"')]),p(),o("span",{class:"token attr-name"},"@extraClick"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),p("onExtraClick"),o("span",{class:"token punctuation"},'"')]),o("span",{class:"token punctuation"},">")]),p(" Title "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),p("ix-header")]),o("span",{class:"token punctuation"},">")]),p("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),p("ix-header")]),p(),o("span",{class:"token attr-name"},":extra"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),p("extras"),o("span",{class:"token punctuation"},'"')]),p(),o("span",{class:"token attr-name"},"@extraClick"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),p("onExtraClick"),o("span",{class:"token punctuation"},'"')]),o("span",{class:"token punctuation"},">")]),p(" Title "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),p("ix-header")]),o("span",{class:"token punctuation"},">")]),p("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),p("ix-header")]),o("span",{class:"token punctuation"},">")]),p("\n    Title\n    "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),p("template")]),p(),o("span",{class:"token attr-name"},"#extra"),o("span",{class:"token punctuation"},">")]),p(),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),p("ix-button")]),p(),o("span",{class:"token attr-name"},"mode"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),p("link"),o("span",{class:"token punctuation"},'"')]),p(),o("span",{class:"token attr-name"},"@click"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),p("onExtraClick($event, "),o("span",{class:"token punctuation"},"'"),p("more"),o("span",{class:"token punctuation"},"'"),p(")"),o("span",{class:"token punctuation"},'"')]),o("span",{class:"token punctuation"},">")]),p("More"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),p("ix-button")]),o("span",{class:"token punctuation"},">")]),p(),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),p("template")]),o("span",{class:"token punctuation"},">")]),p("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),p("ix-header")]),o("span",{class:"token punctuation"},">")]),p("\n"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),p("template")]),o("span",{class:"token punctuation"},">")]),p("\n"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),p("script")]),p(),o("span",{class:"token attr-name"},"lang"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),p("ts"),o("span",{class:"token punctuation"},'"')]),o("span",{class:"token punctuation"},">")]),o("span",{class:"token script"},[o("span",{class:"token language-javascript"},[p("\n"),o("span",{class:"token keyword"},"import"),p(),o("span",{class:"token punctuation"},"{"),p(" defineComponent "),o("span",{class:"token punctuation"},"}"),p(),o("span",{class:"token keyword"},"from"),p(),o("span",{class:"token string"},"'vue'"),p("\n\n"),o("span",{class:"token keyword"},"export"),p(),o("span",{class:"token keyword"},"default"),p(),o("span",{class:"token function"},"defineComponent"),o("span",{class:"token punctuation"},"("),o("span",{class:"token punctuation"},"{"),p("\n  "),o("span",{class:"token function"},"setup"),o("span",{class:"token punctuation"},"("),o("span",{class:"token punctuation"},")"),p(),o("span",{class:"token punctuation"},"{"),p("\n    "),o("span",{class:"token keyword"},"const"),p(" extras "),o("span",{class:"token operator"},"="),p(),o("span",{class:"token punctuation"},"["),o("span",{class:"token string"},"'setting'"),o("span",{class:"token punctuation"},","),p(),o("span",{class:"token string"},"'menu'"),o("span",{class:"token punctuation"},"]"),p("\n    "),o("span",{class:"token keyword"},"const"),p(),o("span",{class:"token function-variable function"},"onExtraClick"),p(),o("span",{class:"token operator"},"="),p(),o("span",{class:"token punctuation"},"("),o("span",{class:"token parameter"},[p("evt"),o("span",{class:"token operator"},":"),p(" MouseEvent"),o("span",{class:"token punctuation"},","),p(" name"),o("span",{class:"token operator"},":"),p(" string")]),o("span",{class:"token punctuation"},")"),p(),o("span",{class:"token operator"},"=>"),p(" console"),o("span",{class:"token punctuation"},"."),o("span",{class:"token function"},"log"),o("span",{class:"token punctuation"},"("),p("evt"),o("span",{class:"token punctuation"},","),p(" name"),o("span",{class:"token punctuation"},")"),p("\n    "),o("span",{class:"token keyword"},"return"),p(),o("span",{class:"token punctuation"},"{"),p(" extras"),o("span",{class:"token punctuation"},","),p(" onExtraClick "),o("span",{class:"token punctuation"},"}"),p("\n  "),o("span",{class:"token punctuation"},"}"),o("span",{class:"token punctuation"},","),p("\n"),o("span",{class:"token punctuation"},"}"),o("span",{class:"token punctuation"},")"),p("\n")])]),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),p("script")]),o("span",{class:"token punctuation"},">")]),p("\n")])])],-1);H.render=function(n,a,c,p,u,i){const k=t("raw-demo"),d=t("global-code-box");return s(),e(d,{packageName:"components",componentName:"header",demoName:"Extra",title:"zh"===n.lang?"操作区域":"Extra area",copied:n.copied,onCopy:n.onCopy},{description:l((()=>["zh"===n.lang?(s(),e("span",$,[J])):r("",!0),"en"===n.lang?(s(),e("span",K,[O])):r("",!0)])),rawCode:l((()=>[o(k)])),highlightCode:l((()=>[Q])),_:1},8,["title","copied","onCopy"])};var R=u({setup:()=>({onPrefixClick:n=>console.log(n)})});const U=p(" Title "),V=p(" Title ");R.render=function(n,a,p,u,i,k){const r=t("ix-header"),d=t("ix-icon");return s(),e(c,null,[o(r,{prefix:"arrow-left",onPrefixClick:n.onPrefixClick},{default:l((()=>[U])),_:1},8,["onPrefixClick"]),o(r,null,{prefix:l((()=>[o(d,{name:"caret-left",onClick:n.onPrefixClick},null,8,["onClick"])])),default:l((()=>[V])),_:1})],64)};var W=u({name:"components-header-Prefix",components:{"raw-demo":R},setup(){const{copy:t}=n(),s=i(!1),{lang:e}=k(a);return{copied:s,onCopy:()=>{s.value||t("copied").then((n=>{s.value=!0,console.log("copied ",n),setTimeout((()=>s.value=!1),1e3)}))},lang:e}}});const X={key:0},Z=o("p",null,"标题前缀, 通常用于返回上一页。",-1),nn={key:1},an=o("p",null,"The title prefix, usually used to return to the previous page.",-1),tn=o("div",null,[o("pre",{class:"language-html"},[o("code",null,[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),p("template")]),o("span",{class:"token punctuation"},">")]),p("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),p("ix-header")]),p(),o("span",{class:"token attr-name"},"prefix"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),p("arrow-left"),o("span",{class:"token punctuation"},'"')]),p(),o("span",{class:"token attr-name"},"@prefixClick"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),p("onPrefixClick"),o("span",{class:"token punctuation"},'"')]),o("span",{class:"token punctuation"},">")]),p(" Title "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),p("ix-header")]),o("span",{class:"token punctuation"},">")]),p("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),p("ix-header")]),o("span",{class:"token punctuation"},">")]),p("\n    Title\n    "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),p("template")]),p(),o("span",{class:"token attr-name"},"#prefix"),o("span",{class:"token punctuation"},">")]),p(),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),p("ix-icon")]),p(),o("span",{class:"token attr-name"},"name"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),p("caret-left"),o("span",{class:"token punctuation"},'"')]),p(),o("span",{class:"token attr-name"},"@click"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),p("onPrefixClick"),o("span",{class:"token punctuation"},'"')]),p(),o("span",{class:"token punctuation"},"/>")]),p(),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),p("template")]),o("span",{class:"token punctuation"},">")]),p("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),p("ix-header")]),o("span",{class:"token punctuation"},">")]),p("\n"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),p("template")]),o("span",{class:"token punctuation"},">")]),p("\n"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),p("script")]),p(),o("span",{class:"token attr-name"},"lang"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),p("ts"),o("span",{class:"token punctuation"},'"')]),o("span",{class:"token punctuation"},">")]),o("span",{class:"token script"},[o("span",{class:"token language-javascript"},[p("\n"),o("span",{class:"token keyword"},"import"),p(),o("span",{class:"token punctuation"},"{"),p(" defineComponent "),o("span",{class:"token punctuation"},"}"),p(),o("span",{class:"token keyword"},"from"),p(),o("span",{class:"token string"},"'vue'"),p("\n\n"),o("span",{class:"token keyword"},"export"),p(),o("span",{class:"token keyword"},"default"),p(),o("span",{class:"token function"},"defineComponent"),o("span",{class:"token punctuation"},"("),o("span",{class:"token punctuation"},"{"),p("\n  "),o("span",{class:"token function"},"setup"),o("span",{class:"token punctuation"},"("),o("span",{class:"token punctuation"},")"),p(),o("span",{class:"token punctuation"},"{"),p("\n    "),o("span",{class:"token keyword"},"const"),p(),o("span",{class:"token function-variable function"},"onPrefixClick"),p(),o("span",{class:"token operator"},"="),p(),o("span",{class:"token punctuation"},"("),o("span",{class:"token parameter"},[p("evt"),o("span",{class:"token operator"},":"),p(" MouseEvent")]),o("span",{class:"token punctuation"},")"),p(),o("span",{class:"token operator"},"=>"),p(" console"),o("span",{class:"token punctuation"},"."),o("span",{class:"token function"},"log"),o("span",{class:"token punctuation"},"("),p("evt"),o("span",{class:"token punctuation"},")"),p("\n    "),o("span",{class:"token keyword"},"return"),p(),o("span",{class:"token punctuation"},"{"),p(" onPrefixClick "),o("span",{class:"token punctuation"},"}"),p("\n  "),o("span",{class:"token punctuation"},"}"),o("span",{class:"token punctuation"},","),p("\n"),o("span",{class:"token punctuation"},"}"),o("span",{class:"token punctuation"},")"),p("\n")])]),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),p("script")]),o("span",{class:"token punctuation"},">")]),p("\n")])])],-1);W.render=function(n,a,c,p,u,i){const k=t("raw-demo"),d=t("global-code-box");return s(),e(d,{packageName:"components",componentName:"header",demoName:"Prefix",title:"zh"===n.lang?"前缀":"Prefix",copied:n.copied,onCopy:n.onCopy},{description:l((()=>["zh"===n.lang?(s(),e("span",X,[Z])):r("",!0),"en"===n.lang?(s(),e("span",nn,[an])):r("",!0)])),rawCode:l((()=>[o(k)])),highlightCode:l((()=>[tn])),_:1},8,["title","copied","onCopy"])};var sn={name:"Demoheader",components:{Basic:f,SizeBar:_,Extra:H,Prefix:W},setup(){const n=i(!1);return{goLink:n=>{window&&(window.location.hash=n)},expanded:n,expandAll:()=>{n.value=!n.value}}}};const en={class:"toc-wrapper"},on=d('<a href="#components-header-demo-Basic" title="基本使用">基本使用</a> <a href="#components-header-demo-SizeBar" title="大小和竖条">大小和竖条</a> <a href="#components-header-demo-Extra" title="操作区域">操作区域</a> <a href="#components-header-demo-Prefix" title="前缀">前缀</a> <a href="#api" title="API"></a>',9),ln={class:"markdown header-wrapper"},cn=p("Header"),pn=o("span",{class:"subtitle"},"页头",-1),un={class:"edit-button","aria-label":"Edit this page on Github",href:"https://github.com/IduxFE/idux/edit/main/components/header/docs/Index.zh.md",target:"_blank",rel:"noopener noreferrer"},kn=o("section",{class:"markdown"},[o("p",null,"页头用于各中容器的顶部，起到了内容概览和引导操作的作用。"),o("ul",null,[o("li",null," 当需要使用户快速理解当前容器是什么以及一些快捷操作。")])],-1),rn=o("span",null,"代码演示",-1),dn={class:"example-wrapper"},gn=o("section",{class:"markdown api-wrapper"},[o("h2",{id:"api"},[o("span",null,"API"),o("a",{onclick:"window.location.hash = 'api'",class:"anchor"},"#")]),o("h3",{id:"ix-header"},[o("span",null,"ix-header"),o("label",{class:"api-type-label component"},"component"),o("a",{onclick:"window.location.hash = 'ix-header'",class:"anchor"},"#")]),o("h4",{id:"props"},[o("span",null,"Props"),o("a",{onclick:"window.location.hash = 'props'",class:"anchor"},"#")]),o("table",null,[o("thead",null,[o("tr",null,[o("th",null,"名称"),o("th",null,"说明"),o("th",null,"类型"),o("th",null,"默认值"),o("th",null,"全局配置"),o("th",null,"备注")])]),o("tbody",null,[o("tr",null,[o("td",null,[o("code",null,"extra")]),o("td",null,"右侧操作区域"),o("td",null,[o("code",null,"string | string[] | #extra")]),o("td",null,"-"),o("td",null,"-"),o("td",null,"-")]),o("tr",null,[o("td",null,[o("code",null,"description")]),o("td",null,"标题下方说明文字"),o("td",null,[o("code",null,"string | #description")]),o("td",null,"-"),o("td",null,"-"),o("td",null,"-")]),o("tr",null,[o("td",null,[o("code",null,"prefix")]),o("td",null,"标题前缀图标"),o("td",null,[o("code",null,"string | #prefix")]),o("td",null,"-"),o("td",null,"-"),o("td",null,"-")]),o("tr",null,[o("td",null,[o("code",null,"size")]),o("td",null,"标题大小"),o("td",null,[o("code",null,"extraLarge | large | medium | small")]),o("td",null,[o("code",null,"large")]),o("td",null,"-"),o("td",null,[p("分别对应 "),o("code",null,"h1 | h2 | h3 | h4")])]),o("tr",null,[o("td",null,[o("code",null,"showBar")]),o("td",null,"是否显示标题前的竖条"),o("td",null,[o("code",null,"boolean")]),o("td",null,[o("code",null,"false")]),o("td",null,"-"),o("td",null,"-")]),o("tr",null,[o("td",null,[o("code",null,"subTitle")]),o("td",null,"二级标题文字"),o("td",null,[o("code",null,"string | #subTitle")]),o("td",null,"-"),o("td",null,"-"),o("td",null,"-")]),o("tr",null,[o("td",null,[o("code",null,"title")]),o("td",null,"标题文字"),o("td",null,[o("code",null,"string | #default")]),o("td",null,"-"),o("td",null,"-"),o("td",null,"-")]),o("tr",null,[o("td",null,[o("code",null,"onExtraClick")]),o("td",null,"右侧操作图标被点击"),o("td",null,[o("code",null,"(evt: MouseEvent, name: string) => void")]),o("td",null,"-"),o("td",null,"-"),o("td",null,[o("code",null,"name"),p(" 为传入的 "),o("code",null,"extra"),p(" 值")])]),o("tr",null,[o("td",null,[o("code",null,"onPrefixClick")]),o("td",null,"前缀图标被点击"),o("td",null,[o("code",null,"(evt: MouseEvent) => void")]),o("td",null,"-"),o("td",null,"-"),o("td",null,"-")])])])],-1);sn.render=function(n,a,c,p,u,i){const k=t("ix-icon"),r=t("Basic"),d=t("Extra"),g=t("ix-col"),m=t("SizeBar"),h=t("Prefix"),x=t("ix-row");return s(),e("article",null,[o("a",en,[o("a",{onClick:a[1]||(a[1]=n=>p.goLink(n))},[on])]),o("section",ln,[o("h1",null,[cn,pn,o("a",un,[o(k,{name:"edit"})])]),kn,o("h2",null,[rn,o(k,{name:"appstore",class:"code-box-expand-trigger",title:"展开全部",onClick:a[2]||(a[2]=n=>p.expandAll())})])]),o("section",dn,[o(x,{gutter:"16"},{default:l((()=>[o(g,{lg:"12",span:"24"},{default:l((()=>[o(r),o(d)])),_:1}),o(g,{lg:"12",span:"24"},{default:l((()=>[o(m),o(h)])),_:1})])),_:1})]),gn])};export default sn;
