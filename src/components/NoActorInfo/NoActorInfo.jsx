import css from "./NoActorInfo.module.css";
import clsx from "clsx";

const NoActorInfo = ({ element }) => {
  const styles = clsx(element === "name" && css.actorName);

  return <p className={styles}>No {element} info</p>;
};

export default NoActorInfo;
