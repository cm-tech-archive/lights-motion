!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const o=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,a)=>{const v=new URL(e,o);if(self[t].moduleMap[v])return n(self[t].moduleMap[v]);const i=new Blob([`import * as m from '${v}';`,`${t}.moduleMap['${v}']=m;`],{type:"text/javascript"}),y=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){a(new Error(`Failed to import: ${e}`)),r(y)},onload(){n(self[t].moduleMap[v]),r(y)}});document.head.appendChild(y)})),self[t].moduleMap={}}}("assets/");for(var e=document.getElementById("canvas"),t=e.getContext("2d"),n={x:0,y:0,down:!1},o=!1,r=[],a=[],v=0;v<16;v++){for(var i=[],y=0;y<16;y++)i.push({x:100*Math.random(),y:100*Math.random(),vx:0,vy:0});a.push(.5*Math.random()+.2),r.push(i)}var x=0;function l(e,t){for(var n=1-t,o=[],r=0;r<e.length-1;r++){var a={vx:e[r].vx*n+e[r+1].vx*t,vy:e[r].vy*n+e[r+1].vy*t};o.push({x:e[r].x*n+e[r+1].x*t+-1*a.vx,y:e[r].y*n+e[r+1].y*t+-1*a.vy,vx:e[r].vx*n+e[r+1].vx*t,vy:e[r].vy*n+e[r+1].vy*t})}return o}e.width=800,e.height=800;var d=0;function h(e,n,o){var r=d;t.beginPath(),t.strokeStyle="hsla("+r+",100%,50%,"+.01*o+")";var a=function(e,t){for(var n=e,o=t;n.length>1;)n=l(n,o),o=o;var r=0*o;return{x:n[0].x+n[0].vx*r,y:n[0].y+n[0].vy*r}}(e,0);t.moveTo(a.x,a.y);e.length;e.length,t.beginPath(),t.strokeStyle="hsla("+r+",70%,50%,"+o+")",t.moveTo(e[0].x,e[0].y);for(var v=1;v<e.length;v+=1){var i=e[v-1],y={x:e[v].x+0,y:e[v].y+0,vx:e[v].vx+0,vy:e[v].vy+0};t.quadraticCurveTo(i.x,i.y,(i.x+y.x)/2,(i.y+y.y)/2)}t.stroke()}function s(e,t){e[0].x=n.x,e[0].y=n.y,e[0].vx=0,e[0].vy=0;for(var o=1;o<e.length;o++){var r=t;e[o].vx=e[o].vx*(1-r)*1,e[o].vy=e[o].vy*(1-r)*1;var a=((e[o-1].x-e[o].x)**2+(e[o-1].y-e[o].y)**2)**.5;e[o].vx+=(e[o-1].x-e[o].x)*r/(a+.1)*(-0+a)*.25+0*(e[o-1].vx-e[o].vx),e[o].vy+=(e[o-1].y-e[o].y)*r/(a+.1)*(-0+a)*.25+0*(e[o-1].vy-e[o].vy)}for(o=1;o<e.length;o++){Math.atan(e[o].vy,e[o].vx);a=Math.hypot(e[o].vy,e[o].vx);e[o].x+=e[o].vx,e[o].y+=e[o].vy}}var u={x:0,y:0},c={x:0,y:0},m={x:0,y:0};function w(){e.width=4*window.innerWidth,e.height=4*window.innerHeight}window.setInterval((function(){c={x:(Math.random()/2+.25)*window.innerWidth,y:(Math.random()/2+.25)*window.innerHeight}}),1e3),window.setInterval((function(){for(var e=0;e<r.length;e++){var t=.25+e/16*.5;s(r[e],t)}}),5),function v(){d++;var i=.06,y=(Math.hypot(c.x-u.x,c.y-u.y)+1)/e.width*10;m.x=m.x*(1-i)+i*(c.x-u.x)/y,m.y=m.y*(1-i)+i*(c.y-u.y)/y,i=.1,u.x=u.x*(1-i)+i*(u.x+m.x),u.y=u.y*(1-i)+i*(u.y+m.y),(new Date).getTime()-x>2e3&&(n.x=4*u.x,n.y=4*u.y),t.globalCompositeOperation="source-over",t.fillStyle="rgba(0,0,0,1)",t.fillRect(0,0,e.width,e.height),t.globalCompositeOperation="lighter",t.lineWidth=4;for(var l=0;l<r.length;l++){h(r[l],0,a[l])}o||requestAnimationFrame(v)}(),window.addEventListener("mousemove",(function(e){n.x=4*e.clientX,n.y=4*e.clientY,x=(new Date).getTime()})),window.addEventListener("keyup",(function(e){32==e.keyCode&&(o=!o)})),window.addEventListener("resize",w),w();
