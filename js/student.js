fetch('/data/students.json')
.then(response => response.json())
.then(data => {
    // Sort cohorts in descending order
    data.cohorts.sort((a, b) => b.students[0].year - a.students[0].year);
    populateTable(data.cohorts);
})
.catch(error => console.error('Error fetching data:', error));

// Function to populate table
function populateTable(cohorts) {
var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];

// Loop through cohorts
cohorts.forEach(function(cohort) {
    // Loop through students in each cohort
    cohort.students.forEach(function(student) {
        var row = table.insertRow();
        row.insertCell(0).textContent = student.first_name;
        row.insertCell(1).textContent = student.last_name;
        row.insertCell(2).textContent = student.course_title;
        row.insertCell(3).textContent = cohort.cohort_code;
        row.insertCell(4).textContent = student.course_delivery_type;
        row.insertCell(5).textContent = student.cohort_session; // Add cohort session
        row.insertCell(6).textContent = student.year; // Add year/session
    });
});
}

// Search function
document.getElementById("myInput").addEventListener("keyup", function() {
var input, filter, table, tr, td, i, txtValue;
input = document.getElementById("myInput");
filter = input.value.toUpperCase();
table = document.getElementById("myTable");
tr = table.getElementsByTagName("tr");

// Loop through all table rows, and hide those who don't match the search query
for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td");
    for (var j = 0; j < td.length; j++) {
        if (td[j]) {
            txtValue = td[j].textContent || td[j].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
                break;
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
});

// Filter function by session
document.getElementById("sessionFilter").addEventListener("change", function() {
var filter, table, tr, td, i, txtValue;
filter = document.getElementById("sessionFilter").value;
table = document.getElementById("myTable");
tr = table.getElementsByTagName("tr");

// Loop through all table rows, and hide those who don't match the filter
for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[6]; // index 6 is the session column
    if (td) {
        txtValue = td.textContent || td.innerText;
        if (filter === "" || txtValue === filter) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}
});