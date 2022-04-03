var Left_wrist_X = 0;
var Right_wrist_X = 0;
var font_sides = 0;

function preload(){
    
}

function setup(){
    canvas = createCanvas(500,550);
    canvas.position(80,100);

    Video = createCapture(VIDEO);
    Video.size(500,550);
    Video.position(900,100)

    poseNet = ml5.poseNet(Video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("The PoseNet model is loaded...");
}

function gotPoses(results){
    len = results.length
    if (results.length > 0){
        console.log(results);

        Left_wrist_X = results[0].pose.leftWrist.x;
        Right_wrist_X = results[0].pose.rightWrist.x;
        font_sides = floor(Left_wrist_X - Right_wrist_X);
        console.log("The X Position of left wrist is- " + Left_wrist_X + " The X Position of right wrist is- " + Right_wrist_X);
    }
    
}

function draw(){
    background('yellow');
    fill("blue");
    textSize(font_sides);
    text("ABC",10,260);
    fill("red");
    document.getElementById("font_sides").innerHTML = "The font size of the text will be:" + font_sides + "px";
}