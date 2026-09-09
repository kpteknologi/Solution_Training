function PageMethod(fn, paramArray, successFn, errorFn, asyncFn) {
    //var pagePath = window.location.pathname;
    var pagePath = "http://localhost:63181/WebService.asmx";

    //Call the page method
    $.ajax({
        type: "POST",
        url: pagePath + "/" + fn,
        contentType: "application/json; charset=utf-8",
        data: paramArray,
        dataType: "json",
        success: successFn,
        error: errorFn,
        async: asyncFn
    });
}