(function(factory) {
  if(typeof define === 'function' && define.amd) {
    define(['jquery'],factory);
  } else {
    factory(jQuery);
  }

}(function($,undefined) {

  $.fn.holdr = function(options){

    var settings = $.extend({
      'provider':       'flickholdr',
      'defaultWidth':   '200',
      'defaultHeight':  '300'
    },options);

    var processors = {
      defaultProcessor: function(){
                          var emptyNodes = [];
                          this.each(function(){
                            var $this = $(this);
                            if($this.is('img')) {
                              if(!$this.attr('src')){
                                emptyNodes.push($this);
                              }
                            }
                          });
                          return emptyNodes;
                        }
    };

    var providers = {
      flickholdr: function() {
                    var emptyNodes = processors.defaultProcessor.apply(this);
                    return $(emptyNodes).each(function(index,item) {
                      var width = item.width(),
                          height = item.height(),
                          keyword = item.attr('alt'),

                          src = 'http://' + settings.provider + '.com/' +
                                (width ? width : settings.defaultWidth) +
                                '/'+ (height ? width : settings.defaultHeight) +
                                '/' + (keyword ? keyword: "");

                      item.attr('src',src);
                    });
                  },
      placekitten: function() {
                     var emptyNodes = processors.defaultProcessor.apply(this);
                     return $(emptyNodes).each(function(index,item) {
                       var  width = item.width(),
                            height = item.height(),

                            src = 'http://' + settings.provider + '.com/' +
                                   (width ? width : 200)+'/' +
                                   (height ? width : 300)+'/';

                            item.attr('src',src);
                     });
                   },
      robohash: function() {
                     var emptyNodes = processors.defaultProcessor.apply(this);
                     return $(emptyNodes).each(function(index,item){
                        var width = item.width(),
                            height = item.height(),
                            keyword = item.attr('alt');

                        var set = 'set' + Math.floor(Math.random() * (3 - 1 + 1) + 1);

                        var src = 'http://' + settings.provider + '.org/' +
                                   (keyword ? keyword: "random") + '.png' +
                                   '?set=' + set +
                                   '&size=' +
                                   (width ? width : 200)+'x' +
                                   (height ? width : 200);

                          item.attr('src',src);
                     });
                }
    };
    if(providers[settings.provider]) {
      return providers[settings.provider].apply(this);
    } else {
      settings.provider = 'flickholdr';
      return providers.flickholdr.apply(this);
    }
  };

}));
