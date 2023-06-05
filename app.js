let can=document.querySelector(".can")
let c=can.getContext("2d")


// Shape section
class shape{
    constructor(x,y,r,w){
    this.x=x;
    this.y=y;
    this.r=r;
    this.w=w;
    
 }      
 circle(c){
    
c.beginPath()
c.fillStyle =this.w; 
 c.arc(this.x,this.y,this.r,0,Math.PI*2,true);
 c.fill();

 }
 
}


//  Bar section
class bar{
    constructor(mx,my,lx,ly){
        this.mx=mx;
        this.my=my;
        this.lx=lx;
        this.ly=ly;
        
    }

    draw_line(c){
        c.beginPath();
        c.moveTo(this.mx,this.my);
        c.lineTo(this.lx,this.ly);
        c.lineTo(this.lx,this.ly);
         c.stroke();
        
    }
   
}


let r1=new shape(90, 90,30,"#0000FF")
r1.circle(c);
let r2=new shape(90, 180, 30,'#FF0000')
r2.circle(c);
let r3=new shape(90, 270, 30,'#FFFF00')
r3.circle(c);
let r4=new shape(90, 360, 30,'#00FF00')
r4.circle(c);


let l1=new bar(700, 90,650,90)
l1.draw_line(c);
const l2=new bar(700, 180,650,180)
l2.draw_line(c);
const l3=new bar(700, 270,650,270)
l3.draw_line(c);
const l4=new bar(700, 360,650,360)
l4.draw_line(c);

function click_u1(a,b,c,d){ 
    const dis=Math.sqrt(((a-c)*(a-c))+((b-d)*(b-d)))
   if (dis<=r1.r)
   {
    fcl1()
   }
 }
 function click_u2(a,b,c,d){ 
    const dis=Math.sqrt(((a-c)*(a-c))+((b-d)*(b-d)))
   if (dis<=r2.r)
   {
    fcl2()
   }
 }
 function click_u3(a,b,c,d){ 
    const dis=Math.sqrt(((a-c)*(a-c))+((b-d)*(b-d)))
   if (dis<=r3.r)
   {
    fcl3()
   }
 }
 function click_u4(a,b,c,d){ 
    const dis=Math.sqrt(((a-c)*(a-c))+((b-d)*(b-d)))
   if (dis<=r4.r)
   {
    fcl4()
   }
 }
 


 c.beginPath();
 c.moveTo(650, 180);
 c.lineTo(670, 190);
 c.moveTo(650, 180);
 c.lineTo(670, 170);
 c.stroke();



 
// Adding the events
can.addEventListener('click',(event)=>{
    const r=can.getBoundingClientRect();
    const a=event.clientX-r.left;
    const b=event.clientY-r.top;
    console.log(a,b);
     click_u1(a,b,r1.x,r1.y);
     click_u2(a,b,r2.x,r2.y);
     click_u3(a,b,r3.x,r3.y);
     click_u4(a,b,r4.x,r4.y);
     })


     c.beginPath();
     c.moveTo(650, 270);
     c.lineTo(670, 280);
     c.moveTo(650, 270);
     c.lineTo(670, 260);
     c.stroke();

const dx=20;

function fcl1(){
requestAnimationFrame(fcl1);
c.clearRect(l1.mx,50,20,100)
c.beginPath();
c.moveTo(l1.mx,l1.my);
c.lineTo(l1.lx,l1.ly);
c.stroke();

if(l1.lx==130){
c.beginPath();
c.moveTo(120, 90);
c.lineTo(170, 90);
c.stroke();
c.beginPath();
c.moveTo(121, 90);
c.lineTo(140, 100);
c.moveTo(121, 90);
c.lineTo(140, 80);
c.stroke();
c.fillStyle =r4.w; 
 c.arc(r1.x,r1.y,r1.r,0,Math.PI*2,true);
 c.fill();
}
else{
    l1.mx-=dx;
    l1.lx-=dx;
    
}

}


c.beginPath();
 c.moveTo(650, 90);
 c.lineTo(670, 100);
 c.moveTo(650, 90);
 c.lineTo(670, 80);
 c.stroke();


function fcl2(){
    requestAnimationFrame(fcl2);
    c.clearRect(l2.mx,100,20,200)
// reference => cnavas.width=window.width;

    c.beginPath();
    c.moveTo(l2.mx,l2.my);
    c.lineTo(l2.lx,l2.ly);
    c.stroke();
    c.clearRect(l2.max,-600,20,900)
    c.beginPath();
    
    if(l2.lx==130){
    c.beginPath();
    c.moveTo(120, 180);
    c.lineTo(170, 180);
    c.stroke();
    c.beginPath();
    c.moveTo(121, 180);
    c.lineTo(140, 190);
    c.moveTo(121, 180);
    c.lineTo(140, 170);
    c.stroke();
    c.fillStyle ="#FA02EC"; 
 c.arc(r2.x,r2.y,r2.r,0,Math.PI*2,true);
 c.fill();
    }
    else{
        l2.mx-=dx;
        l2.lx-=dx;
 }

 if(l3.mx==700){
    c.beginPath();
    c.moveTo(700,270);
    c.lineTo(650,270);
    c.stroke();
    c.beginPath();
    c.beginPath();
    c.moveTo(650, 270);
    c.lineTo(670, 280);
    c.moveTo(650, 270);
    c.lineTo(670, 260);
    c.stroke();

 }
 else{
   console.log("yes");
 }
    } 
    
    c.beginPath();
    c.moveTo(650, 360);
    c.lineTo(670, 350);
    c.moveTo(650, 360);
    c.lineTo(670, 370);
    c.stroke();

    
    
    function fcl3(){
        requestAnimationFrame(fcl3);
        c.clearRect(l3.mx,200,20,300)
        c.clearRect(0,-200,0,0)
        c.beginPath();
        c.moveTo(l3.mx,l3.my);
        c.lineTo(l3.lx,l3.ly);
        c.stroke();
        if(l3.lx==130){
        c.beginPath();
        c.moveTo(120, 270);
        c.lineTo(170, 270);
        c.stroke();
        c.beginPath();
        c.moveTo(121, 270);
        c.lineTo(140, 280);
        c.moveTo(121, 270);
        c.lineTo(140, 260);
        c.stroke();
        c.fillStyle =r1.w; 
 c.arc(r3.x,r3.y,r3.r,0,Math.PI*2,true);
 c.fill();
        }
        else{
            l3.mx-=dx;
            l3.lx-=dx;
        }
        if(l4.mx==700){
            c.beginPath();
            c.moveTo(700,360);
            c.lineTo(650,360);
            c.stroke();
             c.beginPath();
    c.moveTo(650, 360);
    c.lineTo(670, 350);
    c.moveTo(650, 360);
    c.lineTo(670, 370);
    c.stroke();

         }
         
       
        }
        function fcl4(){
            requestAnimationFrame(fcl4);
            c.clearRect(l4.mx,300,20,400)
            c.beginPath();
            c.moveTo(l4.mx,l4.my);
            c.lineTo(l4.lx,l4.ly);
            c.stroke();
            
            if(l4.lx==130){
            c.beginPath();
            c.moveTo(120, 360);
            c.lineTo(170, 360);
            c.stroke();
            c.beginPath();
            c.moveTo(121, 360);
            c.lineTo(140, 350);
            c.moveTo(121, 360);
            c.lineTo(140, 370);
            c.stroke();
            c.fillStyle =r2.w; 
           c.arc(r4.x,r4.y,r4.r,0,Math.PI*2,true);
           c.fill();
            }
            else{
                l4.mx-=dx;
                l4.lx-=dx;
            } 
         }
         c.beginPath();
         c.moveTo(700, 90);
         c.lineTo(650, 90);
         c.stroke();       
         c.beginPath();
        c.moveTo(650, 90);
        c.lineTo(670, 100);
          c.moveTo(650, 90);
         c.lineTo(670, 80);
           c.stroke();   
          c.beginPath();
           c.moveTo(700, 180);
             c.lineTo(650, 180);
               c.stroke();  
           c.beginPath();
           c.moveTo(650, 180);
          c.lineTo(670, 190);
         c.moveTo(650, 180);
         c.lineTo(670, 170);
        c.stroke();
         c.beginPath();
         c.moveTo(700,270);
         c.lineTo(650,270);
         c.stroke();
         c.beginPath();
         c.beginPath();
         c.moveTo(650, 270);
         c.lineTo(670, 280);
         c.moveTo(650, 270);
         c.lineTo(670, 260);
         c.stroke();
     
         c.beginPath();
         c.moveTo(700,360);
         c.lineTo(650,360);
         c.stroke();
          c.beginPath();
         c.moveTo(650, 360);
          c.lineTo(670, 350);
         c.moveTo(650, 360);
        c.lineTo(670, 370);
         c.stroke();







