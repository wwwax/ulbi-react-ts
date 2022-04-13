import { FC, ReactNode } from "react";

interface BtnProps {
  bg: string;
  children: ReactNode;
  onClick: (num: number) => void;
}

const Btn: FC<BtnProps> = ({ bg, children, onClick }) => {
  return (
    <button
      className="border-0 p-5 text-white"
      style={{ backgroundColor: bg }}
      onClick={() => onClick(10)}
    >
      {children}
    </button>
  )
};

export default Btn;
