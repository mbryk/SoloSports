<h1 class="title">Quiz</h1>
<script type="text/javascript">var pageLoadStart = new Date();</script>
<div id="quiz" class="mid-well">

</div>

    <script type="text/javascript">


       var quiz_def = {"ride":{"successor":"terrain"},"terrain":{"successor":"talent"},"talent":{"successor":"gender"},"gender":{"successor":"interest"},"interest":{"successor":"age"},"age":{"successor":"relationship"},"relationship":{"successor":"children"},"children":{"successor":"finish"},"finish":{"successor":null}};

    // Globals VDNA_apiKey,
    //         VDNA_hash,
    //         VDNA_enableRemoteCookies,
    //         campaignDir,
    //         nums,
    //         exit_url
    
        var VDNA_apiKey = 'imagini';
var VDNA_hash = '0cbce4fb885cdd07c678e2c08ed92ae5';
var VDNA_enableRemoteCookies = true;
var VDNA_userID = '53730fb4-73f5-102f-b9af-001ec9d50ffe';
            var VDNA_config = {};
    var campaignDir = "/1/";
        var nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        exit_url = "";
    </script>
    <script type="text/javascript">
    // Global trackingData used by events
    trackingData = {
            /* namespace */        Ba4  : "personality.visualdna.com",
            /* url */            Ba5  : document.location.href,
            /* referrer */        Ba6  : "", 
            /* module ID */        Ba11 : "804",
            /* statement ID */            Ba13 : "", 
            /* action */        Ba18 : "",
            /* campaign ID */            Ba20 : "1",
            /* rss ID */        Ba23 : "",
            /* user ID */        Ba24 : "53730fb4-73f5-102f-b9af-001ec9d50ffe",
            /* session ID */            Ba25 : "",    
            /* obj type */        Ba26 : "",
            /* obj ID */        Ba27 : ""
    };
    </script>
    <script type="text/javascript" src="<?php echo Yii::app()->theme->baseUrl ?>/js/quiz.js"></script>
    <script type="text/javascript">
    sendImpressionEvent('QUIZ_START_PAGE');

    $(document).ready( function() {
        /**
         * Starts the Quiz process using quiz.js
         */
        startQuiz();

        checkSaveVdna(document.getElementById('save-my-vdna'));

    });

    $(window).load( function () {
        doRipple(document.getElementById('c').getElementsByTagName('div')[0]);
        sendImpressionEvent('QUIZ_WINDOW_ONLOAD');
        sendPageLoadEvent('QUIZ_PAGE_LOAD_TIME', pageLoadStart);
        sendImpressionEvent('QUIZ_END_PAGE');
        /**
         * Google Analytics Async
         */
             (function() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();
        $('#f').append($('<img src="http://resources-ms-ak.visualdna.com/personality.visualdna.com/live/20110512110219/images/quiz/load.gif" alt="loading..." class="loading0" />'));
    });
    
    </script>
