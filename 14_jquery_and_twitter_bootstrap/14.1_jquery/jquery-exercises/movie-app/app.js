$("#movie-form").submit(function (event) {
  // Prevent default form submission
  event.preventDefault();

  // Get values from input
  const title = $("#title").val();
  const rating = $("#rating").val();

  // Check if rating is between 1 - 10
  if (rating > 10 || rating < 0) {
    alert("Please enter a valid rating between 0 and 10.");
    return;
  }

  // Check if rating has at least 2 characters in it
  if (title.length < 2) {
    alert("Title must have at least 2 characters");
    return;
  }

  const movie = {
    title: title,
    rating: rating,
  };

  // Clear form inputs
  $("#title").val("");
  $("#rating").val("");

  const movieItem = $(
    "<div>Title: " + movie.title + ", Rating: " + movie.rating + "</div>"
  );
  const removeButton = $("<button>Remove</button>");

  // Add click event handler to remove button
  removeButton.click(function () {
    movieItem.remove();
  });

  // Append remove button to movie item
  movieItem.append(removeButton);

  // Append movie item to the rated-movies container
  $("#rated-movies").append(movieItem);
});
