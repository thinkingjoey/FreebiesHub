//use underscore

//What should be in this array?

// event model
// name: String,
// description: String,
// id: String,
// url: String,
// start: String,
// end: String

var events = [{
  name: "Music",
  description: "free party",
  url: '#'
}];

liTemplate = _.template(  `<li class="eventItem">
      <!-- this should be the event title -->
      <span><%= name %></span><br>
      <!-- this should be the event URL -->
      <img src="<%= url %>" class="eventURL">

  </li>`);
events.forEach(function(event){
  var rendered = liTemplate(event)
  console.log(rendered)
  $("#eventList").append(rendered)
})

$(document).ready(function () {
    $.get("/api/events", {
    })
   .then(function (res) {

       if(res.savedEvents.length == 0) {
            $('#eventList').html('<p>There are no events saved to your account.</p>')
       } else {

            var table = ""
            res.savedEvents.forEach( function(e,i) {
                table = table + `
                    <tr>
                    <td><a href="${ e.url }" target="_blank">${ e.name.text }</a></td>
                    <td>${ moment.utc(e.start.local).format('MMMM D, YYYY') }</td>
                    <td>${ moment.utc(e.start.local).format('h:mm a') }</td>
                    <td><button class="event-button" id="e${ e.id }">Delete</button></td>
                    </tr>
                `
            })
            table = `<table><tr><th>Event</th><th>Date</th><th>Time</th><th></th>${ table }</table>`
            $('#eventList').html(table)
       }
   })
})
