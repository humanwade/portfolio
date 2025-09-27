// Education.jsx
// This component renders the "Education" page.
// It displays a timeline of my academic and training journey toward becoming a professional software engineer.
// Each timeline item includes dates, institution, program details, and highlights.

import "./Education.css";

function Education() {
  return (
    <div className="education-page">
      {/* Page Title */}
      <h1 className="title">MY JOURNEY</h1>

      {/* Career Goal Section */}
      <div className="timeline-goal">
        <div className="goal-icon">🎯</div>
        <div className="goal-text">Professional Software Engineer</div>
      </div>

      {/* Timeline Section */}
      <div className="timeline">

        {/* Timeline Item 1: Current Program */}
        <div className="timeline-item">
          <div className="timeline-date">2024.09 - Present</div>
          <div className="timeline-content">
            <h3>
              Centennial College, Toronto <br />
              <span>Software Engineering Technology (Co-op), Advanced Diploma</span>
            </h3>
            <p>
              <strong>Course Highlights:</strong> C#, Java, React, HTML5, CSS, JavaScript, DB, SQL, Unix
            </p>
          </div>
        </div>

        {/* Timeline Item 2: Java Developer Bootcamp */}
        <div className="timeline-item">
          <div className="timeline-date">2024.02 - 2024.08</div>
          <div className="timeline-content">
            <h3>
              Korea ICT HRD Institute <br />
              <span>Full-Stack Java Developer Program</span>
            </h3>
            <p><strong>Focus:</strong> Data Processing</p>
            <p>
              <em>Project: “Calorie Cut!”</em> — Built a full-stack health app using Java, React, and Python;
              trained CNN models to analyze food images and generate nutrition feedback.
            </p>
          </div>
        </div>

        {/* Timeline Item 3: Technical Training */}
        <div className="timeline-item">
          <div className="timeline-date">2024</div>
          <div className="timeline-content">
            <h3>Ministry of Employment and Labor</h3>
            <p>Technical Training (SQL)</p>
          </div>
        </div>

        {/* Timeline Item 4: Bachelor’s Degree */}
        <div className="timeline-item">
          <div className="timeline-date">2008.03 - 2019.08</div>
          <div className="timeline-content">
            <h3>
              Wonkwang University, South Korea <br />
              <span>B.Sc. in Life Sciences</span>
            </h3>
            <p>Double Major: Pet Animal & Plant Science, Biological Science</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Education;
