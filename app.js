const screens = {
    "customer-signup": {
        title: "Customer Signup",
        subtitle: "Basic signup captures city for fallback and location later for nearby discovery."
    },
    "customer-discovery": {
        title: "Nearby Merchants",
        subtitle: "Merchant cards are derived from the nearest active branch, not a merchant-level location."
    },
    "customer-offers": {
        title: "Nearby Offers",
        subtitle: "Offers are discovered from active nearby branches and respect branch assignment plus validity."
    },
    "customer-wallets": {
        title: "Loyalty Wallets",
        subtitle: "Customers carry separate parent-merchant and Shopee wallets based on how they were linked."
    },
    "merchant-onboarding": {
        title: "Merchant Onboarding",
        subtitle: "Merchant setup links business category, status, package, and owner identity."
    },
    "merchant-branches": {
        title: "Branches",
        subtitle: "Branch creation is constrained by merchant package limits and stays separate from banking."
    },
    "merchant-users": {
        title: "Merchant Users",
        subtitle: "Merchant users are created first and assigned to branches later, just like bank accounts."
    },
    "merchant-banking": {
        title: "Bank Accounts",
        subtitle: "Bank accounts are merchant-owned and can be assigned to multiple branches."
    },
    "merchant-offers": {
        title: "Offers",
        subtitle: "Offers are merchant-owned, branch-assigned, and support branch-level quick creation with auto-assignment."
    },
    "merchant-loyalty": {
        title: "Loyalty Config",
        subtitle: "Each merchant defines separate loyalty earning rates for direct customers and Shopee customers."
    },
    "merchant-package": {
        title: "Merchant Packages",
        subtitle: "Package master data controls backend-configurable branch and customer limits."
    }
};

const navItems = document.querySelectorAll(".nav-item");
const screenNodes = document.querySelectorAll(".screen");
const titleNode = document.getElementById("screen-title");
const subtitleNode = document.getElementById("screen-subtitle");

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        const target = item.dataset.screen;

        navItems.forEach((node) => node.classList.remove("active"));
        screenNodes.forEach((node) => node.classList.remove("active"));

        item.classList.add("active");
        document.getElementById(target).classList.add("active");

        titleNode.textContent = screens[target].title;
        subtitleNode.textContent = screens[target].subtitle;
    });
});
