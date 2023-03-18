import React from "react";

import TableItem from "./TableItem";
import styles from "./Projects.module.css";

const ProjectsTable = ({ projectList }) => {
    const tableItems = projectList.map((item) => <TableItem key={item.id} project={item} />);
    return <div className={styles.table}>{tableItems}</div>;
};

export default ProjectsTable;