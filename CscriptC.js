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
