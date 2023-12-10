HTMLWidgets.widget({

  name: 'entangler',

  type: 'output',

  initialize: function(el, width, height) {

    return { }

  },

  renderValue: function(el, x, instance) {
    /**
     * The game screen.
     * @link http://www.w3.org/TR/SVG/images/coords/PreserveAspectRatio.svg
     */
    var svg = d3.select(el)
                .append('svg')
                  .attr('width', el.innerWidth)
                  .attr('height', el.innerHeight)
                  .attr('viewBox', '0 0 ' + 750 + ' ' + 600)
                  .attr('preserveAspectRatio', 'xMidYMin');

    var gameManager = new GameManager();
    gameManager.addGameObject(new GameLogic());
    gameManager.addGameObject(new Keyboard());
    //gameManager.addGameObject(new TouchControl());
    gameManager.addGameObject(new ScoreDisplay());
    gameManager.addGameObject(new FinishedDisplay());
    gameManager.addGameObject(new AudioPlayer());
    gameManager.init(svg);

  },

  resize: function(el, width, height, instance) {
    var svg = d3.select(el).select("svg")
    svg.attr('width', el.innerWidth);
    svg.attr('height', el.innerHeight);
  }

});
