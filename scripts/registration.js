function dropCourse(i) {
    var allCourses = JSON.parse(localStorage.getItem("allCourses") || "[]");
    allCourses.splice(i, 1);
    localStorage.setItem('allCourses', JSON.stringify(allCourses));

    const table = document.querySelector("#course_table");
    table.deleteRow(i+1);
}

function viewCourses() {
    const table = document.querySelector("#course_table");

    if (localStorage.getItem('allCourses') != null) {
        var allCourses = JSON.parse(localStorage.getItem("allCourses") || "[]");

        for (var i = 0; i < allCourses.length; i++) {
            let row = table.insertRow(-1);

            let c1 = row.insertCell(0);
            let c2 = row.insertCell(1);
            let c3 = row.insertCell(2);

            c1.innerText = allCourses[i].course_name;
            c2.innerText = allCourses[i].course_type;
            c3.innerHTML = "<button onclick='dropCourse(" + i + ")' class='delete'>Drop Course</button>";
        }
    }
}

window.addEventListener("load", () => {
    viewCourses();
});