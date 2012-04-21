;(function($) {
  $.fn.holdr = function(){

    return this.each(function(){
      var $this = $(this);

      if($this.is('img')) {
        if(!$this.attr('src')) {
          var width = $this.width();
          var height = $this.height();
          var src = 'http://placekitten.com/'+width+'/'+height;
          $this.attr('src',src);
        }
      }
    });
  };

})(jQuery);
