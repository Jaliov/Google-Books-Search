import React from "react";

const Column = ({ base = 12, sm, md, lg, xl, children }) => {
  let columnClassName = `col-${base}`;

  if (sm) {
    columnClassName = columnClassName.concat(`col-sm-${sm}`);
  }

  if (sm) {
    columnClassName = columnClassName.concat(`col-md-${md}`);
  }

  if (sm) {
    columnClassName = columnClassName.concat(`col-lg-${lg}`);
  }

  if (sm) {
    columnClassName = columnClassName.concat (`col-xl-${xl}`);
  }

  return <div className={columnClassName}>{children}</div>;
};

export default Column;
