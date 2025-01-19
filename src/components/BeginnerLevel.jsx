import "./cssFile/level.css";
import DataJson from "../data.json";
import BeginnerCourses from "../BeginnerCourses.json";
const BeginnerLevel = () => {
  // const beginnerCourses = [
  //   { title: "Data Analysis", details: ["Germany", "English"] },
  //   { title: "Front-end Developing", details: ["Italy", "English"] },
  //   { title: "Mobile Application (Flutter)", details: ["Germany", "English"] },
  //   { title: "UI/UX Design", details: ["Italy", "English"] },
  //   { title: "3D Design", details: ["Germany", "English"] },
  //   { title: "Video Editing", details: ["Italy", "English"] },
  // ];

  return (
    <div className="level-container">
      <h2>المستوى المبتدئ</h2>
      <div className="courses-grid">
        {BeginnerCourses.map((course, index) => (
          <div key={index} className="course-card">
            <img src={require(`${course.img}`)} alt="ui basic" />
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

export default BeginnerLevel;
