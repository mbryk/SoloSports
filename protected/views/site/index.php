      <!-- Main hero unit for a primary marketing message or call to action -->
      <div class="hero-unit">
          <img src="<?php echo Yii::app()->theme->baseUrl ?>/css/imgs/skier1.png" width="400" height="300" style="position: absolute;top:-5%;left:20%"/> 
        <h1>This could be YOU!</h1>
        <p>SoloSports is a platform to help Athletes in Sports which are simply better played in Groups. </p>
        <p>Just fill out a <b>quick</b> and innovatively <b>visual</b> survey of your talent, and see who the <b>algorithm</b> spits out!</p>
      </div>
      
      
<div class="wrapper rounded6" id="templateContainer">
		    <div id="templateBody" class="bodyContent rounded6">
	
        
        
        
        
        

<div id="subscribeFormWelcome"><span style="color:#696969;"><span style="font-size: 18px; ">To join our Beta Database, sign up here!</span></span>
</div>


<form action="http://markbryk.us6.list-manage.com/subscribe/post?u=a7baf419d608a7790cd44a985&amp;id=6706395692" method="POST"  id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>

<div class="mc-field-group">
	<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
</label>
	<input type="email" value="" name="EMAIL" placeholder="Email" class="required email" id="mce-EMAIL">
</div>
<div class="mc-field-group">
	<label for="mce-NAME">Name  <span class="asterisk">*</span>
</label>
	<input type="text" value="" name="NAME" placeholder="Name" class="required" id="mce-NAME">
</div>
<div class="mc-field-group">
	<label for="mce-SPORT">Primary Sport <span class="asterisk">*</span>
</label>
	<select name="SPORT" class="required" id="mce-SPORT">
	<option value=""  placeholder="Primary Sport"></option>
	<option value="Skiing">Skiing</option>
        <option value="Golfing">Golfing</option>
        <option value="Tennis">Tennis</option>

	</select>
</div>
	<div id="mce-responses" class="clear">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>	<div class="clear"><input type="submit" value="" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
</form>
</div>
<script type="text/javascript">
var fnames = new Array();var ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[2]='NAME';ftypes[2]='text';fnames[1]='SPORT';ftypes[1]='dropdown';
try {
    var jqueryLoaded=jQuery;
    jqueryLoaded=true;
} catch(err) {
    var jqueryLoaded=false;
}
var head= document.getElementsByTagName('head')[0];
if (!jqueryLoaded) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js';
    head.appendChild(script);
    if (script.readyState && script.onload!==null){
        script.onreadystatechange= function () {
              if (this.readyState == 'complete') mce_preload_check();
        }    
    }
}
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'http://downloads.mailchimp.com/js/jquery.form-n-validate.js';
head.appendChild(script);
var err_style = '';
try{
    err_style = mc_custom_error_style;
} catch(e){
    err_style = '#mc_embed_signup input.mce_inline_error{border-color:#6B0505;} #mc_embed_signup div.mce_inline_error{margin: 0 0 1em 0; padding: 5px 10px; background-color:#6B0505; font-weight: bold; z-index: 1; color:#fff;}';
}
var head= document.getElementsByTagName('head')[0];
var style= document.createElement('style');
style.type= 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = err_style;
} else {
  style.appendChild(document.createTextNode(err_style));
}
head.appendChild(style);
setTimeout('mce_preload_check();', 250);

var mce_preload_checks = 0;
function mce_preload_check(){
    if (mce_preload_checks>40) return;
    mce_preload_checks++;
    try {
        var jqueryLoaded=jQuery;
    } catch(err) {
        setTimeout('mce_preload_check();', 250);
        return;
    }
    try {
        var validatorLoaded=jQuery("#fake-form").validate({});
    } catch(err) {
        setTimeout('mce_preload_check();', 250);
        return;
    }
    mce_init_form();
}
function mce_init_form(){
    jQuery(document).ready( function($) {
      var options = { errorClass: 'mce_inline_error', errorElement: 'div', onkeyup: function(){}, onfocusout:function(){}, onblur:function(){}  };
      var mce_validator = $("#mc-embedded-subscribe-form").validate(options);
      $("#mc-embedded-subscribe-form").unbind('submit');//remove the validator so we can get into beforeSubmit on the ajaxform, which then calls the validator
      options = { url: 'http://markbryk.us6.list-manage.com/subscribe/post-json?u=a7baf419d608a7790cd44a985&id=6706395692&c=?', type: 'GET', dataType: 'json', contentType: "application/json; charset=utf-8",
                    beforeSubmit: function(){
                        $('#mce_tmp_error_msg').remove();
                        $('.datefield','#mc_embed_signup').each(
                            function(){
                                var txt = 'filled';
                                var fields = new Array();
                                var i = 0;
                                $(':text', this).each(
                                    function(){
                                        fields[i] = this;
                                        i++;
                                    });
                                $(':hidden', this).each(
                                    function(){
                                        var bday = false;
                                        if (fields.length == 2){
                                            bday = true;
                                            fields[2] = {'value':1970};//trick birthdays into having years
                                        }
                                    	if ( fields[0].value=='MM' && fields[1].value=='DD' && (fields[2].value=='YYYY' || (bday && fields[2].value==1970) ) ){
                                    		this.value = '';
									    } else if ( fields[0].value=='' && fields[1].value=='' && (fields[2].value=='' || (bday && fields[2].value==1970) ) ){
                                    		this.value = '';
									    } else {
									        if (/\[day\]/.test(fields[0].name)){
    	                                        this.value = fields[1].value+'/'+fields[0].value+'/'+fields[2].value;									        
									        } else {
    	                                        this.value = fields[0].value+'/'+fields[1].value+'/'+fields[2].value;
	                                        }
	                                    }
                                    });
                            });
                        return mce_validator.form();
                    }, 
                    success: mce_success_cb
                };
      $('#mc-embedded-subscribe-form').ajaxForm(options);
      
      
    });
}
function mce_success_cb(resp){
    $('#mce-success-response').hide();
    $('#mce-error-response').hide();
    if (resp.result=="success"){
        $('#mce-'+resp.result+'-response').show();
        $('#mce-'+resp.result+'-response').html(resp.msg);
        $('#mc-embedded-subscribe-form').each(function(){
            this.reset();
    	});
    } else {
        var index = -1;
        var msg;
        try {
            var parts = resp.msg.split(' - ',2);
            if (parts[1]==undefined){
                msg = resp.msg;
            } else {
                i = parseInt(parts[0]);
                if (i.toString() == parts[0]){
                    index = parts[0];
                    msg = parts[1];
                } else {
                    index = -1;
                    msg = resp.msg;
                }
            }
        } catch(e){
            index = -1;
            msg = resp.msg;
        }
        try{
            if (index== -1){
                $('#mce-'+resp.result+'-response').show();
                $('#mce-'+resp.result+'-response').html(msg);            
            } else {
                err_id = 'mce_tmp_error_msg';
                html = '<div id="'+err_id+'" style="'+err_style+'"> '+msg+'</div>';
                
                var input_id = '#mc_embed_signup';
                var f = $(input_id);
                if (ftypes[index]=='address'){
                    input_id = '#mce-'+fnames[index]+'-addr1';
                    f = $(input_id).parent().parent().get(0);
                } else if (ftypes[index]=='date'){
                    input_id = '#mce-'+fnames[index]+'-month';
                    f = $(input_id).parent().parent().get(0);
                } else {
                    input_id = '#mce-'+fnames[index];
                    f = $().parent(input_id).get(0);
                }
                if (f){
                    $(f).append(html);
                    $(input_id).focus();
                } else {
                    $('#mce-'+resp.result+'-response').show();
                    $('#mce-'+resp.result+'-response').html(msg);
                }
            }
        } catch(e){
            $('#mce-'+resp.result+'-response').show();
            $('#mce-'+resp.result+'-response').html(msg);
        }
    }
}

</script>
<!--End mc_embed_signup-->

</form>



		    </div>
      
      
      
    <!--  
      <p>
            <a href="<?php echo Yii::app()->getModule('user')->registrationUrl[0]; ?>" class="btn btn-primary btn-large"><i class="icon-user icon-white"></i> Sign Up</a> 
            <a href="<?php echo Yii::app()->createUrl('site/mission') ?> " class="btn btn-success btn-large">Learn more &raquo;</a></p>

      <!-- Example row of columns -->
      <div class="row" id="sport-labels">
        <div class="span4">
            <a href="#"><img src="<?php echo Yii::app()->theme->baseUrl ?>/css/imgs/ski_label.jpg"/></a>
        </div>
        <div class="span4">
          <a href="#"><img src="<?php echo Yii::app()->theme->baseUrl ?>/css/imgs/tennis_label.jpg"/></a>
       </div>
        <div class="span4">
          <a href="#"><img src="<?php echo Yii::app()->theme->baseUrl ?>/css/imgs/golf_label.jpeg"/></a>
        </div>
      </div>
      
      
