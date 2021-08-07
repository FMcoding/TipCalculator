var percent;
var totalBill;
var people;

$("input[type=number]").change(function() {
    $(".btnReset").addClass("btn-complete").prop("disabled", false);
    if ($(".btnReset").prop("disabled") == false) {
        $(".btnReset").mouseenter(function() {
            $(".btnReset").addClass("btn-hover");
        })
        $(".btnReset").mouseleave(function() {
            $(".btnReset").removeClass("btn-hover");
        })
        $(".btnReset").click(function() {
            percent = undefined;
            totalBill = undefined;
            people = undefined;
            $("input[type=number]").val('');
            $(".btnReset").prop("disabled", true);
            $(".btnReset").removeClass("btn-hover").removeClass("btn-complete");
            $("#amount-tip, #amount-total").text("$0.00");
        })
    }
});

function tipAmountPerson() {
    totalBill = $("#bill").val();
}

function tipAmountTotal() {
    people = $("#num-people").val();
}

function perT1() {
    percent = $(".btn-5").val(); 
}

function perT2() {
    percent = $(".btn-10").val(); 
}

function perT3() {
    percent = $(".btn-15").val(); 
}

function perT4() {
    percent = $(".btn-25").val(); 
}

function perT5() {
    percent = $(".btn-50").val(); 
}

function perT6() {
    percent = $(".custom-tip").val() / 100;
}

$(document).click(function() {
    if (people == 0) {
        $(".input-container-people").css("box-shadow", "0 0 0 2px red");
    } else {
        $(".input-container-people").css("box-shadow", "none");

    }

    if (percent != null && totalBill != null && people != null) {
        var tipPerPerson = (totalBill * percent) / (people);
        var totalPerPerson = (totalBill / people) + tipPerPerson;
        $("#amount-tip").html("$" + tipPerPerson.toFixed(2));
        $("#amount-total").html("$" + totalPerPerson.toFixed(2));
    }

})