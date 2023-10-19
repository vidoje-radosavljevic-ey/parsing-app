import React, { useContext } from "react";
import classes from "./ReportList.module.scss";
import ReportItem from "./ReportItem";
import CountContext from "../store/count-context";

function ReportList({ reportData, category, isVisible }) {
  const countCtx = useContext(CountContext);
  const date = new Date(reportData.timestamp);

  if (isVisible) {
    const keys = Object.keys(reportData);
    for (const key of keys) {
      const value = reportData[key];
      if (Array.isArray(value)) {
        if (key === "incomplete") {
          const nodeCount = value.map((item) => item.nodes.length);
          const totalCount = nodeCount.reduce((acc, curr) => acc + curr, 0);
          countCtx.incomplete = totalCount;
        } else if (key === "passes") {
          const nodeCount = value.map((item) => item.nodes.length);
          const totalCount = nodeCount.reduce((acc, curr) => acc + curr, 0);
          countCtx.passes = totalCount;
        } else if (key === "violations") {
          const nodeCount = value.map((item) => item.nodes.length);
          const totalCount = nodeCount.reduce((acc, curr) => acc + curr, 0);
          countCtx.violations = totalCount;
        } else if (key === "inapplicable") {
          const nodeCount = value.length;
          // const totalCount = nodeCount.reduce((acc, curr) => acc + curr, 0);
          countCtx.inapplicable = nodeCount;
        }
      }
    }
  }

  return (
    category !== "" &&
    isVisible && (
      <div className={classes["report-list"]}>
        <p>Timestamp: {` ${date}`}</p>
        <div className={classes.headline}>
          <h2>{category.toUpperCase()}</h2>

          {category === "incomplete" ? (
            <h2>({countCtx.incomplete} items)</h2>
          ) : category === "passes" ? (
            <h2>({countCtx.passes} items)</h2>
          ) : category === "violations" ? (
            <h2>({countCtx.violations} items)</h2>
          ) : (
            <h2>({countCtx.inapplicable} items)</h2>
          )}
        </div>
        <ReportItem reportData={reportData[category]} category={category} />
      </div>
    )
  );
}

export default ReportList;
