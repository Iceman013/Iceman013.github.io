function showPlans() {
    var file = document.createElement("embed");
    file.src = "plans.md";
    file.type = "text/markdown";
    file.height = "600px";
    file.width = "100%";
    makeModal("Plans", file);
    openModal();
}