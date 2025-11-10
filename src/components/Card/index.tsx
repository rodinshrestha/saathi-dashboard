import React from "react";

import { MoveRight } from "lucide-react";
import Link from "next/link";

import PreventionIcon from "@/assets/svg/PreventionIcon";

import Typography from "../Typography";

import { StyledDiv } from "./style";

const Card = () => {
  return (
    <StyledDiv className="card-wrapper">
      <div className="card-icon-wrapper">
        <div className="icon-wrapper">
          <PreventionIcon />
        </div>

        <div className="card-icon-info">1 multi step form</div>
      </div>
      <div className="card-title-wrapper">
        <Typography as="h3" className="card-title">
          Prevention
        </Typography>
        <Typography as="p" className="card-sub-title">
          Community awareness and prevention programs
        </Typography>
      </div>

      <div className="card-feature-wrapper">
        <Typography as="p" className="card-feature-title">
          Features
        </Typography>
        <ul className="card-feature-list">
          <li>Community Awareness Workshops</li>
          <li>Training & Capacity Building</li>
          <li>Event & Participant Management</li>
          <li>Multi-level Geographic Tracking</li>
        </ul>
      </div>

      <div className="card-feature-btn-wrapper">
        <Link href="#">
          <span>Start Data Entry</span>
          <MoveRight size={18} />
        </Link>
      </div>
    </StyledDiv>
  );
};

export default Card;
