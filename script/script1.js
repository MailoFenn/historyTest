$(document).ready(function(){
    var count = 0;
    $('#check').click(check);
    function check(){
        var answer1 = $('#a1');
        var answer2 = $('#a2');
        var answer3 = $('#a3');
        var answer4 = $('#a4');
        var answer5 = $('#a5');
        var answer6 = $('#a6');
        var answer7 = $('#a7');
        var answer8 = $('#a8');
        var answer9 = $('#a9');
        var answer10 = $('#a10');
        var answer11 = $('#a11');
        var answer12 = $('#a12');
        var answer13 = $('#a13');
        var answer14 = $('#a14');
        var answer15 = $('#a15');
        var answer16 = $('#a16');
        var answer17 = $('#a17');
        var answer18 = $('#a18');
        var answer19 = $('#a19');
        if(answer1.val() == '862'){
            count++;
        }else{
            answer1.css({'border-color':'red'});
        }

        if(answer2.val() == '882'){
            count++;
        }else{
            answer2.css({'border-color':'red'});
        }

        if(answer3.val() == '862-879'){
            count++;
        }else{
            answer3.css({'border-color':'red'});
        }

        if(answer4.val() == '879-912'){
            count++;
        }else{
            answer4.css({'border-color':'red'});
        }

        if(answer5.val() == '907 911'){
            count++;
        }else{
            answer5.css({'border-color':'red'});
        }

        if(answer6.val() == '912-945'){
            count++;
        }else{
            answer6.css({'border-color':'red'});
        }

        if(answer7.val() == '941 944'){
            count++;
        }else{
            answer7.css({'border-color':'red'});
        }

        if(answer8.val() == '945-960'){
            count++;
        }else{
            answer8.css({'border-color':'red'});
        }

        if(answer9.val() == '960-972'){
            count++;
        }else{
            answer9.css({'border-color':'red'});
        }

        if(answer10.val() == '972-980'){
            count++;
        }else{
            answer10.css({'border-color':'red'});
        }

        if(answer11.val() == '980-1015'){
            count++;
        }else{
            answer11.css({'border-color':'red'});
        }

        if(answer12.val() == '980'){
            count++;
        }else{
            answer12.css({'border-color':'red'});
        }

        if(answer13.val() == '988'){
            count++;
        }else{
            answer13.css({'border-color':'red'});
        }

        if(answer14.val() == '1015-1019'){
            count++;
        }else{
            answer14.css({'border-color':'red'});
        }

        if(answer15.val() == '1019-1054'){
            count++;
        }else{
            answer15.css({'border-color':'red'});
        }

        if(answer16.val() == '1054-1113'){
            count++;
        }else{
            answer16.css({'border-color':'red'});
        }

        if(answer17.val() == '1113-1125'){
            count++;
        }else{
            answer17.css({'border-color':'red'});
        }

        if(answer18.val() == '1097'){
            count++;
        }else{
            answer18.css({'border-color':'red'});
        }

        if(answer19.val() == '1125-1132'){
            count++;
        }else{
            answer19.css({'border-color':'red'});
        }

        $('#res').empty();
        $('#res').append(count+' из 19');
        console.log(count);
        count = 0;
    }
    $('input').click(function(){
        $(this).css({'border-color':'gray'});
    });
});