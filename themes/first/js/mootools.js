window.addEvent('domready', function(){

  var slider = $('slider');

  new Slider(slider, slider.getElement('.knob'), {
    range: [9, 35],
    initialStep: 14,
    onChange: function(value){
      if (value) $('fontSize').setStyle('font-size', value);
    }
  });
});
