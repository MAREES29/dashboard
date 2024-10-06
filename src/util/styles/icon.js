import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Icon(props) {
  const { className, icon } = props;

  return <FontAwesomeIcon className={className} icon={icon} />;
}
