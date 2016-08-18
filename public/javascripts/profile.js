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
