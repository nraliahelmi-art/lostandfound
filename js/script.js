const STORAGE_KEY = "campusLostFoundItems";
const USERS_KEY = "campusLostFoundUsers";
const AUTH_KEY = "campusLostFoundSession";

const defaultItems = [
    {
        id: "ITEM-101",
        type: "Lost",
        name: "Black Wallet",
        category: "Personal Belongings",
        location: "Main Library, Level 2",
        date: "2026-11-12",
        description: "Leather wallet with ID card and bank cards inside.",
        status: "Approved",
        reportedBy: "Student",
        image: "images/black-wallet.jpg"
    },
    {
        id: "ITEM-102",
        type: "Found",
        name: "Wireless Earbuds",
        category: "Electronics",
        location: "Student Cafeteria",
        date: "2026-11-13",
        description: "White charging case found on a table near the entrance.",
        status: "Approved",
        reportedBy: "Student",
        image: "images/wireless-earbuds.jpg"
    },
    {
        id: "ITEM-103",
        type: "Lost",
        name: "Tumbler Bottle",
        category: "Accessories",
        location: "Engineering Block B, Room 204",
        date: "2026-11-14",
        description: "Stainless steel insulated bottle left under the desk.",
        status: "Pending",
        reportedBy: "Student",
        image: "images/tumbler-bottle.jpg"
    },
    {
        id: "ITEM-104",
        type: "Found",
        name: "Scientific Calculator",
        category: "Stationery",
        location: "Exam Hall A",
        date: "2026-11-14",
        description: "Casio calculator found on row 5 after exam session.",
        status: "Approved",
        reportedBy: "Admin",
        image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: "ITEM-105",
        type: "Lost",
        name: "Canvas Backpack",
        category: "Bags",
        location: "Shuttle Bus Stop",
        date: "2026-11-15",
        description: "Backpack with notebooks and laptop charger inside.",
        status: "Pending",
        reportedBy: "Student",
        image: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: "ITEM-106",
        type: "Found",
        name: "Silver Laptop",
        category: "Electronics",
        location: "Computing Lab 3",
        date: "2026-11-15",
        description: "13-inch laptop left near workstation 12.",
        status: "Approved",
        reportedBy: "Student",
        image: "images/silver-laptop.jpg"
    },
    {
        id: "ITEM-107",
        type: "Lost",
        name: "House & Car Keys",
        category: "Personal Belongings",
        location: "Sports Complex Parking",
        date: "2026-11-16",
        description: "Keyring with keyless remote and metal tag.",
        status: "Approved",
        reportedBy: "Student",
        image: "images/car-keys.jpg"
    },
    {
        id: "ITEM-108",
        type: "Found",
        name: "Wristwatch",
        category: "Accessories",
        location: "Campus Mosque",
        date: "2026-11-16",
        description: "Classic watch left near the ablution area.",
        status: "Approved",
        reportedBy: "Student",
        image: "images/wristwatch.jpg"
    },
    {
        id: "ITEM-109",
        type: "Lost",
        name: "Reference Book",
        category: "Stationery",
        location: "Lecture Theatre 1",
        date: "2026-11-17",
        description: "Hardcover textbook with sticky notes inside.",
        status: "Pending",
        reportedBy: "Student",
        image: "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: "ITEM-110",
        type: "Found",
        name: "Eyeglasses",
        category: "Accessories",
        location: "Discussion Room 4",
        date: "2026-11-17",
        description: "Black frame glasses found on the study table.",
        status: "Approved",
        reportedBy: "Admin",
        image: "images/eyeglasses.jpg"
    },
    {
        id: "ITEM-111",
        type: "Lost",
        name: "Smartphone",
        category: "Electronics",
        location: "Student Affairs Lobby",
        date: "2026-11-18",
        description: "Black phone with clear protective case.",
        status: "Approved",
        reportedBy: "Student",
        image: "images/smartphone.jpg"
    },
    {
        id: "ITEM-112",
        type: "Found",
        name: "Power Bank",
        category: "Electronics",
        location: "Main Auditorium, Row G",
        date: "2026-11-18",
        description: "Portable charger with short USB cable.",
        status: "Pending",
        reportedBy: "Student",
        image: "images/power-bank.jpg"
    }
];

function initializeStorage() {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    const needsUpdate =
        existing.length < defaultItems.length ||
        existing.some(
            item =>
                (item.image && item.image.includes("6927335")) ||
                (item.image && item.image.includes("159711"))
        );

    if (!localStorage.getItem(STORAGE_KEY) || existing.length === 0 || needsUpdate) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultItems));
    }
    if (!localStorage.getItem(USERS_KEY)) {
        const defaultUsers = [
            { name: "Student", username: "student", password: "student123", role: "student" },
            { name: "Admin", username: "admin", password: "admin123", role: "admin" }
        ];
        localStorage.setItem(USERS_KEY, JSON.stringify(defaultUsers));
    }
}

function getItems() {
    initializeStorage();
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveItems(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function getUsers() {
    initializeStorage();
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
}

function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem(AUTH_KEY));
}

function logout() {
    localStorage.removeItem(AUTH_KEY);
    window.location.href = "index.html";
}

function fillDemo(user, pass) {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginForm = document.getElementById("loginForm");

    if (usernameInput && passwordInput) {
        usernameInput.value = user;
        passwordInput.value = pass;
    }

    if (loginForm) {
        loginForm.dispatchEvent(new Event("submit"));
    }
}

function escapeHTML(str) {
    if (!str) return "";
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function checkAuthAccess() {
    const path = window.location.pathname;
    const isAuthPage = path.endsWith("index.html") || path.endsWith("register.html") || path.endsWith("/");
    const user = getCurrentUser();

    if (!user && !isAuthPage) {
        window.location.href = "index.html";
        return;
    }

    if (user && path.endsWith("admin.html") && user.role !== "admin") {
        window.location.href = "dashboard.html";
        return;
    }

    if (user && user.role !== "admin") {
        const adminNavLinks = document.querySelectorAll('a[href="admin.html"]');
        adminNavLinks.forEach(link => {
            const parentLi = link.closest(".nav-item");
            if (parentLi) parentLi.style.display = "none";
        });
    }
}

function setupLoginForm() {
    const loginForm = document.getElementById("loginForm");
    if (!loginForm) return;

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value.trim().toLowerCase();
        const password = document.getElementById("password").value.trim();
        const msgBox = document.getElementById("loginMessage");

        const users = getUsers();
        const foundUser = users.find(u => u.username.toLowerCase() === username && u.password === password);

        if (foundUser) {
            localStorage.setItem(AUTH_KEY, JSON.stringify({
                name: foundUser.name,
                username: foundUser.username,
                role: foundUser.role
            }));
            msgBox.style.color = "#2E8B6E";
            msgBox.textContent = "Login successful! Redirecting...";
            setTimeout(() => {
                window.location.href = foundUser.role === "admin" ? "admin.html" : "dashboard.html";
            }, 500);
        } else {
            msgBox.style.color = "#B83A2D";
            msgBox.textContent = "Invalid username or password.";
        }
    });
}

function setupRegisterForm() {
    const registerForm = document.getElementById("registerForm");
    if (!registerForm) return;

    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("regName").value.trim();
        const username = document.getElementById("regUsername").value.trim();
        const password = document.getElementById("regPassword").value.trim();
        const confirmPassword = document.getElementById("regConfirmPassword").value.trim();
        const msgBox = document.getElementById("registerMessage");

        if (password !== confirmPassword) {
            msgBox.style.color = "#B83A2D";
            msgBox.textContent = "Passwords do not match.";
            return;
        }

        const users = getUsers();
        const exists = users.some(u => u.username.toLowerCase() === username.toLowerCase());

        if (exists) {
            msgBox.style.color = "#B83A2D";
            msgBox.textContent = "Username already taken.";
            return;
        }

        users.push({ name, username, password, role: "student" });
        saveUsers(users);

        msgBox.style.color = "#2E8B6E";
        msgBox.textContent = "Registration successful! Redirecting to login...";
        setTimeout(() => {
            window.location.href = "index.html";
        }, 800);
    });
}

function setupReportForm() {
    const reportForm = document.getElementById("reportForm");
    if (!reportForm) return;

    const dateInput = document.getElementById("itemDate");
    if (dateInput && !dateInput.value) {
        dateInput.value = new Date().toISOString().split("T")[0];
    }

    const imageInput = document.getElementById("itemImage");
    const previewContainer = document.getElementById("imagePreviewContainer") || document.getElementById("imagePreview");
    const submitBtn = reportForm.querySelector('button[type="submit"]');
    let uploadedImageBase64 = "";
    let isProcessingImage = false;

    if (imageInput) {
        imageInput.addEventListener("change", function () {
            const file = this.files[0];
            if (!file) {
                uploadedImageBase64 = "";
                if (previewContainer) previewContainer.innerHTML = "";
                return;
            }

            if (!file.type.startsWith("image/")) {
                alert("Please select an image file (JPG, PNG, WEBP).");
                this.value = "";
                return;
            }

            isProcessingImage = true;
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = "Processing image...";
            }

            const instantUrl = URL.createObjectURL(file);
            if (previewContainer) {
                previewContainer.innerHTML = `<img id="imagePreview" src="${instantUrl}" alt="Preview">`;
            }

            const reader = new FileReader();
            reader.onload = function (event) {
                const img = new Image();
                img.onload = function () {
                    const canvas = document.createElement("canvas");
                    const maxWidth = 500;
                    let width = img.width;
                    let height = img.height;

                    if (width > maxWidth) {
                        height = Math.round((height * maxWidth) / width);
                        width = maxWidth;
                    }

                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext("2d");
                    ctx.drawImage(img, 0, 0, width, height);

                    uploadedImageBase64 = canvas.toDataURL("image/jpeg", 0.7);
                    isProcessingImage = false;
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = 'Submit Report <i class="bi bi-send ms-1"></i>';
                    }
                };
                img.onerror = function () {
                    uploadedImageBase64 = event.target.result;
                    isProcessingImage = false;
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = 'Submit Report <i class="bi bi-send ms-1"></i>';
                    }
                };
                img.src = event.target.result;
            };
            reader.readAsDataURL(file);
        });
    }

    reportForm.addEventListener("submit", function (e) {
        e.preventDefault();
        if (isProcessingImage) return;

        const items = getItems();
        const currentUser = getCurrentUser();

        const newItem = {
            id: "ITEM-" + Math.floor(100 + Math.random() * 900),
            type: document.getElementById("itemType").value,
            name: document.getElementById("itemName").value.trim(),
            category: document.getElementById("category").value,
            location: document.getElementById("location").value.trim(),
            date: document.getElementById("itemDate").value,
            description: document.getElementById("description").value.trim(),
            status: "Pending",
            reportedBy: currentUser ? currentUser.role.charAt(0).toUpperCase() + currentUser.role.slice(1) : "Student",
            image: uploadedImageBase64
        };

        try {
            items.push(newItem);
            saveItems(items);

            const msg = document.getElementById("successMessage");
            if (msg) {
                msg.style.color = "#2E8B6E";
                msg.textContent = "Report submitted successfully! Redirecting...";
            }

            setTimeout(() => {
                window.location.href = "dashboard.html";
            }, 800);
        } catch (err) {
            alert("Browser storage is full. Please delete old reports in the Admin panel first.");
        }
    });
}

function loadDashboard() {
    const totalEl = document.getElementById("totalReportsCount");
    if (!totalEl) return;

    const items = getItems();
    const lostCount = items.filter(i => i.type === "Lost").length;
    const foundCount = items.filter(i => i.type === "Found").length;
    const pendingCount = items.filter(i => i.status === "Pending").length;

    totalEl.textContent = items.length;
    document.getElementById("lostItemsCount").textContent = lostCount;
    document.getElementById("foundItemsCount").textContent = foundCount;
    document.getElementById("pendingReportsCount").textContent = pendingCount;

    const recentContainer = document.getElementById("recentReportsContainer");
    if (recentContainer) {
        const recentItems = [...items].reverse().slice(0, 5);
        if (recentItems.length === 0) {
            recentContainer.innerHTML = `<p class="empty-note">No reports submitted yet.</p>`;
        } else {
            recentContainer.innerHTML = recentItems.map(item => `
                <div class="recent-report-item d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center gap-3">
                        ${item.image 
                            ? `<img src="${item.image}" alt="${escapeHTML(item.name)}" style="width: 46px; height: 46px; object-fit: cover; border-radius: 10px;">`
                            : `<div style="width: 46px; height: 46px; border-radius: 10px; background: #F6ECE7; display: flex; align-items: center; justify-content: center; color: #6D5E63;"><i class="bi bi-box-seam"></i></div>`
                        }
                        <div>
                            <h6>${escapeHTML(item.name)}</h6>
                            <p>${escapeHTML(item.location)} &bull; ${escapeHTML(item.date)}</p>
                        </div>
                    </div>
                    <div class="d-flex gap-2 align-items-center">
                        <span class="status-pill status-${item.status.toLowerCase()}">
                            ${escapeHTML(item.status)}
                        </span>
                        <span class="status-pill ${item.type === "Lost" ? "status-lost" : "status-found"}">
                            ${escapeHTML(item.type)}
                        </span>
                    </div>
                </div>
            `).join("");
        }
    }

    const chartCanvas = document.getElementById("reportsChart");
    if (chartCanvas && typeof Chart !== "undefined") {
        new Chart(chartCanvas, {
            type: "doughnut",
            data: {
                labels: ["Lost Items", "Found Items", "Pending Review"],
                datasets: [{
                    data: [lostCount, foundCount, pendingCount],
                    backgroundColor: ["#D96B52", "#2E8B6E", "#E8963E"],
                    borderWidth: 2,
                    borderColor: "#FFFCF9"
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: "bottom",
                        labels: { color: "#24191D", font: { weight: "600" } }
                    }
                }
            }
        });
    }
}

function loadItemsPage() {
    const itemsGrid = document.getElementById("itemsGrid");
    if (!itemsGrid) return;

    const searchInput = document.getElementById("searchInput");
    const typeFilter = document.getElementById("typeFilter");
    const categoryFilter = document.getElementById("categoryFilter");
    const emptyState = document.getElementById("emptyState");

    function renderItems() {
        const allItems = getItems();
        const currentUser = getCurrentUser();
        const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : "";
        const selectedType = typeFilter ? typeFilter.value : "All";
        const selectedCategory = categoryFilter ? categoryFilter.value : "All";

        const filtered = allItems.filter(item => {
            if (currentUser && currentUser.role !== "admin" && item.status !== "Approved") {
                return false;
            }
            const matchesSearch =
                item.name.toLowerCase().includes(searchTerm) ||
                item.location.toLowerCase().includes(searchTerm) ||
                item.description.toLowerCase().includes(searchTerm);
            const matchesType = selectedType === "All" || item.type === selectedType;
            const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;

            return matchesSearch && matchesType && matchesCategory;
        });

        if (filtered.length === 0) {
            itemsGrid.innerHTML = "";
            if (emptyState) emptyState.classList.remove("d-none");
            return;
        }

        if (emptyState) emptyState.classList.add("d-none");

        itemsGrid.innerHTML = filtered.map(item => `
            <div class="col-md-6 col-lg-4">
                <div class="item-card d-flex flex-column">
                    ${item.image
                        ? `<img src="${item.image}" alt="${escapeHTML(item.name)}" class="item-image">`
                        : `<div class="item-placeholder"><i class="bi bi-image me-2"></i> No Image Available</div>`
                    }
                    <div class="item-card-body d-flex flex-column flex-grow-1">
                        <div class="d-flex justify-content-between align-items-center mb-1">
                            <span class="status-pill ${item.type === "Lost" ? "status-lost" : "status-found"}">
                                ${escapeHTML(item.type)}
                            </span>
                            <small class="text-muted">${escapeHTML(item.date)}</small>
                        </div>
                        <h5>${escapeHTML(item.name)}</h5>
                        <p class="item-location mb-1"><i class="bi bi-geo-alt me-1"></i>${escapeHTML(item.location)}</p>
                        <p class="small text-muted flex-grow-1">${escapeHTML(item.description)}</p>
                        <button class="view-button" onclick="openItemModal('${item.id}')">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        `).join("");
    }

    if (searchInput) searchInput.addEventListener("input", renderItems);
    if (typeFilter) typeFilter.addEventListener("change", renderItems);
    if (categoryFilter) categoryFilter.addEventListener("change", renderItems);

    renderItems();
}

function openItemModal(itemId) {
    const items = getItems();
    const item = items.find(i => i.id === itemId);
    if (!item) return;

    const modalBody = document.getElementById("modalBodyContent");
    const modalTitle = document.getElementById("itemModalLabel");
    if (!modalBody) return;

    if (modalTitle) modalTitle.textContent = item.name;

    modalBody.innerHTML = `
        ${item.image ? `<img src="${item.image}" alt="${escapeHTML(item.name)}" class="modal-item-image">` : ""}
        <div class="mb-3 d-flex gap-2">
            <span class="status-pill ${item.type === "Lost" ? "status-lost" : "status-found"}">${escapeHTML(item.type)}</span>
            <span class="status-pill status-${item.status.toLowerCase()}">${escapeHTML(item.status)}</span>
        </div>
        <p class="mb-2"><strong>Category:</strong> ${escapeHTML(item.category)}</p>
        <p class="mb-2"><strong>Location:</strong> ${escapeHTML(item.location)}</p>
        <p class="mb-2"><strong>Date:</strong> ${escapeHTML(item.date)}</p>
        <p class="mb-2"><strong>Reported By:</strong> ${escapeHTML(item.reportedBy || "Student")}</p>
        <p class="mb-0"><strong>Description:</strong><br>${escapeHTML(item.description)}</p>
    `;

    const modalEl = document.getElementById("itemDetailModal");
    if (modalEl && typeof bootstrap !== "undefined") {
        const modal = new bootstrap.Modal(modalEl);
        modal.show();
    }
}

function loadAdminPage() {
    const reportsTable = document.getElementById("reportsTable");
    if (!reportsTable) return;

    const searchInput = document.getElementById("adminSearch");
    const emptyMessage = document.getElementById("emptyMessage");

    function updateAdminStats(items) {
        const totalEl = document.getElementById("adminTotal");
        const lostEl = document.getElementById("adminLost");
        const foundEl = document.getElementById("adminFound");
        const pendingEl = document.getElementById("adminPending");

        if (totalEl) totalEl.textContent = items.length;
        if (lostEl) lostEl.textContent = items.filter(i => i.type === "Lost").length;
        if (foundEl) foundEl.textContent = items.filter(i => i.type === "Found").length;
        if (pendingEl) pendingEl.textContent = items.filter(i => i.status === "Pending").length;
    }

    function renderAdminTable() {
        const items = getItems();
        updateAdminStats(items);

        const query = searchInput ? searchInput.value.toLowerCase().trim() : "";

        const filtered = items.filter(item =>
            item.name.toLowerCase().includes(query) ||
            item.location.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query) ||
            item.status.toLowerCase().includes(query) ||
            (item.reportedBy && item.reportedBy.toLowerCase().includes(query))
        );

        if (filtered.length === 0) {
            reportsTable.innerHTML = "";
            if (emptyMessage) emptyMessage.classList.remove("d-none");
            return;
        }

        if (emptyMessage) emptyMessage.classList.add("d-none");

        reportsTable.innerHTML = filtered.map(item => `
            <tr>
                <td>
                    <div class="d-flex align-items-center gap-2">
                        ${item.image 
                            ? `<img src="${item.image}" alt="${escapeHTML(item.name)}" style="width: 42px; height: 42px; object-fit: cover; border-radius: 8px;">`
                            : `<div style="width: 42px; height: 42px; border-radius: 8px; background: #F6ECE7; display: flex; align-items: center; justify-content: center; color: #6D5E63;"><i class="bi bi-image"></i></div>`
                        }
                        <div>
                            <div class="fw-bold text-dark">${escapeHTML(item.name)}</div>
                            <small class="text-muted">${escapeHTML(item.id)}</small>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="status-pill ${item.type === "Lost" ? "status-lost" : "status-found"}">
                        ${escapeHTML(item.type)}
                    </span>
                </td>
                <td>${escapeHTML(item.category)}</td>
                <td>${escapeHTML(item.location)}</td>
                <td>${escapeHTML(item.date)}</td>
                <td>${escapeHTML(item.reportedBy || "Student")}</td>
                <td>
                    <span class="status-pill status-${item.status.toLowerCase()}">
                        ${escapeHTML(item.status)}
                    </span>
                </td>
                <td>
                    <div class="d-flex gap-1 flex-wrap">
                        <button class="btn btn-sm btn-success" onclick="updateItemStatus('${item.id}', 'Approved')">Approve</button>
                        <button class="btn btn-sm btn-warning text-dark" onclick="updateItemStatus('${item.id}', 'Rejected')">Reject</button>
                        <button class="btn btn-sm btn-danger" onclick="deleteItem('${item.id}')">Delete</button>
                    </div>
                </td>
            </tr>
        `).join("");
    }

    window.updateItemStatus = function (id, newStatus) {
        const items = getItems();
        const index = items.findIndex(i => i.id === id);
        if (index !== -1) {
            items[index].status = newStatus;
            saveItems(items);
            renderAdminTable();
        }
    };

    window.deleteItem = function (id) {
        if (confirm("Are you sure you want to delete this report?")) {
            const items = getItems().filter(i => i.id !== id);
            saveItems(items);
            renderAdminTable();
        }
    };

    if (searchInput) searchInput.addEventListener("input", renderAdminTable);
    renderAdminTable();
}

document.addEventListener("DOMContentLoaded", function () {
    initializeStorage();
    checkAuthAccess();
    setupLoginForm();
    setupRegisterForm();
    setupReportForm();
    loadDashboard();
    loadItemsPage();
    loadAdminPage();
});