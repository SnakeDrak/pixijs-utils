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
 * @param bool interactive Set hit area?
 **/
(function() {
    PIXI.Graphics.prototype.rectPolygon = function(numberOfSides, radius, Xcenter, Ycenter, interactive) {

        interactive = interactive || false;
        this.moveTo(Xcenter + radius * Math.sin(0), Ycenter + radius * Math.cos(0));

        var points = [];
        for (var i = 1; i <= numberOfSides; i += 1) {
            var coord = {
                x: Xcenter + radius * Math.sin(i * 2 * Math.PI / numberOfSides),
                y: Ycenter + radius * Math.cos(i * 2 * Math.PI / numberOfSides)
            };
            if (interactive)
                points.push(new PIXI.Point(coord.x, coord.y));
            this.lineTo(coord.x, coord.y);
        }

        if (interactive) {
            this.interactive = true;
            this.hitArea = new PIXI.Polygon(points);
        }

        return this;
    };
})();