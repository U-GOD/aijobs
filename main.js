const safeJobs = [
    "farmer",
    "nurse",
    "teacher",
    "artist",
    "therapist",
    "social worker",
    "ceo",
    "dentist",
    "plumber",
    "electrician",
    "chef",
    "personal trainer",
    "musician",
    "actor",
    "priest",
    "yoga instructor",
    "hair stylist",
    "massage therapist",
    "firefighter",
    "police officer",
    "human being",
];


const exampleJobs = [
    "web developer","nurse", "web designer", "human being", 
];

// DOM elements
const jobInput = document.getElementById('jobInput');
const checkButton = document.getElementById('checkButton');
const resultDiv = document.getElementById('result');
const jobExamplesDiv = document.getElementById('jobExamples');

// Initialize example jobs
exampleJobs.forEach(job => {
    const jobTag = document.createElement('div');
    jobTag.className = 'job-tag';
    jobTag.textContent = job;
    jobTag.addEventListener('click', () => {
        jobInput.value = job;
        checkJob();
    });
    jobExamplesDiv.appendChild(jobTag);
});

// Check job function
function checkJob() {
    const job = jobInput.value.trim().toLowerCase();
    
    if (!job) {
        resultDiv.textContent = "Please enter a job title";
        resultDiv.className = "result unknown";
        return;
    }
    
    // Check if job is in our safe jobs list
    if (safeJobs.includes(job)) {
        resultDiv.textContent = "NO! Your job is probably safe 😊";
        resultDiv.className = "result no";
    } else {
        // All other jobs get a YES response
        resultDiv.textContent = "YES! You're cooked! 😁";
        resultDiv.className = "result yes";
    }
}

// Event listeners
checkButton.addEventListener('click', checkJob);

jobInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkJob();
    }
});