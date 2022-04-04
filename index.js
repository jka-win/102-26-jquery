
$(() => {

    const error = $("#error");
    const required = [
        $("#name"),
        $("#email"),
        $("#phone"),
    ];

    $("#submit").on("click", e => {
        error.removeClass("warning").html("");
        for (const input of required) {
            const label = input.prev("label");
            if (input.val().trim().length == 0) {
                label.addClass("warning");
                error.addClass("warning").html("Please fill out required fields");
            } else {
                label.removeClass("warning");
            }
        }

        if (!error.hasClass("warning")) {
            $("#form").remove();
            $("h2").html("<em>Thanks for your feedback!</em>");
        }
    });

});
