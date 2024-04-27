function addSubject() {
    const subjectsDiv = document.getElementById('subjects');

    const subjectDiv = document.createElement('div');
    subjectDiv.classList.add('subject');

    subjectDiv.innerHTML = `
        <input type="text" placeholder="Subject Name">
        <input type="number" placeholder="Units">
        <input type="number" placeholder="Final Grade">
        <button onclick="removeSubject(this)">Remove</button>
    `;

    subjectsDiv.appendChild(subjectDiv);
}

function removeSubject(button) {
    button.parentNode.remove();
}

function calculateGWA() {
    const subjects = document.querySelectorAll('.subject');
    let totalUnits = 0;
    let totalWeightedGrade = 0;

    // Display "Computing" message
    const resultParagraph = document.getElementById('result');
    resultParagraph.textContent = "Your GWA is now computing, please wait a moment...";

    // Perform calculation asynchronously
    setTimeout(() => {
        subjects.forEach(subject => {
            const units = parseFloat(subject.querySelector('input:nth-of-type(2)').value);
            const grade = parseFloat(subject.querySelector('input:nth-of-type(3)').value);

            if (!isNaN(units) && !isNaN(grade)) {
                totalUnits += units;
                totalWeightedGrade += units * grade;
            }
        });

        const gwa = totalWeightedGrade / totalUnits;

        // Display the result
        resultParagraph.textContent = `Your GWA is: ${gwa.toFixed(2)}`;
    }, 1000); // Simulating a delay of 1 second (adjust as needed)
}


function clearAll() {
    const subjectsDiv = document.getElementById('subjects');
    subjectsDiv.innerHTML = '';
    document.getElementById('result').textContent = '';
}

// Function to close the dialog
function closeDialog() {
    document.getElementById('dialog').classList.remove('show');
}

// Show the dialog with a fade-in effect
window.onload = function() {
    const dialog = document.getElementById('dialog');
    dialog.classList.add('show');
};

function calculateGWA() {
    const subjects = document.querySelectorAll('.subject');
    let totalUnits = 0;
    let totalWeightedGrade = 0;

    // Display "Computing" message
    const resultParagraph = document.getElementById('result');
    resultParagraph.textContent = "Your GWA is now computing, please wait a moment...";

    // Perform calculation asynchronously
    setTimeout(() => {
        subjects.forEach(subject => {
            const units = parseFloat(subject.querySelector('input:nth-of-type(2)').value);
            const grade = parseFloat(subject.querySelector('input:nth-of-type(3)').value);

            if (!isNaN(units) && !isNaN(grade)) {
                totalUnits += units;
                totalWeightedGrade += units * grade;
            }
        });

        const gwa = totalWeightedGrade / totalUnits;

        // Determine grade based on GWA
        let gradeText = "";
        if (gwa >= 98) {
            gradeText = "1.00";
        } else if (gwa >= 95) {
            gradeText = "1.25";
        } else if (gwa >= 92) {
            gradeText = "1.50";
        } else if (gwa >= 89) {
            gradeText = "1.75";
        } else if (gwa >= 86) {
            gradeText = "2.00";
        } else if (gwa >= 83) {
            gradeText = "2.25";
        } else if (gwa >= 80) {
            gradeText = "2.50";
        } else if (gwa >= 77) {
            gradeText = "2.75";
        } else if (gwa >= 75) {
            gradeText = "3.00";
        } else {
            gradeText = "5.00";
        }

        // Display the result
        resultParagraph.textContent = `Your GWA is: ${gwa.toFixed(2)}. Grade: ${gradeText}. ${gwa >= 75 ? "You have passed." : "You have not passed."}`;
    }, 1000); // Simulating a delay of 1 second (adjust as needed)
}


