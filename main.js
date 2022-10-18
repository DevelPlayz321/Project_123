var right_Wrist_X = 0;
var left_Wrist_X = 0;
var difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(500, 550);
    canvas = createCanvas(560, 560);
    canvas.position(560, 150);
    model = ml5.poseNet(video, modelLoaded);
    model.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Model loaded successfully");
}

function gotPoses(results){
    if(results.length > 0){
    console.log(results);
    right_Wrist_X = results[0].pose.leftWrist.x;
    left_Wrist_X = results[0].pose.leftWrist.x;
    difference = Math.floor(right_Wrist_X + left_Wrist_X);
    }
}

function draw(){
    background("#AE00FF");
    textSize(difference);
    fill('#00FFF3');
    text('Arighno', 50, 400);
}