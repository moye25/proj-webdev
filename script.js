function openBox(name, code, credits, description, imageUrl) {
    // Pre-fill course details
    document.getElementById('editCourseName').value = name;
    document.getElementById('editCourseCode').value = code;
    document.getElementById('editCredits').value = credits;
    document.getElementById('editDescription').value = description;
    document.getElementById('editImageUrl').value = imageUrl;
  
    // Show edit course box
    document.getElementById('courseBox').style.display = 'flex';
  }
  
  function openAddCourseBox() {
    // Reset the form
    document.getElementById('addCourseForm').reset();
  
    // Show add course box
    document.getElementById('addCourseBox').style.display = 'flex';
  }
  
  function closeBox() {
    
    document.getElementById('courseBox').style.display = 'none';
    document.getElementById('addCourseBox').style.display = 'none';
  }
  
  function updateCourse() {
    alert('Course updated successfully!');
    closeBox();
  }
  
  function deleteCourse() {
    const confirmation = confirm('Are you sure you want to delete this course?');
    if (confirmation) {
      alert('Course deleted successfully!');
      closeBox();
    }
  }
  
  function submitNewCourse() {
    alert('New course added successfully!');
    closeBox();
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    // Ensure the modal is hidden on page load
    document.getElementById('addCourseBox').style.display = 'none';
  
    // Add functionality to show the modal when the "Add Course" button is clicked
    document.querySelector('.add-course-btn').addEventListener('click', () => {
      document.getElementById('addCourseBox').style.display = 'flex';
    });
  
    // Add functionality to hide the modal when the close button is clicked
    document.querySelector('.close').addEventListener('click', () => {
      document.getElementById('addCourseBox').style.display = 'none';
    });
  });

  document.getElementById('login-btn').addEventListener('click', function () {
    console.log('Login button clicked'); // Debug log
    window.location.href = "login.html";
});
  