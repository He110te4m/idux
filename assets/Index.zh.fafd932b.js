import{M as n,u as s,a}from"./index.21961830.js";import{e as t,aj as o,ak as e,u as c,a0 as p,v as l,x as u,Z as i,h as k,F as r,al as d,G as g,r as f,i as m,a1 as h,z as w}from"./vendor.f0d17684.js";var x=t({setup:()=>({one:()=>n.info("one"),two:()=>n.info("two"),three:()=>n.info("three"),four:()=>n.info("four")})});const v=d();o("data-v-0cda3a8d");const y=g("one"),b=g("two"),C=g("three"),I=g("four");e();const _=v(((n,s,a,t,o,e)=>{const d=c("ix-button"),g=p("click-outside");return l(),u(r,null,[i(k(d,null,{default:v((()=>[y])),_:1},512),[[g,n.one]]),i(k(d,null,{default:v((()=>[b])),_:1},512),[[g,n.two]]),i(k(d,null,{default:v((()=>[C])),_:1},512),[[g,n.three]]),i(k(d,null,{default:v((()=>[I])),_:1},512),[[g,n.four]])],64)}));x.render=_,x.__scopeId="data-v-0cda3a8d";var O=t({name:"cdk-click-outside-Basic",components:{"raw-demo":x},setup(){const{copy:n}=s(),t=f(!1),{lang:o}=m(a);return{copied:t,onCopy:()=>{t.value||n("copied").then((n=>{t.value=!0,console.log("copied ",n),setTimeout((()=>t.value=!1),1e3)}))},lang:o}}});const B={key:0},M=k("p",null,"最基本使用方法。",-1),q={key:1},j=k("p",null,"Basic usage.",-1),z=k("div",null,[k("pre",{class:"language-html"},[k("code",null,[k("span",{class:"token tag"},[k("span",{class:"token tag"},[k("span",{class:"token punctuation"},"<"),g("template")]),k("span",{class:"token punctuation"},">")]),g("\n  "),k("span",{class:"token tag"},[k("span",{class:"token tag"},[k("span",{class:"token punctuation"},"<"),g("ix-button")]),g(),k("span",{class:"token attr-name"},"v-click-outside"),k("span",{class:"token attr-value"},[k("span",{class:"token punctuation attr-equals"},"="),k("span",{class:"token punctuation"},'"'),g("one"),k("span",{class:"token punctuation"},'"')]),k("span",{class:"token punctuation"},">")]),g("one"),k("span",{class:"token tag"},[k("span",{class:"token tag"},[k("span",{class:"token punctuation"},"</"),g("ix-button")]),k("span",{class:"token punctuation"},">")]),g("\n  "),k("span",{class:"token tag"},[k("span",{class:"token tag"},[k("span",{class:"token punctuation"},"<"),g("ix-button")]),g(),k("span",{class:"token attr-name"},"v-click-outside"),k("span",{class:"token attr-value"},[k("span",{class:"token punctuation attr-equals"},"="),k("span",{class:"token punctuation"},'"'),g("two"),k("span",{class:"token punctuation"},'"')]),k("span",{class:"token punctuation"},">")]),g("two"),k("span",{class:"token tag"},[k("span",{class:"token tag"},[k("span",{class:"token punctuation"},"</"),g("ix-button")]),k("span",{class:"token punctuation"},">")]),g("\n  "),k("span",{class:"token tag"},[k("span",{class:"token tag"},[k("span",{class:"token punctuation"},"<"),g("ix-button")]),g(),k("span",{class:"token attr-name"},"v-click-outside"),k("span",{class:"token attr-value"},[k("span",{class:"token punctuation attr-equals"},"="),k("span",{class:"token punctuation"},'"'),g("three"),k("span",{class:"token punctuation"},'"')]),k("span",{class:"token punctuation"},">")]),g("three"),k("span",{class:"token tag"},[k("span",{class:"token tag"},[k("span",{class:"token punctuation"},"</"),g("ix-button")]),k("span",{class:"token punctuation"},">")]),g("\n  "),k("span",{class:"token tag"},[k("span",{class:"token tag"},[k("span",{class:"token punctuation"},"<"),g("ix-button")]),g(),k("span",{class:"token attr-name"},"v-click-outside"),k("span",{class:"token attr-value"},[k("span",{class:"token punctuation attr-equals"},"="),k("span",{class:"token punctuation"},'"'),g("four"),k("span",{class:"token punctuation"},'"')]),k("span",{class:"token punctuation"},">")]),g("four"),k("span",{class:"token tag"},[k("span",{class:"token tag"},[k("span",{class:"token punctuation"},"</"),g("ix-button")]),k("span",{class:"token punctuation"},">")]),g("\n"),k("span",{class:"token tag"},[k("span",{class:"token tag"},[k("span",{class:"token punctuation"},"</"),g("template")]),k("span",{class:"token punctuation"},">")]),g("\n\n"),k("span",{class:"token tag"},[k("span",{class:"token tag"},[k("span",{class:"token punctuation"},"<"),g("script")]),g(),k("span",{class:"token attr-name"},"lang"),k("span",{class:"token attr-value"},[k("span",{class:"token punctuation attr-equals"},"="),k("span",{class:"token punctuation"},'"'),g("ts"),k("span",{class:"token punctuation"},'"')]),k("span",{class:"token punctuation"},">")]),k("span",{class:"token script"},[k("span",{class:"token language-javascript"},[g("\n"),k("span",{class:"token keyword"},"import"),g(),k("span",{class:"token punctuation"},"{"),g(" defineComponent "),k("span",{class:"token punctuation"},"}"),g(),k("span",{class:"token keyword"},"from"),g(),k("span",{class:"token string"},"'vue'"),g("\n"),k("span",{class:"token keyword"},"import"),g(),k("span",{class:"token punctuation"},"{"),g(" IxMessage "),k("span",{class:"token punctuation"},"}"),g(),k("span",{class:"token keyword"},"from"),g(),k("span",{class:"token string"},"'@idux/components/message'"),g("\n\n"),k("span",{class:"token keyword"},"export"),g(),k("span",{class:"token keyword"},"default"),g(),k("span",{class:"token function"},"defineComponent"),k("span",{class:"token punctuation"},"("),k("span",{class:"token punctuation"},"{"),g("\n  "),k("span",{class:"token function"},"setup"),k("span",{class:"token punctuation"},"("),k("span",{class:"token punctuation"},")"),g(),k("span",{class:"token punctuation"},"{"),g("\n    "),k("span",{class:"token keyword"},"const"),g(),k("span",{class:"token function-variable function"},"one"),g(),k("span",{class:"token operator"},"="),g(),k("span",{class:"token punctuation"},"("),k("span",{class:"token punctuation"},")"),g(),k("span",{class:"token operator"},"=>"),g(" IxMessage"),k("span",{class:"token punctuation"},"."),k("span",{class:"token function"},"info"),k("span",{class:"token punctuation"},"("),k("span",{class:"token string"},"'one'"),k("span",{class:"token punctuation"},")"),g("\n    "),k("span",{class:"token keyword"},"const"),g(),k("span",{class:"token function-variable function"},"two"),g(),k("span",{class:"token operator"},"="),g(),k("span",{class:"token punctuation"},"("),k("span",{class:"token punctuation"},")"),g(),k("span",{class:"token operator"},"=>"),g(" IxMessage"),k("span",{class:"token punctuation"},"."),k("span",{class:"token function"},"info"),k("span",{class:"token punctuation"},"("),k("span",{class:"token string"},"'two'"),k("span",{class:"token punctuation"},")"),g("\n    "),k("span",{class:"token keyword"},"const"),g(),k("span",{class:"token function-variable function"},"three"),g(),k("span",{class:"token operator"},"="),g(),k("span",{class:"token punctuation"},"("),k("span",{class:"token punctuation"},")"),g(),k("span",{class:"token operator"},"=>"),g(" IxMessage"),k("span",{class:"token punctuation"},"."),k("span",{class:"token function"},"info"),k("span",{class:"token punctuation"},"("),k("span",{class:"token string"},"'three'"),k("span",{class:"token punctuation"},")"),g("\n    "),k("span",{class:"token keyword"},"const"),g(),k("span",{class:"token function-variable function"},"four"),g(),k("span",{class:"token operator"},"="),g(),k("span",{class:"token punctuation"},"("),k("span",{class:"token punctuation"},")"),g(),k("span",{class:"token operator"},"=>"),g(" IxMessage"),k("span",{class:"token punctuation"},"."),k("span",{class:"token function"},"info"),k("span",{class:"token punctuation"},"("),k("span",{class:"token string"},"'four'"),k("span",{class:"token punctuation"},")"),g("\n    "),k("span",{class:"token keyword"},"return"),g(),k("span",{class:"token punctuation"},"{"),g(" one"),k("span",{class:"token punctuation"},","),g(" two"),k("span",{class:"token punctuation"},","),g(" three"),k("span",{class:"token punctuation"},","),g(" four "),k("span",{class:"token punctuation"},"}"),g("\n  "),k("span",{class:"token punctuation"},"}"),k("span",{class:"token punctuation"},","),g("\n"),k("span",{class:"token punctuation"},"}"),k("span",{class:"token punctuation"},")"),g("\n")])]),k("span",{class:"token tag"},[k("span",{class:"token tag"},[k("span",{class:"token punctuation"},"</"),g("script")]),k("span",{class:"token punctuation"},">")]),g("\n\n"),k("span",{class:"token tag"},[k("span",{class:"token tag"},[k("span",{class:"token punctuation"},"<"),g("style")]),g(),k("span",{class:"token attr-name"},"scoped"),k("span",{class:"token punctuation"},">")]),k("span",{class:"token style"},[k("span",{class:"token language-css"},[g("\n"),k("span",{class:"token selector"},".ix-button"),g(),k("span",{class:"token punctuation"},"{"),g("\n  "),k("span",{class:"token property"},"margin-right"),k("span",{class:"token punctuation"},":"),g(" 4px"),k("span",{class:"token punctuation"},";"),g("\n"),k("span",{class:"token punctuation"},"}"),g("\n")])]),k("span",{class:"token tag"},[k("span",{class:"token tag"},[k("span",{class:"token punctuation"},"</"),g("style")]),k("span",{class:"token punctuation"},">")]),g("\n")])])],-1);O.render=function(n,s,a,t,o,e){const p=c("raw-demo"),i=c("global-code-box");return l(),u(i,{packageName:"cdk",componentName:"click-outside",demoName:"Basic",title:"zh"===n.lang?"基本使用":"Basic usage",copied:n.copied,onCopy:n.onCopy},{description:h((()=>["zh"===n.lang?(l(),u("span",B,[M])):w("",!0),"en"===n.lang?(l(),u("span",q,[j])):w("",!0)])),rawCode:h((()=>[k(p)])),highlightCode:h((()=>[z])),_:1},8,["title","copied","onCopy"])};var A={name:"Democlick-outside",components:{Basic:O},setup(){const n=f(!1);return{goLink:n=>{window&&(window.location.hash=n)},expanded:n,expandAll:()=>{n.value=!n.value}}}};const H={class:"toc-wrapper"},E=k("a",{href:"#cdk-click-outside-demo-Basic",title:"基本使用"},"基本使用",-1),L=g(),N=k("a",{href:"#api",title:"API"},null,-1),P={class:"markdown header-wrapper"},F=g("ClickOutside"),G=k("span",{class:"subtitle"},"点击外部",-1),T={class:"edit-button","aria-label":"Edit this page on Github",href:"https://github.com/IduxFE/idux/edit/main/cdk/click-outside/docs/Index.zh.md",target:"_blank",rel:"noopener noreferrer"},D=k("section",{class:"markdown"},[k("p",null,"为除了特定元素外添加全局点击事件。"),k("h2",{id:"何时使用"},[k("span",null,"何时使用"),k("a",{onclick:"window.location.hash = '何时使用'",class:"anchor"},"#")]),k("ul",null,[k("li",null," 如点击浮层外部关闭。")])],-1),R=k("span",null,"代码演示",-1),Z={class:"example-wrapper"},J=k("section",{class:"markdown api-wrapper"},[k("h2",{id:"api"},[k("span",null,"API"),k("a",{onclick:"window.location.hash = 'api'",class:"anchor"},"#")]),k("h3",{id:"<code>v-click-outside</code>"},[k("span",null,[k("code",null,"v-click-outside")]),k("a",{onclick:"window.location.hash = '<code>v-click-outside</code>'",class:"anchor"},"#")]),k("h4",{id:"props"},[k("span",null,"Props"),k("a",{onclick:"window.location.hash = 'props'",class:"anchor"},"#")]),k("pre",{class:"language-typescript"},[k("code",null,[k("span",{class:"token keyword"},"interface"),g(),k("span",{class:"token class-name"},"ClickOutsideOptions"),g(),k("span",{class:"token punctuation"},"{"),g("\n  exclude"),k("span",{class:"token operator"},":"),g(" Ref"),k("span",{class:"token operator"},"<"),g("HTMLElement"),k("span",{class:"token operator"},">"),k("span",{class:"token punctuation"},"["),k("span",{class:"token punctuation"},"]"),g("\n  handler"),k("span",{class:"token operator"},":"),g(" ClickOutsideHandler\n"),k("span",{class:"token punctuation"},"}"),g("\n\n"),k("span",{class:"token keyword"},"type"),g(),k("span",{class:"token class-name"},"ClickOutsideHandler"),g(),k("span",{class:"token operator"},"="),g(),k("span",{class:"token punctuation"},"("),k("span",{class:"token punctuation"},")"),g(),k("span",{class:"token operator"},"=>"),g(),k("span",{class:"token keyword"},"void"),g("\n\n"),k("span",{class:"token keyword"},"type"),g(),k("span",{class:"token class-name"},"ClickOutsideBinding"),g(),k("span",{class:"token operator"},"="),g(" ClickOutsideHandler "),k("span",{class:"token operator"},"|"),g(" ClickOutsideOptions")])])],-1);A.render=function(n,s,a,t,o,e){const p=c("ix-icon"),i=c("Basic"),r=c("ix-col"),d=c("ix-row");return l(),u("article",null,[k("a",H,[k("a",{onClick:s[1]||(s[1]=n=>t.goLink(n))},[E,L,N])]),k("section",P,[k("h1",null,[F,G,k("a",T,[k(p,{name:"edit"})])]),D,k("h2",null,[R,k(p,{name:"appstore",class:"code-box-expand-trigger",title:"展开全部",onClick:s[2]||(s[2]=n=>t.expandAll())})])]),k("section",Z,[k(d,{gutter:"16"},{default:h((()=>[k(r,{lg:"12",span:"24"},{default:h((()=>[k(i)])),_:1}),k(r,{lg:"12",span:"24"})])),_:1})]),J])};export default A;
