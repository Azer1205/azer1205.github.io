import{d as k,c as h,o as m,a as v,n as x,b as f,p as I,e as B,f as e,_ as g,F as E,r as H,u as A,g as C,t as p,h as M,i as N,j as i,k as y,l as U,m as b}from"./index-f7BEabQq.js";const D=t=>(I("data-v-9d84932e"),t=t(),B(),t),F=D(()=>e("div",{class:"entry-button__inner"},null,-1)),L=D(()=>e("div",{class:"entry-button__inner"},null,-1)),G=[F,L],P=k({__name:"EntryButton",props:{modelValue:{type:Boolean,default:!1},size:{default:48}},emits:["update:modelValue"],setup(t,{emit:a}){const r=a,s=t,o=h(()=>{const{size:n}=s;return{"--size":`${n}px`}}),l=()=>{r("update:modelValue",!s.modelValue)};return(n,c)=>(m(),v("div",{class:x(["entry-button",{"is-active":n.modelValue}]),style:f(o.value),onClick:l},G,6))}}),T=g(P,[["__scopeId","data-v-9d84932e"]]),j=[{label:"2048",name:"2048Normal"},{label:"2048 进化",name:"2048Drop"},{label:"2048 融合",name:"2048Merge"},{label:"消灭星星",name:"DestroyStars"},{label:"下楼100层",name:"GoDownstairs"},{label:"纸牌",name:"PokerGame"}],R={class:"menu-pane"},Y=["onClick"],q=k({__name:"Menu",props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:a}){const r=a,s=t,o=h(()=>{const{size:d}=s;return{"--size":`${d}px`}}),l=h({get(){return s.modelValue},set(d){r("update:modelValue",d)}}),n=C(),c=d=>{n.push({name:d.name})};return(d,$)=>(m(),v("div",{class:x(["menus",{"is-active":l.value}]),style:f(o.value)},[e("div",R,[(m(!0),v(E,null,H(A(j),_=>(m(),v("div",{class:"menu",key:_.name,onClick:u=>c(_)},p(_.label),9,Y))),128))])],6))}}),J=g(q,[["__scopeId","data-v-c7666952"]]),V=t=>(I("data-v-252738e8"),t=t(),B(),t),K={class:"clock"},O=V(()=>e("div",{class:"dial-scales"},[e("div",{class:"dial-scale"}),e("div",{class:"dial-scale"})],-1)),Q={class:"name"},W={class:"year"},X=V(()=>e("div",{class:"hands hour-hand"},null,-1)),Z=V(()=>e("div",{class:"hands minute-hand"},null,-1)),ee=V(()=>e("div",{class:"hands second-hand"},null,-1)),se={class:"details"},te={class:"month"},ne={class:"block"},ae={class:"day"},oe={class:"block"},le={class:"week"},ce={class:"block"},de=k({__name:"Clock",setup(t){let a=null;M(()=>{r(),a=setInterval(r,1e3)}),N(()=>{a&&clearInterval(a)});const r=()=>{const u=new Date;c.value=u.getFullYear(),d.value=u.getMonth()+1,_.value=u.getDate(),$.value=u.getDay();const w=u.getHours(),z=u.getMinutes(),S=u.getSeconds();n.value=S/60*360-90,l.value=z/60*360-90+S/60*6,o.value=w%12/12*360-90+z/60*30},s=h(()=>({"--hour":`${o.value}deg`,"--minute":`${l.value}deg`,"--second":`${n.value}deg`})),o=i(-90),l=i(-90),n=i(-90),c=i(2024),d=i(1),$=i(1),_=i(1);return(u,w)=>(m(),v("div",K,[O,e("div",{class:"clock-inner",style:f(s.value)},[e("div",Q,[y(" Azer "),e("span",W,"."+p(c.value),1)]),X,Z,ee,e("div",se,[e("div",te,[e("span",ne,p(d.value),1),y("月 ")]),e("div",ae,[e("span",oe,p(_.value),1),y("日 ")]),e("div",le,[y(" 星期 "),e("span",ce,p(["一","二","三","四","五","六","日"][$.value-1]),1)])])],4)]))}}),ue=g(de,[["__scopeId","data-v-252738e8"]]),ie=k({__name:"index",setup(t){C();const a=i(48),r=h(()=>({"--button-size":a.value+"px"})),s=i(!1),o=l=>{l.code==="Escape"&&(s.value=!s.value)};return M(()=>{window.addEventListener("keydown",o)}),U(()=>{window.removeEventListener("keydown",o)}),(l,n)=>(m(),v("div",{class:"home",style:f(r.value)},[b(ue),b(T,{modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=c=>s.value=c),size:a.value},null,8,["modelValue","size"]),b(J,{modelValue:s.value,"onUpdate:modelValue":n[1]||(n[1]=c=>s.value=c),size:a.value},null,8,["modelValue","size"])],4))}}),_e=g(ie,[["__scopeId","data-v-693f8939"]]);export{_e as default};
