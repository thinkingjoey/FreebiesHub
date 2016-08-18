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
    var location = $("#location").val()
    var radius = $("#radius").val()
    var firstDate = $("#date1").val()
    var lastDate = $("#date2").val()
    var keywords = $("#keywords").val()

    $.post("/api/events", {
        location: location,
        radius: radius,
        firstDate: firstDate,
        lastDate: lastDate,
        keywords: keywords,
    })
   .then(function (res) {
       if(res.ebres.pagination.object_count == 0) {
            $('#results').html('<p>No Free Events meeting search criteria</p>')
       } else {

            var list = ""
            res.ebres.events.forEach( function(e,i) {
                list = list + `
                    <li>
                    <a href="${ e.url }" target="_blank">${ e.name.text }</a>
                    on ${ moment.utc(e.start.local).format('MMMM Do YYYY, h:mm a') }
                    <form   method="PUT"
                            action="/events/${ e.id }">
                            <button type="submit">Save</button>
                    </form>
                    </li>
                `
            })
            list = `<h2>Free Events Near You</h2><ul>${ list }</ul>`
            $('#results').html(list)
       }
   })

})
