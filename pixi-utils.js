/**
 * @author SnakeDrak 
 * MIT License
 */

/**
 * Rect polygon
 * @param int numberOfSides
 * @param int radius
 * @param int Xcenter
 * @param int Ycenter
 **/
(function() {
    PIXI.Graphics.prototype.rectPolygon = function(numberOfSides, radius, Xcenter, Ycenter) {

        this.moveTo(Math.round(Xcenter + radius * Math.sin(0)), Math.round(Ycenter + radius * Math.cos(0)));

        for (var i = 1; i <= numberOfSides; i += 1) {
            var coord = {
                x: Math.round(Xcenter + radius * Math.sin(i * 2 * Math.PI / numberOfSides)),
                y: Math.round(Ycenter + radius * Math.cos(i * 2 * Math.PI / numberOfSides))
            };
            this.lineTo(coord.x, coord.y);
        }

        return this;
    };
})();