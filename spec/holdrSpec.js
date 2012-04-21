describe('holdr jquery plugin',function(){
  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = 'fixtures';
    loadFixtures('imgfixture.html');

    this.addMatchers({
      toBeModified: function(){
        return this.actual.find("img[src='']").length === 0;
       }
    });

  });

  afterEach(function(){
    $('#images').remove();
  });

  it('should be chainable',function(){
    var images = $('img');
    expect(images).toExist();
    expect(images.holdr()).toBeTruthy();
  });

  it('should only replace img tags with empty src attribute',function(){
    var images = $("img[src!='']");
    expect(images.length).toBe(1);
    var url = images.attr('src');
    var allImages = $("img");
    allImages.holdr();
    expect($("img[src='"+ url +"']").length).toBe(1);
  });

  it('should be able to replace more than one image tag with empty src attribut',function(){
    var emptyImages = $("img[src='']");
    expect(emptyImages.length).toBe(2);
    var allImages = $("img");
    expect(allImages.length).toBe(3);
    allImages.holdr();
    emptyImages = $("img[src='']");
    expect(emptyImages.length).toBe(0);
  });

  it('should replace empty img src attributes with placeholders',function(){
    var images = $('img');
    expect(images).toExist();
    images.holdr();
    expect(images).toBeModified();
  });

});
