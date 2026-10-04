document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // DARK MODE
    // =========================

    const darkModeBtn = document.getElementById("darkModeBtn");

    darkModeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            darkModeBtn.textContent = "☀️";
            localStorage.setItem("darkMode", "enabled");
        } else {
            darkModeBtn.textContent = "🌙";
            localStorage.setItem("darkMode", "disabled");
        }

    });


    // Remember Dark Mode
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark");
        darkModeBtn.textContent = "☀️";
    }


    // =========================
    // ELIGIBILITY CHECKER
    // =========================

    const eligibilityForm =
        document.getElementById("eligibilityForm");

    eligibilityForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("studentName").value.trim();

        const marks =
            Number(document.getElementById("marks").value);

        const course =
            document.getElementById("course").value;

        const result =
            document.getElementById("eligibilityResult");


        // Validation

        if (name === "") {

            result.innerHTML =
                '<p class="error">Please enter student name.</p>';

            return;
        }


        if (
            document.getElementById("marks").value === "" ||
            marks < 0 ||
            marks > 100
        ) {

            result.innerHTML =
                '<p class="error">Please enter marks between 0 and 100.</p>';

            return;
        }


        if (course === "") {

            result.innerHTML =
                '<p class="error">Please select a course.</p>';

            return;
        }


        // Eligibility Logic

        let status;
        let message;


        if (marks >= 70) {

            status = "Direct Admission";

            message =
                "Congratulations! You qualify for direct admission.";

        } else if (marks >= 50) {

            status = "Eligible";

            message =
                "You are eligible. Counselling is recommended before admission.";

        } else {

            status = "Counselling Required";

            message =
                "Please contact our admission counsellor for further guidance.";

        }


        // Display Result

        result.innerHTML = `
            <div class="result-box">
                <h3>${status}</h3>

                <p>
                    <strong>Student:</strong> ${name}
                </p>

                <p>
                    <strong>Marks:</strong> ${marks}%
                </p>

                <p>
                    <strong>Course:</strong> ${course}
                </p>

                <p>
                    ${message}
                </p>
            </div>
        `;

    });

});


// =========================
// FEE CALCULATOR
// =========================

funeligibilityilityeFeesec{

    const courseSelect =
        document.getElementById("feeCourse");

    const durationSelect =
        document.getElementById("duration");

    const result =
        document.getElementById("feeResult");


    const monthlyFee =
        Number(courseSelect.value);

    const duration =
        Number(durationSelect.value);


    // Validation

    if (!monthlyFee) {

        result.innerHTML =
            '<p class="error">Please select a course.</p>';

        return;
    }


    if (!duration) {

        result.innerHTML =
            '<p class="error">Please select duration.</p>';

        return;
    }


    // Original Fee

    const originalFee =
        monthlyFee * duration;


    // Discount

    let discountPercent = 0;


    if (duration >= 6) {

        discountPercent = 10;

    } else if (duration >= 3) {

        discountPercent = 5;

    }


    const discountAmount =
        originalFee * discountPercent / 100;


    const finalFee =
        originalFee - discountAmount;


    // Course Name

    const courseName =
        courseSelect.options[
            courseSelect.selectedIndex
        ].text;


    // Display Result

    result.innerHTML = `
        <div class="result-box">

            <h3>Fee Summary</h3>

            <p>
                <strong>Course:</strong>
                ${courseName}
            </p>

            <p>
                <strong>Duration:</strong>
                ${duration} Month(s)
            </p>

            <p>
                <strong>Original Fee:</strong>
                Rs. ${originalFee.toLocaleString()}
            </p>

            <p>
                <strong>Discount:</strong>
                ${discountPercent}% 
                (Rs. ${discountAmount.toLocaleString()})
            </p>

            <p>
                <strong>Final Fee:</strong>
                Rs. ${finalFee.toLocaleString()}
            </p>

        </div>
    `;
}