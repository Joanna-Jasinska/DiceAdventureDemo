"use strict";(self.webpackChunkDiceAdventureDemo=self.webpackChunkDiceAdventureDemo||[]).push([[971],{7235:function(e,t,n){n.d(t,{k:function(){return m}});var c=n(9243),a="DiceIcon_dice__mzHqX",i="DiceIcon_icon__Rr08e",r="DiceIcon_physical__yV2lY",o="DiceIcon_magic__15Bfj",s="DiceIcon_elemental__B0alV",l="DiceIcon_trait__fPQ3I",u="DiceIcon_any__f-UYu",d="DiceIcon_notRolled__oeujV",_=n(3329),v=function(e){var t=e.value,n=e.type,c=void 0===t||-1===t?"".concat(d," "):"";switch(n){case"any":default:return"".concat(c).concat(u);case"physical":case"slashed":case"smashed":case"needle":return"".concat(c).concat(r);case"mana":case"magic":case"arcane":case"toxic":case"void":case"rainbow":return"".concat(c).concat(o);case"elemental":case"heat":case"ice":case"shock":case"poison":return"".concat(c).concat(s);case"trait":case"speed":case"strength":case"dexterity":case"perception":case"wits":case"stamina":return"".concat(c).concat(l)}},m=function(e){var t=e.value,n=e.diceMax,r=e.type;return(0,_.jsxs)("div",{className:"".concat(a," ").concat(v({value:t,type:r})),children:[t||n||" "," ",(0,_.jsx)("span",{className:i,children:(0,c.sp)(r)})]})}},1564:function(e,t,n){n.d(t,{v:function(){return i}});var c={miniature:"Miniature_miniature__-XChZ",extension:"Miniature_extension__JEJLA",padding:"Miniature_padding__AvpVc",textBoxContainer:"Miniature_textBoxContainer__VBOAB",textBoxFront:"Miniature_textBoxFront__YIyfd",textBoxBack:"Miniature_textBoxBack__b4yIz",imgFrame:"Miniature_imgFrame__3V+X9",figcaption:"Miniature_figcaption__PifSq",img:"Miniature_img__7uR5g"},a=n(3329),i=function(e){var t=e.padding,n=void 0!==t&&t,i=e.bgTxtFront,r=void 0===i?"":i,o=e.bgTxtBack,s=void 0===o?"":o,l=e.children,u=e.bgColor,d=void 0===u?"#d7ca92":u;return(0,a.jsxs)("figure",{className:"".concat(c.miniature," ").concat(l?c.extended:""),children:[(0,a.jsx)("div",{className:"".concat(c.imgFrame," ").concat(n?c.padding:""," "),style:{backgroundColor:"".concat(d)},children:(0,a.jsxs)("div",{className:c.textBoxContainer,children:[(0,a.jsx)("div",{className:c.textBoxBack,children:s}),(0,a.jsx)("div",{className:c.textBoxFront,children:r})]})}),l?(0,a.jsxs)("div",{className:c.extension,children:[" ",l]}):""]})}},5459:function(e,t,n){n.d(t,{i:function(){return h}});var c=n(1413),a=n(7762),i=n(5861),r=n(3433),o=n(9439),s=n(7757),l=n.n(s),u=n(1564),d=n(7235),_={item:"SkillSquare_item__bxD12",canFire:"SkillSquare_canFire__YwXx-",skillButton:"SkillSquare_skillButton__6sBaz",bar:"SkillSquare_bar__HFaeU",text:"SkillSquare_text__k4BJE",name:"SkillSquare_name__thDuJ",iconBag:"SkillSquare_iconBag__c+K-+",disabled:"SkillSquare_disabled__L5kRC",spent:"SkillSquare_spent__cyghQ"},v=n(984),m=n(2791),f=n(9434),x=n(986),p=n(3329),h=function(e){var t=e.name,n=e.itemId,s=e.icon,h=e.alt,k=e.tags,g=void 0===k?[""]:k,I=e.success,b=void 0!==I&&I,j=e.currentUses,y=void 0===j?-1:j,N=e.skill,Z=void 0===N?{name:"NO SKILL",txt:"-",id:"skill|id",displayCost:[]}:N,B=(0,m.useState)([]),S=(0,o.Z)(B,2),D=S[0],C=S[1],E=(0,v.TD)(),F=E.inCombat,L=E.combat,U=(0,f.I0)();return(0,m.useEffect)((function(){var e=function(){var e=(0,i.Z)(l().mark((function e(t){var n,c,i;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=(0,a.Z)(t),e.prev=1,n.s();case 3:if((c=n.n()).done){e.next=10;break}if(!1===(i=c.value)){e.next=8;break}return e.next=8,U(i());case 8:e.next=3;break;case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),n.e(e.t0);case 15:return e.prev=15,n.f(),e.finish(15);case 18:C([]);case 19:case"end":return e.stop()}}),e,null,[[1,12,15,18]])})));return function(t){return e.apply(this,arguments)}}();D.length>0&&e(D)}),[D,U]),(0,p.jsxs)("div",{className:"".concat(_.item," ").concat(!0!==F||y<0?_.display:b?_.canFire:_.disabled," ").concat(!0===F&&0===y?_.spent:""),id:n,children:[(0,p.jsx)(u.v,{url:s,alt:h||t,bgTxtBack:g[0]}),(0,p.jsx)("div",{className:"".concat(_.skillButton," "),onClick:function(){b&&0===D.length&&C((0,r.Z)(D.concat(x.U.execute(n,{combat:L},b))))},children:h},"".concat(t,"btn").concat(n)),(0,p.jsxs)("div",{className:_.bar,children:[(0,p.jsx)("div",{className:_.iconBag,children:(Z.displayCost?Z.displayCost:[]).map((function(e,n){return(0,m.createElement)(d.k,(0,c.Z)((0,c.Z)({},e),{},{key:"".concat(t,"|").concat(e.type,"|").concat(n)}))}))}),(0,p.jsx)("div",{className:_.text,children:Z.txt}),(0,p.jsx)("span",{className:_.name,children:Z.name})]})]})}},6891:function(e,t,n){n.d(t,{e:function(){return o}});var c=n(9243),a="StatIcon_stat__bvU0-",i="StatIcon_icon__U+1Gf",r=n(3329),o=function(e){var t=e.type,n=e.maxHp,o=void 0===n?"":n;return(0,r.jsxs)("div",{className:"".concat(a),children:[o," ",(0,r.jsx)("span",{className:i,children:(0,c.sp)(t)})]})}},986:function(e,t,n){n.d(t,{U:function(){return s}});var c=n(3433),a=n(1621),i=function(e){var t=function(e,t){if(!e)return[];var n=(0,a.Dl)(e)||[];return 0===n.length?[]:(0,c.Z)(n.map((function(e){var n=e[0]||{false:function(){return!1}},c=e.length>0&&e[1]||!1,a=e.length>1&&e[2]||{};return function(){return n[c]({params:a,state:t})}})))}(e.itemId,e.state);return!(t.length<1)&&t},r=n(7796),o=n(7492),s={usedDices:function(e,t){var n=t.dungeon||!1,a=n&&n.items||!1,r=!!a&&a.find((function(t){return t.itemId===e}));if((r&&r.currentUses||0)<1)return!1;var o=i({itemId:e,state:t});if(!o)return console.log("".concat(e," had no evaluations to perform")),!1;for(var s=(0,c.Z)(o),l=!0,u=0;l&&u<s.length;){var d=s[u]();void 0===d||!1===d?l=!1:!0!==d&&(l=!0!==l&&!1!==l?[].concat((0,c.Z)(l),(0,c.Z)(d)):(0,c.Z)(d)),u++}return u!==s.length&&(l=!1),l},execute:function(e,t,n){var i=(0,c.Z)(n.map((function(e){return function(e,t){return t.find((function(t){return t.id===e}))||{}}(e,t.combat.rolledDices)})));console.log("Skill.EXECUTE > usedDices, diceIdArr",i,n);var s=function(e){var t=e.itemId,n=e.state,i=e.usedDices;if(!t)return[];var r=(0,a.cL)(t)||[];if(0===r.length)return[];var o=(0,c.Z)(r.map((function(e){var t=e[0]||{false:function(){return!1}},c=e.length>0&&e[1]||!1,a=e.length>1&&e[2]||{};return function(){return t[c]({params:a,state:n,usedDices:i})}})));return!(o.length<1)&&(console.log("data> skillExecs > SkillExecs for:",t,o),o)}({itemId:e,state:t,usedDices:i});if(!s)return console.log("".concat(e," had no actions to execute")),!1;for(var l=(0,c.Z)(s),u=!0,d=0;u&&d<l.length;){var _=l[d]();void 0===_||!1===_?u=!1:!0!==_&&(u=!0!==u&&!1!==u?[].concat((0,c.Z)(u),(0,c.Z)(_)):(0,c.Z)(_)),d++}return u=d===l.length&&(!0!==u&&!1!==u?[].concat((0,c.Z)(u),[r.EC,function(){return(0,o.IZ)(e)}]):[r.EC,function(){return(0,o.IZ)(e)}])}}},5971:function(e,t,n){n.r(t),n.d(t,{WorkshopPage:function(){return q},default:function(){return T}});var c=n(9434),a=n(35),i=n(2093),r=n(1413),o=n(3433),s=n(4221),l=n(1564),u="WorkshopItem_item__SbHL0",d="WorkshopItem_bar__cHVbU",_="WorkshopItem_iconBag__EXSLz",v="WorkshopItem_selectButton__FihG8",m="WorkshopItem_delevel__oKsIv",f="WorkshopItem_delevelTo1__6zGKX",x="WorkshopItem_delevel10__kXNjd",p="WorkshopItem_levelUp__d2TJJ",h="WorkshopItem_plus1__f059c",k="WorkshopItem_plus10__86caa",g="WorkshopItem_text__EYUdG",I="WorkshopItem_level__4mIHc",b="WorkshopItem_name__O8q-K",j=n(7235),y=n(4064),N=n(7370),Z=n(4278),B=n(5459),S=n(6891),D=n(3329),C=n(2791),E=function(e){var t=e.name,n=e.itemId,a=e.icon,i=e.alt,o=e.tags,s=void 0===o?[""]:o,E=e.lv,F=void 0===E?1:E,L=e.dices,U=e.nondices,W=e.index,q=e.selected,T=void 0!==q&&q,A=e.skill,M=void 0===A?{name:"NO SKILL",txt:"-",id:"noskill"}:A,w=(0,c.I0)(),H=(0,Z.G)(),V=H.maxEqLv,X=H.spareLvUps,K=H.gold;return(0,D.jsxs)("div",{className:u,id:n,children:[(0,D.jsx)(l.v,{url:a,alt:i||t,bgTxtFront:i,bgTxtBack:s[0],children:(0,D.jsx)(D.Fragment,{children:(0,D.jsx)(B.i,{skill:M})})}),(0,D.jsxs)("div",{className:d,children:[F<2||K+1<F?"":(0,D.jsx)("button",{className:"".concat(v," ").concat(m," ").concat(f," "),type:"button",onClick:function(e){e.preventDefault(),w((0,y.H9)({index:W,itemId:n,selected:T})).then((function(e){"string"!==typeof e.payload&&w((0,N.QK)(e.payload[1])),w((0,N.nF)(e.payload[1]))}))},children:"\u267b\ufe0f"},"".concat(t,"btnLv1").concat(n)),F<11||K<10?"":(0,D.jsx)("button",{className:"".concat(v," ").concat(m," ").concat(x," "),type:"button",onClick:function(e){e.preventDefault()},children:"-10"},"".concat(t,"btnLv-10").concat(n)),X<1||F+1>V?"":(0,D.jsx)("button",{className:"".concat(v," ").concat(p," ").concat(h," "),type:"button",onClick:function(e){e.preventDefault(),w((0,N.vw)()).then((function(e){"string"!==typeof e.payload&&w((0,y.wq)({index:W,itemId:n,lv:F,selected:T}))}))},children:"+1"},"".concat(t,"btnLvUp").concat(n)),X<1||F+10>V?"":(0,D.jsx)("button",{className:"".concat(v," ").concat(p," ").concat(k," "),type:"button",onClick:function(e){e.preventDefault(),w((0,N.Qv)()).then((function(e){"string"!==typeof e.payload&&w((0,y.Ag)({index:W,itemId:n,lv:F,selected:T}))}))},children:"+10"},"".concat(t,"btnLvUp10").concat(n)),(0,D.jsxs)("span",{className:g,children:[(0,D.jsx)("span",{className:I,children:"".concat(F," ")}),(0,D.jsx)("span",{className:b,children:t+" "})]})]}),(0,D.jsxs)("div",{className:_,children:[(U||[]).map((function(e,n){return(0,C.createElement)(S.e,(0,r.Z)((0,r.Z)({},e),{},{key:"".concat(t,"|").concat(e.type,"|").concat(n)}))})),(L||[]).map((function(e,n){return(0,C.createElement)(j.k,(0,r.Z)((0,r.Z)({},e),{},{key:"".concat(t,"|").concat(e.type,"|").concat(n)}))}))]})]})},F="WorkshopList_list__cnpMP",L=n(2639);function U(e,t){var n=void 0!==e.selected&&e.selected,c=void 0!==t.selected&&t.selected,a=void 0!==e.favorite&&e.favorite,i=void 0!==t.favorite&&t.favorite;return n===c?a===i?-1*(e.lv-t.lv):e.favorite?-1:1:e.selected?-1:1}var W=function(e){var t=e.filters,n=(0,c.v9)(s.mj),a=(0,c.v9)(s.NV);return(0,D.jsxs)("div",{className:F,children:[(0,c.v9)(s.NH)?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)("br",{}),(0,D.jsx)(L.a,{})]}):"",a&&Array.isArray(a)?function(e,t){return t&&Array.isArray(t)?(0,o.Z)(t.filter((function(t){return!e.selected||t.selected===e.selected}))):t}(t||n,a).map((function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{index:t})})).sort(U).map((function(e){return(0,D.jsx)(E,{name:"".concat(e.name),alt:"".concat(e.alt),itemId:"".concat(e.itemId),index:e.index,selected:e.selected,skill:e.skill,statsTxT:e.statsTxT||"",dices:e.dices,nondices:e.nondices,lv:e.lv},"".concat(e.name,"|").concat(e.index,"|").concat(e.id))})):""]})},q=function(){var e=(0,c.v9)(a.DC);return(0,D.jsxs)("main",{className:"".concat(i.Z.main," ").concat(i.Z.center),children:[e?(0,D.jsx)("span",{className:i.Z.error,children:e}):"",(0,D.jsx)(W,{})]})},T=q}}]);
//# sourceMappingURL=971.e1e57ca6.chunk.js.map