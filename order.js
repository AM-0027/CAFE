document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("coffeeOrderForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const drink = document.getElementById("drink").value;
        const flavor = document.getElementById("flavor").value;

        const milkPreferences = Array.from(
            document.querySelectorAll("input[type='checkbox']")
        )
            .slice(0, 3) // first 3 are milk options
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.nextSibling.textContent.trim());

        const sweeteners = Array.from(
            document.querySelectorAll("input[type='checkbox']")
        )
            .slice(3, 6) // next 3 are sweeteners
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.nextSibling.textContent.trim());

        const specialInstructions = form.querySelector("input[placeholder*='Extra']").value;

        const orderSummary = `
        🧾 Order Summary:
        --------------------
        Name: ${name}
        Drink: ${drink}
        Flavor: ${flavor}
        Milk: ${milkPreferences.join(", ") || "None"}
        Sweeteners: ${sweeteners.join(", ") || "None"}
        Special Instructions: ${specialInstructions || "None"}
        `;

        alert("Thank you for your order, " + name + "!\n" + orderSummary);
        console.log(orderSummary);

        form.reset(); // Clear form after submission
    });
});
