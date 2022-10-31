//standard JQUERY START CODE
$(document).ready(function () {
  //  HOOKS INTO THE DOM
  var saveBtnEl = $(".saveBtn");
  var notesEl = $(".notes"); //variable for any notes written in text area (hopefully)
  var currentDay = $("#currentDay");

  const today = moment();

  currentDay.text(today.format("MMMM Do,YYYY, hh:mm"));

  //   TIME FUNCTION
  //   VARIABLES NEEDED: var for hour

  function timeofDay() {
    var currentHour = today.hour();
    console.log(currentHour);

    // var calHour = $(".hour").text;
    // console.log(calHour);

    $(".hour").each(function () {
      var calHour = $(".hour").text();
      console.log(calHour);
      //how do i get the text string from the html
    });
  }

  // CLICK EVENT
  saveBtnEl.on("click", function () {
    var dayNotes = $(this).siblings(".notes").val();

    console.log(dayNotes);

    // function showNote() {
    //   notesEl.textContent = dayNotes;
    //   localStorage.setItem("daynotes", dayNotes);
    // }
    localStorage.setItem("daynotes", dayNotes);
  });

  $(notesEl).val(localStorage.getItem("daynotes")); //currently saves to all blocks but success!

  timeofDay(); //reruns the time day function
});

// https://remysharp.com/2007/04/12/jquerys-this-demystified/
// https://frontend.turing.edu/lessons/module-2/introduction-to-jquery.html?ads_cmpid=6451354298&ads_adid=76255849919&ads_matchtype=&ads_network=g&ads_creative=517671727591&utm_term=&ads_targetid=dsa-19959388920&utm_campaign=&utm_source=adwords&utm_medium=ppc&ttv=2&gclid=Cj0KCQjwwfiaBhC7ARIsAGvcPe7NRtPLCAj25JhQPu52LllKMpdd-U2rU3BCB_4b6zkOhrrNY7B3T80aAgpCEALw_wcB
// https://www.geeksforgeeks.org/moment-js-moment-hour-method/#:~:text=The%20moment().,or%20to%20set%20the%20hours.&text=or-,moment,hours()%3B
