$("button").on("click", function() {
    var Animals = $(this).attr("data-animal");
    var queryURL =  "https://api.giphy.com/v1/gifs/search?q=" + Animals + "&api_key=dc6zaTOxFJmzC&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function(response) {
            console.log(response);
                var results = response.data;
                var gifDiv = $("<div>");
                gifDiv.addClass('gif-images');

                for (var i = 0; i < results.length; i++) {
                    var animalImage = $("<img id='img_gif'>");

                    var rating = results[i].rating;

                    var p = $("<p>").text("Rating: " + rating);
                    gifDiv.prepend(p);
                    animalImage.attr("src", results[i].images.fixed_width_still.url);
                    gifDiv.prepend(animalImage);

                }

            $("#gifs-appear-here").html(gifDiv);

    });

});
