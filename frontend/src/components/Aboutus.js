import React from "react";
import "../css/Aboutus.css";
import TeamMemberCard from "./TeamMemberCard";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header id="page-header" className="about-header">
        <h1>Explore</h1>
        <h2>Every Corner in CHOUF</h2>
      </header>

      <div className="hero-section">
        <section className="mission-section">
          <h2>Our Mission</h2>
          <div className="mission-content">
            <div className="text-container">
              <p>
                At Aller Retour, we are passionate about helping people explore
                Chouf.
              </p>
              <p>
                Our mission is to make travel in our beloved Chouf accessible
                and enjoyable for everyone.
              </p>
              <p>
                Our goal is to help more people from more backgrounds experience
                the joy of exploration in CHOUF.
              </p>
              <p>
                We believe that travel is for everyone. It helps us learn about
                ourselves and the world around us.
              </p>
            </div>
            <div className="image-container">
              <img
                src="https://www.lebanontraveler.com/wp-content/uploads/2023/07/Shouf-Lebanon-Traveler-37-scaled.jpg"
                alt="ChoufImage"
                className="animated-image"
              />
            </div>
          </div>
        </section>

        <section className="team-section">
          <h2>Our Journey: From Friends to Founders</h2>
          <div className="story-container">
            <div className="story-content">
              <p>
                Our company was born from the shared love of travel among three
                friends who first crossed paths at Park Innovation.
              </p>
              <p>
                After spending months navigating the corporate world, the
                decision was clear — to follow our hearts and create our very
                own travel company.
              </p>
              <p>
                Travel is more than a passion; it's a transformative experience
                that leaves an indelible mark on our lives. We embarked on this
                journey to help you uncover the magic of exploration, just as we
                did.
              </p>
            </div>
            <div className="team-members">
              <TeamMemberCard
                name="Silvana Kordab"
                role="Developer"
                imgSrc="path_to_image"
              />
              <TeamMemberCard
                name="Rayan Bou Ezzeddine"
                role="Developer"
                imgSrc="path_to_image"
              />
              <TeamMemberCard
                name="Lara Yehya"
                role="Developer"
                imgSrc="path_to_image"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
