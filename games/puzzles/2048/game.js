let c=document.getElementById('b'), ctx=c.getContext('2d'), size=4;
let board=Array.from({length:size},()=>Array(size).fill(0));
function addTile(){ let empt=[]; for(let i=0;i<size;i++) for(let j=0;j<size;j++) if(!board[i][j]) empt.push([i,j]);
 if(!empt.length) return; let [x,y]=empt[Math.floor(Math.random()*empt.length)]; board[x][y]=2;
}
function draw(){
 ctx.fillStyle='#333'; ctx.fillRect(0,0,400,400);
 for(let i=0;i<size;i++) for(let j=0;j<size;j++){
  ctx.fillStyle=board[i][j]? '#faa': '#555';
  ctx.fillRect(j*100+5,i*100+5,90,90);
  if(board[i][j]){ ctx.fillStyle='white'; ctx.font='30px Arial'; ctx.fillText(board[i][j], j*100+35, i*100+60);}
 }
}
addTile(); addTile(); draw();
