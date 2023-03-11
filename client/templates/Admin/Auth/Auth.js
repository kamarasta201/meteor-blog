Template.Auth.events({
    'submit'(e) {
      e.preventDefault();
  
      const target = e.target;
  
      const username = target.username.value;
      const password = target.password.value;
  
      Meteor.loginWithPassword(username,password,function(err){
        if(err){
            alert("Wrong Credentials");
        }
        else{
            Router.go("/admin/posts");
        }
    });
    }
  });