function setup(){
    createCanvas(windowWidth, windowHeight);
    background('#285962');
    noLoop();

    let generateButton = createButton('Generate Pattern');
    generateButton.style('background-color', '#ffffff');
    generateButton.style('text-color', '#000000');
    generateButton.position(40, 20);
    generateButton.mousePressed(function() {
        clear();
        background('#285962');
        redraw();
    });
}

function draw(){
    noStroke();
    drawParticules(4000);
}

function drawParticules(particulesCount){
    for(let count=0; count<particulesCount; count+=1) {
        let xPos = random(0, windowWidth);
        let yPos = random(0, windowHeight);

        let distanceFromCenter = dist(windowWidth/2, windowHeight/2, xPos, yPos);
        let decay = getBellCurve(distanceFromCenter*0.5);
        let decayPercent = decay * 100;

        fill(200, 200 - decayPercent, decayPercent);
        ellipse(xPos, yPos, decay*20);
    }
}

function getBellCurve(distance) {
    return exp(-1*pow(distance/100, 2));
}