//standard JQUERY START CODE
$(document).ready(function () {
  //  HOOKS INTO THE DOM
  var saveBtnEl = $(".saveBtn");
  var notesEl = $(".notes"); //variable for any notes written in text area (hopefully)
  var currentDay = $("#currentDay");

  const today = moment();

  currentDay.text(today.format("MMMM Do,YYYY, hh:mm"));

  //   TIME FUNCTION
  function timeofDay() {
    var currentHour = today.hour();
    console.log("currentHour", currentHour);

    $(".hourblock").each(function () {
      var pageHour = parseInt($(this).attr("id").split("h")[0]);

      console.log("pageHour", pageHour);
      //how do i get the text string from the html

      //ONCE I GET THE PAGEHOUR VAR CORRECT THIS SHOULD WORK
      if (pageHour < currentHour) {
        $(this).addClass("past");
      } else if (pageHour === currentHour) {
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
      } else {
        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");
      }
    });
  }

  // CLICK EVENTS FOR EACH BUTTON
//   var clickInput = JSON.parse(localStorage.getItem("message"));
  saveBtnEl.on("click", function () {
    var dayNotes = $(this).siblings(".notes").val();
    var timeNotes = $(this).parent().attr("id");

    localStorage.setItem(timeNotes, dayNotes);

    // clickInput.push({
    //   notes: dayNotes,
    //   time: timeNotes,
    // });
    // localStorage.setItem("message", JSON.stringify(clickInput));

    // localStorage.setItem(timeNotes, dayNotes);
    // localStorage.setItem("timeNotes", timeNotes);

    // var oldData = localStorage.getItem("daynotes");
    // var parsedOldData = JSON.parse(oldData);
    // var dayNotes = $(this).siblings("#text8").val();
    // var clickedDayNote = $(this).siblings()[0].innerHTML;
    // var dayNotes = $(".notes");
    //HOW DO I WRITE A FOR LOOP FOR THIS!!!
    // console.log(clickedDayNote);
    // console.log(dayNotes[0]);

    // console.log($(dayNotes[0]).val());
    // parsedOldData[clickedDayNote] = dayNotes[0];
    // var data = {
    //   "8:00": $(dayNotes[0]).val(),
    // };

    // var stringyfiedData = JSON.stringify([parsedOldData]);
    // console.log(stringyfiedData);

    // localStorage.setItem("daynotes", stringyfiedData);
  });
  $("#text8").val(localStorage.getItem("8hour"));
  $("#text9").val(localStorage.getItem("9hour"));
  $("#text10").val(localStorage.getItem("10hour"));
  $("#text11").val(localStorage.getItem("11hour"));
  $("#text12").val(localStorage.getItem("12hour"));
  $("#text13").val(localStorage.getItem("13hour"));
  $("#text14").val(localStorage.getItem("14hour"));
  $("#text15").val(localStorage.getItem("15hour"));
  $("#text16").val(localStorage.getItem("16hour"));
  $("#text17").val(localStorage.getItem("17hour"));

  //   $("#text8").val(localStorage.getItem("daynotes")); //currently saves to all blocks but success!

  timeofDay(); //reruns the time day function
});

// https://remysharp.com/2007/04/12/jquerys-this-demystified/
// https://frontend.turing.edu/lessons/module-2/introduction-to-jquery.html?ads_cmpid=6451354298&ads_adid=76255849919&ads_matchtype=&ads_network=g&ads_creative=517671727591&utm_term=&ads_targetid=dsa-19959388920&utm_campaign=&utm_source=adwords&utm_medium=ppc&ttv=2&gclid=Cj0KCQjwwfiaBhC7ARIsAGvcPe7NRtPLCAj25JhQPu52LllKMpdd-U2rU3BCB_4b6zkOhrrNY7B3T80aAgpCEALw_wcB
// https://www.geeksforgeeks.org/moment-js-moment-hour-method/#:~:text=The%20moment().,or%20to%20set%20the%20hours.&text=or-,moment,hours()%3B
// https://stackoverflow.com/questions/7261431/adding-items-to-an-object-through-the-push-method
