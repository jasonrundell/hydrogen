//signup
function isValidemail(email) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(email);
}

$("#signup-form").submit(function(event) {

    if ($("#subbox").val()=="" || $("#subbox").val()=="Email address" || !isValidemail( $("#subbox").val())) {
        $("#signup-response").hide('slow');
        $("#signup-response").html("<span class=error>Please enter a valid email address.</span>");
        $("#signup-response").show('slow');
        return false;
    }

    // no errors, submit
    var $form = $( this ),
        url = $form.attr( 'action' );

    /* Send the data using post and put the results in a div */
    $.post( url, $("#signup-form").serialize(),

        function( data ) {
            $("#signup-response").hide('slow');
            $("#signup-response").html(data);
            $("#signup-response").show('slow');
        }
    );

    return false;

});

$("#contact-form").submit(function(event) {

    if ($("#name").val()=="" || $("#name").val()=="Name") {
        $("#name-response").hide('slow');
        $("#name-response").html("<span class=error>Please enter your name.</span>");
        $("#name-response").show('slow');
        return false;
    }

    if ($("#email").val()=="" || $("#email").val()=="Email" || !isValidemail( $("#email").val())) {
        $("#name-response").hide('slow');
        $("#email-response").hide('slow');
        $("#email-response").html("<span class=error>Please enter a valid email address.</span>");
        $("#email-response").show('slow');
        return false;
    }

    if ($("#message").val()=="" || $("#message").val()=="Message") {
        $("#name-response").hide('slow');
        $("#email-response").hide('slow');
        $("#message-response").hide('slow');
        $("#message-response").html("<span class=error>Please enter a message.</span>");
        $("#message-response").show('slow');
        return false;
    }

    // no errors, submit
    var $form = $( this ),
        url = $form.attr( 'action' );

    /* Send the data using post and put the results in a div */
    $.post( url, $("#contact-form").serialize(),

        function( data ) {
            $("#contact-response").hide('slow');
            $("#contact-response").html(data);
            $("#contact-response").show('slow');
        }
    );

    return false;

});