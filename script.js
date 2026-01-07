// Tab switching
const buttons = document.querySelectorAll(".tab-btn");
const tabs = document.querySelectorAll(".tab");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        tabs.forEach(t => t.classList.remove("active"));

        btn.classList.add("active");
        document.getElementById(btn.dataset.tab).classList.add("active");
    });
});

// Fake AI logic (for college project)
function generateResume() {
    const input = document.getElementById("resume-input").value;
    document.getElementById("resume-output").textContent =
        "AI Generated Resume:\n\n" + input;
}

function generateEmail() {
    const input = document.getElementById("email-input").value;
    document.getElementById("email-output").textContent =
        "AI Generated Email:\n\n" + input;
}

function generateInterview() {
    const job = document.getElementById("job-title").value;
    document.getElementById("interview-output").textContent =
        `Interview Questions for ${job}:\n\n1. Tell me about yourself\n2. What are your skills?\n3. Why should we hire you?`;
}

