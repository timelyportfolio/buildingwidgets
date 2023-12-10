/**
 * A pool of unique random numbers with a limited size.
 *
 * @author Guido Krömer <mail 64 cacodaemon 46 de>
 */
var RandomNumberPool = (function () {
    /**
     * Creates a pool with the given size.
     *
     * @param size The pool size, default 12.
     */
    function RandomNumberPool(size) {
        if (size === void 0) { size = 12; }
        this.size = size;
        this.pool = [];
        this.reset();
    }
    /**
     * Gets a unique random number form the pool.
     *
     * @return {number}
     */
    RandomNumberPool.prototype.getNumber = function () {
        var poolLength = this.pool.length;
        if (poolLength === 0) {
            throw 'No numbers left!';
        }
        var index = Math.floor(poolLength * Math.random());
        return this.pool.splice(index, 1)[0];
    };
    /**
     * Resets the pool.
     */
    RandomNumberPool.prototype.reset = function () {
        this.pool.length = 0;
        for (var i = 0; i < this.size; i++) {
            this.pool.push(i);
        }
    };
    return RandomNumberPool;
})();
/**
 * A general util method collection.
 *
 * @author Guido Krömer <mail 64 cacodaemon 46 de>
 */
var Utils = (function () {
    function Utils() {
    }
    /**
     * Rotates a point around another point with the given angle.
     *
     * @param point The point to rotate.
     * @param around The point to rotate around,
     * @param angle THe rotation angle in rad.
     * @returns {Point} The rotated point.
     */
    Utils.rotateAround = function (point, around, angle) {
        var sinAngle = Math.sin(angle);
        var cosAngle = Math.cos(angle);
        return [
            cosAngle * (point[0] - around[0]) - sinAngle * (point[1] - around[1]) + around[0],
            sinAngle * (point[0] - around[0]) + cosAngle * (point[1] - around[1]) + around[1]
        ];
    };
    /**
     * Normalizes the provided rotation in degree.
     *
     * @param angle The rotation angle in degree.
     * @returns THe normalized rotation,
     */
    Utils.nomalizeRotation = function (angle) {
        while (angle >= 360) {
            angle -= 360;
        }
        while (angle < 0) {
            angle += 360;
        }
        return angle;
    };
    return Utils;
})();
/**
 * The game manager used for creating game objects and messaging between them.
 *
 * @author Guido Krömer <mail 64 cacodaemon 46 de>
 */
var GameManager = (function () {
    function GameManager() {
        /**
         * A list of managed game objects.
         */
        this.gameObjects = [];
        /**
         * Internal counter used for generating game objects ids.
         */
        this.idCounter = 0;
        /**
         * A flag used to determine if the game managers init method has already been called.
         */
        this.initialized = false;
    }
    /**
     * Adds a game object to the manager.
     *
     * @param gameObject The game object to add.
     * @param init If true the object's init method gets called immediately.
     * @param specialRenderingContext Adds this rendering context to the game object inted of the global one.
     */
    GameManager.prototype.addGameObject = function (gameObject, init, specialRenderingContext) {
        if (init === void 0) { init = false; }
        gameObject.setId(++this.idCounter);
        this.gameObjects.push(gameObject);
        if (init) {
            if (typeof specialRenderingContext === 'undefined') {
                gameObject.init(this, this.renderingContext);
            }
            else {
                gameObject.init(this, specialRenderingContext);
            }
        }
    };
    /**
     * Adds a list of game objects.
     *
     * @param gameObjects The game objects to add.
     * @param init If true the object's init methods gets called immediately.
     */
    GameManager.prototype.addGameObjects = function (gameObjects, init) {
        if (init === void 0) { init = false; }
        var length = gameObjects.length;
        for (var i = 0; i < length; i++) {
            this.addGameObject(gameObjects[i], init);
        }
    };
    /**
     * Removes a game object from the manager.
     * The game object's remove method gets called when removing.
     *
     * @param gameObject The game object to remove.
     * @return {boolean} True if the game objects was found and removed, otherwise false.
     */
    GameManager.prototype.removeGameObject = function (gameObject) {
        if (!gameObject) {
            return;
        }
        gameObject.remove();
        for (var i = this.gameObjects.length - 1; i >= 0; i--) {
            if (this.gameObjects[i].getId() === gameObject.getId()) {
                this.gameObjects.splice(i, 1);
                return true;
            }
        }
        return false;
    };
    /**
     * Init the manager.
     *
     * @param renderingContext The game objects target rendering context.
     */
    GameManager.prototype.init = function (renderingContext) {
        if (this.initialized) {
            return;
        }
        this.renderingContext = renderingContext;
        for (var i = this.gameObjects.length - 1; i >= 0; i--) {
            this.gameObjects[i].init(this, renderingContext);
        }
        this.initialized = true;
        this.sendMessage(new GameMessageToAll('init', 0));
    };
    /**
     * Sends a game message to one or many game objects.
     *
     * @param message The message to send.
     */
    GameManager.prototype.sendMessage = function (message) {
        var i = this.gameObjects.length - 1;
        switch (message.targetType) {
            case 0 /* ID */:
                for (; i >= 0; i--) {
                    if (this.gameObjects[i].getId() === message.target) {
                        this.gameObjects[i].onMessage(message);
                        break;
                    }
                }
                break;
            case 1 /* TAG */:
                for (; i >= 0; i--) {
                    if (this.gameObjects[i].getTag() === message.target) {
                        this.gameObjects[i].onMessage(message);
                    }
                }
                break;
            default:
            case 2 /* ALL */:
                for (; i >= 0; i--) {
                    this.gameObjects[i].onMessage(message);
                }
                break;
        }
    };
    return GameManager;
})();
/**
 * The game object is a object which gets managed by it's game manager.
 *
 * @author Guido Krömer <mail 64 cacodaemon 46 de>
 * @abstract
 */
var GameObject = (function () {
    function GameObject() {
        /**
         * The object id.
         */
        this.id = 0;
    }
    /**
     * The game object init method invoked by the game manager.
     *
     * @param gameManager The invoking game manager.
     * @param renderingContext The rendering context to use.
     */
    GameObject.prototype.init = function (gameManager, renderingContext) {
        this.gameManager = gameManager;
        this.renderingContext = renderingContext;
    };
    /**
     * Gets called by the game manager when removing the game object.
     */
    GameObject.prototype.remove = function () {
        this.id = 0;
    };
    /**
     * Gets invoked by the game manager for sending a message to this object.
     */
    GameObject.prototype.onMessage = function (message) {
        // has to be implemented by specific game object
    };
    /**
     * Returns the game object id.
     */
    GameObject.prototype.getId = function () {
        return this.id;
    };
    /**
     * Sets the game object id.
     *
     * @param id The id defined by the game manager.
     * @throws An exception if a id has already been set.
     */
    GameObject.prototype.setId = function (id) {
        if (this.id > 0) {
            throw 'ID has already been set!';
        }
        this.id = id;
    };
    /**
     * Gets the object's tag.
     */
    GameObject.prototype.getTag = function () {
        return this.tag;
    };
    return GameObject;
})();
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * The message target type.
 */
var GameMessageTargetType;
(function (GameMessageTargetType) {
    GameMessageTargetType[GameMessageTargetType["ID"] = 0] = "ID";
    GameMessageTargetType[GameMessageTargetType["TAG"] = 1] = "TAG";
    GameMessageTargetType[GameMessageTargetType["ALL"] = 2] = "ALL";
})(GameMessageTargetType || (GameMessageTargetType = {}));
/**
 * A game message is used for messaging between game objects managed by the same game manager.
 *
 * @author Guido Krömer <mail 64 cacodaemon 46 de>
 * @abstract
 */
var GameMessage = (function () {
    /**
     * Creates a new game message.
     *
     * @param target The target game object, this can be a tag as string, an id  as number or null for sending to all game objects.
     * @param type The type of message.
     * @param senderId The game object id of the sender.
     * @param targetType The target type.
     * @param payload An optional data payload.
     */
    function GameMessage(target, type, senderId, targetType, payload) {
        if (targetType === void 0) { targetType = 0 /* ID */; }
        this.target = target;
        this.type = type;
        this.senderId = senderId;
        this.targetType = targetType;
        this.payload = payload;
    }
    return GameMessage;
})();
/**
 * A game message which gets send to the game object matching the given id.
 *
 * @author Guido Krömer <mail 64 cacodaemon 46 de>
 */
var GameMessageToId = (function (_super) {
    __extends(GameMessageToId, _super);
    /**
     * Creates a new game message.
     *
     * @param target The receiver's game object id.
     * @param type The message type.
     * @param senderId The game object id of the sender.
     * @param payload An optional data payload.
     */
    function GameMessageToId(target, type, senderId, payload) {
        _super.call(this, target, type, senderId, 0 /* ID */, payload);
        this.target = target;
        this.type = type;
        this.senderId = senderId;
        this.payload = payload;
    }
    return GameMessageToId;
})(GameMessage);
/**
 * A game message which gets send to all game objects matching the tag.
 *
 * @author Guido Krömer <mail 64 cacodaemon 46 de>
 */
var GameMessageToTag = (function (_super) {
    __extends(GameMessageToTag, _super);
    /**
     * Creates a new game message.
     *
     * @param target The target tag.
     * @param type The message type.
     * @param senderId The game object id of the sender.
     * @param payload An optional data payload.
     */
    function GameMessageToTag(target, type, senderId, payload) {
        _super.call(this, target, type, senderId, 1 /* TAG */, payload);
        this.target = target;
        this.type = type;
        this.senderId = senderId;
        this.payload = payload;
    }
    return GameMessageToTag;
})(GameMessage);
/**
 * A game message which gets send to all game objects.
 *
 * @author Guido Krömer <mail 64 cacodaemon 46 de>
 */
var GameMessageToAll = (function (_super) {
    __extends(GameMessageToAll, _super);
    /**
     * Creates a new game message.
     *
     * @param type The message type.
     * @param senderId The game object id of the sender.
     * @param payload An optional data payload.
     */
    function GameMessageToAll(type, senderId, payload) {
        _super.call(this, null, type, senderId, 2 /* ALL */, payload);
        this.type = type;
        this.senderId = senderId;
        this.payload = payload;
    }
    return GameMessageToAll;
})(GameMessage);
/**
 * Calculates and stores the hexagonal geometry.
 *
 * @author Guido Krömer <mail 64 cacodaemon 46 de>
 * @see http://www.gamedev.net/page/resources/_/technical/game-programming/coordinates-in-hexagon-based-tile-maps-r1800
 */
var HexagonGeometry = (function () {
    /**
     * Creates a new instance with the given hexagon side length.
     *
     * @param sideLength The hexagon side length, default is ten pixel.
     */
    function HexagonGeometry(sideLength) {
        /**
         * The hexagon side length.
         */
        this.sideLength = 0.0;
        /**
         * The height.
         *
         * @link http://uploads.gamedev.net/monthly_04_2011/ccs-8549-0-50213000-1303302089_thumb.gif
         */
        this.height = 0.0;
        /**
         * The distance.
         *
         * @link http://uploads.gamedev.net/monthly_04_2011/ccs-8549-0-50213000-1303302089_thumb.gif
         */
        this.distance = 0.0;
        /**
         * The surrounding rectangle height.
         */
        this.rectHeight = 0.0;
        /**
         * The surrounding rectangle width.
         */
        this.rectWidth = 0.0;
        /**
         * The surrounding rectangle half height.
         */
        this.halfRectHeight = 0.0;
        /**
         * The surrounding rectangle half width.
         */
        this.halfRectWidth = 0.0;
        /**
         * A list of all points defining the hexagon path.
         */
        this.path = null;
        this.calculate(sideLength);
    }
    /**
     * Recalculates the geometry vars using the given side length.
     *
     * @param sideLength The hexagon side length, default is ten pixel.
     */
    HexagonGeometry.prototype.calculate = function (sideLength) {
        if (sideLength === void 0) { sideLength = 10.0; }
        var thirtyDegree = 30.0 * (Math.PI / 180.0);
        this.sideLength = sideLength;
        this.height = Math.sin(thirtyDegree) * this.sideLength;
        this.distance = Math.cos(thirtyDegree) * this.sideLength;
        this.rectHeight = sideLength + 2.0 * this.height;
        this.rectWidth = 2.0 * this.distance;
        this.halfRectHeight = this.rectHeight / 2.0;
        this.halfRectWidth = this.distance;
        this.path = [
            [this.distance, 0.0],
            [this.rectWidth, this.height],
            [this.rectWidth, this.rectHeight - this.height],
            [this.distance, this.rectHeight],
            [0.0, this.rectHeight - this.height],
            [0.0, this.height],
            [this.distance, 0.0],
        ];
    };
    /**
     * Converts tile based map coordinates to pixel coordinates.
     *
     * @param row The map row.
     * @param column The map column.
     * @return {Point} The pixel coordinate point.
     * @link http://www.gamedev.net/page/resources/_/technical/game-programming/coordinates-in-hexagon-based-tile-maps-r1800
     */
    HexagonGeometry.prototype.getPositionOnMap = function (row, column) {
        if (row % 2 === 0) {
            return [
                column * this.rectWidth + this.distance,
                row * (this.height + this.sideLength)
            ];
        }
        return [
            column * this.rectWidth,
            row * (this.height + this.sideLength)
        ];
    };
    /**
     * Calculates the point on the map which is next to the given point matching the given side.
     *
     * @param row The map position row.
     * @param column The map position column.
     * @param side The relative side, a value between 0 and 5.
     * @return {Point} The point on the tile map.
     */
    HexagonGeometry.prototype.getNextPositionBySide = function (row, column, side) {
        var even = row % 2 === 0;
        switch (side) {
            case 0:
                return [row - 1, column + (even ? 1 : 0)];
            case 1:
                return [row, column + 1];
            case 2:
                return [row + 1, column + (even ? 1 : 0)];
            case 3:
                return [row + 1, column + (even ? 0 : -1)];
            case 4:
                return [row, column - 1];
            case 5:
                return [row - 1, column + (even ? 0 : -1)];
            default:
                throw 'Invalid side: \'' + side + '\' given!';
        }
    };
    return HexagonGeometry;
})();
/**
 * Extended hexagon geometry which contains connection point geometry information.
 *
 * @author Guido Krömer <mail 64 cacodaemon 46 de>
 */
var EntangledHexagonGeometry = (function (_super) {
    __extends(EntangledHexagonGeometry, _super);
    /**
     * Creates a new instance with the given hexagon side length.
     *
     * @param sideLength The hexagon side length, default is ten pixel.
     */
    function EntangledHexagonGeometry(sideLength) {
        _super.call(this, sideLength);
        /**
         * A list of connection point positions.
         */
        this.connectionPoints = null;
        /**
         * Helper points a used for aligning the entangled lines,
         * each connection point has one helper point.
         */
        this.helperPoints = null;
        this.calculate(sideLength);
    }
    /**
     * Recalculates the geometry vars using the given side length.
     *
     * @param sideLength The hexagon side length, default is ten pixel.
     */
    EntangledHexagonGeometry.prototype.calculate = function (sideLength) {
        _super.prototype.calculate.call(this, sideLength);
        this.calculateConnectionsPoints();
        this.calculateHelperPoints();
    };
    /**
     * Calculates the connection points using the sine rule.
     */
    EntangledHexagonGeometry.prototype.calculateConnectionsPoints = function () {
        var sideLengthQuater = this.sideLength / 4.0;
        var sideLengthThreeQuarter = sideLengthQuater * 3.0;
        var pY = sideLengthQuater / 2.0;
        var pX = (Math.sqrt(3) * sideLengthQuater) / 2.0;
        var pY2 = sideLengthThreeQuarter / 2.0;
        var pX2 = (Math.sqrt(3) * sideLengthThreeQuarter) / 2.0;
        var pY3 = sideLengthQuater + this.height;
        var pX3 = 0.0;
        this.connectionPoints = [
            [this.rectWidth - pX2, this.height - pY2],
            [this.rectWidth - pX, this.height - pY],
            [pX3 + this.rectWidth, pY3],
            [pX3 + this.rectWidth, this.rectHeight - pY3],
            [this.rectWidth - pX, pY + this.rectHeight - this.height],
            [this.rectWidth - pX2, pY2 + this.rectHeight - this.height],
            [pX2, pY2 + this.rectHeight - this.height],
            [pX, pY + this.rectHeight - this.height],
            [pX3, this.rectHeight - pY3],
            [pX3, pY3],
            [pX, this.height - pY],
            [pX2, this.height - pY2],
        ];
    };
    /**
     * Calculates the helper points needed for aligning te entangled lines.
     * New points are created by rotating the hexagon edge point around the connection point
     * by 90 or 270 degree towards the hexagon center.
     */
    EntangledHexagonGeometry.prototype.calculateHelperPoints = function () {
        var twoHundredSeventyDegree = 270.0 * (Math.PI / 180.0);
        var ninetyDegree = 90.0 * (Math.PI / 180.0);
        this.helperPoints = [
            Utils.rotateAround(this.path[0], this.connectionPoints[0], twoHundredSeventyDegree),
            Utils.rotateAround(this.path[1], this.connectionPoints[1], ninetyDegree),
            Utils.rotateAround(this.path[1], this.connectionPoints[2], twoHundredSeventyDegree),
            Utils.rotateAround(this.path[2], this.connectionPoints[3], ninetyDegree),
            Utils.rotateAround(this.path[2], this.connectionPoints[4], twoHundredSeventyDegree),
            Utils.rotateAround(this.path[3], this.connectionPoints[5], ninetyDegree),
            Utils.rotateAround(this.path[3], this.connectionPoints[6], twoHundredSeventyDegree),
            Utils.rotateAround(this.path[4], this.connectionPoints[7], ninetyDegree),
            Utils.rotateAround(this.path[4], this.connectionPoints[8], twoHundredSeventyDegree),
            Utils.rotateAround(this.path[5], this.connectionPoints[9], ninetyDegree),
            Utils.rotateAround(this.path[5], this.connectionPoints[10], twoHundredSeventyDegree),
            Utils.rotateAround(this.path[6], this.connectionPoints[11], ninetyDegree),
        ];
    };
    return EntangledHexagonGeometry;
})(HexagonGeometry);
/**
 * A game object which is based on a SVG element.
 * The element's rotation, scale, position and opacity can be changed independently.
 *
 * @author Guido Krömer <mail 64 cacodaemon 46 de>
 */
var SVGGameObject = (function (_super) {
    __extends(SVGGameObject, _super);
    function SVGGameObject() {
        _super.call(this);
        /**
         * The element's position.
         */
        this.position = [0, 0];
        /**
         * The element's centroid used for proper rotating.
         */
        this.center = [0, 0];
        /**
         * The element's rotation in degree.
         */
        this.rotation = 0;
        /**
         * The element's opacity.
         */
        this.opacity = 1.0;
        /**
         * The element's scale factor.
         */
        this.zoomFactor = 1.0;
    }
    SVGGameObject.prototype.init = function (gameManager, renderingContext) {
        _super.prototype.init.call(this, gameManager, renderingContext);
        this.svgElementPositionGroup = renderingContext.append('g').attr('class', this.tag + '-position');
        this.svgElementRotationGroup = this.svgElementPositionGroup.append('g').attr('class', this.tag + '-rotation');
        this.svgElementZoomGroup = this.svgElementRotationGroup.append('g').attr('class', this.tag + '-zoom');
        this.svgElementOpacityGroup = this.svgElementZoomGroup.append('g').attr('class', this.tag + '-opacity');
        this.svgElement = this.svgElementOpacityGroup.append('g').attr('class', this.tag);
    };
    /**
     * Shifts the element to the target position.
     *
     * @param newPosition The target position.
     * @param duration A optional transition duration, if 0 is provided the element gets translated without a transition.
     * @param delay A optional transition delay.
     * @param ease The transition ease method, linear by default.
     * @link http://bl.ocks.org/hunzy/9929724
     */
    SVGGameObject.prototype.setPosition = function (newPosition, duration, delay, ease) {
        if (duration === void 0) { duration = 500; }
        if (delay === void 0) { delay = 0; }
        if (ease === void 0) { ease = 'cubic'; }
        var oldPosition = this.position;
        this.position = newPosition;
        if (duration === 0) {
            this.svgElementPositionGroup.attr('transform', 'translate(' + newPosition[0] + ',' + newPosition[1] + ')');
            return;
        }
        this.svgElementPositionGroup.transition().duration(duration).delay(delay).ease(ease).attrTween('transform', function () {
            return d3.interpolateTransform('translate(' + oldPosition[0] + ',' + oldPosition[1] + ')', 'translate(' + newPosition[0] + ',' + newPosition[1] + ')');
        });
    };
    /**
     * Gets the element'S position.
     *
     * @returns The position as point.
     */
    SVGGameObject.prototype.getPosition = function () {
        return this.position;
    };
    /**
     * Adds the given rotation in degree to the element's rotation.
     *
     * @param angle The rotation in degree.
     * @param duration A optional transition duration, if 0 is provided the element gets rotated without a transition.
     * @param delay A optional transition delay.
     * @param ease The transition ease method, cubic by default.
     * @link http://bl.ocks.org/hunzy/9929724
     */
    SVGGameObject.prototype.setRotation = function (angle, duration, delay, ease) {
        if (duration === void 0) { duration = 250; }
        if (delay === void 0) { delay = 0; }
        if (ease === void 0) { ease = 'linear'; }
        var rotationStart = this.rotation;
        this.rotation = angle;
        var rotationEnd = this.rotation;
        if (duration === 0) {
            this.svgElementRotationGroup.attr('transform', 'rotate(' + rotationEnd + ',' + this.center[0] + ',' + this.center[1] + ')');
            return;
        }
        var center = this.center;
        this.svgElementRotationGroup.transition().delay(delay).duration(duration).ease(ease).attrTween('transform', function () {
            return d3.interpolateString('rotate(' + rotationStart + ',' + center[0] + ',' + center[1] + ')', 'rotate(' + rotationEnd + ',' + center[0] + ',' + center[1] + ')');
        });
    };
    /**
     * Gets the element's rotation in degree.
     *
     * @return {number} The rotation in degree.
     */
    SVGGameObject.prototype.getRotation = function () {
        return this.rotation;
    };
    /**
     * Scales the element.
     *
     * @param zoomFactor The scale factor in degree.
     * @param duration A optional transition duration, if 0 is provided the element gets scaled without a transition.
     * @param delay A optional transition delay.
     * @param ease The transition ease method, cubic by default.
     * @link http://bl.ocks.org/hunzy/9929724
     */
    SVGGameObject.prototype.setZoom = function (zoomFactor, duration, delay, ease) {
        if (duration === void 0) { duration = 250; }
        if (delay === void 0) { delay = 0; }
        if (ease === void 0) { ease = 'cubic'; }
        var zoomFactorStart = this.zoomFactor;
        var zoomFactorEnd = zoomFactor;
        if (duration === 0) {
            this.svgElementZoomGroup.attr('transform', 'scale(' + this.zoomFactor + ')');
            return;
        }
        this.svgElementZoomGroup.transition().delay(delay).duration(duration).ease(ease).attrTween('transform', function () {
            return d3.interpolateString('scale(' + zoomFactorStart + ')', 'scale(' + zoomFactorEnd + ')');
        });
    };
    /**
     * Changes the element's opacity.
     *
     * @param opacity The target opacity.
     * @param duration A optional transition duration, if 0 is provided the element's opacity will be changed without a transition.
     * @param delay A optional transition delay.
     * @param ease The transition ease method, cubic by default.
     * @link http://bl.ocks.org/hunzy/9929724
     */
    SVGGameObject.prototype.setOpacity = function (opacity, duration, delay, ease) {
        if (opacity === void 0) { opacity = 1; }
        if (duration === void 0) { duration = 500; }
        if (delay === void 0) { delay = 0; }
        if (ease === void 0) { ease = 'cubic'; }
        this.opacity = opacity;
        if (duration === 0) {
            this.svgElementOpacityGroup.attr('opacity', opacity);
            return;
        }
        this.svgElementOpacityGroup.transition().delay(delay).duration(duration).ease(ease).attr('opacity', opacity);
    };
    /**
     * Gets the element's centroid.
     *
     * @return {Point} The center point.
     */
    SVGGameObject.prototype.getCentroid = function () {
        return this.center;
    };
    /**
     * Removes the game objects root element from given SVG root.
     */
    SVGGameObject.prototype.remove = function () {
        _super.prototype.remove.call(this);
        this.svgElementPositionGroup.remove();
    };
    return SVGGameObject;
})(GameObject);
/**
 * A simple SVG hexagon as game object.
 *
 * @author Guido Krömer <mail 64 cacodaemon 46 de>
 */
var Hexagon = (function (_super) {
    __extends(Hexagon, _super);
    /**
     * Constructor.
     *
     * @param hexagonGeometry The geometry used for drawing hte hexagon.
     * @param position The optional hexagon position.
     */
    function Hexagon(hexagonGeometry, position) {
        if (position === void 0) { position = [0, 0]; }
        _super.call(this);
        this.hexagonGeometry = hexagonGeometry;
        this.line = d3.svg.line().interpolate('linear');
        this.tag = 'hexagon';
        this.position = position;
        this.mapPosition = [0, 0];
        this.center = [hexagonGeometry.halfRectWidth, hexagonGeometry.halfRectHeight];
    }
    Hexagon.prototype.init = function (gameManager, renderingContext) {
        _super.prototype.init.call(this, gameManager, renderingContext);
        this.svgElementHexagon = this.svgElement.append('path').attr('class', 'hexagon').attr('d', this.line(this.hexagonGeometry.path));
    };
    /**
     * Sets the position on the hexagon tile map.
     *
     * @param position The row/column based position.
     * @param duration An optional transition duration in milliseconds.
     * @param delay An optional transition delay in milliseconds.
     */
    Hexagon.prototype.setMapPosition = function (position, duration, delay) {
        this.mapPosition = position;
        this.setPosition(this.hexagonGeometry.getPositionOnMap(position[0], position[1]), duration, delay);
    };
    /**
     * Gets the position on the tile map.
     *
     * @return {Point}
     */
    Hexagon.prototype.getMapPosition = function () {
        return this.mapPosition;
    };
    /**
     * Sets the hexagon background color.
     *
     * @param color The color class postfix, which is defined in the css file.
     */
    Hexagon.prototype.setColor = function (color) {
        this.color = color;
        this.svgElementHexagon.attr('class', 'hexagon hexagon-color-' + color);
    };
    /**
     * Gets the hexagon background color.
     *
     * @return {string} The hexagon css color class postfix.
     */
    Hexagon.prototype.getColor = function () {
        return this.color;
    };
    return Hexagon;
})(SVGGameObject);
/**
 * Line state enum.
 *
 * @author Guido Krömer <mail 64 cacodaemon 46 de>
 */
var LineState;
(function (LineState) {
    LineState[LineState["INACTIVE"] = 0] = "INACTIVE";
    LineState[LineState["ACTIVE"] = 1] = "ACTIVE";
    LineState[LineState["PREVIEW"] = 2] = "PREVIEW";
})(LineState || (LineState = {}));
/**
 * Defines a line drawn in a entangled hexagon.
 *
 * @author Guido Krömer <mail 64 cacodaemon 46 de>
 */
var Line = (function () {
    /**
     * Creates a new line defined by a start and end point, a SVG path and the lin state.
     *
     * @param start The start point.
     * @param end The end point.
     * @param svgLine The SVG path.
     * @param lineState The line state.
     */
    function Line(start, end, svgLine, lineState) {
        if (lineState === void 0) { lineState = 0 /* INACTIVE */; }
        this.start = start;
        this.end = end;
        this.svgLine = svgLine;
        this.lineState = lineState;
    }
    /**
     * Checks if the provided connection point equals the line'S start or the end point.
     *
     * @param connectionPoint THe point to check.
     * @returns {boolean} True if the point matches, otherwise false.
     */
    Line.prototype.matches = function (connectionPoint) {
        return this.start === connectionPoint || this.end === connectionPoint;
    };
    /**
     * Sets the given line state.
     *
     * @param lineState The target line state.
     */
    Line.prototype.mark = function (lineState) {
        if (lineState === void 0) { lineState = 1 /* ACTIVE */; }
        this.lineState = lineState;
        this.svgLine.classed({
            'line-inactive': lineState === 0 /* INACTIVE */,
            'line-active': lineState === 1 /* ACTIVE */,
            'line-preview': lineState === 2 /* PREVIEW */
        });
    };
    /**
     * Gets the line's exit point.
     *
     * @param point The point to check.
     * @returns {number} The matching exit point, if the point is not defined in the line the start point gets returned.
     */
    Line.prototype.getExit = function (point) {
        return this.start === point ? this.end : this.start;
    };
    return Line;
})();
/**
 * This class represents a hexagon with entangled lines.
 *
 * @author Guido Krömer <mail 64 cacodaemon 46 de>
 */
var EntangledHexagon = (function (_super) {
    __extends(EntangledHexagon, _super);
    /**
     * Constructor.
     *
     * @param hexagonGeometry The geometry used for drawing hte hexagon.
     * @param position The optional hexagon position.
     * @param randomNumberPool THe random number pool used for generating some randomly connected lines.
     */
    function EntangledHexagon(hexagonGeometry, position, randomNumberPool) {
        _super.call(this, hexagonGeometry, position);
        /**
         * The list of lines.
         */
        this.lines = [];
        this.entangledLine = d3.svg.line().interpolate('basis');
        this.randomNumberPool = randomNumberPool;
        var lS = 0 /* INACTIVE */;
        this.connectionPoints = [lS, lS, lS, lS, lS, lS, lS, lS, lS, lS, lS, lS];
    }
    EntangledHexagon.prototype.init = function (gameManager, renderingContext) {
        _super.prototype.init.call(this, gameManager, renderingContext);
        this.randomNumberPool.reset();
        for (var i = 0; i < 6; i++) {
            var start = this.randomNumberPool.getNumber();
            var end = this.randomNumberPool.getNumber();
            this.addEntangledLine(start, end);
        }
    };
    /**
     * Rotates the hexagon left by 60 degree.
     */
    EntangledHexagon.prototype.rotateLeft = function () {
        this.setRotation(this.getRotation() - 60);
        this.updateConnections();
    };
    /**
     * Rotates the hexagon right by 60 degree.
     */
    EntangledHexagon.prototype.rotateRight = function () {
        this.setRotation(this.getRotation() + 60);
        this.updateConnections();
    };
    /**
     * Sets the connection state for the given connection point to the provided state.
     *
     * @param connectionPoint The point to set, points  a arranged clockwise.
     * @param state The target state.
     */
    EntangledHexagon.prototype.setConnection = function (connectionPoint, state) {
        this.connectionPoints[connectionPoint] = state;
        this.updateConnections();
    };
    /**
     * Gets the exit point for the given point.
     *
     * @param point The point to check, this can be a start or exit point.
     * @returns THe exit point identifier, points a arranged clockwise.
     */
    EntangledHexagon.prototype.getExitPoint = function (point) {
        var normalizedRotationSide = this.getNormalizedRotationSide();
        var line = this.getLineByPoint(point, normalizedRotationSide);
        if (line === null) {
            return -1;
        }
        return (line.getExit(this.rotatePoint(point, normalizedRotationSide)) + normalizedRotationSide) % 12;
    };
    /**
     * Changes the state for all lines matching the from state to the target state.
     *
     * @param from The origin state to match.
     * @param to Th target state.
     */
    EntangledHexagon.prototype.changeLineState = function (from, to) {
        for (var connectionPoint = 0; connectionPoint < 12; connectionPoint++) {
            if (this.connectionPoints[connectionPoint] === from) {
                this.connectionPoints[connectionPoint] = to;
            }
        }
        for (var i = 0; i < 6; i++) {
            if (this.lines[i].lineState === from) {
                this.lines[i].mark(to);
            }
        }
    };
    /**
     * Updates all line states after a rotation or a specific state change.
     */
    EntangledHexagon.prototype.updateConnections = function () {
        for (var i = 0; i < 6; i++) {
            this.lines[i].mark(0 /* INACTIVE */);
        }
        var normalizedRotationSide = this.getNormalizedRotationSide();
        for (var connectionPoint = 0; connectionPoint < 12; connectionPoint++) {
            if (this.connectionPoints[connectionPoint] === 0 /* INACTIVE */) {
                continue;
            }
            var rotatedPoint = this.rotatePoint(connectionPoint, normalizedRotationSide);
            for (var line = 0; line < 6; line++) {
                if (this.lines[line].matches(rotatedPoint)) {
                    this.lines[line].mark(this.connectionPoints[connectionPoint]);
                }
            }
        }
    };
    /**
     * Returns a copy of the Line matching the given point.
     * The line's start and end points a rotated against the current hexagon rotation.
     *
     *
     * @param point The point to match against, this can be a start or end point.
     * @returns A copied line.
     */
    EntangledHexagon.prototype.renameMeGetLineByPoint = function (point) {
        var normalizedRotationSide = this.getNormalizedRotationSide();
        var line = this.getLineByPoint(point, normalizedRotationSide);
        var start = (line.start + normalizedRotationSide) % 12;
        var end = (line.end + normalizedRotationSide) % 12;
        return new Line(start, end, line.svgLine, line.lineState);
    };
    /**
     * Searches the line matching the provided connection point.
     *
     * @param point The connection point, a start or end point.
     * @param normalizedRotationSide The rotation side is used for finding the point after the hexagon has been rotated.
     * @returns The matching line or null.
     */
    EntangledHexagon.prototype.getLineByPoint = function (point, normalizedRotationSide) {
        var rotatedPoint = this.rotatePoint(point, normalizedRotationSide);
        for (var i = 0; i < 6; i++) {
            var line = this.lines[i];
            if (line.matches(rotatedPoint)) {
                return line;
            }
        }
        return null;
    };
    /**
     * Rotates and normalizes the point using the provided rotation translated as rotation side.
     *
     * @param point The point to rotate.
     * @param normalizedRotationSide The rotation side.
     * @returns A rotated conection point.
     */
    EntangledHexagon.prototype.rotatePoint = function (point, normalizedRotationSide) {
        var rotatedPoint = (point - normalizedRotationSide) % 12;
        return rotatedPoint < 0 ? rotatedPoint + 12 : rotatedPoint;
    };
    /**
     * Converts the current normalized rotation to a rotation side.
     *
     * @returns THe normalized rotation side.
     */
    EntangledHexagon.prototype.getNormalizedRotationSide = function () {
        return Utils.nomalizeRotation(this.rotation) / 30;
    };
    /**
     * Adds a entangled line to the hexagon SVG.
     *
     * @param start The line start connection point.
     * @param end The line end connection point.
     */
    EntangledHexagon.prototype.addEntangledLine = function (start, end) {
        var hexagonGeometry = this.hexagonGeometry;
        var line = this.entangledLine([
            hexagonGeometry.connectionPoints[start],
            hexagonGeometry.helperPoints[start],
            [hexagonGeometry.halfRectWidth, hexagonGeometry.halfRectHeight],
            hexagonGeometry.helperPoints[end],
            hexagonGeometry.connectionPoints[end],
        ]);
        this.svgElement.append('path').attr('class', 'line-border').attr('d', line);
        var svgLine = this.svgElement.append('path').attr('class', 'line-inactive').attr('d', line);
        this.lines.push(new Line(start, end, svgLine));
    };
    return EntangledHexagon;
})(Hexagon);
/**
 * Displays a map of hexagons on the screen.
 * THe map is stored as tle based map.
 *
 * @author Guido Krömer <mail 64 cacodaemon 46 de>
 */
var HexMap = (function (_super) {
    __extends(HexMap, _super);
    /**
     * Creates a new hexagon map.
     *
     * @param hexagonGeometry Hexagon geometry instance to use for placing the hexagons.
     * @param hexMap Sets the tile map or uses the default one.
     */
    function HexMap(hexagonGeometry, hexMap) {
        _super.call(this);
        this.hexagonGeometry = hexagonGeometry;
        this.hexMap = hexMap;
        this.tag = 'map';
        if (typeof this.hexMap === 'undefined') {
            this.hexMap = [
                [0, 0, 1, 1, 1, 1, 1, 0, 0],
                [0, 0, 1, 2, 2, 2, 2, 1, 0],
                [0, 1, 2, 2, 2, 2, 2, 1, 0],
                [0, 1, 2, 2, 2, 2, 2, 2, 1],
                [1, 2, 2, 2, 1, 2, 2, 2, 1],
                [0, 1, 2, 2, 2, 2, 2, 2, 1],
                [0, 1, 2, 2, 2, 2, 2, 1, 0],
                [0, 0, 1, 2, 2, 2, 2, 1, 0],
                [0, 0, 1, 1, 1, 1, 1, 0, 0],
            ];
        }
    }
    HexMap.prototype.init = function (gameManager, renderingContext) {
        _super.prototype.init.call(this, gameManager, renderingContext);
        var middlePoint = this.hexagonGeometry.getPositionOnMap(this.hexMap.length / 2, this.hexMap[0].length / 2);
        var transitionSpeed = 2500;
        for (var row = this.hexMap.length - 1; row >= 0; row--) {
            for (var column = this.hexMap.length - 1; column >= 0; column--) {
                var tile = this.hexMap[row][column];
                if (tile === 0) {
                    continue;
                }
                var position = this.hexagonGeometry.getPositionOnMap(row, column);
                var hexagon = new Hexagon(this.hexagonGeometry, middlePoint);
                hexagon.init(gameManager, this.svgElement);
                hexagon.setPosition(position, transitionSpeed, 0, 'elastic');
                hexagon.setColor(HexMap.colorCodes[tile]);
            }
        }
        var that = this;
        window.setTimeout(function () {
            that.gameManager.sendMessage(new GameMessageToTag('game-logic', 'map-animated', that.getId()));
        }, transitionSpeed);
    };
    /**
     * Returns the tile identifier hat the given position.
     *
     * @param row The map's row.
     * @param column The map's column.
     * @return The the tile identifier.
     */
    HexMap.prototype.getTile = function (row, column) {
        return this.hexMap[row][column];
    };
    /**
     * Gets the map size as point.
     *
     * @return The size as point, the first element is the width and the second the height.
     */
    HexMap.prototype.getSize = function () {
        return [this.hexMap.length, this.hexMap[0].length];
    };
    /**
     * Creates a new empty map with the same dimensions of the current map.
     *
     * @return A two dimensional array initialized with nulls.
     */
    HexMap.prototype.getEmptyMap = function () {
        var dimension = this.getSize();
        var map = Array(dimension[1]);
        for (var row = 0; row < dimension[1]; row++) {
            map[row] = [];
            for (var column = 0; column < dimension[0]; column++) {
                map[row][column] = null;
            }
        }
        return map;
    };
    /**
     * TIle number to color code mapping.
     */
    HexMap.colorCodes = ['', 'a', 'b', 'c', 'd', 'e'];
    return HexMap;
})(SVGGameObject);
/**
 * A keyboard game object which fires the game events for the keystrokes.
 *
 * @author Guido Krömer <mail 64 cacodaemon 46 de>
 */
var Keyboard = (function (_super) {
    __extends(Keyboard, _super);
    function Keyboard() {
        _super.call(this);
        this.tag = 'keyboard';
    }
    /**
     * A convinence send message via the game manager helper.
     *
     * @param type The message type.
     * @param senderId The sender id.
     * @param gameManager The game manager used for sending.
     */
    Keyboard.sendMessage = function (type, senderId, gameManager) {
        gameManager.sendMessage(new GameMessageToTag('game-logic', type, senderId));
    };
    Keyboard.prototype.init = function (gameManager, renderingContext) {
        var senderId = this.getId();
        window.addEventListener('keydown', function (event) {
            switch (event.keyCode) {
                case 37:
                    Keyboard.sendMessage('rotate-left', senderId, gameManager);
                    return;
                case 39:
                    Keyboard.sendMessage('rotate-right', senderId, gameManager);
                    return;
                case 13:
                    Keyboard.sendMessage('place', senderId, gameManager);
                    return;
                case 32:
                    Keyboard.sendMessage('switch', senderId, gameManager);
                    return;
                case 9:
                    Keyboard.sendMessage('new-game', senderId, gameManager);
                    return;
            }
        }, false);
    };
    return Keyboard;
})(GameObject);
/// <reference path="../vendor/hammer.d.ts" />
/**
 * A touch control using hammer.js.
 *
 * @author Guido Krömer <mail 64 cacodaemon 46 de>
 * @link http://hammerjs.github.io/
 */
var TouchControl = (function (_super) {
    __extends(TouchControl, _super);
    function TouchControl() {
        _super.call(this);
        this.tag = 'touch-control';
    }
    /**
     * A convinence send message via the game manager helper.
     *
     * @param type The message type.
     * @param senderId The sender id.
     * @param gameManager The game manager used for sending.
     */
    TouchControl.sendMessage = function (type, senderId, gameManager) {
        gameManager.sendMessage(new GameMessageToTag('game-logic', type, senderId));
    };
    TouchControl.prototype.init = function (gameManager, renderingContext) {
        var senderId = this.getId();
        var mc = new Hammer(document.getElementById('game-screen'));
        mc.on('swipeleft', function () {
            TouchControl.sendMessage('rotate-left', senderId, gameManager);
        });
        mc.on('swiperight', function () {
            TouchControl.sendMessage('rotate-right', senderId, gameManager);
        });
        mc.on('tap', function () {
            TouchControl.sendMessage('place', senderId, gameManager);
        });
        mc.on('press', function () {
            TouchControl.sendMessage('switch', senderId, gameManager);
        });
    };
    return TouchControl;
})(GameObject);
/**
 * Displays the current score on the screen.
 *
 * @author Guido Krömer <mail 64 cacodaemon 46 de>
 */
var ScoreDisplay = (function (_super) {
    __extends(ScoreDisplay, _super);
    function ScoreDisplay() {
        _super.call(this);
        /**
         * The players score.
         */
        this.score = 0;
        this.tag = 'score-display';
    }
    ScoreDisplay.prototype.init = function (gameManager, renderingContext) {
        _super.prototype.init.call(this, gameManager, renderingContext);
        this.setPosition([-5, 25]);
        this.textElement = this.svgElement.append('text').attr({
            'class': 'score-display-text',
            'x': 10,
            'y': 20
        });
        this.setScore(0);
    };
    ScoreDisplay.prototype.onMessage = function (message) {
        switch (message.type) {
            case 'score-changed':
                this.setScore(message.payload);
                break;
            case 'increase-score':
                this.setScore(this.score + message.payload);
                break;
            case 'game-reset':
                this.setScore(0);
                break;
        }
    };
    /**
     * Set the score.
     *
     * @param score The players score.
     * @see https://github.com/mbostock/d3/wiki/Transitions#user-content-tween
     */
    ScoreDisplay.prototype.setScore = function (score) {
        var i = d3.interpolateRound(this.score * 100, score * 100);
        this.textElement.transition().transition().duration(1000).ease('exp').tween('text', function () {
            return function (t) {
                this.textContent = i(t);
            };
        });
        this.score = score;
    };
    return ScoreDisplay;
})(SVGGameObject);
/**
 * Displays the finish screen.
 *
 * @author Guido Krömer <mail 64 cacodaemon 46 de>
 */
var FinishedDisplay = (function (_super) {
    __extends(FinishedDisplay, _super);
    function FinishedDisplay() {
        _super.call(this);
        this.tag = 'finished-display';
        this.hexagonGeometry = new HexagonGeometry(200);
    }
    FinishedDisplay.prototype.init = function (gameManager, renderingContext) {
        _super.prototype.init.call(this, gameManager, renderingContext);
        this.setOpacity(0, 0);
        var hexagon = new Hexagon(this.hexagonGeometry);
        hexagon.init(this.gameManager, this.svgElement);
        hexagon.setColor('e');
        hexagon.setOpacity(0.75);
        this.center = [100, 50];
        hexagon.setRotation(30);
        this.textElement = this.svgElement.append('text').attr({
            'class': 'finished-display-text',
            'x': 5,
            'y': 215,
            'text-align': 'left'
        }).text('Game Over');
        this.setPosition([350 - this.hexagonGeometry.halfRectWidth, 280 - this.hexagonGeometry.halfRectHeight], 0);
    };
    FinishedDisplay.prototype.onMessage = function (message) {
        switch (message.type) {
            case 'game-finished':
                this.remove(); // bring the element to front by removing and adding again
                this.init(this.gameManager, this.renderingContext);
                this.setOpacity(1, 1000);
                break;
            case 'game-reset':
                this.setOpacity(0, 500);
                break;
        }
    };
    return FinishedDisplay;
})(SVGGameObject);
/**
 * Internal class used by PathFollowingPoint.
 * Stores a entangled hexagon with a path start point and it's previous hexagon in the path.
 *
 * @author Guido Krömer <mail 64 cacodaemon 46 de>
 */
var HexagonWithStartPoint = (function () {
    /**
     * Creates a new path list entry.
     *
     * @param entangledHexagon The assigned hexagon.
     * @param startPoint The line start point.
     * @param previous A optional previous hexagon.
     */
    function HexagonWithStartPoint(entangledHexagon, startPoint, previous) {
        this.entangledHexagon = entangledHexagon;
        this.startPoint = startPoint;
        this.previous = previous;
    }
    /**
     * Gets the path length.
     *
     * @returns The path length.
     */
    HexagonWithStartPoint.prototype.getLength = function () {
        return this.getLengthRecursive(this);
    };
    /**
     * Calculates the path length by walking through all previous hexagons.
     *
     * @param hexagon The current hexagon.
     * @returns The path length, relative to the provided hexagon.
     */
    HexagonWithStartPoint.prototype.getLengthRecursive = function (hexagon) {
        if (!hexagon.previous) {
            return 0;
        }
        return this.getLengthRecursive(hexagon.previous) + 1;
    };
    return HexagonWithStartPoint;
})();
/**
 * A game object which allows to animate a point which follows a path.
 * The path gets created from the added entangled hexagons.
 */
var PathFollowingPoint = (function (_super) {
    __extends(PathFollowingPoint, _super);
    function PathFollowingPoint() {
        _super.call(this);
        /**
         * The last added element.
         */
        this.currentElement = null;
        this.tag = 'line-following-point';
    }
    PathFollowingPoint.prototype.init = function (gameManager, renderingContext) {
        _super.prototype.init.call(this, gameManager, renderingContext);
    };
    /**
     * Starts the animation process.
     *
     * @link http://bl.ocks.org/mbostock/1705868
     */
    PathFollowingPoint.prototype.start = function () {
        this.remove(); // bring the element to front by removing and adding again
        this.init(this.gameManager, this.renderingContext);
        if (this.currentElement !== null) {
            var combinedPath = [];
            this.follow(this.currentElement, combinedPath);
            var lineGen = d3.svg.line().interpolate('linear');
            var pathD3 = this.svgElement.append('path').attr('class', 'invisible').attr('d', lineGen(combinedPath));
            var path = pathD3.node();
            var length = path.getTotalLength();
            this.svgElement.append('circle').attr('r', 4).transition().duration(500 * (this.currentElement.getLength() + 1)).ease('linear').attrTween('transform', function () {
                return function (t) {
                    var p = path.getPointAtLength(t * length);
                    return 'translate(' + p.x + ',' + p.y + ')';
                };
            });
        }
    };
    /**
     * Adds a new hexagon to the path.
     *
     * @param hexagon The hexagon which path the point has to follow.
     * @param startPoint The entry connection point for choosing the rigt path from the hexagon.
     */
    PathFollowingPoint.prototype.add = function (hexagon, startPoint) {
        if (this.currentElement === null) {
            this.currentElement = new HexagonWithStartPoint(hexagon, startPoint);
            return;
        }
        this.currentElement = new HexagonWithStartPoint(hexagon, startPoint, this.currentElement);
    };
    /**
     * Resets the path for reusing the instance.
     */
    PathFollowingPoint.prototype.reset = function () {
        this.currentElement = null;
    };
    /**
     * Walks linked list of hexagons down to it's root
     * and creates a list of points the point can follow by combining the single entangled line paths.
     *
     * @param hexagon The current linked list hexagon element.
     * @param combinedPath The combined path
     */
    PathFollowingPoint.prototype.follow = function (hexagon, combinedPath) {
        if (hexagon.previous) {
            this.follow(hexagon.previous, combinedPath);
        }
        var entangledHexagon = hexagon.entangledHexagon;
        var line = entangledHexagon.renameMeGetLineByPoint(hexagon.startPoint);
        var rotation = entangledHexagon.getRotation();
        var center = entangledHexagon.getCentroid();
        var position = entangledHexagon.getPosition();
        var pointList = this.pathToPointList(line.svgLine.node(), rotation, center, position);
        if (hexagon.startPoint !== line.start) {
            pointList.reverse();
        }
        for (var i = 0; i < PathFollowingPoint.PATH_RESOLUTION; i++) {
            combinedPath.push(pointList[i]);
        }
    };
    /**
     * Creates a list of points from a given SVG path.
     * The position and rotation gets used for for builing a path relative to the screen.
     *
     * @param path THe SVG path element.
     * @param rotation The path's rotation.
     * @param centroid The path's hexagon centroid.
     * @param position THe path's hexagon position.
     * @returns A list of Points.
     */
    PathFollowingPoint.prototype.pathToPointList = function (path, rotation, centroid, position) {
        var length = path.getTotalLength();
        var pointList = [];
        var degToRad = Math.PI / 180.0;
        for (var i = 0; i < PathFollowingPoint.PATH_RESOLUTION; i++) {
            var originalPoint = path.getPointAtLength((i / PathFollowingPoint.PATH_RESOLUTION) * length);
            var point = [originalPoint.x, originalPoint.y];
            point = Utils.rotateAround(point, centroid, rotation * degToRad);
            point[0] += position[0];
            point[1] += position[1];
            pointList.push(point);
        }
        return pointList;
    };
    /**
     * The resolution of the path (number of points).
     */
    PathFollowingPoint.PATH_RESOLUTION = 25;
    return PathFollowingPoint;
})(SVGGameObject);
/**
 * A dummy audio player reating on incomming game messages.
 *
 * @author Guido Krömer <mail 64 cacodaemon 46 de>
 */
var AudioPlayer = (function (_super) {
    __extends(AudioPlayer, _super);
    function AudioPlayer() {
        _super.apply(this, arguments);
    }
    AudioPlayer.prototype.onMessage = function (message) {
        switch (message.type) {
            case 'hexagon-placed':
            case 'hexagon-switched':
            case 'hexagon-rotated':
            case 'game-reset':
            case 'game-finished':
                console.log('Play sound file for: ' + message.type);
                break;
        }
    };
    return AudioPlayer;
})(GameObject);
/**
 * The game logic game object controls the whole game flow,
 * by reacting on events send by the keyboard for example.
 *
 * @author Guido Krömer <mail 64 cacodaemon 46 de>
 */
var GameLogic = (function (_super) {
    __extends(GameLogic, _super);
    function GameLogic() {
        _super.call(this);
        /**
         * The hexagon which is controllable by the player.
         */
        this.activeHexagon = null;
        /**
         * The hexagon which can be switched with the active one by he player.
         */
        this.spareHexagon = null;
        /**
         * A hexagon indicating the next position after placing the active hexagon.
         */
        this.previewHexagon = null;
        /**
         * The geometry class used for drawing new hexagons.
         */
        this.entangledHexagonGeometry = null;
        /**
         * This instance is used by all entangled hexagons.
         */
        this.randomNumberPool = null;
        /**
         * All entangled hexagons placed by the player gets stored here, for fast search by the map position.
         */
        this.placedHexagons = [];
        /**
         * This game object draws the map shown in the background.
         */
        this.hexMap = null;
        /**
         * The connection point of the active hexagon.
         */
        this.activePoint = 0;
        /**
         * The score multiplier gets incremented by one for each path passed in one turn.
         */
        this.scoreMultiplier = 0;
        /**
         * Indicates if the game is finished.
         */
        this.finished = false;
        this.tag = 'game-logic';
        this.activePoint = 2;
        this.entangledHexagonGeometry = new EntangledHexagonGeometry(40);
        this.randomNumberPool = new RandomNumberPool();
        this.hexMap = new HexMap(this.entangledHexagonGeometry);
        this.placedHexagons = this.hexMap.getEmptyMap();
        this.scoreMultiplier = 1;
    }
    GameLogic.prototype.onMessage = function (message) {
        switch (message.type) {
            case 'init':
                this.gameManager.addGameObject(this.hexMap, true, this.svgElement);
                break;
            case 'new-game':
                this.cleanUp();
                break;
            case 'map-animated':
                this.prepareStart();
                break;
            case 'rotate-left':
                if (!this.finished) {
                    this.activeHexagon.rotateLeft();
                    this.rotated();
                    this.gameManager.sendMessage(new GameMessageToAll('hexagon-rotated', this.getId()));
                }
                break;
            case 'rotate-right':
                if (!this.finished) {
                    this.activeHexagon.rotateRight();
                    this.rotated();
                    this.gameManager.sendMessage(new GameMessageToAll('hexagon-rotated', this.getId()));
                }
                break;
            case 'place':
                this.place();
                break;
            case 'switch':
                this.switchActiveWithSpare();
                break;
        }
    };
    /**
     * Updates al elements which possibly has ben affected by a rotation of the active hexagon.
     */
    GameLogic.prototype.rotated = function () {
        this.resetMapPreview();
        this.activeHexagon.setConnection(this.activePoint, 2 /* PREVIEW */);
        this.placePreviewHexagon(this.activeHexagon, this.activePoint);
    };
    /**
     * Places the active hexagon and continue with the new active hexagon or finish the game..
     */
    GameLogic.prototype.place = function () {
        if (this.finished) {
            return;
        }
        this.pathFollowingPoint.reset();
        this.activeHexagon.setConnection(this.activePoint, 1 /* ACTIVE */);
        this.placeNextHexagon(this.activeHexagon, this.activePoint);
        this.placePreviewHexagon(this.activeHexagon, this.activePoint);
        this.pathFollowingPoint.start();
        this.gameManager.sendMessage(new GameMessageToAll('hexagon-placed', this.getId()));
    };
    /**
     * Searches recursive for the next active hexagon position or finishes the game if the map border was hit.
     *
     * @param hexagon The current hexagon to search for connected ones.
     * @param nextConnectionPoint The current hexagon's connection point.
     */
    GameLogic.prototype.placeNextHexagon = function (hexagon, nextConnectionPoint) {
        var exitPoint = hexagon.getExitPoint(nextConnectionPoint);
        var exitSide = Math.floor(exitPoint / 2);
        var mapPosition = hexagon.getMapPosition();
        var previewPosition = this.entangledHexagonGeometry.getNextPositionBySide(mapPosition[0], mapPosition[1], exitSide);
        var hexagonAtPreviewPosition = this.placedHexagons[previewPosition[0]][previewPosition[1]];
        var newConnectionPoint = this.exitPointToNewConnectionPoint(exitPoint);
        if (hexagonAtPreviewPosition === null || typeof hexagonAtPreviewPosition === 'undefined') {
            this.gameManager.sendMessage(new GameMessageToTag('score-display', 'increase-score', this.getId(), this.scoreMultiplier));
            this.scoreMultiplier = 1;
            this.pathFollowingPoint.add(hexagon, nextConnectionPoint);
            if (this.hexMap.getTile(this.previewHexagon.getMapPosition()[0], this.previewHexagon.getMapPosition()[1]) === 1) {
                this.finish();
                return;
            }
            this.addNewActiveHexagon(this.previewHexagon.getMapPosition(), newConnectionPoint);
            return;
        }
        hexagonAtPreviewPosition.setConnection(newConnectionPoint, 1 /* ACTIVE */);
        this.pathFollowingPoint.add(hexagon, nextConnectionPoint);
        this.placeNextHexagon(hexagonAtPreviewPosition, newConnectionPoint);
        this.scoreMultiplier++;
        this.gameManager.sendMessage(new GameMessageToTag('score-display', 'increase-score', this.getId(), this.scoreMultiplier));
    };
    /**
     * Searches recursive for the preview hexagon position and places it at this position.
     *
     * @param hexagon The current hexagon to search for connected ones.
     * @param nextConnectionPoint The current hexagon's connection point.
     */
    GameLogic.prototype.placePreviewHexagon = function (hexagon, nextConnectionPoint) {
        if (this.finished) {
            return;
        }
        var exitPoint = hexagon.getExitPoint(nextConnectionPoint);
        var exitSide = Math.floor(exitPoint / 2);
        var mapPosition = hexagon.getMapPosition();
        var previewPosition = this.entangledHexagonGeometry.getNextPositionBySide(mapPosition[0], mapPosition[1], exitSide);
        var placedHexagon = this.placedHexagons[previewPosition[0]][previewPosition[1]];
        var newConnectionPoint = this.exitPointToNewConnectionPoint(exitPoint);
        if (placedHexagon === null || typeof placedHexagon === 'undefined') {
            this.previewHexagon.setMapPosition(previewPosition, 500, 250);
            return;
        }
        placedHexagon.setConnection(newConnectionPoint, 2 /* PREVIEW */);
        this.placePreviewHexagon(placedHexagon, newConnectionPoint);
    };
    /**
     * Adds a new active hexagon at the given position.
     *
     * @param position The position of the new hexagon.
     * @param connectionPoint The active hexagon's connection point.
     */
    GameLogic.prototype.addNewActiveHexagon = function (position, connectionPoint) {
        if (this.activeHexagon !== null) {
            this.activeHexagon.setColor('d');
        }
        this.activeHexagon = new EntangledHexagon(this.entangledHexagonGeometry, this.entangledHexagonGeometry.getPositionOnMap(4, 4), this.randomNumberPool);
        this.gameManager.addGameObject(this.activeHexagon, true, this.svgElement);
        this.activeHexagon.setColor('c');
        this.activeHexagon.setMapPosition(position);
        this.activeHexagon.setConnection(connectionPoint, 2 /* PREVIEW */);
        this.activePoint = connectionPoint;
        this.placedHexagons[position[0]][position[1]] = this.activeHexagon;
    };
    /**
     * Switches the active hexagon with the player's spare hexagon.
     */
    GameLogic.prototype.switchActiveWithSpare = function () {
        if (this.finished) {
            return;
        }
        var activeHexagon = this.activeHexagon;
        var spareHexagon = this.spareHexagon;
        var tempMapPosition = activeHexagon.getMapPosition();
        activeHexagon.setMapPosition(spareHexagon.getMapPosition());
        spareHexagon.setMapPosition(tempMapPosition);
        this.activeHexagon = spareHexagon;
        this.spareHexagon = activeHexagon;
        this.placedHexagons[tempMapPosition[0]][tempMapPosition[1]] = this.activeHexagon;
        this.spareHexagon.setColor('a');
        this.activeHexagon.setColor('c');
        this.spareHexagon.changeLineState(2 /* PREVIEW */, 0 /* INACTIVE */);
        this.resetMapPreview();
        this.activeHexagon.setConnection(this.activePoint, 2 /* PREVIEW */);
        this.placePreviewHexagon(this.activeHexagon, this.activePoint);
        this.gameManager.sendMessage(new GameMessageToAll('hexagon-switched', this.getId()));
    };
    /**
     * Sets the line preview state from all placed hexagons.
     */
    GameLogic.prototype.resetMapPreview = function () {
        for (var x = 0; x < this.placedHexagons.length; x++) {
            var placedHexagonsX = this.placedHexagons[x];
            for (var y = 0; y < placedHexagonsX.length; y++) {
                if (placedHexagonsX[y] === null) {
                    continue;
                }
                placedHexagonsX[y].changeLineState(2 /* PREVIEW */, 0 /* INACTIVE */);
            }
        }
    };
    /**
     * Finishes the game.
     */
    GameLogic.prototype.finish = function () {
        if (this.finished) {
            return;
        }
        this.finished = true;
        this.gameManager.sendMessage(new GameMessageToAll('game-finished', this.getId()));
    };
    /**
     * Gets the sides opposite point.
     *
     * @param point The end connection point.
     * @return {number} The start connection point at the opposite side.
     */
    GameLogic.prototype.exitPointToNewConnectionPoint = function (point) {
        var diagonalModifier = ((point + 1) % 2) === 0 ? 5 : 7;
        return (point + diagonalModifier) % 12;
    };
    /**
     * Prepares the start by adding all needed hexagons,
     * the active, the spare and the preview hexagon.
     */
    GameLogic.prototype.prepareStart = function () {
        this.addNewActiveHexagon([4, 3], this.activePoint);
        this.spareHexagon = new EntangledHexagon(this.entangledHexagonGeometry, [100, 100], this.randomNumberPool);
        this.gameManager.addGameObject(this.spareHexagon, true, this.svgElement);
        this.spareHexagon.setColor('a');
        this.spareHexagon.setMapPosition([0, 8], 0);
        this.spareHexagon.setOpacity(0, 0);
        this.spareHexagon.setOpacity(1, 1000);
        this.previewHexagon = new Hexagon(this.entangledHexagonGeometry);
        this.gameManager.addGameObject(this.previewHexagon, true, this.svgElement);
        this.previewHexagon.setOpacity(0.5, 0);
        this.previewHexagon.setColor('c');
        this.placePreviewHexagon(this.activeHexagon, this.activePoint);
        this.pathFollowingPoint = new PathFollowingPoint();
        this.gameManager.addGameObject(this.pathFollowingPoint, true, this.svgElement);
    };
    /**
     * Performs a cleanup before starting a new game.
     */
    GameLogic.prototype.cleanUp = function () {
        this.finished = false;
        for (var x = 0; x < this.placedHexagons.length; x++) {
            var placedHexagonsX = this.placedHexagons[x];
            for (var y = 0; y < placedHexagonsX.length; y++) {
                if (placedHexagonsX[y] === null) {
                    continue;
                }
                placedHexagonsX[y].remove();
                placedHexagonsX[y] = null;
            }
        }
        this.activePoint = 2;
        this.gameManager.removeGameObject(this.spareHexagon);
        this.spareHexagon = null;
        this.gameManager.removeGameObject(this.previewHexagon);
        this.previewHexagon = null;
        this.gameManager.removeGameObject(this.pathFollowingPoint);
        this.pathFollowingPoint = null;
        this.gameManager.removeGameObject(this.hexMap);
        this.gameManager.addGameObject(this.hexMap, true, this.svgElement);
        this.gameManager.sendMessage(new GameMessageToAll('game-reset', this.getId()));
    };
    return GameLogic;
})(SVGGameObject);
/// <reference path="../vendor/d3.d.ts" />

