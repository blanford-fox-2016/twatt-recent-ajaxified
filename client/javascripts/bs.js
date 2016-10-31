$(document).ready(function(){
  $('#myTabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  })
});


// $(document).ready(function(){
//     $(".nav-pills a").click(function(){
//         $(this).tab('show');
//     });
// });
