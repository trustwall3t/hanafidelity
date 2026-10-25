(function () {
    var root = document.querySelector('[data-sr-lang-picker]');
    var select = document.getElementById('sr-gtranslate-select');
    if (!root || !select) {
        return;
    }

    var pageLang = root.getAttribute('data-page-lang') || 'en';

    function readCookieLang() {
        var match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]+)/);
        if (!match) {
            return pageLang;
        }
        var parts = decodeURIComponent(match[1]).split('/').filter(Boolean);
        if (parts.length >= 2) {
            return parts[parts.length - 1];
        }

        return pageLang;
    }

    function clearGoogTransCookies() {
        var host = window.location.hostname;
        var expired = 'Thu, 01 Jan 1970 00:00:00 GMT';
        document.cookie = 'googtrans=;path=/;expires=' + expired;
        if (host) {
            document.cookie = 'googtrans=;path=/;domain=' + host + ';expires=' + expired;
            document.cookie = 'googtrans=;path=/;domain=.' + host + ';expires=' + expired;
        }
    }

    function setGoogTrans(lang) {
        if (!lang || lang === pageLang) {
            clearGoogTransCookies();
            return;
        }

        var value = '/' + pageLang + '/' + lang;
        var host = window.location.hostname;
        document.cookie = 'googtrans=' + encodeURIComponent(value) + ';path=/';
        if (host) {
            document.cookie = 'googtrans=' + encodeURIComponent(value) + ';path=/;domain=' + host;
            document.cookie = 'googtrans=' + encodeURIComponent(value) + ';path=/;domain=.' + host;
        }
    }

    var active = readCookieLang();
    for (var i = 0; i < select.options.length; i++) {
        if (select.options[i].value === active) {
            select.value = active;
            break;
        }
    }

    select.addEventListener('change', function () {
        setGoogTrans(select.value);
        window.location.reload();
    });
})();
