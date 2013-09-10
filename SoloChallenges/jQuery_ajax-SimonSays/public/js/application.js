$(document).ready(function(){
 // Ajax:

   // need to preventDefault 
  $('#get_color').on("click",function(event){
    event.preventDefault();
    colorSquare();

  });

    // console.log("in Click") ; //<===== "testing here ""

    // console.log($("#get_color").serialize()); //<===== "testing here ""


    function colorSquare(){
    $.ajax({
      url: '/color',
      type: 'post',
      // dataType: 'json' (I will use this if I dont have it in my post)
    }).done(function(response){
      $("li").eq(response.cell).css("background-color", response.color);
   

      // add jquery to assign colors and display server data

    }).fail(function(){

      console.log("fail");

    });

}

});


// ========> From Index.erb: <=========

    // <div class="container">
    //   <h1>Simple Simon Says</h1>

    //   <a id="get_color" href="#">Click Me</a>
    // </div>
      
    // <ul id="color_me">
    //   <li></li>
    //   <li></li>
    //   <li></li>
    //   <li></li>
    //   <li></li>
    //   <li></li>
    //   <li></li>
    //   <li></li>
    //   <li></li>
    // </ul>
