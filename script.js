// Get the form and resume output
const form = document.getElementById('resume-form');
const resumeOutput = document.getElementById('resume-output');
const generateResumeBtn = document.getElementById('generateResumeBtn');
const shareableLink = document.getElementById('shareable-link');
const downloadBtn = document.getElementById('download-pdf');

// Function to update the resume content
function updateResume() {
    const username = document.getElementById('username').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const linkedIn = document.getElementById('linkedIn').value;
    const objective = document.getElementById('objective').value;

    // Update resume content dynamically
    document.getElementById('resume-name').textContent = name;
    document.getElementById('resume-email').textContent = email;
    document.getElementById('resume-phone').textContent = phone;
    document.getElementById('resume-linkedin').textContent = linkedIn;
    document.getElementById('resume-objective').textContent = objective;

    // Generate the shareable URL
    shareableLink.value = `https://${username}.vercel.app/resume`;

    // Display the resume output and make it visible
    resumeOutput.classList.remove('hidden');
}

// Function to download the resume as a PDF
function downloadPDF() {
    const resumeElement = document.getElementById('resume-output');
    html2pdf().from(resumeElement).save('resume.pdf');
}

// Event listeners for the form and download button
generateResumeBtn.addEventListener('click', updateResume);
downloadBtn.addEventListener('click', downloadPDF);
// Function to download the resume as a PDF
function downloadPDF() {
    const resumeElement = document.getElementById('resume-output');
    if (!resumeElement) {
        alert("Resume is empty, please fill in the form first.");
        return;
    }

    // Initialize html2pdf
    const options = {
        filename: 'resume.pdf',  // Name of the file
        html2canvas: { dpi: 192, letterRendering: true, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Generate PDF from the resume content
    html2pdf().from(resumeElement).set(options).save();
}

