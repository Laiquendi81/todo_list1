//Check off specific todos by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
})

//Set delete function
$("ul").on("click", "span", function(e) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  e.stopPropagation();
})

//Add input text as new li
$("input[type='text']").keypress(function(e) {
  if(e.which === 13) {
    //grab the input text
    var todoText = $(this).val();
    $(this).val("");
    //create a new li
    $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
  }
})

//toggle input in and outline
$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle();
})
