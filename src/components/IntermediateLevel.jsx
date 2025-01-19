import "./cssFile/level.css";
import IntermediateCourses from "../IntermediateCourses.json";
const IntermediateLevel = () => {
  // const intermediateCourses = [
  //   { title: "Back-end Developing", details: ["Germany", "English"] },
  //   { title: "Graphic Design", details: ["Italy", "English"] },
  //   { title: "Cyber Security", details: ["Germany", "English"] },
  //   { title: "Voice Over", details: ["Italy", "English"] },
  // ];

  return (
    <div className="level-container">
      <h2>المستوى المتوسط</h2>
      <div className="courses-grid">
        {IntermediateCourses.map((course, index) => (
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

export default IntermediateLevel;
