$(function() {

    Parse.$ = jQuery;

    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("pIt3SBZJ7g2eQrNtJXc7LpkHAWHpJ0d1REpPgD9C", "4j8T2wcY7Y2aCOVDB8W3axJdTZDPLXRhz18gu0X7");

    // var TestObject = Parse.Object.extend("TestObject");
    // var testObject = new TestObject();
    // testObject.save({foo: "bar"}).then(function(object) {
    //   alert("yay! it worked");
    // });

    var Blog  = Parse.Object.extend("Blog");
    var Blogs = Parse.Collection.extend({
      model: Blog
    });
    var blogs = new Blogs();
    blogs.fetch({
      success: function(blogs){
        var blogsView = new BlogsView({ collection: blogs});
        blogsView.render();
        $('.main-container').html(blogsView.el);
      },
      error: function(blogs, error) {
        console.log(error);
      }
    });
    var BlogsView  = Parse.View.extend({
      template: Handlebars.compile($('#blogs-tpl').html()),
      render: function(){
        var collection = { blog: this.collection.toJSON() };
        this.$el.html(this.template(collection));
      }
    })
});
