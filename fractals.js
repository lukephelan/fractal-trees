var angle;
var slider;

function setup() {
    createCanvas(500, 500);
    slider = createSlider(0, TWO_PI, 0.32, 0.01);
    slider.position(143, 600);
}

function draw() {
    background(255);
    angle = slider.value();
    stroke(0);
    translate(200, height);
    branch(100);
}

function branch(len) {
    line(0, 0, 0, -len);
    translate(0, -len);
    if (len > 4) {
        push();
        rotate(angle);
        branch(len * 0.67);
        pop();
        push();
        rotate(-angle);
        branch(len * 0.67);
        pop();
    }
}