import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div>
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      {/* Crime Free Bharat NGO */}
      <Jumbotron className="jumbo-style">
        <Tilt options={{ max: 5, scale: 1 }}>
          <Card>

            <Card.Body className="d-flex justify-content-center flex-column">
              <div>
                <Card.Title className="text-center">Crime Free Bharat NGO</Card.Title>
              </div>
              <div>
                <div className="text-center style">
                  <strong className="body-title-style ">
                    Frontend Developer
                  </strong>
                  <br />
                  <strong>Technology:</strong> HTML, CSS, React.js
                  <br />
                  <strong>Duration:</strong> May 2022 - June'22
                  <br />
                  <br />
                  <strong> Description </strong>
                  <ul className="text-left">
                    <li>
                    <strong>Designed</strong> some <strong>landing pages</strong>, 
                      sign-in, sign-up pages and made some <strong>dashboards</strong>.
                    </li>
                    <li>
                    <strong>Design</strong>, <strong>develop</strong>,
                    <strong>test</strong> and <strong>deploy</strong> design features in a 
                    <strong>timely manner</strong>.
                    </li>
                    <li>
                      Worked with <strong>teams</strong> to solve issues to 
                      <strong>improve efficiency</strong>.
                    </li>
                    <li>
                    <strong>Continuously</strong> tested the site for usability while 
                    <strong>addresssing any bugs</strong>.
                    </li>
                    <li>
                    <strong>Learned</strong> to apply engineering <strong>best practices</strong>.
                    </li>
                    <li>
                    <strong>Ensured</strong> that the technology implemented <strong>promotes</strong> efficiency, 
                    <strong>speed</strong> and <strong>smooth functionality</strong>.
                    </li>
                    <li>
                      Learned to maintain balance between <strong>professional life</strong> and 
                      <strong>social life</strong>.
                    </li>
                  </ul>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Tilt>
      </Jumbotron>
    </div>
  );
};

export default Experience;
