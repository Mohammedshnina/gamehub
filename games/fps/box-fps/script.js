let c=document.getElementById('c'),ctx=c.getContext('2d');
let x=400,y=250,bullets=[];
document.addEventListener('keydown',e=>{
 if(e.key==='w') y-=6;
 if(e.key==='s') y+=6;
 if(e.key==='a') x-=6;
 if(e.key==='d') x+=6;
});
c.addEventListener('click',e=>{
 let rect=c.getBoundingClientRect();
 let mx=e.clientX-rect.left, my=e.clientY-rect.top;
 let dx=(mx-x)/20, dy=(my-y)/20;
 bullets.push({x:x,y:y,dx,dy});
});
function loop(){
 ctx.fillStyle='#222';ctx.fillRect(0,0,c.width,c.height);
 ctx.fillStyle='white';ctx.fillRect(x-10,y-10,20,20);
 ctx.fillStyle='red';
 bullets.forEach(b=>{b.x+=b.dx;b.y+=b.dy;ctx.fillRect(b.x,b.y,5,5)});
 requestAnimationFrame(loop);
}
loop();
