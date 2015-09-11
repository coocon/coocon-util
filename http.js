/**
 * 产生一个cookie
 * @param {String} name cookie的名称key
 * @param {String} value cookie的值
 * @param {Number} days cookie的过期时间
 */
function createCookie(name, value, days) {
    var expires;

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    var str = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
    document.cookie = str;
    return str;
}
