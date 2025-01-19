import "./cssFile/level.css";

const AdvancedLevel = () => {
  const advancedCourses = [
    { title: "Data Science", details: ["Germany", "English"] },
    { title: "AI & Machine Learning", details: ["Italy", "English"] },
    { title: "Cloud Computing", details: ["Germany", "English"] },
    { title: "DevOps", details: ["Italy", "English"] },
  ];

  return (
    <div className="level-container">
      <h2>المستوى المتقدم</h2>
      <div className="courses-grid">
        {advancedCourses.map((course, index) => (
          <div key={index} className="course-card">
            <h3>{course.title}</h3>
            <ul>
              {course.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvancedLevel;
