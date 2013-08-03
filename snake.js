var Snake = {
    head: undefined,
    initBodyLength: 6,
    segsToCreate: 0,
    segsToKill: [0, 0],
    speed: undefined,
    body: [],
    move: function () {
        var segment, headTile, hitObj;
        for (var i = 0, j = Snake.segments.length; i < j; i++) {
            segment = Snake.segments[i];
            if (i === 0) {
                segment.moveHead()
            } else {
                segment.follow()
            } if (i === j - 1) {
                var prevTile = segment.previousTilePos;
                Cache.tiles[prevTile[0]][prevTile[1]].obj = undefined
            }
        }
        headTile = Cache.tiles[Snake.head.tilePos[0]][Snake.head.tilePos[1]];
        hitObj = headTile.obj;
        headTile.obj = Snake.head;
        return hitObj
    },
    animate: function () {
        var hitObj = Snake.move();
        if (hitObj) {
            if (hitObj instanceof PickUp) {
                Snake.eat(hitObj)
            } else {
                if (hitObj instanceof Wall) {
                    if (!Snake.collide(hitObj)) {
                        return false
                    }
                } else {
                    if (hitObj instanceof SnakeSegment && !Snake.invincible && !hitObj.$html.hasClass("deadSnakeSeg")) {
                        return false
                    }
                }
            }
        }
        return true
    },
    eat: function (matchedItem) {
        if (matchedItem.type === "human") {
            View.updateScore(1);
            Snake.segsToCreate += 1;
            if (Cache.session.humanCount <= Cache.session.humansPresent) {
                (new PickUp("human")).create()
            }
        }
        matchedItem.destroy()
    }
};