$(document).ready(function(){
    $("img").click(function(){
    var t = $(this).attr("src");
    $(".modal-body").html("<img src='"+t+"' class='modal-img'>");
    $("#myModal").modal();
  });
  
  $("video").click(function(){
    var v = $("video > source");
    var t = v.attr("src");
    $(".modal-body").html("<video class='model-vid' controls><source src='"+t+"' type='video/mp4'></source></video>");
    $("#myModal").modal();  
  });
  });

  function checkFileExtension(fileName) {
    extension = fileName.split('.').pop();
    return extension;
};
const imgExtensions = ['jpg', 'png'];
const videoExtensions = ['mkv', 'mp4', 'webm'];

  $(document).ready( function () {
    $.ajax({
      type: "GET",
      url:  "/galleryfiles",
   
      success: function(response) {

for(i=0;i<response.length;i++){
 
  let ext = checkFileExtension(response[i]);
  if (imgExtensions.includes(ext)) {
   var imageHTML = `<img src="./assets/images/${response[i]}" class="img-responsive">`;
   $('#showgallery').append(imageHTML);
  } else if (videoExtensions.includes(ext)) {
   var videoHTML = `<video class="vid" controls>
   <source src="./assets/images/${response[i]}" type="video/mp4">
   </source>
 </video>  `;
 $('#showgallery').append(videoHTML);
  }
}
      }
    });
  });
