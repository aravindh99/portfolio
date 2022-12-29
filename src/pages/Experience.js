import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2016"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bharathi matric hr sec school, perundurai, Erode 638056
          </h3>
          <p> High School </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2019 - August 2019"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Intern softie at Rheinbrucke It consulting
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Chennai
          </h4>
          <p>Developed a small portion of company's live project.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016- 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Coimbatore institue of technology, Tamilnadu
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Master's Degree
          </h4>

          <p> Software systems</p>
        </VerticalTimelineElement>
       

     
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
