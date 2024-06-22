import clsx from "clsx";
import css from "./Message.module.css";

const Message = ({ children, position, element }) => {
  const style = clsx(
    position === "middle" && css.messageInMiddle,
    element === "actorName" && css.actorName
  );

  return <p className={style}>{children}</p>;
};

export default Message;
