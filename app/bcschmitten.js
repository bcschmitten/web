// JavaScript source code

function GoogleSearch(value)
{
    var s = value;
    if (s.length == 0) return;

//    if (s.indexOf("site:") == -1)
//        s = "site:bcschmitten.ch " + s;

    s = s.replace(/ /g, "%20");
    s = s.replace(/ä|Ä/g, "%C3%A4");
    s = s.replace(/ö|Ö/g, "%C3%B6");
    s = s.replace(/ü|Ü/g, "%C3%BC");
    s = s.replace(/:/g, "%3A");
    s = s.replace(/\//g, "%2F");
//    document.location.href = "http://www.google.ch/search?q=" + s;
    document.location.href = "?r=10&q=" + s;
}

function SetNextImage() {
    document.getElementById('bild').firstChild.firstChild.src = "images/startpage/" + imageList[imageIndex];
    imageIndex = (++imageIndex) % imageList.length;
}

function SendEMail(domain, mailbox) {
    var sLink = 'mailto:';
    sLink += mailbox;
    sLink += '@';
    sLink += domain;

    window.location = sLink;

    return false;
}
