import React, { useState, useContext } from 'react';
import classes from './Header.module.scss';
import Button from './ui/Button';
import CountContext from '../store/count-context';
import logo from '../assets/logo/hd-logo-white.svg';

function Header({ onCategory, isVisible, onBuzz, reportData }) {
  const [isActive, setIsActive] = useState('');
  const countCtx = useContext(CountContext);

  if (isVisible) {
    const keys = Object.keys(reportData);
    for (const key of keys) {
      const value = reportData[key];
      if (Array.isArray(value)) {
        if (key === 'incomplete') {
          const nodeCount = value.map((item) => item.nodes.length);
          const totalCount = nodeCount.reduce((acc, curr) => acc + curr, 0);
          countCtx.incomplete = totalCount;
        } else if (key === 'passes') {
          const nodeCount = value.map((item) => item.nodes.length);
          const totalCount = nodeCount.reduce((acc, curr) => acc + curr, 0);
          countCtx.passes = totalCount;
        } else if (key === 'violations') {
          const nodeCount = value.map((item) => item.nodes.length);
          const totalCount = nodeCount.reduce((acc, curr) => acc + curr, 0);
          countCtx.violations = totalCount;
        } else if (key === 'inapplicable') {
          const nodeCount = value.length;
          countCtx.inapplicable = nodeCount;
        }
      }
    }
  }

  const handleCategory = (e) => {
    onBuzz();
    if (reportData.passes) {
      setIsActive(e.target.textContent);
      onCategory(e.target.textContent.toLowerCase());
    }
    window.scrollTo({ top: 0 });
  };

  return (
    <div className={classes.header}>
      <div>
        <img
          className={classes.logo}
          src={logo}
          alt="logo"
        />
      </div>
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
          {reportData.incomplete && (
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
          {reportData.passes && (
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
          {reportData.violations && (
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
          {reportData.inapplicable && (
            <div className={classes.itemNoWrapp}>
              <p className={classes.itemsNo}>{countCtx.inapplicable}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
