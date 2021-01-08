var database,position;

function setup(){
    database=firebase.database();
    createCanvas(500,500);
    var ballref=database.ref('ball/position');
    ballref.on("value",function(data){
   position = data.val();     
    });
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);


    }
    drawSprites();
}

function changePosition(x,y){

}
