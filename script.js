document.addEventListener('DOMContentLoaded', function() {
    console.log("수업 지도안 페이지가 로드되었습니다!");

    // Optional: Add some interactive elements if desired.
    // For example, a simple click event for emphasis.

    const lessonDates = document.querySelectorAll('.lesson-date');
    lessonDates.forEach(date => {
        date.addEventListener('click', function() {
            alert(`"${this.textContent}" 내용을 자세히 살펴볼까요?`);
        });
    });

    // You could expand this to include:
    // - Dynamic content loading (e.g., loading different lesson parts)
    // - Simple animations or transitions
    // - Form validation if you add input fields
    // - Progress tracking for students (more complex)
});