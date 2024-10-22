// console.log("S02");
const red = { color: { r: 255, g: 0, b: 0 } };
class Square {
    constructor(color, area) {
        this.color = color;
        this.area = area;
    }
}
const sq1 = new Square({ r: 255, g: 0, b: 0 }, 255);
console.log(sq1);
