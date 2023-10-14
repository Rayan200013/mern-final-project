import React from "react";
import "../css/TeamMember.css";

const TeamMemberCard = ({ name, imgSrc, role }) => {
  return (
    <div className="team-member-card">
      <img src={imgSrc} alt={"/"} />
      <div className="team-member-details">
        <h3>{name}</h3>
        <p className="role">{role}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
