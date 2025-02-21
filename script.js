document.addEventListener("DOMContentLoaded", function () {
    const bundleOptions = document.querySelectorAll("input[name='bundle']");
    const totalPrice = document.getElementById("totalPrice");

    function updateSelection(event) {
        let selectedBundle = event.target;
        let bundleDiv = selectedBundle.closest(".bundle-option");

        // Hide all other selections
        document.querySelectorAll(".bundle-option").forEach(div => {
            div.classList.remove("selected");
            div.querySelector(".size-color-selector").classList.remove("show");
        });

        // Expand the selected bundle
        bundleDiv.classList.add("selected");
        bundleDiv.querySelector(".size-color-selector").classList.add("show");

        // Update total price
        totalPrice.textContent = "INR " + selectedBundle.value + ".00";
    }

    bundleOptions.forEach(option => {
        option.addEventListener("change", updateSelection);
    });

    document.getElementById("addToCart").addEventListener("click", function () {
        alert("Item added to cart!");
    });
});
