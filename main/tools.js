function changeSite(address) {
    window.location.href = address;
}
function clickSite(base, address) {
    base.addEventListener("click", function() {
        changeSite(address);
    });
}