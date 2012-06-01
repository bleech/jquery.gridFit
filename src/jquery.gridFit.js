/*
 * jQuery gridFit
 * https://github.com/bleech/jquery.gridFit
 *
 * Copyright (c) 2012 bleech
 * Licensed under the MIT, GPL licenses.
 */

(function($) {

  $.fn.gridFit = function( x, y ) {
    return this.each(function() {
      
      var that        = $(this),
          fitFunction = function() {

            var pre_w = that.width(),                               // original probably grid fitted width
                pre_h = that.height(),                              // original probably grid fitted height
                old_w = that.css({ width: 'auto' }).innerWidth(),   // inner width if it were on auto
                old_h = that.css({ height: 'auto' }).innerHeight(), // inner height if it were on auto
                out_w = old_w - that.width(),                       // padding left plus right in pixels
                out_h = old_h - that.height(),                      // padding top plus bottom in pixels
                new_w,
                new_h;

            // if auto width would not fit into grid
            if( old_w % x > 0 ) {
              // new width is old width minus overlapping amount of pixels plus one tile minus padding left right
              new_w = ( old_w - ( old_w % x ) + x ) - out_w;
            } else {
              new_w = old_w - out_w;
            }

            // if auto height would not fit into grid
            if( old_h % y > 0 ) {
              // new height is old height minus overlapping amount of pixels plus one tile minus padding top bottom
              new_h = ( old_h - ( old_h % y ) + y ) - out_h;
            } else {
              new_h = old_h - out_h;
            }

            // set the new dimensions
            that.css({ width: new_w, height: new_h });

            // if tile number has changed trigger resize to adjust child elements
            if( pre_w !== new_w || pre_h !== new_h ) {
              $(window).trigger('resize');
            }

          };

      // execute fit function everytime the window size is changed
      $(window).resize(fitFunction);

      // execute initial fit
      fitFunction();

    });
  };

}(jQuery));
