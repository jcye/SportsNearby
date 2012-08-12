$('.ui-bar').live('click', function(){
  window.location.href = '#page-event?category='+$(this).attr('category');
});