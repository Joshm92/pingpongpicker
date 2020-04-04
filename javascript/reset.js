((d) => {

    let resetButton = d.getElementById("reset-btn");
    
    resetButton.addEventListener("click", () => {
            window.location.reload();
    });

})(document);