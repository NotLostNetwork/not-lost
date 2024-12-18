import { Link } from "@tanstack/react-router"
import SearchIcon from "~/shared/assets/icons/search-icon.svg?react"
import GraphIcon from '~/shared/assets/icons/graph-icon.svg?react';
import React from "react"
import { getCssVariableValue } from "~/shared/lib/utils/funcs/get-css-variable-value"
import { Route as GraphRoute } from "~/routes/app/_tab-bar/graph"
import { Route as ContactsRoute } from "~/routes/app/_tab-bar/contacts"

export default function BottomBar() {
  return (
    <div className="bg-primary border-t-[1px] border-primary">
      <div className="max-w-screen-xl mx-auto px-4 py-2">
        <div className="flex justify-around items-center">
          <BottomBarLink to={GraphRoute.to} title="Graph" Icon={GraphIcon} />
          <BottomBarLink
            to={ContactsRoute.to}
            title="Contacts"
            Icon={SearchIcon}
          />
        </div>
      </div>
    </div>
  )
}

interface BottomBarLinkProps {
  to: string
  title: string
  Icon: React.FC
}

const BottomBarLink: React.FC<BottomBarLinkProps> = ({ to, title, Icon }) => {
  return (
    <Link
      to={to}
      className="w-full text-[12px] flex flex-col items-center gap-0.5"
    >
      {({ isActive }) => (
        <>
          <div
            className={`h-8 w-8 rounded-full transition-all duration-150 ease-in-out ${isActive ? "bg-buttonBezeled" : "bg-transparent "}`}
          > 
            <div style={{color: isActive ? getCssVariableValue("--tg-theme-accent-text-color") : "white", padding: isActive ? 6 : 4}} className="transition-all duration-150 ease-in-out">
              <Icon/>
            </div>
          </div>
          <span
            className={`font-medium transition-all duration-150 ease-in-out capitalize ${isActive && "px-2 rounded-2xl text-accent"}`}
          >
            {title}
          </span>
        </>
      )}
    </Link>
  )
}
