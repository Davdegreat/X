test = function() {

  // create a new test_renderer
  test_renderer = new X.renderer3D();
  test_renderer.init();

  // load a .off file
  var surface = new X.mesh();
  surface.file = 'data/cube1.off';
  surface.color = [1,0,0];

  // add the object
  test_renderer.add(surface);

  // .. and render it
  test_renderer.render();

};
