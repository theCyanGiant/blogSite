$(function() {

    Parse.$ = jQuery;

    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("pIt3SBZJ7g2eQrNtJXc7LpkHAWHpJ0d1REpPgD9C", "4j8T2wcY7Y2aCOVDB8W3axJdTZDPLXRhz18gu0X7");

    // $('.form-signin').on('submit', function(e){
    //
    //   //prevent default submit event
    //   e.preventDefault();
    //
    //   //grab data from for and put into variables
    //   var data = $(this).serializeArray(),
    //   username = data[0].value,
    //   password = data[1].value;
    //
    //   // Call Parse Login function with variables
    //   Parse.User.logIn(username, password, {
    //     //if user & pass match
    //     success: function(user) {
    //       alert('Welcome!');
    //     },
    //     //If error
    //     error: function(user, error) {
    //       console.log(error);
    //     }
    //   });
      var LoginView = Parse.View.extend({
        template: Handlebars.compile($('#login-tpl').html()),
        events: {
          'submit .form-signin': 'login'
        },
        login: function(e) {
          //prevent default submit event
          e.preventDefault();

          //grab data from from and put into variables
          var data = $(e.target).serializeArray(),
            username = data[0].value,
            password = data[1].value;

          // Call Parse login function with variables
          Parse.User.logIn(username, password, {

            //If username and password match
            success: function(user) {
              var welcomeView = new WelcomeView({ model: user });
              welcomeView.render();
              $('.main-container').html(welcomeView.el);
            },
            //if error
            error: function(user, error) {
              console.log(error);
            }
          });
        },

        render: function(){
          this.$el.html(this.template());
        }

      }),

      WelcomeView = Parse.View.extend({
        template: Handlebars.compile($('#welcome-tpl').html()),
        render: function (){
          var attributes = this.model.toJSON();
          this.$el.html(this.template(attributes));
        }
      });
      var loginView = new LoginView();
      loginView.render();
      $('.main-container').html(loginView.el);
});
