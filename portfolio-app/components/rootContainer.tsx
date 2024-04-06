import React from "react";
import styles from "@/styles/containers.module.css";

function RootContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className={`container-root ${styles.root_container}`}>{children}</div>
  );
}

export default RootContainer;
