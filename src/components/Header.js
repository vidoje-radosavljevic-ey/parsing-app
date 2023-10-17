import React, { useState } from 'react';
import classes from './Header.module.scss';
import Button from './ui/Button';

function Header({ onCategory }) {
  const [isActive, setIsActive] = useState('');

  const handleIncomplete = (e) => {
    setIsActive(e.target.textContent);
    onCategory(e.target.textContent.toLowerCase());
    window.scrollTo({ top: 0 });
  };

  return (
    <div className={classes.header}>
      <ul className={classes['header-list']}>
        <li>
          <Button
            onClick={handleIncomplete}
            className={isActive === 'Incomplete' ? classes.button : undefined}
          >
            Incomplete
          </Button>
        </li>
        <li>
          <Button
            onClick={handleIncomplete}
            className={isActive === 'Passes' ? classes.button : undefined}
          >
            Passes
          </Button>
        </li>
        <li>
          <Button
            onClick={handleIncomplete}
            className={isActive === 'Violations' ? classes.button : undefined}
          >
            Violations
          </Button>
        </li>
        <li>
          <Button
            onClick={handleIncomplete}
            className={isActive === 'Inapplicable' ? classes.button : undefined}
          >
            Inapplicable
          </Button>
        </li>
      </ul>
    </div>
  );
}

export default Header;
