import React from "react";
import CountUp from "react-countup";
import "../styles/homecircles.css";

export default function HomeCircles  () {
  return (
    <section className="container circles bg-color">
      <div className="circle">
        <CountUp
          start={0}
          end={2000}
          delay={0}
          enableScrollSpy={true}
          scrollSpyDelay={500}
        >
          {({ countUpRef }) => (
            <div className="counter">
              <span ref={countUpRef} />+
            </div>
          )}
        </CountUp>
        <span className="circle-name">
          Satisfied
          <br />
          Patients
        </span>
      </div>
      <div className="circle">
        <CountUp
          start={0}
          end={500}
          delay={0}
          enableScrollSpy={true}
          scrollSpyDelay={500}
        >
          {({ countUpRef }) => (
            <div className="counter">
              <span ref={countUpRef} />+
            </div>
          )}
        </CountUp>
        <span className="circle-name">
          Verified
          <br />
          Doctors
        </span>
      </div>
      <div className="circle">
        <CountUp
          start={0}
          end={95}
          delay={0}
          enableScrollSpy={true}
          scrollSpyDelay={500}
        >
          {({ countUpRef }) => (
            <div className="counter">
              <span ref={countUpRef} />+
            </div>
          )}
        </CountUp>
        <span className="circle-name">
          Specialist
          <br />
          Doctors
        </span>
      </div>
    </section>
  );
};

