const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7;
var box8;
var box9;
var box10;
var box11;
var box12;
var box13;
var box14;
var box15;
var box16;
var box17;
var box18;
var box19;
var box20;
var ball;
var ground1;
var ground2;

function setup(){
    var canvas = createCanvas(1200,400);
    box1 = new bluebox(900,350,20,20);
    box2 = new bluebox(920,350,20,20);
    box3 = new bluebox(940,350,20,20);
    box4 = new bluebox(960,350,20,20);

    box5 = new greenbox(910,320,20,20);
    box6 = new greenbox(930,320,20,20);
    box7 = new greenbox(950,320,20,20);

    box8 = new yellowbox(920,290,20,20);
    box9 = new yellowbox(940,290,20,20);
    
    box10 = new pinkbox(930,270,20,20);
    ground1 = new ground(800,625,50,50);

    
}

