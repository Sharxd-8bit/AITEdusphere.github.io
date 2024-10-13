

// script.js

document.addEventListener('DOMContentLoaded', () => {
  const courseList = document.getElementById('course-list');
  const addCourseBtn = document.getElementById('add-course-btn');

  addCourseBtn.addEventListener('click', () => {
      const courseName = prompt('Enter course name:');
      if (courseName) {
          const courseItem = document.createElement('li');
          courseItem.textContent = courseName;
          courseList.appendChild(courseItem);
      }
  });
});
// script.js (Append this to the previous script)

document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach((accordion) => {
      accordion.addEventListener('click', function () {
          this.classList.toggle('active');
          const panel = this.nextElementSibling;
          if (panel.style.display === 'block') {
              panel.style.display = 'none';
          } else {
              panel.style.display = 'block';
          }
      });
  });
});
