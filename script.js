/* ---------------- TAB SWITCHING ---------------- */
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        tabButtons.forEach(b => b.classList.remove("active"));
        tabContents.forEach(c => c.classList.remove("active"));

        btn.classList.add("active");
        document.getElementById(btn.dataset.tab + "-tab")
            .classList.add("active");
    });
});

/* ---------------- LOADER ---------------- */
const loader = document.getElementById("loading-overlay");

function showLoader() {
    loader.style.display = "flex";
}

function hideLoader() {
    loader.style.display = "none";
}

/* ---------------- RESUME GENERATOR ---------------- */
document.getElementById("resume-form").addEventListener("submit", e => {
    e.preventDefault();
    showLoader();

    setTimeout(() => {
        const name = document.getElementById("full-name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const summary = document.getElementById("summary").value;
        const experience = document.getElementById("experience").value;
        const education = document.getElementById("education").value;
        const skills = document.getElementById("skills").value;

        document.getElementById("resume-content").innerHTML = `
            <h2>${name}</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>

            <h3>Professional Summary</h3>
            <p>${summary}</p>

            <h3>Experience</h3>
            <p>${experience}</p>

            <h3>Education</h3>
            <p>${education}</p>

            <h3>Skills</h3>
            <p>${skills}</p>
        `;

        hideLoader();
    }, 1500);
});

/* ---------------- EMAIL GENERATOR ---------------- */
document.getElementById("email-form").addEventListener("submit", e => {
    e.preventDefault();
    showLoader();

    setTimeout(() => {
        const subject = document.getElementById("email-subject").value;
        const name = document.getElementById("recipient-name").value;
        const tone = document.getElementById("email-tone").value;
        const context = document.getElementById("email-context").value;

        document.getElementById("email-content").innerText =
`Subject: ${subject}

Dear ${name},

This is a ${tone} email generated using AI.

${context}

Kind regards,
AI Assistant`;

        hideLoader();
    }, 1200);
});

/* ---------------- INTERVIEW GENERATOR ---------------- */
document.getElementById("interview-form").addEventListener("submit", e => {
    e.preventDefault();
    showLoader();

    setTimeout(() => {
        const job = document.getElementById("job-title").value;

        document.getElementById("interview-content").innerText =
`Interview Questions for ${job}

1. Tell me about yourself.
2. What are your technical skills?
3. Explain a challenging project you worked on.
4. Why should we hire you?
5. Where do you see yourself in 5 years?`;

        hideLoader();
    }, 1200);
});

/* ---------------- COPY BUTTONS ---------------- */
document.querySelectorAll(".copy-btn, .neural-copy").forEach(btn => {
    btn.addEventListener("click", () => {
        const targetId = btn.dataset.target;
        const text = document.getElementById(targetId).innerText;
        navigator.clipboard.writeText(text);
        alert("Copied to clipboard!");
    });
});

