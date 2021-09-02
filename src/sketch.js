export const sketch = (p) => {

    p.setup = () => {
        p.createCanvas(1100, 300);
        p.background(255, 255, 255);
    }

    const timelimit = 6000;
      
    p.draw = () => {
        p.stroke(p.random(255), p.random(255), p.random(255), 50);
        const currentTime = p.millis();

        if (currentTime < timelimit) {

            letterH();
            letterE();
            letterL();
            letterL2();
            letterO();
            BackGround();
            BackGround();
            BackGround();
        } else {

            // 6sec
            p.noLoop();
            p.clear();
        }
    }

    /**
     * H
     */
    function letterH() {
        // right line
        let rightlinex1 = p.random(30, 80);
        let rightliney1 = p.random(0, 300);
        let rightlinex2 = p.random(30, 80);
        let rightliney2 = p.random(0, 300);
      
        p.line(rightlinex1, rightliney1, rightlinex2, rightliney2);

        // middle line
        let middlelinex1 = p.random(50, 160);
        let middleiney1 = p.random(120, 170);
        let middlelinex2 = p.random(50, 160);
        let middleliney2 = p.random(120, 170);
      
        p.line(middlelinex1, middleiney1, middlelinex2, middleliney2);

        // left line
        let leftlinex1 = p.random(150, 200);
        let leftliney1 = p.random(0, 300);
        let leftlinex2 = p.random(150, 200);
        let leftliney2 = p.random(0, 300);
      
        p.line(leftlinex1, leftliney1, leftlinex2, leftliney2);
    }

    /**
     * E
     */
    function letterE() {
        // right line
        let rightlinex1 = p.random(250, 300);
        let rightliney1 = p.random(0, 300);
        let rightlinex2 = p.random(250, 300);
        let rightliney2 = p.random(0, 300);
      
        p.line(rightlinex1, rightliney1, rightlinex2, rightliney2);

        // middle top line
        let middletoplinex1 = p.random(290, 420);
        let middletopliney1 = p.random(10, 50);
        let middletoplinex2 = p.random(290, 420);
        let middletopliney2 = p.random(10, 50);
      
        p.line(middletoplinex1, middletopliney1, middletoplinex2, middletopliney2);

        // middle middle line
        let middlelinex1 = p.random(290, 420);
        let middleiney1 = p.random(120, 170);
        let middlelinex2 = p.random(290, 420);
        let middleliney2 = p.random(120, 170);
      
        p.line(middlelinex1, middleiney1, middlelinex2, middleliney2);

        // middle bottom line
        let middlebottomlinex1 = p.random(290, 420);
        let middlebottomliney1 = p.random(250, 300);
        let middlebottomlinex2 = p.random(290, 420);
        let middlebottomliney2 = p.random(250, 300);
      
        p.line(middlebottomlinex1, middlebottomliney1, middlebottomlinex2, middlebottomliney2);

    }

    /**
     * L
     */
    function letterL() {
        // right line
        let rightlinex1 = p.random(480, 550);
        let rightliney1 = p.random(0, 300);
        let rightlinex2 = p.random(480, 550);
        let rightliney2 = p.random(0, 300);
      
        p.line(rightlinex1, rightliney1, rightlinex2, rightliney2);

        // middle line
        let middlelinex1 = p.random(520, 660);
        let middleiney1 = p.random(250, 300);
        let middlelinex2 = p.random(520, 660);
        let middleliney2 = p.random(250, 300);
      
        p.line(middlelinex1, middleiney1, middlelinex2, middleliney2);

    }

    /**
     * L (2)
     */
    function letterL2() {
        // right line
        let rightlinex1 = p.random(700, 750);
        let rightliney1 = p.random(0, 300);
        let rightlinex2 = p.random(700, 750);
        let rightliney2 = p.random(0, 300);
      
        p.line(rightlinex1, rightliney1, rightlinex2, rightliney2);

        // middle line
        let middlelinex1 = p.random(740, 860);
        let middleiney1 = p.random(250, 300);
        let middlelinex2 = p.random(740, 860);
        let middleliney2 = p.random(250, 300);
      
        p.line(middlelinex1, middleiney1, middlelinex2, middleliney2);

    }

    // O
    function letterO() {
        // circle
        let angle1 = p.random(0, 2 * p.PI);
        let xpos1 = 970 + 100 * p.cos(angle1);
        let ypos1 = 200 + 100 * p.sin(angle1);
      
        let angle2 = p.random(0, 2 * p.PI);
        let xpos2 = 970 + 100 * p.cos(angle2);
        let ypos2 = 200 + 100 * p.sin(angle2);
      
        p.line(xpos1, ypos1, xpos2, ypos2);
    }

    /**
     * BackGround
     */
    function BackGround() {
        // right line
        let rightlinex1 = p.random(0, 1100);
        let rightliney1 = p.random(0, 300);
        let rightlinex2 = p.random(0, 1100);
        let rightliney2 = p.random(0, 300);
      
        p.line(rightlinex1, rightliney1, rightlinex2, rightliney2);

    }
}
