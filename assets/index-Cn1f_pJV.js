import{d as b,c as k,o as m,a as v,n as S,b as V,p as M,e as C,f as s,_ as x,F as H,r as F,u as N,g as I,t as y,h as B,i as U,j as u,k as $,l as L,m as z}from"./index-C2FjaYkJ.js";const D=n=>(M("data-v-9d84932e"),n=n(),C(),n),K=D(()=>s("div",{class:"entry-button__inner"},null,-1)),P=D(()=>s("div",{class:"entry-button__inner"},null,-1)),R=[K,P],T=b({__name:"EntryButton",props:{modelValue:{type:Boolean,default:!1},size:{default:48}},emits:["update:modelValue"],setup(n,{emit:a}){const i=a,t=n,l=k(()=>{const{size:o}=t;return{"--size":`${o}px`}}),c=()=>{i("update:modelValue",!t.modelValue)};return(o,d)=>(m(),v("div",{class:S(["entry-button",{"is-active":o.modelValue}]),style:V(l.value),onClick:c},R,6))}}),Y=x(T,[["__scopeId","data-v-9d84932e"]]),j=[{label:"2048",name:"2048Normal"},{label:"2048 进化",name:"2048Drop"},{label:"2048 融合",name:"2048Merge"},{label:"数独",name:"Sudoku"},{label:"消灭星星",name:"DestroyStars"},{label:"下楼100层",name:"GoDownstairs"},{label:"纸牌(Klondike)",name:"Klondike"},{label:"纸牌(FreeCell)",name:"FreeCell"}],q=["onClick"],G={class:"menu-inner"},X=b({__name:"Menu",props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(n,{emit:a}){const i=a,t=n,l=k(()=>{const{size:e}=t;return{"--size":`${e}px`}}),c=k({get(){return t.modelValue},set(e){i("update:modelValue",e)}}),o=I(),d=e=>{o.push({name:e.name})},p=(e,h)=>{document.querySelectorAll(".menu").forEach(_=>{const{x:E,y:A}=_.getBoundingClientRect();_.setAttribute("style",`--x:${e-E}px; --y: ${h-A}px`)})},g=e=>{p(e.clientX,e.clientY)},f=()=>{p(-100,-100)};return(e,h)=>(m(),v("div",{class:S(["menus",{"is-active":c.value}]),style:V(l.value)},[s("div",{class:"menu-pane",onMousemove:g,onMouseleave:f},[(m(!0),v(H,null,F(N(j),r=>(m(),v("div",{class:"menu",key:r.name,onClick:_=>d(r)},[s("div",G,y(r.label),1)],8,q))),128))],32)],6))}}),J=x(X,[["__scopeId","data-v-1e2ed431"]]),w=n=>(M("data-v-252738e8"),n=n(),C(),n),O={class:"clock"},Q=w(()=>s("div",{class:"dial-scales"},[s("div",{class:"dial-scale"}),s("div",{class:"dial-scale"})],-1)),W={class:"name"},Z={class:"year"},ee=w(()=>s("div",{class:"hands hour-hand"},null,-1)),se=w(()=>s("div",{class:"hands minute-hand"},null,-1)),te=w(()=>s("div",{class:"hands second-hand"},null,-1)),ne={class:"details"},oe={class:"month"},ae={class:"block"},le={class:"day"},ce={class:"block"},de={class:"week"},ue={class:"block"},ie=b({__name:"Clock",setup(n){let a=null;B(()=>{i(),a=setInterval(i,1e3)}),U(()=>{a&&clearInterval(a)});const i=()=>{const e=new Date;d.value=e.getFullYear(),p.value=e.getMonth()+1,f.value=e.getDate(),g.value=e.getDay();const h=e.getHours(),r=e.getMinutes(),_=e.getSeconds();o.value=_/60*360-90,c.value=r/60*360-90+_/60*6,l.value=h%12/12*360-90+r/60*30},t=k(()=>({"--hour":`${l.value}deg`,"--minute":`${c.value}deg`,"--second":`${o.value}deg`})),l=u(-90),c=u(-90),o=u(-90),d=u(2024),p=u(1),g=u(1),f=u(1);return(e,h)=>(m(),v("div",O,[Q,s("div",{class:"clock-inner",style:V(t.value)},[s("div",W,[$(" Azer "),s("span",Z,"."+y(d.value),1)]),ee,se,te,s("div",ne,[s("div",oe,[s("span",ae,y(p.value),1),$("月 ")]),s("div",le,[s("span",ce,y(f.value),1),$("日 ")]),s("div",de,[$(" 星期 "),s("span",ue,y(["一","二","三","四","五","六","日"][g.value-1]),1)])])],4)]))}}),re=x(ie,[["__scopeId","data-v-252738e8"]]),_e=b({__name:"index",setup(n){I();const a=u(48),i=k(()=>({"--button-size":a.value+"px"})),t=u(!1),l=c=>{c.code==="Escape"&&(t.value=!t.value)};return B(()=>{window.addEventListener("keydown",l)}),L(()=>{window.removeEventListener("keydown",l)}),(c,o)=>(m(),v("div",{class:"home",style:V(i.value)},[z(re),z(Y,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=d=>t.value=d),size:a.value},null,8,["modelValue","size"]),z(J,{modelValue:t.value,"onUpdate:modelValue":o[1]||(o[1]=d=>t.value=d),size:a.value},null,8,["modelValue","size"])],4))}}),ve=x(_e,[["__scopeId","data-v-693f8939"]]);export{ve as default};
