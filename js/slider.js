    $(document).ready(function(){
      var scrollCount = $('.scroll-content-item').length;
      var scrollItemMargin = 15; // margin between Items (in px)
      var scrollItemWidth = 322; // item width
      var scrollWidth = (scrollItemWidth + scrollItemMargin)*scrollCount; 
      $("#content-holder").css('width', scrollWidth);                  
      
      $("#content-scroll").css({"overflow":"hidden"});
      $("#content-scroll").bind("mousewheel", function(event, delta) {
        var speed = 50;
        var mySlider = $("#content-slider");
        var sliderVal = mySlider.slider("option", "value");
        sliderVal -= (delta*speed); // += and -= directions of scroling with MouseWheel
        
        if (sliderVal > mySlider.slider("option", "max")) sliderVal = mySlider.slider("option", "max");
        else if (sliderVal < mySlider.slider("option", "min")) sliderVal = mySlider.slider("option", "min");
        
        $("#content-slider").slider("value", sliderVal);
        
        event.preventDefault();
      });
      $("#content-slider").slider({
        animate: "fast",
        change: handleSliderChange,
        slide: handleSliderSlide,
        min:0,
        max:1000
      });
    });

    function handleSliderChange(e, ui)
    {
      var maxScroll = $("#content-scroll").attr("scrollWidth") - $("#content-scroll").width();
      $("#content-scroll").attr({scrollLeft: ui.value * (maxScroll / 1000)});
    }

    function handleSliderSlide(e, ui)
    {
      var maxScroll = $("#content-scroll").attr("scrollWidth") - $("#content-scroll").width();
      $("#content-scroll").attr({scrollLeft: ui.value * (maxScroll / 1000)});
    }