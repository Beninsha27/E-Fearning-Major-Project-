import React from "react";
import port from '../Assets/Images/port.jpg'

function About() {
  return (
    <div>
      <div class="overflow-hidden">
      <div class="container content-space-t-4 content-space-b-3">
        <div class="row justify-content-lg-between align-items-md-center">
        <div class="col-md-6">
            <div class="position-relative " className='body-img'>
              <img class="img-fluid rounded-2" src={port} alt="Image Description"/>
              <div class="position-absolute top-0 end-0 w-100 h-100 bg-soft-primary rounded-2 zi-n1 mt-5 me-n5"></div>
            </div>
          </div>
          <div class="col-md-6 col-lg-6 mb-7 mb-md-0">
            <div class="mb-5">
              <h6 className='h6-learn'>LEARN ANYTHING</h6>
              <h2>Benefits About Online<br/> Learning Expertise</h2>
            </div>
            
            <div className='con-bg'>
              <h4>Quality Content</h4>
              <p className='content'>Our comprehensive course, interactive modules, and engaging learning materials will captivate your attention and faster and a deep understanding
                of the subjet matter. Whether you're a student professional or lifelong learner, our e-learning platform provides a flexible and conveniant avenue foracquiring knowledge and skills.
              </p>
            </div><br/>

            <div className='con-bg'>
              <h4>Expert Instructors</h4>
              <p className='content'>Learn from industry professionals and subject matter experts who bring real world experiance and insights into their teaching.</p>
            </div><br/>

            <div className='con-bg'>
              <h4>Flexibility and Conveniance</h4>
              <p className='content'>
                Access our tutorials and exams anytime, anywhere, and at your own place. Fit your learning around your schedule and learn at your conveniance.
                Embrace the power of technology and embark on a journy of educational transformation with E-learning Excellence. Start your digital learning advanture
                today and unlock your full learning potential
              </p>
            </div><br/>

            <div className='con-bg'>
              <h4>Supportive Community</h4>
              <p className='content'>
                Join a vibrant community of learners where you can collaborate, ask questions, and seek guidance from both instructors and fellw learners.
              </p>
            </div>
          </div>
        </div>
      </div><br/>
    </div>
    </div>
  );
}

export default About;
