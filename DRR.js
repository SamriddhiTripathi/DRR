document.addEventListener("DOMContentLoaded", function() {
    const startDate = document.getElementById("startDate");
    const endDate = document.getElementById("endDate");
    const excludedDates = []; // To store excluded dates
    const numOfLeads = document.getElementById("numOfLeads");
    const numOfDays = document.getElementById("numOfDays");
    const expectedLeadCount = document.getElementById("expectedLeadCount");
    const saveButton = document.getElementById("saveButton");
    const messageBox = document.getElementById("messageBox");
    const Month = document.getElementById("Month");
    const cancelButton = document.getElementById("cancelButton");
    // Event listener for Save button
    saveButton.addEventListener("click", function() {
        // Perform AJAX data submission here
        // You can use the Fetch API or XMLHttpRequest
        let dateObj = new Date();
let month = String(dateObj.getMonth() + 1)
	.padStart(2, '0');
let day = String(dateObj.getDate())
	.padStart(2, '0');
let year = dateObj.getFullYear();
let output = day + '/' + month + '/' + year;
console.log(output);
    });
    cancelButton.addEventListener("click", function() {
        // Perform AJAX data submission here
        // You can use the Fetch API or XMLHttpRequest
    });
    startDate.addEventListener("input", function() {
        const selectedDate = new Date(startDate.value);
        updateNumOfDaysAndLeadCount();
    });
    endDate.addEventListener("input", function() {
        updateNumOfDaysAndLeadCount();
    });
    function updateNumOfDaysAndLeadCount() {
        numOfDays.innerText = numberOfDays;
        expectedLeadCount.innerText = expectedCount;
    }
    Month.addEventListener("input", function() {
        const selectedDate = new Date(Month.value);
        updateNumOfMonthsAndLeadCount();
    });
    function updateNumOfMonthsAndLeadCount() {
        numOfMonths.innerText = numberOfMonths;
        expectedLeadCount.innerText = expectedCount;
    }
});
