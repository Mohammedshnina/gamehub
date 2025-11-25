const c=document.getElementById('g'), ctx=c.getContext('2d');
let player={x:50,y:250,vy:0}, gravity=0.6, obs=[{x:600,y:250}];
document.addEventListener('keydown',()=>{ if(player.y>=250) player.vy=-11; });
function loop(){
 ctx.fillStyle='#111';ctx.fillRect(0,0,600,300);
 player.vy+=gravity; player.y+=player.vy;
 if(player.y>250) player.y=250;
 ctx.fillStyle='white'; ctx.fillRect(player.x,player.y,20,20);
 obs.forEach(o=>{
  o.x-=6; if(o.x<-30) o.x=600+Math.random()*400;
  ctx.fillStyle='red'; ctx.fillRect(o.x,o.y,20,20);
  if(o.x<80 && o.x>30 && player.y>230){ alert('You failed.'); location.reload(); }
 });
 requestAnimationFrame(loop);
}
loop();
