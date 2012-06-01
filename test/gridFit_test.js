/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {

  /*
    ======== A Handy Little QUnit Reference ========
    http://docs.jquery.com/QUnit

    Test methods:
      expect(numAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      raises(block, [expected], [message])
  */

  module('jQuery standard functionality', {
    setup: function() {
      this.parentGrid = $('#myGrid');
    }
  });

  test('is chainable', 1, function() {
    strictEqual(this.parentGrid.gridFit( 20, 20 ), this.parentGrid, 'should be chaninable');
  });

  module('Simple Grid', {
    setup: function() {
      this.parentGrid = $('#myGrid');
    }
  });

  test('gets executed', 2, function() {
    var width   = this.parentGrid.width(),
        height  = this.parentGrid.height();
    
    this.parentGrid.gridFit( 10000, 10000 );

    notStrictEqual(width, this.parentGrid.width(), 'should change the width');
    notStrictEqual(height, this.parentGrid.height(), 'should change the height');
  });

  test('works correctly', 4, function() {
    var width   = this.parentGrid.width(),
        height  = this.parentGrid.height();
    
    this.parentGrid.gridFit( 10000, 10000 );

    ok(width < this.parentGrid.width(), 'new width should be bigger than before');
    ok(height < this.parentGrid.height(), 'new height should be bigger than before');

    strictEqual(this.parentGrid.innerWidth() % 10000, 0, 'should set the correct width');
    strictEqual(this.parentGrid.innerHeight() % 10000, 0, 'should set the correct height');
  });

  module('Nested Grid', {
    setup: function() {
      this.parentGrid = $('#myGrid');
      this.childGrid  = $('#childGrid');
    }
  });

  test('gets executed', 4, function() {
    var p_width   = this.parentGrid.width(),
        p_height  = this.parentGrid.height(),
        c_width   = this.childGrid.width(),
        c_height  = this.childGrid.height();
    
    this.parentGrid.gridFit( 10000, 10000 );
    this.childGrid.gridFit( 8000, 8000 );

    notStrictEqual(p_width, this.parentGrid.width(), 'parent grid should change the width');
    notStrictEqual(p_height, this.parentGrid.height(), 'parent grid should change the height');

    notStrictEqual(c_width, this.childGrid.width(), 'child grid should change the width');
    notStrictEqual(c_height, this.childGrid.height(), 'child grid should change the height');
  });

  test('works correctly', 8, function() {
    var p_width   = this.parentGrid.width(),
        p_height  = this.parentGrid.height(),
        c_width   = this.childGrid.width(),
        c_height  = this.childGrid.height();
    
    this.parentGrid.gridFit( 10000, 10000 );
    this.childGrid.gridFit( 8000, 8000 );

    ok(p_width < this.parentGrid.width(), 'new width of parent grid should be bigger than before');
    ok(p_height < this.parentGrid.height(), 'new height of parent grid should be bigger than before');

    ok(c_width < this.childGrid.width(), 'new width of child grid should be bigger than before');
    ok(c_height < this.childGrid.height(), 'new height of child grid should be bigger than before');

    strictEqual(this.parentGrid.innerWidth() % 10000, 0, 'should set the correct width of parent grid');
    strictEqual(this.parentGrid.innerHeight() % 10000, 0, 'should set the correct height of parent grid');

    strictEqual(this.childGrid.innerWidth() % 8000, 0, 'should set the correct width of child grid');
    strictEqual(this.childGrid.innerHeight() % 8000, 0, 'should set the correct height of child grid');
  });

}(jQuery));
