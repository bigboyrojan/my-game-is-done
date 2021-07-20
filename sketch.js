var  dolphin, shark, fish, blobfish;
var dolphinimg, sharkimg, fishimg, blobfishimg;
var house, houseimg;
var daybackground, nightbackground;
var daybackgroundimg, nightbackgroundimg;
var backgroundImage,line;
var trackimg;
var swordimg,swordimg2, sword1, sword2, sword3, sword4;
var juice,tablet,candy,insulin;
var juiceimg,tabletimg,candyimg,insulinimg;
var rand;
var scores = 3;
var score = 15;
var scoring = 3;
var scor = 15;
var candygroup, juicegroup, tabletgroup, insulingroup;
var form;
function preload(){
    //loading the images
dolphinimg = loadImage("images/gamedolphin.png");
sharkimg = loadImage("images/gameshark.png");
fishimg = loadImage("images/gamefish.png");
blobfishimg = loadImage("images/gameblobfish.png");
houseimg = loadImage("images/gamehouse.png");
daybackgroundimg = loadImage("images/gamedaybackground.PNG");
nightbackgroundimg = loadImage("images/gamenightbackground.PNG");
backgroundImage = loadImage("images/gamedaybackground.png");
swordimg = loadImage("images/gamesword.PNG");
swordimg2 = loadImage("images/gamesword2.png");
juiceimg = loadImage("images/juice.png");
insulinimg = loadImage("images/insulin.png");
candyimg = loadImage("images/candy.png");
tabletimg = loadImage("images/dextrosetablet.png");
}

function setup(){
createCanvas(1000,1000);
//creating the players and npc's
dolphin = createSprite(50,70,30,30);
dolphin.addImage(dolphinimg);
dolphin.scale = 0.35;
shark = createSprite(950,920,30,30);
shark.addImage(sharkimg);
shark.scale = 0.45;
shark.depth = 10;
fish = createSprite(50,950,30,30);
fish.addImage(fishimg);
fish.scale = 0.4;
blobfish = createSprite(950,50,30,30);
blobfish.addImage(blobfishimg);
blobfish.scale = 0.5;
house = createSprite(500,500,30,30);
house.addImage(houseimg);
house.scale = 0.6;
line = createSprite(500,577,200,5);
line.shapeColor = "black";
sword1 = createSprite(blobfish.x-65,blobfish.y+10,10,10);
sword1.addImage(swordimg);
sword1.scale = 0.17;
sword2 = createSprite(dolphin.x+48,dolphin.y+10,10,10);
sword2.addImage(swordimg2);
sword2.scale = 0.17;
sword3 = createSprite(fish.x+70,fish.y+10,10,10);
sword3.addImage(swordimg2);
sword3.scale = 0.17;
sword4 = createSprite(shark.x-30,shark.y+10,10,10);
sword4.addImage(swordimg);
sword4.scale=0.17;
candygroup = new Group();
juicegroup = new Group();
tabletgroup = new Group();
insulingroup = new Group();
}
function draw(){
    background(backgroundImage);
  var edge = createEdgeSprites();
  //players bounce off each other
   blobfish.bounceOff(fish);
   blobfish.bounceOff(shark);
   blobfish.bounceOff(dolphin);
   fish.bounceOff(blobfish);
   fish.bounceOff(shark);
   fish.bounceOff(dolphin);
   shark.bounceOff(dolphin);
   shark.bounceOff(blobfish);
   shark.bounceOff(fish);
   dolphin.bounceOff(shark);
   dolphin.bounceOff(blobfish);
   dolphin.bounceOff(fish);
   //players bounce off edges
blobfish.bounceOff(edge[2]);
blobfish.bounceOff(edge[0]);
blobfish.bounceOff(edge[1]);
blobfish.bounceOff(edge[3]);
fish.bounceOff(edge[2]);
fish.bounceOff(edge[0]);
fish.bounceOff(edge[1]);
fish.bounceOff(edge[3]);
dolphin.bounceOff(edge[2]);
dolphin.bounceOff(edge[0]);
dolphin.bounceOff(edge[1]);
dolphin.bounceOff(edge[3]);
shark.bounceOff(edge[2]);
shark.bounceOff(edge[0]);
shark.bounceOff(edge[1]);
shark.bounceOff(edge[3]);
//sword positions
sword1.x = blobfish.x-65;
sword2.x = dolphin.x+48;
sword3.x = fish.x+70;
sword4.x = shark.x-30;
sword1.y = blobfish.y+10;
sword2.y = dolphin.y+10;
sword3.y = fish.y+10;
sword4.y = shark.y+5;
//movement keys and velocity
if(keyDown("UP")){
blobfish.y = blobfish.y+5;
}

if (keyDown("DOWN")){
blobfish.x= blobfish.x-5;
}

if(keyDown("RIGHT")){
blobfish.y=blobfish.y-5;
}

if(keyDown("LEFT")){
blobfish.x=blobfish.x+5;
}
if(keyDown("W")){
dolphin.x = dolphin.x-5;
}
if(keyDown("A")){
dolphin.y = dolphin.y+5;
}

if(keyDown("S")){
dolphin.y = dolphin.y-5;
}

if(keyDown("D")){
dolphin.x = dolphin.x+5;
}
if(keyDown("I")){
shark.x=shark.x+5;
}

if(keyDown("J")){
shark.y = shark.y-5;
}

if(keyDown("K")){
shark.x = shark.x-5;
}

if(keyDown("L")){
shark.y=shark.y+5;
}

if(keyDown("T")){
fish.y = fish.y+5;
}

if(keyDown("F")){
fish.x = fish.x+5;
}

if(keyDown("G")){
fish.y = fish.y-5;
}

if(keyDown("H")){
fish.x = fish.x-5
}
//if players are touching edges
if(blobfish.isTouching(edge[0])){
blobfish.x = 950;
blobfish.y=50;
}

if(blobfish.isTouching(edge[2])){
blobfish.x = 950;
blobfish.y = 50;
}

if(blobfish.isTouching(edge[3])){
blobfish.x = 950;
blobfish.y = 50;
}

if(blobfish.isTouching(edge[1])){
blobfish.x = 950;
blobfish.y = 50;
}

if(fish.isTouching(edge[1])){
    fish.x = 50;
    fish.y = 950;
    }

if(fish.isTouching(edge[2])){
fish.x = 50;
fish.y = 950;
        }

if(fish.isTouching(edge[3])){
 fish.x = 50;
 fish.y = 950;
            }

 if(fish.isTouching(edge[0])){
fish.x = 50;
fish.y = 950;
                }
if (shark.isTouching(edge[0])){
shark.x = 950;
shark.y = 920;
}

if(shark.isTouching(edge[1])){
shark.x = 950;
shark.y = 920;
}

if(shark.isTouching(edge[2])){
    shark.x = 950;
    shark.y = 920;
}

if(shark.isTouching(edge[3])){
shark.x = 950;
shark.y = 920;
}

if(dolphin.isTouching(edge[0])){
dolphin.x = 50;
dolphin.y = 50;
}

if(dolphin.isTouching(edge[1])){
dolphin.x = 50;
dolphin.y = 50;
}

if(dolphin.isTouching(edge[2])){
dolphin.x = 50;
dolphin.y = 50;
}

if(dolphin.isTouching(edge[3])){
dolphin.x = 50;
dolphin.y = 50;
}

//adding the sugar level above the players 
textSize(15);
fill("red");
text("sugar level: "+scores, dolphin.x-20, dolphin.y-50);
textSize(15);
fill("red");
text("sugar level: "+scoring, blobfish.x-60, blobfish.y-30);
textSize(15);
fill("yellow");
text("sugar level: "+score, shark.x-60,shark.y-50);
textSize(15);
fill("yellow");
text("sugar level: "+scor, fish.x-30,fish.y-55);
//if sugar goes higher or lower than certain amount
if(scores<3){
dolphin.x = 2000;
dolphin.y = 3000;
}

if(scoring<3){
blobfish.x = 2309;
blobfish.y = 2834;
}

if(score>15){
shark.x = 2239;
shark.y = 2384;
}

if(scor>15){
fish.x = 8372;
fish.y = 3245;
}
//if conditions for when the person wins
if(scores === 9 && dolphin.isTouching(house)){
textSize(30);
fill("green");
text("CONGRATULATIONS, YOU WON!!", 300,400);
shark.x = 2340;
shark.y = 2490;
fish.x = 9824;
fish.y = 9283;
blobfish.x = 3203;
blobfish.y = 7495;
line.x = 2398;
line.y = 8457;
juicegroup.destroyEach();
candygroup.destroyEach();
tabletgroup.destroyEach();
insulingroup.destroyEach();
}

if(scoring === 9 && blobfish.isTouching(house)){
    textSize(30);
    fill("green");
    text("CONGRATULATIONS, YOU WON!!", 300,400);
    shark.x = 2340;
    shark.y = 2490;
    fish.x = 9824;
    fish.y = 9283;
    dolphin.x = 3203;
    dolphin.y = 7495;
    line.x = 2398;
    line.y = 8457;
    juicegroup.destroyEach();
    candygroup.destroyEach();
    tabletgroup.destroyEach();
    insulingroup.destroyEach();
    }

    if(scor === 9 && fish.isTouching(house)){
        textSize(30);
        fill("green");
        text("CONGRATULATIONS, YOU WON!!", 300,400);
        shark.x = 2340;
        shark.y = 2490;
        dolphin.x = 9824;
        dolphin.y = 9283;
        blobfish.x = 3203;
        blobfish.y = 7495;
        line.x = 2398;
        line.y = 8457;
        juicegroup.destroyEach();
        candygroup.destroyEach();
        tabletgroup.destroyEach();
        insulingroup.destroyEach();
        }

        if(score === 9 && shark.isTouching(house)){
            textSize(30);
            fill("green");
            text("CONGRATULATIONS, YOU WON!!", 300,400);
            dolphin.x = 2340;
            dolphin.y = 2490;
            fish.x = 9824;
            fish.y = 9283;
            blobfish.x = 3203;
            blobfish.y = 7495;
            line.x = 2398;
            line.y = 8457;
            juicegroup.destroyEach();
            candygroup.destroyEach();
            tabletgroup.destroyEach();
            insulingroup.destroyEach();
            }

//changing text color depicting sugar
if(scores === 5 || scores === 7 || scores === 11 || scores === 9){
textSize(15);
fill("limegreen");
text("sugar level: "+scores, dolphin.x-20, dolphin.y-50);
}    
if(scores === 13 || scores === 15){
textSize(15);
fill("yellow");
text("sugar level: "+scores, dolphin.x-20, dolphin.y-50);
}

if(score === 5 || score === 7 || score === 11 || score === 9){
    textSize(15);
    fill("limegreen");
    text("sugar level: "+score, shark.x-60, shark.y-50);
    }  

    if(score === 3){
        textSize(15);
        fill("red");
        text("sugar level: "+score, shark.x-60, shark.y-50);
        }

        if(scor === 5 || scor === 7 || scor === 11 || scor === 9){
            textSize(15);
            fill("limegreen");
            text("sugar level: "+scor, fish.x-30, fish.y-55);
            } 
if(scor === 3){
 textSize(15);
fill("red");
text("sugar level: "+scor, fish.x-30, fish.y-55);
} 

if(scoring === 5 || scoring === 7 || scoring === 11 || scoring === 9){
    textSize(15);
    fill("limegreen");
    text("sugar level: "+scoring, blobfish.x-60, blobfish.y-30);
    }  

    if(scoring === 13 || scoring === 15){
        textSize(15);
        fill("yellow");
        text("sugar level: "+scoring, blobfish.x-60, blobfish.y-30);
        }
//adding the sugar increasing and sugar decreasing commands
if(dolphin.isTouching(candygroup)){
    scores = scores+2;
    dolphin.x = 50;
    dolphin.y = 70;
}

if(dolphin.isTouching(juicegroup)){
    scores = scores+2;
    dolphin.x = 50;
    dolphin.y = 70;
}

if(dolphin.isTouching(tabletgroup)){
    scores = scores+2;
    dolphin.x = 50;
    dolphin.y = 70;
}

if(dolphin.isTouching(insulingroup)){
scores = scores-2;
dolphin.x = 50;
dolphin.y = 70;
}

if(blobfish.isTouching(tabletgroup)){
    scoring = scoring+2;
    blobfish.x = 950;
    blobfish.y = 50;
}

if(blobfish.isTouching(juicegroup)){
    scoring = scoring+2;
    blobfish.x = 950;
    blobfish.y = 50;
}

if(blobfish.isTouching(candygroup)){
    scoring = scoring+2;
    blobfish.x = 950;
    blobfish.y = 50;
}

if(blobfish.isTouching(insulingroup)){
scoring = scoring-2;
blobfish.x = 950;
blobfish.y = 50;
}

if(fish.isTouching(candygroup)){
scor = scor+2;
fish.x = 50;
fish.y = 950;
}

if(fish.isTouching(juicegroup)){
    scor = scor+2;
    fish.x = 50;
    fish.y = 950;
    }

    if(fish.isTouching(tabletgroup)){
        scor = scor+2;
        fish.x = 50;
        fish.y = 950;
        }

if(fish.isTouching(insulingroup)){
scor = scor-2;
fish.x = 50;
fish.y = 950;
}


if(shark.isTouching(candygroup)){
score = score+2;
shark.x = 950;
shark.y = 920;
}

if(shark.isTouching(juicegroup)){
    score = score+2;
    shark.x = 950;
    shark.y = 920;
    }

    if(shark.isTouching(tabletgroup)){
        score = score+2;
        shark.x = 950;
        shark.y = 920;
        }

if(shark.isTouching(insulingroup)){
score = score-2;
shark.x = 950;
shark.y = 920;
}

//if everyone is off the screen
if(dolphin.x>1000 && dolphin.y>1000 && blobfish.y>1000 && blobfish.x>1000 && shark.y>1000 && shark.x>1000 && fish.y>1000 && fish.x>1000){
textSize(50);
fill("red");
text("Game Over😔", 450,500);
house.x = 9000;
house.y = 9000;
line.x = 3489;
line.y = 9384;
juicegroup.destroyEach();
insulingroup.destroyEach();
candygroup.destroyEach();
tabletgroup.destroyEach();
}
//calling the functions
creation();
candies();
tablets();
insulinspawn();
drawSprites();
}

//creating the spawning functions
function creation(){
if(frameCount%150 === 0){
    juice = createSprite(500,950,30,30);
    juice.x = Math.round(random(150,900));
    juice.y = Math.round(random(500,950));
    juice.addImage(juiceimg);
    juice.scale = 0.3;
    juice.lifetime = 200;
    juicegroup.add(juice);
}
}

function candies(){
    if(frameCount%170 === 0){
       candy = createSprite(500,950,30,30);
        candy.x = Math.round(random(150,900));
        candy.y = Math.round(random(500,950));
        candy.addImage(candyimg);
        candy.scale = 0.35;
        candy.lifetime = 200;
        candygroup.add(candy);
    }
}

function tablets(){
    if(frameCount%130 === 0){
        tablet = createSprite(500,950,30,30);
        tablet.x = Math.round(random(150,900));
        tablet.y = Math.round(random(500,950));
        tablet.addImage(tabletimg);
        tablet.scale = 0.3;
        tablet.lifetime = 190;
        tabletgroup.add(tablet);
    }
}

function insulinspawn(){
    if(frameCount%90=== 0){
        insulin = createSprite(500,950,30,30);
        insulin.x = Math.round(random(150,900));
        insulin.y = Math.round(random(500,50));
        insulin.addImage(insulinimg);
        insulin.scale = 0.4;
        insulin.lifetime = 180;
        insulingroup.add(insulin);
    }
}