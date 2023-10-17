import React from 'react';
import classes from './ReportList.module.scss';
import ReportItem from './ReportItem';

function ReportList({ reportData, category }) {
  return (
    category !== '' && (
      <div className={classes['report-list']}>
        <div className={classes.headline}>
          <h2>{category.toUpperCase()}</h2>
        </div>
        <ReportItem
          reportData={reportData[category]}
          category={category}
        />
      </div>
    )
  );
}

export default ReportList;
