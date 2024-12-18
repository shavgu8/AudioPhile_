import React, { ReactNode, useEffect } from "react";

import classname from './modal.module.scss'
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={classname["modal-overlay"]} onClick={onClose}>
      <div className={classname["modal-content"]} onClick={(e) => e.stopPropagation()}>
        {title && <h2 className={classname["modal-title"]}>{title}</h2>}
        <div className={classname["modal-body"]}>{children}</div>
        <button className={classname["modal-close"]} onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
