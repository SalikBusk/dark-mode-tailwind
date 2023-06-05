"use client";
import { useCallback } from "react";
import { Link } from "react-router-dom";
import useHamburgerSidebar from "../../Hooks/useHamburgerSidebar";
import SideModal from "./SideModal";

const Hamburgersidebar = () => {
  const Hamburgersidebar = useHamburgerSidebar();

  const onToggle = useCallback(() => {
    Hamburgersidebar.onClose();
  }, [Hamburgersidebar]);

  const LinkStyle = `px-3 py-3 flex flex-row items-center gap-2 cursor-pointer font-[400] text-[36px] text-[#222] dark:text-[#f8f8f8]`;

  const bodyContent = (
    <div className="flex flex-col justify-end items-end">
      <Link className={LinkStyle} to={"/"} onClick={onToggle}>
        Home
      </Link>
      <Link className={LinkStyle} to={"/about"} onClick={onToggle}>
        About
      </Link>
      <Link className={LinkStyle} to={"/hunts"} onClick={onToggle}>
        Hunts
      </Link>
      <Link className={LinkStyle} to={"/hunts"} onClick={onToggle}>
        Contact US
      </Link>
    </div>
  );
  return (
    <SideModal
      isOpen={Hamburgersidebar.isOpen}
      title=""
      onClose={Hamburgersidebar.onClose}
      actionLabel=""
      onSubmit={() => {}}
      body={bodyContent}
    />
  );
};

export default Hamburgersidebar;
