song = "";
song2 = "";

function setup()
{
    canvas = createCanvas(450,450);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450,450);
    video.hide();
}

function preload()
{
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function draw()
{
    image(video,0,0,450,450);
}