window.addEventListener('load', () => {
	const form = document.querySelector("#add-course-form");
	const inputCourseType = document.querySelector("#course_type");
	const inputCourseName = document.querySelector("#course_name");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

        const courseType = inputCourseType.value;
		const courseName = inputCourseName.value;

        if(localStorage.getItem('allCourses') == null) {
            var allCourses = [{
                "course_type": courseType,
                "course_name": courseName
            }];

            localStorage.setItem('allCourses', JSON.stringify(allCourses));
        }
        else {
            var allCourses = JSON.parse(localStorage.getItem("allCourses") || "[]");

            allCourses.push({
                "course_type": courseType,
                "course_name": courseName
            });

            localStorage.setItem('allCourses', JSON.stringify(allCourses));
        }

		console.log(localStorage.getItem('allCourses'));

        alert("Course added successfully.");
	});
});