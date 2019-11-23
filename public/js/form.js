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
      if (updating) {
        newPost.id = postId;
        updatePost(newPost);
      }
      else {
        submitPost(newPost);
      }
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
          title: req.body.title,
          body: req.body.body,
          category: req.body.category
        })
          .then(function(dbPost) {
            res.json(dbPost);
          });
      });
    // Gets post data for a post if we're editing
    function getPostData(id) {
      $.get("/api/posts/" + id, function(data) {
        if (data) {
          // If this post exists, prefill our cms forms with its data
          bday.val(data.title);
          name.val(data.name);
          //postCategorySelect.val(data.category);
          // If we have a post with this id, set a flag for us to know to update the post
          // when we hit submit
          updating = true;
        }
      });
    }
  });