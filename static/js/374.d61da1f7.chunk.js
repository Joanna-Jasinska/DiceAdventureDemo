"use strict";(self.webpackChunkDiceAdventureDemo=self.webpackChunkDiceAdventureDemo||[]).push([[374],{9098:function(e,t,a){a.d(t,{c:function(){return u}});var n=a(1413),s=a(1564),i={item:"Item_item__YyyIm",bar:"Item_bar__5NIYP",iconBag:"Item_iconBag__Pq6sx",button:"Item_button__vR7wy",selected:"Item_selected__LMHTu",selectedItem:"Item_selectedItem__2aWmD",text:"Item_text__hVxLa",level:"Item_level__MSptr",name:"Item_name__Fc6QL"},r=a(7235),l=a(6891),c=a(5459),o=a(3329),d=a(2791),u=function(e){var t=e.name,a=e.id,u=e.icon,m=e.alt,h=e.tags,x=void 0===h?[""]:h,p=e.lv,y=void 0===p?1:p,v=e.selected,j=void 0!==v&&v,b=e.toggleSelect,f=e.dices,g=e.nondices,w=e.stats,k=void 0===w?[]:w,_=e.skill,S=void 0===_?{name:"NO SKILL",txt:"-",id:"noskill"}:_;return(0,o.jsxs)("div",{className:"".concat(i.item," ").concat(j?i.selectedItem:""),id:a,children:[(0,o.jsx)(s.v,{url:u,alt:m||t,bgTxtFront:m,bgTxtBack:x[0],children:(0,o.jsx)(c.i,{skill:S})}),(0,o.jsxs)("div",{className:i.bar,children:[(0,o.jsx)("button",{className:"".concat(i.button," ").concat(j?i.selected:""," ").concat(i.delete),type:"button",onClick:b,children:j?"\u2714\ufe0f":"+"},"".concat(t,"btn").concat(a)),(0,o.jsxs)("span",{className:i.text,children:[(0,o.jsx)("span",{className:i.level,children:"".concat(y," ")}),(0,o.jsx)("span",{className:i.name,children:t+" "})]})]}),(0,o.jsxs)("div",{className:i.iconBag,children:[(g||[]).map((function(e,a){return(0,d.createElement)(l.e,(0,n.Z)((0,n.Z)({},e),{},{key:"".concat(t,"|").concat(e.type,"|").concat(a)}))})),(f||k).map((function(e,a){return(0,d.createElement)(r.k,(0,n.Z)((0,n.Z)({},e),{},{key:"".concat(t,"|").concat(e.type,"|").concat(a)}))}))]})]})}},8594:function(e,t,a){a.d(t,{y:function(){return k}});var n=a(1413),s=a(1564),i=a(7235),r=a(9434),l="QuestSquare_item__rq9jF",c="QuestSquare_bar__ms7IJ",o="QuestSquare_iconBag__8-o+v",d="QuestSquare_selectButton__su+i3",u="QuestSquare_buy__Ge5IW",m="QuestSquare_locked__3Tn6n",h="QuestSquare_text__ZhIiB",x="QuestSquare_level__A-7rs",p="QuestSquare_name__7d7my",y=a(5459),v=a(6891),j=a(4278),b=a(4064),f=a(7370),g=a(3329),w=a(2791),k=function(e){var t=e.item,a=e.locked,k=e.cost,_=e.ally,S=t.name,q=t.itemId,I=t.icon,E=t.alt,R=t.tags,N=void 0===R?[""]:R,T=t.lv,L=void 0===T?1:T,D=t.dices,A=t.nondices,P=t.skill,M=void 0===P?{name:"NO SKILL",txt:"-",id:"noskill"}:P,Y=(0,j.G)().gold,Z=(0,r.I0)();return(0,g.jsxs)("div",{className:l,id:q,children:[(0,g.jsx)(s.v,{url:I,alt:E||S,bgTxtFront:E,bgTxtBack:N[0],children:(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(y.i,{skill:M})})}),(0,g.jsxs)("div",{className:c,children:[a?(0,g.jsx)("div",{className:"".concat(d," ").concat(m," "),children:a}):Y<k?(0,g.jsx)("div",{className:"".concat(d," ").concat(m," "),children:"Price\n".concat(k,"\ud83d\udcb0")}):(0,g.jsxs)("button",{className:"".concat(d," ").concat(u," "),type:"button",onClick:function(e){e.preventDefault(),Z((0,f.nF)(k)).then((function(e){"string"!==typeof e.payload&&(Z((0,f.P3)(_)),Z((0,b.iO)(q)))}))},children:["-",k,"\ud83d\udcb0"]},"".concat(S,"btnLvUp").concat(q)),(0,g.jsxs)("span",{className:h,children:[(0,g.jsx)("span",{className:x,children:"".concat(L," ")}),(0,g.jsx)("span",{className:p,children:S+" "})]})]}),(0,g.jsxs)("div",{className:o,children:[(A||[]).map((function(e,t){return(0,w.createElement)(v.e,(0,n.Z)((0,n.Z)({},e),{},{key:"".concat(S,"|").concat(e.type,"|").concat(t)}))})),(D||[]).map((function(e,t){return(0,w.createElement)(i.k,(0,n.Z)((0,n.Z)({},e),{},{key:"".concat(S,"|").concat(e.type,"|").concat(t)}))}))]})]})}},6891:function(e,t,a){a.d(t,{e:function(){return l}});var n=a(9243),s="StatIcon_stat__bvU0-",i="StatIcon_icon__U+1Gf",r=a(3329),l=function(e){var t=e.type,a=e.maxHp,l=void 0===a?"":a;return(0,r.jsxs)("div",{className:"".concat(s),children:[l," ",(0,r.jsx)("span",{className:i,children:(0,n.sp)(t)})]})}},4374:function(e,t,a){a.r(t),a.d(t,{TutorialPage:function(){return j},default:function(){return b}});var n=a(1413),s=a(2787),i=a(604),r=a(4951),l=a(7235),c="ContainerHorisontal_container__OAugh",o=a(3329),d=function(e){return(0,o.jsx)("div",{className:"".concat(c),children:e.children})},u=a(9243),m=a(5224),h=a(4880),x=a(2093),p=a(9098),y=a(8594),v=a(2791),j=function(){return(0,o.jsxs)("main",{className:"".concat(x.Z.main," ").concat(x.Z.center),children:[(0,o.jsx)(i.Y,{to:"/",display:"\ud83c\udfc3 Homepage",recommended:!0}),(0,o.jsx)(s.D,{title:"Dice Adventure Demo"}),(0,o.jsx)("h4",{id:"story",children:"Introduction"}),(0,o.jsx)(d,{children:"Rajavi believe that salvation will be found at \ud83d\udd1a the end of world."}),(0,o.jsx)(d,{children:"So their home is a caravan constantly moving towards neverchanging direction."}),(0,o.jsx)(d,{children:"To live and travel they pull resources from nearby locations by trade, performing services and sometimes even using force when they have to."}),(0,o.jsx)(d,{children:"You are one of the few Rajavi elite Pathforcers."}),(0,o.jsx)(d,{children:"Your task is trading, bargaining, performing, fighting.. - doing everything to make sure nothing stands on the way of Rajavi caravan on their way to salvation."}),'So.. Let\'s go to the "end" \ud83d\ude06!',(0,o.jsx)("h4",{id:"notice",children:"Notice"}),(0,o.jsxs)(d,{children:["Game is stored on your local browser data of THIS specific device."," ",(0,o.jsx)("br",{}),"Cannot be transfered to a different device. ",(0,o.jsx)("br",{}),"You can close or refresh browser tab as you see fit and Your game progress will be saved exactly where you left it."]}),(0,o.jsx)("h4",{id:"tutorial",children:"Tutorial"}),(0,o.jsxs)(d,{children:["Path",(0,o.jsx)("br",{})," There are 3 Paths to explore.",(0,o.jsx)("br",{}),"To progress the game on selected Path choose"," ","Go".concat((0,u.sp)("playerAttack")),".",(0,o.jsx)("br",{}),"Whenever you come back from a Path - you bring back gold and upgrades you earned.",(0,o.jsx)("br",{}),"To progress a path to next Level and gain an upgrade you need to win all available adventures there.",(0,o.jsx)("br",{}),"Once you progress path to next level caravan will move on. Last path will be gone and a new path will open.",(0,o.jsx)(i.Y,{to:"/dungeon",display:"Go".concat((0,u.sp)("playerAttack")),onClick:function(e){return e.preventDefault()},recommended:!0,styles:{whiteSpace:"nowrap"}})]}),(0,o.jsxs)(d,{children:["Caravan",(0,o.jsx)("br",{})," People at the caravan will offer quests.",(0,o.jsx)("br",{}),"Quests require You to progress certain paths.",(0,o.jsx)("br",{}),"Once you complete quest you can trade gold for new item.",(0,o.jsx)("br",{}),"Trading at the caravan will raise friendship Level which grants extra benefits to help You on the journey.",(0,o.jsx)("br",{}),"(Friendship benefits added in future)",(0,o.jsx)(y.y,(0,n.Z)({},{item:{name:"Prize Item",id:"Bunny Familiar|BUNNY MAGIC|",alt:"\ud83d\udc07",skill:{name:"SKILL NAME",txt:"Prize Skill",id:"Bunny Familiar|BUNNY MAGIC|",displayCost:[{value:"",type:"rainbow"}]},statsTxT:"~ +1/4 per lv",stats:[{item:"stats",type:"life",maxHp:2},{item:"dice",diceMax:1,type:"rainbow",existSinceLv:1,duplicateAtLv:6,lvlsToRaiseDiceMax:1}]},locked:"Quest\nRequirements",cost:150,ally:"wizard"}))]}),(0,o.jsx)("h4",{id:"tutorial",children:"Equipment and Skills"}),(0,o.jsxs)(d,{children:["Equipment ",(0,o.jsx)("br",{}),"Equipped items give you dices and life during your adventure.",(0,o.jsx)("br",{}),"When on the Path you must have 1-5 items equipped with you.",(0,o.jsx)("br",{}),"All equipment can be leveled up and down freely at the \ud83d\udd28.",(0,o.jsx)("br",{}),"Leveling item costs upgrades.",(0,o.jsx)("br",{}),"Deleveling item fully refunds upgrades but costs gold.",(0,o.jsx)("br",{}),"Once you get an item it is Yours forever.",(0,o.jsx)(i.Y,{to:"/-",display:"\ud83d\udd28",onClick:function(e){return e.preventDefault()}})]}),(0,o.jsxs)(d,{children:["Skills ",(0,o.jsx)("br",{}),"Each equipment has its unique skill.",(0,o.jsx)("br",{}),"When on the Path - each Skill can be used once per turn.",(0,o.jsx)("br",{})," When Skill is ready to activate - it will glow with green aura.",(0,o.jsx)("br",{})," To activate skill first select exactly as many dices as the skill requires",(0,o.jsx)("br",{})," - then click on the Skill. ",(0,o.jsx)("br",{}),(0,o.jsx)("br",{})," (+) click here to equip this item.",(0,o.jsx)("br",{})," (\u2714\ufe0f) item is equipped.",(0,o.jsx)("br",{})," (1) dices that can be used for this skill.",(0,o.jsx)("br",{})," (2) dices that you get each turn when this item is equipped.",(0,o.jsx)(p.c,(0,n.Z)({},{itemId:"Rusty Sword|SWORD SLASH|",name:"Item name",lv:"(Lv)",alt:"\ud83d\udde1\ufe0f",skill:{name:"SKILL NAME",txt:"What the skill does",id:"Rusty Sword|SWORD SLASH|",displayCost:[{value:"(1)",type:"slashed"},{value:"(1)",type:"strength"}]},statsTxT:"~ +1 per lv",dices:[{item:"dice",type:"heat",diceMax:"(2)",id:"Rusty Sword|SWORD SLASH|||last|dice|0"},{item:"dice",type:"arcane",diceMax:"(2)",id:"Rusty Sword|SWORD SLASH|||last|dice|0"},{item:"dice",type:"slashed",diceMax:"(2)",id:"Rusty Sword|SWORD SLASH|||last|dice|0"}],nondices:[],index:0}))]}),(0,o.jsx)("h4",{id:"path",children:"When on the Path"}),(0,o.jsxs)(d,{children:["You will be using dices like these.",(0,o.jsx)("br",{}),"To choose which dice you want to place first",(0,o.jsx)("br",{})," SELECT a dice by clicking on it.",(0,o.jsxs)("span",{children:[(0,o.jsx)(l.k,{type:"strength",value:"6"},"tutorial|strength6|1"),(0,o.jsx)(l.k,{type:"slashed",value:"7"},"tutorial|slashed7|1"),(0,o.jsx)(l.k,{type:"mana",value:"2"},"tutorial|mana2|1"),(0,o.jsx)(l.k,{type:"ice",value:"4"},"tutorial|ice4|1")]})]}),(0,o.jsxs)(d,{children:["Place dices inside MIDDLE (squre-ish) section",(0,o.jsx)("br",{})," of special boxes like this one - by clicking inside.",(0,o.jsx)("br",{}),"Some dices may not fit inside a particular box.",(0,o.jsx)(r.u,{p:{bodyPartIcon:"\ud83d\udc2d",bodyPartTypes:["head","body"],id:"piece|ANIMALS|purple|Mutated Rat|head|1",damages:{damageToPlayer:1,damageToEnemy:1},allows:{},requires:{minSum:4},grow:{lvlsToRaiseMinSum:1}}})]}),(0,o.jsxs)(d,{children:["What can happen at the end of turn is shown on the RIGHT side of each box:",(0,o.jsx)("br",{}),(0,u.sp)("life")," damage to you ",(0,o.jsx)("br",{}),(0,u.sp)("playerAttack")," your progress towards victory",(0,o.jsx)(i.Y,{to:"/-",display:"\u2714\ufe0fEnd Turn",onClick:function(e){return e.preventDefault()},recommended:!0,styles:{whiteSpace:"nowrap"}})]}),(0,o.jsx)(d,{children:"Some boxes remain LOCKED until you filfill requirements of other boxes."}),(0,o.jsxs)(d,{children:["RED are REQUIREMENTS you need to fulfill",(0,o.jsx)("br",{})," to APPLY",(0,u.sp)("playerAttack")," and PREVENT",(0,u.sp)("life")," when turn ends",h.X.getReqIcons({requires:{minDices:1,minSum:4},allows:{}}).map((function(e,t){return(0,v.createElement)(m.u,(0,n.Z)((0,n.Z)({},e),{},{key:"redRequirements|".concat(t)}))})),(0,o.jsx)("br",{})]}),(0,o.jsxs)(d,{children:["GREEN are REQUIREMENTS for a single dice",(0,o.jsx)("br",{})," to even be placed inside the box",h.X.getReqIcons({allows:{minValue:2,maxValue:6,maxDices:4},requires:{}}).map((function(e,t){return(0,v.createElement)(m.u,(0,n.Z)((0,n.Z)({},e),{},{key:"greenRequirements|".concat(t)}))}))]}),(0,o.jsxs)(d,{children:["GREEN requirements can be IGNORED when you are trying to place dice of same symbol as on LEFT side of the box. Not all boxes have that option.",(0,o.jsx)(r.u,{p:{bodyPartIcon:"\ud83d\udc2d",bodyPartTypes:["head","body"],id:"piece|ANIMALS|purple|Mutated Rat|head|1",weakness:["physical"],damages:{},allows:{},requires:{minDices:1,minSum:7}}})]}),(0,o.jsx)("h4",{id:"details",children:"More details"}),(0,o.jsxs)(d,{children:[(0,v.createElement)(m.u,{value:"3+",required:!0,key:"sumRequirements"}),"total value of dices inside ",(0,o.jsx)("br",{}),"example: 3+ can be fulfilled by [3] or [1][2] or [5], etc"]}),(0,o.jsxs)(d,{children:[(0,v.createElement)(m.u,{value:"x4",required:!0,key:"x4Requirements"}),"amount of dices inside",(0,o.jsx)("br",{}),"example: 4x needs four dices inside"]}),(0,o.jsxs)(d,{children:[(0,v.createElement)(m.u,{value:"2+",allowed:!0,key:"2+Requirements"}),"minimum value of dice ",(0,o.jsx)("br",{}),"example: with 2+ only dices with value 2 or higher can be placed inside"]}),(0,o.jsxs)(d,{children:[(0,v.createElement)(m.u,{value:"-5",allowed:!0,key:"-5Requirements"}),"maximum value of dice ",(0,o.jsx)("br",{}),"example: with -5 only dices with value 5 or lower can be placed inside"]}),(0,o.jsxs)(d,{children:[(0,v.createElement)(m.u,{value:"3-6",allowed:!0,key:"3-6Requirements"}),"minimum and maximum together",(0,o.jsx)("br",{}),"example: with 3-6 only dices with values [3] [4] [5] and [6] can be placed inside"]}),(0,o.jsxs)(d,{children:[(0,v.createElement)(m.u,{value:"-2x",allowed:!0,key:"-2xRequirements"}),"maximum amount of dices ",(0,o.jsx)("br",{}),"example: with -2x only two dices (or less) can be inside at the time"]}),(0,o.jsxs)(d,{children:[(0,v.createElement)(m.u,{value:"even",allowed:!0,key:"evenRequirements"}),(0,v.createElement)(m.u,{value:"odd",allowed:!0,key:"oddRequirements"}),"only even / odd values ",(0,o.jsx)("br",{}),"example: with even - only dices with even value like 2, 4, 6, 8, etc can be placed inside"]})]})},b=j}}]);
//# sourceMappingURL=374.d61da1f7.chunk.js.map