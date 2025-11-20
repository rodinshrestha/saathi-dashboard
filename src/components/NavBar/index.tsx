"use client";
import React from "react";

import clsx from "clsx";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

import { getNavUrlPath } from "@/utils/get-nav-path";

import Button from "../Button";
import ImageWithFallback from "../ImageWithFallback";
import LogoutModal from "../LogoutModal";
import Tooltip from "../Tooltip";

import { navData } from "./data";
import { StyledNavBar } from "./style";

const Navbar = () => {
  const [isExpand, setIsExpland] = React.useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = React.useState(false);
  const segments = useSelectedLayoutSegments();

  return (
    <StyledNavBar
      className={clsx("navbar-wrapper", { expanded: isExpand })}
      onMouseEnter={() => setIsExpland(true)}
      onMouseLeave={() => setIsExpland(false)}
    >
      <div className="navbar-header">
        <div className="navbar-logo-wrapper">
          <ImageWithFallback src="/images/logo.jpg" alt="logo" fill />
        </div>
      </div>

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
          <Button
            variant="outline"
            size="full-width"
            className="navbar-button"
            onClick={() => setIsLogoutModalOpen(true)}
          >
            <LogOut size={16} />
            {isExpand && "Logout"}
          </Button>
        </div>
      </div>

      <LogoutModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
      />
    </StyledNavBar>
  );
};

export default Navbar;
