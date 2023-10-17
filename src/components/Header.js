import React from 'react';
import classes from './Header.module.scss';
import Button from './ui/Button';

function Header({ onCategory }) {
  const handleIncomplete = (e) => {
    onCategory(e.target.textContent.toLowerCase());
    window.scrollTo({ top: 0 });
  };

  return (
    <div className={classes.header}>
      <ul className={classes['header-list']}>
        <li>
          <Button onClick={handleIncomplete}>Incomplete</Button>
        </li>
        <li>
          <Button onClick={handleIncomplete}>Passes</Button>
        </li>
        <li>
          <Button onClick={handleIncomplete}>Violations</Button>
        </li>
        <li>
          <Button onClick={handleIncomplete}>Inapplicable</Button>
        </li>
      </ul>
    </div>
  );
}

export default Header;
