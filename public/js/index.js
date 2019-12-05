// const $createBuzz = $('#createBuzzButton');

// const API = {
//   newBuzz: function () {

//   }
// }

const $newBuzzForm = $('#newBuzzForm');
const $newBuzzText = $('#newBuzzText');
const $newBuzzDisplayName = $('#newBuzzDisplayName');

$('#newBuzzForm').submit(function (event) {
  event.preventDefault();

  const text = $newBuzzText.val().trim();
  const displayName = $newBuzzDisplayName.val().trim() || 'Anonymous';

  $.post({
    url: 'api/posts'
  }, {
    text, displayName
  }, () => {
    location.reload(true);
  });
});

$('.new-comment').submit(function (event) {
  event.preventDefault();

  const postId = $(this).data().id;
  const formInputs = $(this).serializeArray();
  const newComment = {
    postId,
    text: formInputs[0].value,
    displayName: formInputs[1].value
  }

  $.post({
    url: `api/posts/${postId}/comments`
  },
    newComment,
    () => {
      location.reload(true);
    });
});

$('.like-button').click(function () {
  const postId = $(this).data().id;
  const scoreChange = $(this).data().score;

  console.log(postId, scoreChange);

  $.ajax({
    url: `api/posts/${postId}`,
    method: 'PUT'
  },
    { id: postId, score: scoreChange },
    () => {
      location.reload(true);
    });
});

// // Get references to page elements
// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
// var $submitBtn = $("#submit");
// var $exampleList = $("#example-list");

// // The API object contains methods for each kind of request we'll make
// var API = {
//   saveExample: function(example) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/examples",
//       data: JSON.stringify(example)
//     });
//   },
//   getExamples: function() {
//     return $.ajax({
//       url: "api/examples",
//       type: "GET"
//     });
//   },
//   deleteExample: function(id) {
//     return $.ajax({
//       url: "api/examples/" + id,
//       type: "DELETE"
//     });
//   }
// };

// // refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function() {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// // handleDeleteBtnClick is called when an example's delete button is clicked
// // Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// // Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);
