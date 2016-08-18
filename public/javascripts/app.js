/* ----- event handlers ----- */

//$('#search').on('keypress blur', function(evt) {
  //if (evt.keyCode === 13 || evt.type === 'blur') doSearch();
//});

//$('[type="radio"]').on('change', function() { render(); });

// freebies slideToggle effect
$("#ibooks").click(function() {
  $("#ibookslist").slideToggle();
  });

  $("#trials").click(function() {
    $("#trialslist").slideToggle();
    });

$("#submit").click(function () {
    console.log("hello")
    var location = $("#location").val()
    var radius = $("#radius").val()
    var firstDate = $("#date1").val()
    var lastDate = $("#date2").val()
    var keywords = $("#keywords").val()
    console.log(location, radius, firstDate, lastDate, keywords)

    $.post("/api/events", {
        location: location,
        radius: radius,
        firstDate: firstDate,
        lastDate: lastDate,
        keywords: keywords
    }).then(function (res) {
        console.log(res)
        // $("#results").html(res)
        $("#results").html(`<h3>${res["events"][0]["name"]["html"]}</h3><p>${res["events"][0]["description"]["html"]}</p>`)
    })
})
