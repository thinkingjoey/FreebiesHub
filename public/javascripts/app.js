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
    // var radius = $("#radius").val()
    var radius = 15
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

            var table = ""
            var label = ""
            res.ebres.events.forEach( function(e,i) {
                label = "Save"
                if (res.user) {
                    if ( res.user.events.indexOf(`e${ e.id }`) > -1 ) {
                        label = "Delete"
                    }
                }
                table = table + `
                    <tr>
                    <td><a href="${ e.url }" target="_blank">${ e.name.text }</a></td>
                    <td>${ moment.utc(e.start.local).format('MMMM D, YYYY') }</td>
                    <td>${ moment.utc(e.start.local).format('h:mm a') }</td>
                    <td><button class="event-button" id="e${ e.id }">${label}</button></td>
                    </tr>
                `
            })
            table = `<h2>Free Events Near You</h2><table><tr><th>Event</th><th>Date</th><th>Time</th><th></th>${ table }</table>`
            $('#results').html(table)
       }
   })
})

$(document).on('click', '.event-button', function (evt) {
    if ( $(evt.target).text() == "Save" ) {
        $.post("/users", {
            etid: evt.target.id,
        })
        .then(function (res) {
            if (res.error) {
                if (res.failedSave) {
                    alert("Failed save...")
                } else {
                    alert("Logging in...")
                    window.location = '/auth/google'
                }
            } else {
                $(`#${res.etid}`).text('Delete')
            }
        })
    } else {
        $.ajax({
            method: "DELETE",
            url: "/users",
            data: { etid: evt.target.id }
        })
        // $.ajax.delete("/users", {
        //     etid: evt.target.id,
        // })
        .then(function (res) {

            if (res.error) {
                if (res.failedDelete) {
                    alert("Failed delete...")
                } else {
                    alert("Not logged in...")
                    window.location = '/auth/google'
                }
            } else {
                $(`#${res.etid}`).text('Save')
            }
        })
    }
})
