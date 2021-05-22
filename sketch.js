var canvas;
var music;
var surface1
var surface2
var surface3
var surface4
var box
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    
    surface1 = createSprite(100,580,190,20)
    surface1.shapeColor ="red"
    surface2 = createSprite(300,580,190,20)
    surface2.shapeColor ="blue"
    surface3 = createSprite(500,580,190,20)
    surface3.shapeColor ="yellow"
    surface4 = createSprite(700,580,190,20)
    surface4.shapeColor ="green"
    //create box sprite and give velocity
    box = createSprite(random(20,750),300,20,20)
    box.shapeColor = rgb(255,255,255)
    box.velocityX = 8
    box.velocityY = 6
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edge = createEdgeSprites()
    box.bounceOff(edge)

    box.bounceOff(surface1)
    
    box.bounceOff(surface2)
    
    box.bounceOff(surface3)
    
    box.bounceOff(surface4)
    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = "green"
    }
    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = rgb(0,0,255)
        box.velocityX = 0
        box.velocityY = 0
    }
    if(surface3.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = "blue"
    }
    if(surface4.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = "yellow"
    }
drawSprites()
}