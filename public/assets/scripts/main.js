$(document).ready(function() {

  $('body').css({"background-color":"rgb(66, 91, 214)"})

  // $("#submit-button").on("click", function(event) {
  //
  //   event.preventDefault();
  //   var zipcode = $(".text-input").val();
  console.log("jquery is working")
  let btn = $('input');

  btn.on('click', handleClick);

  function handleClick(event) {
    let id = event.target.id;
    console.log(event.target.id);

    fetch(`/go/${id}/like`, {
      method:'PUT'
    })
    .then(theThingIJustUpdated => {
      console.log('updated! ', theThingIJustUpdated)
      // do some DOM manipulation to manifest the changes on the page
    })
    .catch(err => {
      console.log('error liking');
    })
  }






//end of doc.ready function
})
