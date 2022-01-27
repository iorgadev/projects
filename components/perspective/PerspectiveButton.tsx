import { useState } from "react";

export interface PerspectiveButtonProps {
  text: string;
  turnY: number;
  children?: React.ReactChild;
}
export default function PerspectiveButton({
  text,
  turnY,
  children,
}: PerspectiveButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="perspective__menu__button"
      onMouseOver={() => setIsHovered((p) => true)}
      onMouseLeave={() => setIsHovered((p) => false)}
    >
      {children}
      <span>{text}</span>
      {isHovered ? (
        <>
          <div
            className="perspective__menu__button__holo"
            style={{
              transform: `rotateX(${0}deg) translateZ(30px)`,
              top: `${turnY < 0 ? -Math.abs(turnY) : -Math.abs(turnY)}px`,
              left: `${turnY < 0 ? turnY * 0.2 - 20 : turnY * 0.2 - 20}px`,
            }}
          ></div>
          <div
            className="perspective__menu__button__holo border-hacker-300"
            style={{
              transform: `rotateX(${0}deg) translateZ(50px)`,
              top: `${-Math.abs(turnY) - 5}px`,
              left: `${turnY - 20}px`,
            }}
          ></div>
        </>
      ) : null}
    </div>
  );
}
