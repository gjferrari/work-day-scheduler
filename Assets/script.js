//  HOOKS INTO THE DOM
var saveBtnEl = $(".saveBtn");
var notesEl = $(".notes"); //variable for any notes written in text area (hopefully)

//create a click event to save notes into local storage

saveBtnEl.on("click", function () {
  var dayNotes = $(".notes").val(); //will only console log the value of the first .notes not any others
  console.log(dayNotes);

  localStorage.setItem('plans', JSON.stringify(dayNotes));
});


// https://remysharp.com/2007/04/12/jquerys-this-demystified/
// https://frontend.turing.edu/lessons/module-2/introduction-to-jquery.html?ads_cmpid=6451354298&ads_adid=76255849919&ads_matchtype=&ads_network=g&ads_creative=517671727591&utm_term=&ads_targetid=dsa-19959388920&utm_campaign=&utm_source=adwords&utm_medium=ppc&ttv=2&gclid=Cj0KCQjwwfiaBhC7ARIsAGvcPe7NRtPLCAj25JhQPu52LllKMpdd-U2rU3BCB_4b6zkOhrrNY7B3T80aAgpCEALw_wcB
