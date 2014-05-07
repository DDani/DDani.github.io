//Color Scheme Switcher
(function ($j) {

  switch_scheme = {

    onReady: function () {      
      this.switch_scheme_click();
    },
    
    switch_scheme_click: function(){
    	$(".switchbox").click(function(){
    	var id = $(this).attr("id"),
        	path = "css/themes/" + id + ".css";
    			$("#switch_scheme").attr("href", path);
		});
    },
  };
  
    switch_skin = {

    onReady: function () {      
      this.switch_skin_click();
    },
    
    switch_skin_click: function(){
    	$(".switchskin").click(function(){
    	var id = $(this).attr("id"),
        	path = "css/" + id + ".css";
    			$("#switch_skin").attr("href", path);
		});
    },
  };

  $j().ready(function () {
	  switch_scheme.onReady();
	  switch_skin.onReady();
  });
 
})(jQuery);	