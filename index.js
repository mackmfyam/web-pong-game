function RGB( red, green, blue ) {
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

class Pong_game {
    constructor ( name ) {
        this.canvas = document.getElementById( name );
        this.ctx = this.canvas.getContext("2d");
    }

    draw_line ( x1, y1, x2, y2, color ) {
        this.ctx.strokeStyle = color;
        this.ctx.moveTo( x1, y1 );
        this.ctx.lineTo( x2, y2 );
        this.ctx.stroke();
    }

    draw_polygon ( list, color ) {
        this.ctx.strokeStyle = color;
        this.ctx.beginPath();
        this.ctx.moveTo( list[0][0], list[0][1] );
        for ( let j = 1; j < list.length; j ++ ) {
            this.ctx.lineTo( list[j][0], list[j][1] );
        }
        this.ctx.closePath();
        this.ctx.stroke();
    }

    draw_circle ( x, y, radius, color ) {
        
    }
}

        

let game = new Pong_game("mycanvas");
game.draw_line(0, 0, 200, 200, RGB(200, 0, 200) );

let polygon_list = [
    [50, 0],
    [300, 50],
    [300, 100],
    [150, 100],
    [50, 200],
    [0, 50]
];

game.draw_polygon( polygon_list, RGB(200, 0, 0));