"use strict";

const initialProfile = {
    name: "Maria Santos",
    program: "BS Information Technology",
    year: "3rd Year",
    status: "active"
};

const profileCard = document.getElementById("profileCard");
const profileName = document.getElementById("profileName");
const profileProgram = document.getElementById("profileProgram");
const profileYear = document.getElementById("profileYear");
const profileStatus = document.getElementById("profileStatus");

const detailsPanel = document.getElementById("detailsPanel");
const studentIdDisplay = document.getElementById("studentIdDisplay");

const nameInput = document.getElementById("nameInput");
const programInput = document.getElementById("programInput");
const yearInput = document.getElementById("yearInput");
const statusInput = document.getElementById("statusInput");

const updateBtn = document.getElementById("updateBtn");
const toggleDetailsBtn = document.getElementById("toggleDetailsBtn");
const themeBtn = document.getElementById("themeBtn");
const resetBtn = document.getElementById("resetBtn");

const formMessage = document.getElementById("formMessage");
const profileForm = document.getElementById("profileForm");

const profileSection = document.querySelector(".profile-card");

function isValidStudentName(name) {
    return name.trim().length >= 2;
}

function formatStudentStatus(status) {
    if (status === "active") {
        return "Active";
    }

    if (status === "inactive") {
        return "Inactive";
    }

    return "";
}

function setStatus(status) {
    if (!profileCard || !profileStatus) {
        return;
    }

    if (status !== "active" && status !== "inactive") {
        return;
    }

    profileStatus.textContent = formatStudentStatus(status);
    profileCard.dataset.status = status;

    if (status === "active") {
        profileCard.classList.add("active");
        profileCard.classList.remove("inactive");
    } else {
        profileCard.classList.add("inactive");
        profileCard.classList.remove("active");
    }
}

function updateProfile() {
    if (
        !nameInput ||
        !programInput ||
        !yearInput ||
        !statusInput ||
        !profileName ||
        !profileProgram ||
        !profileYear ||
        !formMessage
    ) {
        return;
    }

    const name = nameInput.value;
    const program = programInput.value;
    const year = yearInput.value;
    const status = statusInput.value;

    if (!isValidStudentName(name)) {
        formMessage.textContent = "Student name is required";
        return;
    }

    profileName.textContent = name.trim();
    profileProgram.textContent = program;
    profileYear.textContent = year;

    setStatus(status);

    formMessage.textContent = "Profile updated successfully.";
}

function toggleDetails() {
    if (!detailsPanel) {
        return;
    }

    detailsPanel.classList.toggle("hidden");
}

function toggleTheme() {
    if (!document.body) {
        return;
    }

    document.body.classList.toggle("dark-theme");
}

function resetProfile() {
    if (
        !profileCard ||
        !profileName ||
        !profileProgram ||
        !profileYear ||
        !profileStatus ||
        !detailsPanel ||
        !studentIdDisplay ||
        !nameInput ||
        !programInput ||
        !yearInput ||
        !statusInput ||
        !formMessage
    ) {
        return;
    }

    const {
        name,
        program,
        year,
        status
    } = initialProfile;

    profileName.textContent = name;
    profileProgram.textContent = program;
    profileYear.textContent = year;

    nameInput.value = name;
    programInput.value = program;
    yearInput.value = year;
    statusInput.value = status;

    setStatus(status);

    const studentId = profileCard.dataset.studentId;

    if (studentId) {
        studentIdDisplay.textContent = "Student ID: " + studentId;
    }

    detailsPanel.classList.remove("hidden");

    document.body.classList.remove("dark-theme");

    formMessage.textContent = "";
}

function initialize() {
    if (
        !profileCard ||
        !profileName ||
        !profileProgram ||
        !profileYear ||
        !profileStatus ||
        !detailsPanel ||
        !studentIdDisplay ||
        !nameInput ||
        !programInput ||
        !yearInput ||
        !statusInput ||
        !updateBtn ||
        !toggleDetailsBtn ||
        !themeBtn ||
        !resetBtn ||
        !formMessage ||
        !profileForm ||
        !profileSection
    ) {
        console.error("Required DOM elements are missing.");
        return;
    }

    const studentId = profileCard.dataset.studentId;

    if (studentId) {
        studentIdDisplay.textContent = "Student ID: " + studentId;
    }

    nameInput.value = initialProfile.name;
    programInput.value = initialProfile.program;
    yearInput.value = initialProfile.year;
    statusInput.value = initialProfile.status;

    setStatus(initialProfile.status);

    detailsPanel.classList.remove("hidden");

    document.body.classList.remove("dark-theme");

    profileForm.addEventListener("submit", function(event) {
        event.preventDefault();
        updateProfile();
    });

    toggleDetailsBtn.addEventListener("click", function() {
        toggleDetails();
    });

    themeBtn.addEventListener("click", function() {
        toggleTheme();
    });

    resetBtn.addEventListener("click", function() {
        resetProfile();
    });
}

initialize();
