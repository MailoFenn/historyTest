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
        if(answer1.val() == '1125-1157'){
            count++;
        }else{
            answer1.css({'border-color':'red'});
        }

        if(answer2.val() == '1147'){
            count++;
        }else{
            answer2.css({'border-color':'red'});
        }

        if(answer3.val() == '1157-1174'){
            count++;
        }else{
            answer3.css({'border-color':'red'});
        }

        if(answer4.val() == '1176-1212'){
            count++;
        }else{
            answer4.css({'border-color':'red'});
        }

        if(answer5.val() == '1185'){
            count++;
        }else{
            answer5.css({'border-color':'red'});
        }

        if(answer6.val() == '1153-1187'){
            count++;
        }else{
            answer6.css({'border-color':'red'});
        }

        if(answer7.val() == '1238-1264'){
            count++;
        }else{
            answer7.css({'border-color':'red'});
        }

        if(answer8.val() == '1236'){
            count++;
        }else{
            answer8.css({'border-color':'red'});
        }

        if(answer9.val() == '1253-1263'){
            count++;
        }else{
            answer9.css({'border-color':'red'});
        }

        $('#res').empty();
        $('#res').append(count+' из 9');
        console.log(count);
        count = 0;
    }
    $('input').click(function(){
        $(this).css({'border-color':'gray'});
    });
});