(() => {
    const company = localStorage.getItem("company");

    if (!company) {
        window.location.href = "login.html";
    }
})();