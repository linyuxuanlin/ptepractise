var xjfiblweekList, xjfiblMonthList, fireflygfiblList, cgefiblpdfList, cgefiblidlist;
var fiblindex = 0;//当前第几条
var fibllocalStorageType = "xjfibl";

function ptefiblInit() {
    $.get(getGitContentPre() + "/data/fibl/fireflyfibl.txt" + getGitContentAccess(), function (response) {
        var result
        try {
            result = decodeURIComponent(escape(window.atob(decodeURIComponent(escape(window.atob(decodeURIComponent(escape(window.atob(response.content)))))))));
        } catch (e) {
            result = decodeURIComponent(escape(window.atob(decodeURIComponent(escape(window.atob(response))))));
        }

        fireflygfiblList = JSON.parse(result);
    })
    $.get(getGitContentPre() + "/data/fibl/xjfiblweekdata.txt" + getGitContentAccess(), function (response) {
        var result
        try {
            result = decodeURIComponent(escape(window.atob(decodeURIComponent(escape(window.atob(decodeURIComponent(escape(window.atob(response.content)))))))));
        } catch (e) {
            result = decodeURIComponent(escape(window.atob(decodeURIComponent(escape(window.atob(response))))));
        }

        xjfiblweekList = JSON.parse(result);
    })

    $.get(getGitContentPre() + "/data/fibl/xjfiblmonthdata.txt" + getGitContentAccess(), function (response) {
        var result
        try {
            result = decodeURIComponent(escape(window.atob(decodeURIComponent(escape(window.atob(decodeURIComponent(escape(window.atob(response.content)))))))));
        } catch (e) {
            result = decodeURIComponent(escape(window.atob(decodeURIComponent(escape(window.atob(response))))));
        }

        xjfiblMonthList = JSON.parse(result);
    })
    $.get(getGitContentPre() + "/data/fibl/xjfibl_c_all.txt" + getGitContentAccess(), function (response) {
        var result
        try {
            result = decodeURIComponent(escape(window.atob(decodeURIComponent(escape(window.atob(decodeURIComponent(escape(window.atob(response.content)))))))));
        } catch (e) {
            result = decodeURIComponent(escape(window.atob(decodeURIComponent(escape(window.atob(response))))));
        }

        cgefiblpdfList = JSON.parse(result);
    })

}

function currentFireflyfiblList() {
    return fireflygfiblList;
}

function currentxjweekFibLList() {
    return xjfiblweekList;
}

function currentxjmonthFibLList() {
    return xjfiblMonthList;
}

function currentcgefiblpdfList() {
    return cgefiblpdfList;
}

function createpteFilbPdf(serNum, fiblData) {
    var num = fiblData.num;
    var name = fiblData.name;
    var params = $("#ptefibl-form").serializeJson();
    var hiddencontenanswer = params.hiddencontenanswer;
    var hiddenstandanswer = params.hiddenstandanswer;
    var questionDiv = document.createElement("div");
    $(questionDiv).attr("style", "padding-left: 20px;padding-right: 20px;line-height: 30px;font-size: larger");
    var h3 = document.createElement("h3");
    h3.innerHTML = serNum + "." + "&nbsp;" + "&nbsp;" + name + "&nbsp;" + "&nbsp;题号:" + num + "<br/>";
    $(questionDiv).append(h3);
    var text = "";
    if (hiddencontenanswer) {

        if (hiddenstandanswer) {
            text = fiblData.textWithspace + "<br/>" + "<br/>" + "答案:" + "<br/>";

        } else {
            text = fiblData.textWithspace + "<br/>" + "<br/>" + "答案:" + "<br/><span style='color:red'>" + fiblData.realWords + "</span><br/>" + "<br/>";
        }
    } else {
        text = fiblData.text;
        text = text + "<br/>" + "<br/>";
    }
    $(questionDiv).append(text);
    return questionDiv;
}
