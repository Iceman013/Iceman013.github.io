function showPlans() {
    var file = document.createElement("embed");
    file.src = "plans.md";
    file.type = "text/markdown";
    file.height = "700px";
    file.width = "100%";
    makeModal("Plans", file);
    openModal();
}