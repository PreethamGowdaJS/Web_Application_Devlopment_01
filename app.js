
// Toast Notification Function
function showToast(message) {
    let toast = document.getElementById("toast");

    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";
        document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(function () {
        toast.classList.remove("show");
    }, 3000);
}


// Smooth Scrolling to Booking Form
document.querySelectorAll('a[href="#booking"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const bookingSection = document.getElementById("booking");

        if (bookingSection) {
            bookingSection.scrollIntoView({
                behavior: "smooth"
            });

            showToast("Redirecting to Ticket Booking!");
        }

    });

});

const matchSelect = document.getElementById("match");
const standSelect = document.getElementById("stand");
const quantityInput = document.getElementById("quantity");

const summaryMatch = document.getElementById("summaryMatch");
const summaryStand = document.getElementById("summaryStand");
const summaryQuantity = document.getElementById("summaryQuantity");
const summaryPrice = document.getElementById("summaryPrice");
const totalPrice = document.getElementById("totalPrice");

const ticketPrices = {
    "RCB vs CSK": { General: 500, Premium: 800, VIP: 2000 },
    "MI vs RCB": { General: 600, Premium: 900, VIP: 2500 },
    "CSK vs MI": { General: 300, Premium: 650, VIP: 2700 }
};

function updateSummary() {
    const match = matchSelect.value;
    const stand = standSelect.value;
    const quantity = Number(quantityInput.value);

    if (quantity < 1 || quantity > 10 || !Number.isInteger(quantity)) {
        return;
    }

    const price = ticketPrices[match][stand];
    const total = price * quantity;

    summaryMatch.textContent = match;
    summaryStand.textContent = stand;
    summaryQuantity.textContent = quantity;
    summaryPrice.textContent = price;
    totalPrice.textContent = total;

    showToast("Booking Summary Updated!");
}

matchSelect.addEventListener("change", updateSummary);
standSelect.addEventListener("change", updateSummary);
quantityInput.addEventListener("input", updateSummary);




// Activity 8: Mobile Navigation

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {
            menuToggle.textContent = "✕";
            menuToggle.setAttribute("aria-expanded", "true");
        } else {
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
        }

    });

    navMenu.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
        });

    });

}

// Activity 8: Grid and List View

const matchContainer = document.getElementById("matchContainer");
const gridView = document.getElementById("gridView");
const listView = document.getElementById("listView");

gridView.addEventListener("click", function () {
    matchContainer.classList.remove("list-view");
});

listView.addEventListener("click", function () {
    matchContainer.classList.add("list-view");
});
