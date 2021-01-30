$(document).ready(function () {
    $('button.size').click(function () {
        let size = $(this).text();
        $('#size').text(size);
        $('[name=size]').attr('value', size);
    });

    $("[name=plus]").on("click", function () {
        var counter = parseInt($("[name=quantity]").val());
        counter++;
        if (counter !== 11) {
            $(this).siblings("[name=quantity]").val(counter);
            let qty = $("[name=quantity]").val();
            $("#qty").text(qty);
            $('[name=qty]').attr('value', qty);
        }
    });

    $("[name=minus]").click(function () {
        var counter = parseInt($("[name=quantity]").val());
        counter--;
        if (counter !== 0) {
            $(this).siblings("[name=quantity]").val(counter);
            let qty = $("[name=quantity]").val();
            $("#qty").text(qty);
            $('[name=qty]').attr('value', qty);
        }
    });
    
    var count = $('#count').text();
    if (count > 0) {
        $('#count').addClass('animate__animated animate__bounce');
    }

    $('#remember').click(function () {
        var x = document.getElementById("password"); 
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    });
});