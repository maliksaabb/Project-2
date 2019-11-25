$(document).ready(function() {
    // Gets an optional query string from our url (i.e. ?post_id=23)
    var url = window.location.search;
    var postId;
    // Sets a flag for whether or not we're updating a post to be false initially
    var updating = false;
  
    // If we have this section in our url, we pull out the post id from the url
    // In localhost:8080/cms?post_id=1, postId is 1
    if (url.indexOf("?post_id=") !== -1) {
      postId = url.split("=")[1];
      getPostData(postId);
    }
  
    // Getting jQuery references to the post name, title, form, and category select
    var name = $("#profilename");
    var bday = $("#profilebday");
    var gender = $("#profilegender");
    var height = $("#profileheight");
    var weight = $("#profileweight");
    var btype = $("#profileblood");
    var allergies = $("#profileallergies");
    var addneeds = $("#profileaddnds");

    var pform = $("#profileform");
    // Giving the postCategorySelect a default value
    //postCategorySelect.val("Personal");
    // Adding an event listener for when the form is submitted
    $(pform).on("submit", function handleFormSubmit(event) {
      //event.preventDefault();
      // Wont submit the post if we are missing a name or a title
      if (!bday.val().trim() || !name.val().trim() || !gender.val().trim() ||
        !height.val().trim() || !weight.val().trim() || !allergies.val().trim() || !addneeds.val().trim() ) {
        return;
      }
      // Constructing a newPost object to hand to the database
      var newPost = {
        name: name.val().trim(),
        bday: bday.val().trim(),
        gender: gender.val().trim(),
        height: height.val().trim(),
        weight: weight.val().trim(),
        btype: btype.val().trim(),
        allergies: allergies.val().trim(),
        addneeds: addneeds.val().trim(),
      };
  
      console.log(newPost);
  
      // If we're updating a post run updatePost to update a post
      // Otherwise run submitPost to create a whole new post
      /* commenting out because we aren't updating profile posts
      if (updating) {
        newPost.id = postId;
        updatePost(newPost);
      }
      else {
        submitPost(newPost);
      }*/

    });

    // Submits a new post and brings user to blog page upon completion
    function submitPost(Post) {
      $.post("/api/posts/", Post, function() {
        window.location.href = "/dashboard";
      });
    }
    app.post("/api/posts", function(req, res) {
        console.log(req.body);
        db.Post.create({
          name: req.body.name,
          bday: req.body.bday,
          gender: req.body.gender,
          height: req.body.height,
          weight: req.body.weight,
          btype: req.body.btype,
          allergies: req.body.allergies,
          addneeds: req.body.addneeds
        })
          .then(function(dbPost) {
            res.json(dbPost);
          });
      });
  });