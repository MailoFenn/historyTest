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
        if(answer1.val() == '1584-1598'){
            count++;
        }else{
            answer1.css({'border-color':'red'});
        }

        if(answer2.val() == '1552'){
            count++;
        }else{
            answer2.css({'border-color':'red'});
        }

        if(answer3.val() == '1556'){
            count++;
        }else{
            answer3.css({'border-color':'red'});
        }

        if(answer4.val() == '1558-1583'){
            count++;
        }else{
            answer4.css({'border-color':'red'});
        }

        if(answer5.val() == '1569'){
            count++;
        }else{
            answer5.css({'border-color':'red'});
        }

        if(answer6.val() == '1582'){
            count++;
        }else{
            answer6.css({'border-color':'red'});
        }

        if(answer7.val() == '1583'){
            count++;
        }else{
            answer7.css({'border-color':'red'});
        }

        if(answer8.val() == '1582'){
            count++;
        }else{
            answer8.css({'border-color':'red'});
        }

        if(answer9.val() == '1589'){
            count++;
        }else{
            answer9.css({'border-color':'red'});
        }

        if(answer10.val() == '1591'){
            count++;
        }else{
            answer10.css({'border-color':'red'});
        }

        if(answer11.val() == '1597'){
            count++;
        }else{
            answer11.css({'border-color':'red'});
        }

        if(answer12.val() == '1592-1595'){
            count++;
        }else{
            answer12.css({'border-color':'red'});
        }

        if(answer13.val() == '1598'){
            count++;
        }else{
            answer13.css({'border-color':'red'});
        }

        $('#res').empty();
        $('#res').append(count+' из 13');
        console.log(count);
        count = 0;
    }
    $('input').click(function(){
        $(this).css({'border-color':'gray'});
    });
});