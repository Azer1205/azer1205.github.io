import{d as b,c as P,o as c,a as s,f as l,F as h,r as u,b as p,t as k,_ as w}from"./index-e1-XaVz7.js";const g=["#ffd900","#ff9100","#ff4600","#ff0046","#ff008f","#ff00d9","#dc00ff","#9400ff","#4b00ff","#0100ff","#0049ff","#0091ff","#00daff","#00ffda","#00ff91","#00ff48","#00ff00","#4bff00","#94ff00","#ddff00"],B=n=>g[(Math.log2(n)-1)%g.length],C={class:"background"},H={class:"row"},W={class:"col card"},S={class:"cards"},M=["id"],F=b({__name:"board",props:{rows:{default:4},cols:{default:4},cardWidth:{default:60},cardHeight:{default:80},cardPadding:{default:4},cards:{},formatter:{}},emits:["drop"],setup(n,{emit:_}){const m=_,t=n,v=P(()=>{const{rows:o,cols:e,cardWidth:d,cardHeight:r,cardPadding:a}=t;return{"--card-width":`${t.cardWidth}px`,"--card-height":`${t.cardHeight}px`,"--card-padding":`${t.cardPadding}px`,width:`${(d+a)*e+a}px`,height:`${(r+a)*o+a}px`}}),$=o=>{const{y:e,x:d,num:r}=o,a=(t.cardHeight+t.cardPadding)*e+t.cardPadding,f=(t.cardWidth+t.cardPadding)*d+t.cardPadding,i=B(t.formatter&&t.formatter(r)||r);return`top: ${a}px; left: ${f}px; background-color: ${i}`},x=o=>{const{offsetX:e,offsetY:d}=o,{cardWidth:r,cardHeight:a,cardPadding:f}=t,i=Math.floor(e/(r+f)),y=Math.floor(d/(a+f));m("drop",{x:i,y})};return(o,e)=>(c(),s("div",{class:"board",style:p(v.value)},[l("div",C,[(c(!0),s(h,null,u(o.rows,d=>(c(),s("div",H,[(c(!0),s(h,null,u(o.cols,r=>(c(),s("div",W))),256))]))),256))]),l("div",S,[(c(!0),s(h,null,u(o.cards,d=>(c(),s("div",{class:"card",key:d.id,id:`card_${d.id}`,style:p($(d))},k(d.num),13,M))),128))]),l("div",{class:"cover",onClick:x})],4))}}),D=w(F,[["__scopeId","data-v-33402063"]]);export{D as B};
