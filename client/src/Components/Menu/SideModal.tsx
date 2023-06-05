'use client';

import React, { useCallback, useEffect, useState } from "react";
import { IoMdClose } from 'react-icons/io';

interface SideModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const SideModal: React.FC<SideModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  actionLabel,
  footer,
  disabled,
  secondaryAction,
  secondaryActionLabel
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300)
  }, [onClose, disabled]);


  if (!isOpen) {
    return null;
  }

  return (
    <div className='overflow-x-auto fixed w-full h-full inset-0 z-50 bg-neutral-800/70'>
      <div className="flex justify-end h-[100vh] overflow-x-s overflow-x-scroll ">
        <div className="w-full sm:w-[40%] md:w-[40%] sm:my-0 md:my-0 mr-[0%] sm:mr-[0%] md:mr-[0%] h-full"> 
          {/* CONTENT */}
          <div className={`translate scale-[1] duration-300 h-full p-[5%] ${showModal ? 'translate-x-0 scale-100 opacity-100' : 'translate-x-full scale-0 opacity-0'}`}>
            <div className="overflow-x-scroll translate h-full border-0 relative flex flex-col w-full bg-[#f8f8f8] dark:bg-[#222] outline-none focus:outline-none rounded-[10px]">
              {/* HEADER */}
              <div className="flex items-center p-6 rounded-t justify-center relative">
                <button onClick={handleClose} className="p-1 border-0 hover:opacity-70 transition absolute left-9 top-9 bg-[#222] rounded-full z-[999]"> 
                  <IoMdClose size={30} color="#f8f8f8"/>
                </button>
                <div className="text-lg font-semibold">
                  {title}
                </div>
              </div>
              {/* BODY */}
              <div className="relative p-6 flex-auto">
                {body}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideModal;
