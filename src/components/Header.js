import React, { useState } from 'react';
import classes from './Header.module.scss';
import Button from './ui/Button';

function Header({ onCategory, isVisible, onBuzz }) {
  const [isActive, setIsActive] = useState('');

  const handleCategory = (e) => {
    onBuzz();
    setIsActive(e.target.textContent);
    onCategory(e.target.textContent.toLowerCase());
    window.scrollTo({ top: 0 });
  };

  return (
    <div className={classes.header}>
      <ul className={classes['header-list']}>
        <li>
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
        </li>
        <li>
          <Button
            onClick={handleCategory}
            className={
              isActive === 'Passes' && isVisible ? classes.button : undefined
            }
          >
            Passes
          </Button>
        </li>
        <li>
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
        </li>
        <li>
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
        </li>
      </ul>
    </div>
  );
}

export default Header;
