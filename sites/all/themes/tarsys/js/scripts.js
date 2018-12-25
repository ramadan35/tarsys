jQuery(document).ready(function ($) {

  $('body').on('change', '#block-current-project-current-project-block .form-select', function() {
    var item=$(this);
    console.log(item.val());
    var path = "/set_current_project/"+item.val();
    $.ajax({
      type: "GET",
      url: path,
      dataType: 'json',
      success: function (json) {
        location.reload();
      }
    });
  });
  

});