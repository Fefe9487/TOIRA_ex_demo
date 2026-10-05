(function () {
    var ok = false;
    try {
        ok = sessionStorage.getItem('toiraInviteOk') === '1';
    } catch (e) {
        ok = false;
    }
    if (ok) return;
    var file = location.pathname.split('/').pop() || 'company.html';
    var next = file + location.search + location.hash;
    location.replace('index.html?next=' + encodeURIComponent(next));
})();
