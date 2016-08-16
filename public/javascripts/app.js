//var allStudents;
//var filteredStudents = [];
//var searchName = '';
//var template;

//$(function() {
  // load all students one time at load
  //$.get('/api/students', function(data) {
    //allStudents = data;
    //template = _.template($('#studentTemplate').html());
    //render();
  //});
//});

//function render() {
  //applyFilterAndSort();
  //$('#students').html(template({students: filteredStudents}));
//}

//function applyFilterAndSort() {
  //if (searchName) {
    //filteredStudents = allStudents.filter(function(student) {
      //return student.name.toLowerCase().indexOf(searchName.toLowerCase()) >= 0;
    //});
  //} else {
    //filteredStudents = allStudents;
  //}
  //var sortKey = $('#sortCohort').is(":checked") ? 'cohort' : 'name';
  //filteredStudents = _.sortBy(filteredStudents, sortKey);
//}

//function doSearch() {
  //var curSearch = $('#search').val();
  //if (curSearch != searchName) searchName = curSearch;
  //render();
//}

//function addFact() {
  //$.post(
    //'/api/facts',
    //{ fact: $('#fact').val() }).done(function(data) {
      //$('#fact').val('');
      //var updated = allStudents.find(function(student) {
        //return student._id === data._id;
      //});
      //updated.facts.push(data.facts.pop());
      //render();
    //}
  //);
//}

/* ----- event handlers ----- */

//$('#search').on('keypress blur', function(evt) {
  //if (evt.keyCode === 13 || evt.type === 'blur') doSearch();
//});

//$('[type="radio"]').on('change', function() { render(); });

$("#ibooks").click(function() {
  $("#ibookslist").toggle();
  });

  $("#trials").click(function() {
    $("#trialslist").toggle();
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



