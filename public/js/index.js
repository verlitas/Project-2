const $newBuzzForm = $('#newBuzzForm');
const $newBuzzText = $('#newBuzzText');
const $newBuzzDisplayName = $('#newBuzzDisplayName');

$('#newBuzzForm').submit(function (event) {
  event.preventDefault();

  const formInputs = $(this).serializeArray();

  $.post({
    url: 'api/posts'
  }, {
    displayName: formInputs[0].value || 'Anonymous',
    avatar: formInputs[1].value,
    text: formInputs[2].value
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
    avatar: formInputs[1].value,
    displayName: formInputs[0].value || 'Anonymous',
    text: formInputs[2].value.trim()
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
  const inputValues = {
    id: $(this).data().id,
    score: $(this).data().score
  };

  $(this).removeClass('disabled');
  $(this).siblings('button').addClass('disabled');

  $.ajax(
    {
      url: `api/posts/'+ ${inputValues.id}`,
      method: 'PUT',
      data: inputValues
    }).then(function () {
      location.reload(true);
    });
});
