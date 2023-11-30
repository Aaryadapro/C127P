Song_1 = "";
Song_2 = "";

function setup(){
    canvas = createCanvas(440, 400);
    canvas.position(430,200)

    video = createCapture(VIDEO);
    video.hide();

}

function preload(){
    loadSound("music.mp3");
    loadSound("music2.mp3");
}

function draw(){
    Image(video, 0, 0, 600, 500);
}