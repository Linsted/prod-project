import { type MouseEvent, type ReactNode, useEffect } from "react";

import classNames from "shared/lib/classNames/classNames";

import Portal from "../Portal/Portal";

import classes from "./Modal.module.scss";

type ModalProps = {
  className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
};

const Modal = ({ className, children, isOpen, onClose }: ModalProps) => {
  const modifiedClasses: Record<string, boolean> = {
    [classes.opened]: isOpen,
  };

  function handleClick(e: MouseEvent) {
    if (e.target === e.currentTarget && onClose) onClose();
  }

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && onClose) onClose();
    }

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <Portal>
      <div className={classNames(classes.modal, modifiedClasses, [className])}>
        <div className={classNames(classes.overlay, {})} onClick={handleClick}>
          <div className={classNames(classes.content)}>{children}</div>
        </div>
      </div>
    </Portal>

  );
};

export default Modal;
