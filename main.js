song1="";
song2=""

function preload()
{ 
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}

function setup()
{
    canvas=createCanvas(600,600);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide()
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotPoses);
    }

function draw()
{
    image(video,0,0,600,600);
}

function modelLoaded()
{
 console.log("model Loaded!!!!!!")
}

function gotPoses(results)
{
        console.log(results);
        leftWristx=results[0].pose.leftWrist.x;
        leftWristy=results[0].pose.leftWrist.y;
        rightWristx=results[0].pose.rightWrist.x;
        rightWristy=results[0].pose.rightWrist.y;
}      