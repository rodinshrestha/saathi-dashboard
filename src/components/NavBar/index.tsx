"use client";
import React from "react";

import clsx from "clsx";
import { ArrowLeftFromLine, ArrowRightFromLine, LogOut } from "lucide-react";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

import { getNavUrlPath } from "@/utils/get-nav-path";

import Button from "../Button";
import Tooltip from "../Tooltip";

import { navData } from "./data";
import { StyledNavBar } from "./style";

const Navbar = () => {
  const [isExpand, setIsExpland] = React.useState(true);
  const segments = useSelectedLayoutSegments();

  return (
    <StyledNavBar className={clsx("navbar-wrapper", { expanded: isExpand })}>
      <div
        className="navbar-expand-icon-wrapper"
        onClick={() => setIsExpland((prev) => !prev)}
      >
        {isExpand ? (
          <ArrowLeftFromLine size={16} />
        ) : (
          <ArrowRightFromLine size={16} />
        )}
      </div>
      <div className="navbar-header">Icon</div>

      <div className="navbar-list-wrapper">
        <div className="navbar-top-wrapper">
          {navData.map(({ icon: Icon, ...item }) => {
            const isActive = segments.toString() === item.slug;
            return (
              <Link
                className={clsx("nav-item", { active: isActive })}
                key={item.id}
                href={getNavUrlPath(item.slug)}
                prefetch
              >
                <Icon
                  active={isActive}
                  tooltipId={!isExpand ? item.label : ""}
                />
                <span className="nav-item-label">{item.label}</span>
                <Tooltip id={item.label} content={item.label} />
              </Link>
            );
          })}
        </div>
        <div className="navbar-bottom-wrapper">
          <Button variant="outline" size="full-width" className="navbar-button">
            <LogOut size={16} />
            {isExpand && "Logout"}
          </Button>
        </div>
      </div>
    </StyledNavBar>
  );
};

export default Navbar;
