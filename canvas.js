window.onload = function(){
    var canvas = document.getElementById('tutorial');
    var tangram = document.getElementById('tangram');
    var chessboard = document.getElementById('chessboard');
    var move = document.getElementById('move');
    var spin = document.getElementById('spin');
    var ellipse = document.getElementById('ellipse');
    var bouncing = document.getElementById('bouncing');
    if(canvas.getContext){

        var ctx = canvas.getContext('2d');
        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect(10,10,55,50);
        ctx.fillStyle = "rgba(0,0,200,0.5)";
        ctx.strokeRect(30,30,55,50);
        ctx.clearRect(15,15,20,25);

        ctx.beginPath();
        ctx.moveTo(100, 50); 
        ctx.lineTo(200, 50); 
        ctx.closePath();
        ctx.stroke(); 

        ctx.beginPath();
        ctx.moveTo(50, 100);
        ctx.lineTo(200, 100);
        ctx.lineTo(200, 300);
        ctx.fillStyle = "rgba(255,0,200,0.5)";
        ctx.fill();
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(250, 50, 40, 0, Math.PI * 2, false); 
        var grd1=ctx.createRadialGradient(245,45,40,245,40,0);
        grd1.addColorStop(0,"red");
        grd1.addColorStop(1,"white");
        ctx.fillStyle = grd1;
        ctx.fill();
        ctx.closePath();
        ctx.stroke();

        var qqb = tangram.getContext('2d');

        var tangramArray = [
            {   
                start: [0,0], 
                points: [[500,0],[250,250]], 
                color: '#cce894' 
            },
            {   
                start: [0,0],
                points: [[250,250],[0,500]],
                color: '#6ac1d4'
            },
            {   
                start: [500,0],
                points: [[375,125],[375,375],[500,250]],
                color: '#f03e62'
            },
            {   
                start: [250,250],
                points: [[375,125],[375,375]],
                color: '#faf226'
            },
            {   
                start: [250,250],
                points: [[125,375],[250,500],[375,375]],
                color: '#a796c2'
            },
            { 
                start: [0,500],
                points: [[125,375],[250,500]],
                color: '#f394c9'
            },
            {   
                start: [250,500],
                points: [[500,250],[500,500]],
                color: '#facb2e'
            }
        ]
        for(var i=0;i<tangramArray.length;i++){
            qqb.beginPath(); 
            qqb.moveTo(tangramArray[i].start[0],tangramArray[i].start[1]); 
            
            for(var k=0;k<tangramArray[i].points.length;k++){
                qqb.lineTo(tangramArray[i].points[k][0],tangramArray[i].points[k][1]);
            }
            qqb.lineTo(tangramArray[i].start[0],tangramArray[i].start[1]);
            qqb.fillStyle = tangramArray[i].color;
            qqb.fill();
        }
        var cb = chessboard.getContext('2d');
        var lineNum = 19, 
            lineLong = 25,
            chessSize = parseInt(lineLong/2)-1,
            cbStart = (500 - (lineNum-1)*lineLong)/2;
        var chessboardDraw = function(){ 
            for(var j=0;j<lineNum;j++){
                cb.moveTo(cbStart,cbStart+j*lineLong);
                cb.lineTo(cbStart+(lineNum-1)*lineLong,cbStart+j*lineLong);
                cb.moveTo(cbStart+j*lineLong,cbStart);
                cb.lineTo(cbStart+j*lineLong,cbStart+(lineNum-1)*lineLong);
            }
            cb.stroke();
        }
        chessboardDraw();

        var chesses = function(x,y,color){
            cb.beginPath();
            cb.arc(x, y, chessSize , 0, Math.PI * 2, false); 
            var grd=ctx.createRadialGradient(x,y,chessSize,x,y-2,0);
            if(color=='#fff'){
                grd.addColorStop(0,'#fff');
                grd.addColorStop(1,'#e6e6e6');
            }else{
                grd.addColorStop(0,color);
                grd.addColorStop(1,'#fff');
            }
            cb.fillStyle = grd;
            cb.fill();
            cb.closePath();
            cb.stroke();
        }
        chesses(200,50,'#000');
        chesses(225,50,'#fff');
        chesses(225,75,'#000');

        var numArr =[
            //0
            [
                [0,1,1,1,1,1,0],
                [1,0,0,0,0,0,1],
                [1,0,0,0,0,0,1],
                [1,0,0,0,0,0,1],
                [1,0,0,0,0,0,1],
                [1,0,0,0,0,0,1],
                [1,0,0,0,0,0,1],
                [1,0,0,0,0,0,1],
                [1,0,0,0,0,0,1],
                [1,0,0,0,0,0,1],
                [0,1,1,1,1,1,0]
            ],
            //1
            [
                [0,0,0,1,0,0,0],
                [0,0,1,1,0,0,0],
                [0,1,0,1,0,0,0],
                [0,0,0,1,0,0,0],
                [0,0,0,1,0,0,0],
                [0,0,0,1,0,0,0],
                [0,0,0,1,0,0,0],
                [0,0,0,1,0,0,0],
                [0,0,0,1,0,0,0],
                [0,0,0,1,0,0,0],
                [0,1,1,1,1,1,0]
            ],
            //2
            [
                [0,1,1,1,1,1,0],
                [1,0,0,0,0,0,1],
                [1,0,0,0,0,0,1],
                [0,0,0,0,0,0,1],
                [0,0,0,0,0,1,0],
                [0,0,0,0,1,0,0],
                [0,0,0,1,0,0,0],
                [0,0,1,0,0,0,0],
                [0,1,0,0,0,0,0],
                [1,0,0,0,0,0,0],
                [1,1,1,1,1,1,1]
            ],
            //3
            [
                [0,1,1,1,1,1,0],
                [1,0,0,0,0,0,1],
                [0,0,0,0,0,0,1],
                [0,0,0,0,0,0,1],
                [0,0,0,0,0,0,1],
                [1,1,1,1,1,1,0],
                [0,0,0,0,0,0,1],
                [0,0,0,0,0,0,1],
                [0,0,0,0,0,0,1],
                [1,0,0,0,0,0,1],
                [0,1,1,1,1,1,0]
            ],
            //4
            [
                [0,0,0,0,0,1,0],
                [0,0,0,0,1,1,0],
                [0,0,0,1,0,1,0],
                [0,0,1,0,0,1,0],
                [0,1,0,0,0,1,0],
                [1,0,0,0,0,1,0],
                [1,1,1,1,1,1,1],
                [0,0,0,0,0,1,0],
                [0,0,0,0,0,1,0],
                [0,0,0,0,0,1,0],
                [0,0,0,0,0,1,0]
            ],
            //5
            [
                [1,1,1,1,1,1,1],
                [1,0,0,0,0,0,0],
                [1,0,0,0,0,0,0],
                [1,0,0,0,0,0,0],
                [1,0,0,0,0,0,0],
                [1,1,1,1,1,1,0],
                [0,0,0,0,0,0,1],
                [0,0,0,0,0,0,1],
                [0,0,0,0,0,0,1],
                [0,0,0,0,0,0,1],
                [1,1,1,1,1,1,0]
            ],
            //6
            [
                [0,1,1,1,1,1,1],
                [1,0,0,0,0,0,0],
                [1,0,0,0,0,0,0],
                [1,0,0,0,0,0,0],
                [1,0,0,0,0,0,0],
                [1,1,1,1,1,1,0],
                [1,0,0,0,0,0,1],
                [1,0,0,0,0,0,1],
                [1,0,0,0,0,0,1],
                [1,0,0,0,0,0,1],
                [0,1,1,1,1,1,0]
            ],
            //7
            [
                [1,1,1,1,1,1,1],
                [0,0,0,0,0,0,1],
                [0,0,0,0,0,0,1],
                [0,0,0,0,0,1,0],
                [0,0,0,0,1,0,0],
                [0,0,0,1,0,0,0],
                [0,0,1,0,0,0,0],
                [0,1,0,0,0,0,0],
                [1,0,0,0,0,0,0],
                [1,0,0,0,0,0,0],
                [1,0,0,0,0,0,0]
            ],
            //8
            [
                [0,1,1,1,1,1,0],
                [1,0,0,0,0,0,1],
                [1,0,0,0,0,0,1],
                [1,0,0,0,0,0,1],
                [1,0,0,0,0,0,1],
                [1,1,1,1,1,1,1],
                [1,0,0,0,0,0,1],
                [1,0,0,0,0,0,1],
                [1,0,0,0,0,0,1],
                [1,0,0,0,0,0,1],
                [0,1,1,1,1,1,0]
            ],
            //9
            [
                [0,1,1,1,1,1,0],
                [1,0,0,0,0,0,1],
                [1,0,0,0,0,0,1],
                [1,0,0,0,0,0,1],
                [1,0,0,0,0,0,1],
                [0,1,1,1,1,1,1],
                [0,0,0,0,0,0,1],
                [0,0,0,0,0,0,1],
                [0,0,0,0,0,0,1],
                [1,0,0,0,0,0,1],
                [0,1,1,1,1,1,0]
            ]
        ]

        var numDraw = function(num){
            var leftMove = parseInt((lineNum - 7)/2),
                topMove = parseInt((lineNum-10)/2);
            if(num>9){
                return;
            }else{
                for(var q=0;q<numArr[num].length;q++){ 
                    for(var w=0;w<numArr[num][q].length;w++){
                        numArr[num][q][w] == 1 ? chesses(cbStart+(leftMove+w)*lineLong , cbStart+(q+topMove)*lineLong ,'#000'):'';
                    }
                }
            }
        }
        numDraw(9);
        
        var countDown = function(){
            var time = 10;
            setInterval(function(){
                time = time == 0 ? 9 : time-1;
                cb.fillStyle="#fff";
                cb.beginPath();
                cb.fillRect(0,0,500,500);
                cb.closePath();
                chessboardDraw(lineNum,lineLong);
                numDraw(time);
            },1000);
        }
        countDown();
        var mv = move.getContext('2d');
        var speedX = 5, 
            speedY = 7,
            startPointX = 30,
            startPointY = 30;
        var run = function(runItem){
            runItem.clearRect(0,0,500,500);
            if(startPointX > 470 || startPointX < 30 ){
                speedX = -speedX;
            }
            if(startPointY > 470 || startPointY < 30){
                speedY = -speedY;
            }
            startPointX+=speedX;
            startPointY+=speedY;
            runItem.beginPath();
            runItem.arc(startPointX,startPointY,30,0,2*Math.PI,true);
            mv.fillStyle='#d9d9d9';
            runItem.closePath();
            runItem.fill();
            requestAnimationFrame(function(){run(mv)});
        }
        run(mv);
        var sp = spin.getContext('2d');
        var spTime = 0; 
        function spRun(){
            sp.clearRect(0,0,500,500);   
            drawNotChange();
            sp.save();
            sp.translate(250,250);
            sp.rotate(spTime*8*Math.PI/180);
            sp.fillStyle='blue';
            sp.beginPath();
            sp.arc(0,150,30,0,2*Math.PI,false);
            sp.closePath();
            sp.fill();
            sp.restore();
            spTime+=1;
            requestAnimationFrame(spRun);
        }
        function drawNotChange(){
            sp.fillStyle='red';
            sp.beginPath();
            sp.arc(250,250,30,0,2*Math.PI,true);
            sp.closePath();
            sp.fill();
            sp.beginPath();
            sp.arc(250,250,150,0,2*Math.PI,true);
            sp.closePath();
            sp.stroke();
        }
        spRun();
        var ec = ellipse.getContext('2d');
        var ecA = 200,
            ecB = 100,
            radius = 30,
            ecTime = 0;
        centerPoint();
        arcRoute(250,250,ecA,ecB,radius);
        setInterval(function(){
            arcRoute(250,250,ecA,ecB,radius);
        }, 70);
        function centerPoint(){
            ec.fillStyle="black";
            ec.beginPath();
            ec.arc(250,250,10,0,2*Math.PI,true)
            ec.closePath();
            ec.fill();
        }
        function route(x,y,a,b){
            var step = (a > b) ? 1 / a : 1 / b;
            ec.beginPath();
            ec.moveTo(x + a, y);
            for (var i = 0; i < 2 * Math.PI; i += step)
            {
                ec.lineTo(x + a * Math.cos(i), y + b * Math.sin(i));
            }
            ec.closePath();
            ec.stroke();
        }

        function arcRoute(x,y,a,b,r){
            ec.clearRect(0,0,500,500);
            route(x,x,a,b);
            centerPoint(ec);
            ec.fillStyle="red";
            if(ecTime==0){
                ec.beginPath();
                ec.arc(x,y,r,0,2*Math.PI,true);
                ec.closePath();
                ec.fill();
            }else{
                ec.beginPath();
                ec.arc(x+a*Math.cos(ecTime),y+b*Math.sin(ecTime),r,0,2*Math.PI,true);
                ec.closePath();
                ec.fill();
            }
            ecTime+=1;
        }

        var bc = bouncing.getContext('2d');
        var width = bouncing.width = ~~(window.innerWidth/500)*500+(~~(window.innerWidth/500)-1)*8;
        console.log(width);
        var height = bouncing.height = 500;


        function random(min,max) {
            var num = Math.floor(Math.random()*(max-min)) + min;
            return num;
        }
        
        function Ball(x,y,velX,velY,color,size){
            this.x=x;
            this.y=y;
            this.velX=velX;
            this.velY=velY;
            this.color=color;
            this.size=size;
        }
        
        Ball.prototype.draw=function(){
            bc.beginPath();
            bc.fillStyle=this.color;
            bc.arc(this.x,this.y,this.size,0,2*Math.PI);
            bc.fill();
            bc.closePath();
        }
        
        
        Ball.prototype.update=function(){
            if((this.x+this.size)>width){
                this.velX=-(this.velX);
            }
        
            if((this.x-this.size)<=0){
                this.velX=-(this.velX);
            }
        
            if((this.y+this.size)>=height){
                this.velY=-(this.velY);
            }
        
            if((this.y-this.size)<=0){
                this.velY=-(this.velY);
            }
        
            this.x+=this.velX;
            this.y+=this.velY;
        }
        
        Ball.prototype.collisionDetect=function(){
            for(var j=0;j<balls.length;j++){
                if(!(this===balls[j])){
                    var dx=this.x-balls[j].x;
                    var dy=this.y-balls[j].y;
                    var distance=Math.sqrt(dx*dx+dy*dy);
        
                    if(distance<this.size+balls[j].size){
                        balls[j].color=this.color='rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
                    }
                }
            }
        }
        
        var balls=[];
        
        function loop(){
            bc.fillStyle='rgba(0,0,0,0.25)';
            bc.fillRect(0,0,width,height);
            while(balls.length<25){
                var ball=new Ball(
                    random(0,width),
                    random(0,height),
                    random(-7,7),
                    random(-7,7),
                    'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
                    random(10,20)
                );
                balls.push(ball);
            }
        
            for(var i=0;i<balls.length;i++){
                balls[i].draw();
                balls[i].update();
                balls[i].collisionDetect();
            }
            requestAnimationFrame(loop);
        }
        
        loop();        
        



    }else{
        console.log('不支持Canvas');
    }
}
