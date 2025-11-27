"use client";
import React from "react";

import clsx from "clsx";
import { LockKeyhole, LockKeyholeOpen, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Button from "../Button";
import ImageWithFallback from "../ImageWithFallback";
import LogoutModal from "../LogoutModal";

import { navData } from "./data";
import { StyledNavBar } from "./style";

const Navbar = () => {
  const [isExpand, setIsExpland] = React.useState(true);
  const [isExpandLock, setIsExpandLock] = React.useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = React.useState(false);
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const handleOnMouseEnter = () => {
    if (isExpandLock) return;
    setIsExpland(true);
  };

  const handleOnMouseLeave = () => {
    if (isExpandLock) return;
    setIsExpland(false);
  };

  return (
    <StyledNavBar
      className={clsx("navbar-wrapper", { expanded: isExpand })}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <div className="navbar-header">
        <div className="navbar-logo-wrapper">
          {isExpand ? (
            <ImageWithFallback
              src="/images/new-logo.png"
              alt="logo"
              key="new-logo"
              fill
            />
          ) : (
            <ImageWithFallback
              src="/images/mini-logo.png"
              alt="logo"
              key="mini-logo"
              fill
            />
          )}
        </div>
        {isExpand && (
          <div className="icon-lock-wrapper">
            {isExpandLock ? (
              <LockKeyhole onClick={() => setIsExpandLock(false)} />
            ) : (
              <LockKeyholeOpen onClick={() => setIsExpandLock(true)} />
            )}
          </div>
        )}
      </div>

      <div className="navbar-list-wrapper">
        <div className="navbar-top-wrapper">
          {navData.map(({ icon: Icon, ...item }) => {
            // hardfix
            const isActive =
              segments.length === 0
                ? item.slug === "/"
                : segments.some((x) => x === item.slug);
            return (
              <Link
                className={clsx("nav-item", { active: isActive })}
                key={item.id}
                href={`/${item.slug}`}
                prefetch
              >
                <Icon active={isActive} />
                <span className="nav-item-label">{item.label}</span>
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
