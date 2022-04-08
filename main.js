img="";
status="";
function back(){
    window.location="index1.html";

}
function setup(){
    canvas=createCanvas(420,420);
    canvas.center();
    object_detector= ml5.objectDetector("cocossd",modelLoaded);

}
function modelLoaded(){
    console.log("modelLoaded!");
    status=true;
    object_detector.detect(img,gotResults);
}
function gotResults(error,results){
    if(error){
        console.log(error);

    }
    console.log(results);
}
function preload(){
    img=loadImage("kitchen.jpg");

}
function draw(){
    image(img,0,0,640,420);
}