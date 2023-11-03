import React, { useState, useContext } from 'react';
import classes from './Header.module.scss';
import Button from './ui/Button';
import CountContext from '../store/count-context';

function Header({
  category,
  onCategory,
  isVisible,
  onBuzz,
  reportData,
  onBestPractice,
  isActiveBestPractice,
}) {
  const [isActive, setIsActive] = useState('Violations');
  const countCtx = useContext(CountContext);

  if (isVisible) {
    const keys = Object.keys(reportData);
    for (const key of keys) {
      const value = reportData[key];
      if (Array.isArray(value)) {
        if (key === 'incomplete') {
          const nodeCount = value.map((item) => item.nodes.length);
          const totalCount = nodeCount.reduce((acc, curr) => acc + curr, 0);
          countCtx.incomplete =
            totalCount -
            reportData.incomplete.filter((item) =>
              item.tags.includes('best-practice')
            ).length;
          if (isActiveBestPractice && category === 'incomplete') {
            countCtx.incomplete = totalCount;
            countCtx.bestPractice = reportData.incomplete.filter((item) =>
              item.tags.includes('best-practice')
            ).length;
          } else if (key === 'incomplete') {
            countCtx.bestPractice = 0;
          }
        } else if (key === 'passes') {
          const nodeCount = value.map((item) => item.nodes.length);
          const totalCount = nodeCount.reduce((acc, curr) => acc + curr, 0);
          countCtx.passes =
            totalCount -
            reportData.passes.filter((item) =>
              item.tags.includes('best-practice')
            ).length;
          if (isActiveBestPractice && category === 'passes') {
            countCtx.passes = totalCount;
            countCtx.bestPractice = reportData.passes.filter((item) =>
              item.tags.includes('best-practice')
            ).length;
          } else if (key === 'passes') {
            countCtx.bestPractice = 0;
          }
        } else if (key === 'violations') {
          const nodeCount = value.map((item) => item.nodes.length);
          const totalCount = nodeCount.reduce((acc, curr) => acc + curr, 0);
          countCtx.violations =
            totalCount -
            reportData.violations.filter((item) =>
              item.tags.includes('best-practice')
            ).length;
          if (isActiveBestPractice && category === 'violations') {
            countCtx.violations = totalCount;
            countCtx.bestPractice = reportData.violations.filter((item) =>
              item.tags.includes('best-practice')
            ).length;
          } else if (category === 'violations') {
            countCtx.bestPractice = 0;
          }
        } else if (key === 'inapplicable') {
          const nodeCount = value.length;
          countCtx.inapplicable = reportData.inapplicable.filter(
            (item) => !item.tags.includes('best-practice')
          ).length;
          if (isActiveBestPractice && category === 'inapplicable') {
            countCtx.inapplicable = nodeCount;
            countCtx.bestPractice = reportData.inapplicable.filter((item) =>
              item.tags.includes('best-practice')
            ).length;
          } else if (category === 'inapplicable') {
            countCtx.bestPractice = 0;
          }
        } else if (key === 'allIssues') {
          const nodeCount = value.length;
          countCtx.incomplete = 0;
          countCtx.passes = 0;
          countCtx.inapplicable = 0;
          countCtx.violations =
            nodeCount - reportData.issueSummary.bestPractices;
          if (isActiveBestPractice) {
            countCtx.violations = nodeCount;
            countCtx.bestPractice = reportData.issueSummary.bestPractices;
          } else {
            countCtx.bestPractice = 0;
          }
        }
      }
    }
  }

  const handleCategory = (e) => {
    if (reportData.length === 0) {
      onBuzz();
    }

    if (reportData.passes || reportData.allIssues) {
      setIsActive(e.target.textContent);
      onCategory(e.target.textContent.toLowerCase());
    }
    window.scrollTo({ top: 0 });
  };

  const handleFilterBestPractice = () => {
    onBestPractice((prev) => !prev);
  };

  return (
    <div className={classes.header}>
      <div className={classes.nav}>
        <div className={classes.buttonWrapp}>
          <Button
            onClick={handleCategory}
            className={
              isActive === 'Incomplete' && isVisible
                ? classes.button
                : undefined
            }
          >
            Incomplete
          </Button>
          {(reportData.incomplete || reportData.allIssues) && (
            <div className={classes.itemNoWrapp}>
              <p className={classes.itemsNo}>{countCtx.incomplete}</p>
            </div>
          )}
        </div>
        <div className={classes.buttonWrapp}>
          <Button
            onClick={handleCategory}
            className={
              isActive === 'Passes' && isVisible ? classes.button : undefined
            }
          >
            Passes
          </Button>
          {(reportData.passes || reportData.allIssues) && (
            <div className={classes.itemNoWrapp}>
              <p className={classes.itemsNo}>{countCtx.passes}</p>
            </div>
          )}
        </div>
        <div className={classes.buttonWrapp}>
          <Button
            onClick={handleCategory}
            className={
              isActive === 'Violations' && isVisible
                ? classes.button
                : undefined
            }
          >
            Violations
          </Button>
          {(reportData.violations || reportData.allIssues) && (
            <div className={classes.itemNoWrapp}>
              <p className={classes.itemsNo}>{countCtx.violations}</p>
            </div>
          )}
        </div>
        <div className={classes.buttonWrapp}>
          <Button
            onClick={handleCategory}
            className={
              isActive === 'Inapplicable' && isVisible
                ? classes.button
                : undefined
            }
          >
            Inapplicable
          </Button>
          {(reportData.inapplicable || reportData.allIssues) && (
            <div className={classes.itemNoWrapp}>
              <p className={classes.itemsNo}>{countCtx.inapplicable}</p>
            </div>
          )}
        </div>
        <div className={classes.buttonWrapp}>
          <Button
            onClick={handleFilterBestPractice}
            className={
              (isActive === 'Violations' ||
                isActive === 'Incomplete' ||
                isActive === 'Passes' ||
                isActive === 'Inapplicable') &&
              isVisible &&
              isActiveBestPractice
                ? classes.button
                : undefined
            }
          >
            Best Practice Included
          </Button>
          {(reportData.incomplete || reportData.allIssues) && (
            <div className={classes.itemNoWrapp}>
              <p className={classes.itemsNo}>{countCtx.bestPractice}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
