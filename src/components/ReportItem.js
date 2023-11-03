import React from 'react';
import classes from './ReportItem.module.scss';

function ReportItem({
  reportData,
  category,
  allIssuesAndBestPractice,
  isActiveBestPractice,
}) {
  let withoutBestPractice = [];
  if (allIssuesAndBestPractice) {
    withoutBestPractice = allIssuesAndBestPractice.filter(
      (item) => !item.tags.includes('best-practice')
    );
  } else if (reportData) {
    withoutBestPractice = reportData.filter(
      (item) => !item.tags.includes('best-practice')
    );
  }

  return (
    <div className={classes.report}>
      {reportData &&
        !allIssuesAndBestPractice &&
        !isActiveBestPractice &&
        withoutBestPractice.map((item, index) => (
          <div key={Math.random()}>
            <div className={classes.help}>
              <h4 className={classes.h4Title}>
                {`${index + 1}.`} {item.help}
              </h4>
            </div>
            {/* passes, incomplete, violations */}
            {category !== 'inapplicable' ? (
              <div className={classes.description}>
                {item.nodes.map((node, nodeIndex) => (
                  <ol
                    className={classes.ol}
                    start={nodeIndex + 1}
                    key={Math.random()}
                  >
                    {node.any.length > 0
                      ? node.any.map((el) => (
                          <li
                            className={classes.li}
                            key={Math.random()}
                          >
                            <div className={classes.node}>
                              <div className={classes.message}>
                                <h4>
                                  {`${nodeIndex + 1}.`} {el.message}
                                </h4>
                              </div>
                              <div className={classes.html}>
                                <span
                                  style={{
                                    display: 'block',
                                    fontWeight: 'bold',
                                  }}
                                >
                                  html:
                                </span>
                                <p>{node.html}</p>
                              </div>
                              <div className={classes.html}>
                                <span
                                  style={{
                                    display: 'block',
                                    fontWeight: 'bold',
                                  }}
                                >
                                  id:
                                </span>
                                <p>{item.id}</p>
                              </div>
                              {node.impact && (
                                <div className={classes.impact}>
                                  <span
                                    style={{
                                      paddingRight: 1 + 'rem',
                                      fontWeight: 'bold',
                                    }}
                                  >
                                    impact:
                                  </span>
                                  <p>{node.impact}</p>
                                </div>
                              )}
                              <div className={classes.target}>
                                <span
                                  style={{
                                    paddingRight: 1 + 'rem',
                                    fontWeight: 'bold',
                                  }}
                                >
                                  target:
                                </span>
                                <p>{node.target}</p>
                              </div>
                              <div className={classes.target}>
                                <span
                                  style={{
                                    paddingRight: 1 + 'rem',
                                    fontWeight: 'bold',
                                  }}
                                >
                                  suggestion:
                                </span>
                                <div className={classes.wrapper}>
                                  <a
                                    className={classes.a}
                                    target="_blank"
                                    rel="noreferrer"
                                    href={item.helpUrl}
                                  >
                                    {item.helpUrl}
                                  </a>
                                </div>
                              </div>
                              <div className={classes.target}>
                                <span
                                  style={{
                                    display: 'block',
                                    paddingRight: 1 + 'rem',
                                    fontWeight: 'bold',
                                  }}
                                >
                                  tags:
                                </span>
                                {item.tags.map((tag) => (
                                  <p
                                    key={Math.random()}
                                    style={{ display: 'inline-block' }}
                                  >
                                    {tag}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </li>
                        ))
                      : node.all.map((el) => (
                          <li key={Math.random()}>
                            <div className={classes.node}>
                              <div className={classes.message}>
                                <h4>
                                  {`${nodeIndex + 1}.`} {el.message}
                                </h4>
                              </div>
                              <div className={classes.html}>
                                <span
                                  style={{
                                    display: 'block',
                                    fontWeight: 'bold',
                                  }}
                                >
                                  html:
                                </span>
                                <p>{node.html}</p>
                              </div>
                              <div className={classes.html}>
                                <span
                                  style={{
                                    display: 'block',
                                    fontWeight: 'bold',
                                  }}
                                >
                                  id:
                                </span>
                                <p>{item.id}</p>
                              </div>
                              {node.impact && (
                                <div className={classes.impact}>
                                  <span
                                    style={{
                                      paddingRight: 1 + 'rem',
                                      fontWeight: 'bold',
                                    }}
                                  >
                                    impact:
                                  </span>
                                  <p>{node.impact}</p>
                                </div>
                              )}
                              <div className={classes.target}>
                                <span
                                  style={{
                                    paddingRight: 1 + 'rem',
                                    fontWeight: 'bold',
                                  }}
                                >
                                  target:
                                </span>
                                <p>{node.target}</p>
                              </div>
                              <div className={classes.target}>
                                <span
                                  style={{
                                    paddingRight: 1 + 'rem',
                                    fontWeight: 'bold',
                                  }}
                                >
                                  suggestion:
                                </span>
                                <div className={classes.wrapper}>
                                  <a
                                    className={classes.a}
                                    target="_blank"
                                    rel="noreferrer"
                                    href={item.helpUrl}
                                  >
                                    {item.helpUrl}
                                  </a>
                                </div>
                              </div>
                              <div className={classes.target}>
                                <span
                                  style={{
                                    display: 'block',
                                    paddingRight: 1 + 'rem',
                                    fontWeight: 'bold',
                                  }}
                                >
                                  tags:
                                </span>
                                {item.tags.map((tag) => (
                                  <p
                                    key={Math.random()}
                                    style={{ display: 'inline-block' }}
                                  >
                                    {tag}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </li>
                        ))}
                    {node.none.length > 0 &&
                      node.none.map((el) => (
                        <li
                          className={classes.li}
                          key={Math.random()}
                        >
                          <div className={classes.node}>
                            <div className={classes.message}>
                              <h4>
                                {`${nodeIndex + 1}.`} {el.message}
                              </h4>
                            </div>
                            <div className={classes.html}>
                              <span
                                style={{
                                  display: 'block',
                                  fontWeight: 'bold',
                                }}
                              >
                                html:
                              </span>
                              <p>{node.html}</p>
                            </div>
                            <div className={classes.html}>
                              <span
                                style={{
                                  display: 'block',
                                  fontWeight: 'bold',
                                }}
                              >
                                id:
                              </span>
                              <p>{item.id}</p>
                            </div>
                            {node.impact && (
                              <div className={classes.impact}>
                                <span
                                  style={{
                                    paddingRight: 1 + 'rem',
                                    fontWeight: 'bold',
                                  }}
                                >
                                  impact:
                                </span>
                                <p>{node.impact}</p>
                              </div>
                            )}
                            <div className={classes.target}>
                              <span
                                style={{
                                  paddingRight: 1 + 'rem',
                                  fontWeight: 'bold',
                                }}
                              >
                                target:
                              </span>
                              <p>{node.target}</p>
                            </div>
                            <div className={classes.target}>
                              <span
                                style={{
                                  paddingRight: 1 + 'rem',
                                  fontWeight: 'bold',
                                }}
                              >
                                suggestion:
                              </span>
                              <div className={classes.wrapper}>
                                <a
                                  className={classes.a}
                                  target="_blank"
                                  rel="noreferrer"
                                  href={item.helpUrl}
                                >
                                  {item.helpUrl}
                                </a>
                              </div>
                            </div>
                            <div className={classes.target}>
                              <span
                                style={{
                                  display: 'block',
                                  paddingRight: 1 + 'rem',
                                  fontWeight: 'bold',
                                }}
                              >
                                tags:
                              </span>
                              {item.tags.map((tag) => (
                                <p
                                  key={Math.random()}
                                  style={{ display: 'inline-block' }}
                                >
                                  {tag}
                                </p>
                              ))}
                            </div>
                          </div>
                        </li>
                      ))}
                  </ol>
                ))}
              </div>
            ) : (
              <div className={classes.inapplicable}>
                <ol
                  className={classes.ol}
                  start={1}
                  key={Math.random()}
                >
                  <span style={{ paddingRight: 0.5 + 'rem' }}></span>{' '}
                  <div className={classes.html}>
                    <span
                      style={{
                        display: 'block',
                        fontWeight: 'bold',
                      }}
                    >
                      id:
                    </span>
                    <p>{item.id}</p>
                  </div>
                  <div className={classes.target}>
                    <span
                      style={{
                        paddingRight: 1 + 'rem',
                        fontWeight: 'bold',
                      }}
                    >
                      suggestion:
                    </span>
                    <div className={classes.wrapper}>
                      <a
                        className={classes.a}
                        target="_blank"
                        rel="noreferrer"
                        href={item.helpUrl}
                      >
                        {item.helpUrl}
                      </a>
                    </div>
                  </div>
                  <div className={classes.target}>
                    <span
                      style={{
                        display: 'block',
                        paddingRight: 1 + 'rem',
                        fontWeight: 'bold',
                      }}
                    >
                      tags:
                    </span>
                    {item.tags.map((tag) => (
                      <p
                        key={Math.random()}
                        style={{ display: 'inline-block' }}
                      >
                        {tag}
                      </p>
                    ))}
                  </div>
                </ol>
              </div>
            )}
          </div>
        ))}
      {/* with best practice */}
      {reportData &&
        !allIssuesAndBestPractice &&
        isActiveBestPractice &&
        reportData.map((item, index) => (
          <div key={Math.random()}>
            <div className={classes.help}>
              <h4 className={classes.h4Title}>
                {`${index + 1}.`} {item.help}
              </h4>
            </div>
            {/* passes, incomplete, violations */}
            {category !== 'inapplicable' ? (
              <div className={classes.description}>
                {item.nodes.map((node, nodeIndex) => (
                  <ol
                    className={classes.ol}
                    start={nodeIndex + 1}
                    key={Math.random()}
                  >
                    {node.any.length > 0
                      ? node.any.map((el) => (
                          <li
                            className={classes.li}
                            key={Math.random()}
                          >
                            <div className={classes.node}>
                              <div className={classes.message}>
                                <h4>
                                  {`${nodeIndex + 1}.`} {el.message}
                                </h4>
                              </div>
                              <div className={classes.html}>
                                <span
                                  style={{
                                    display: 'block',
                                    fontWeight: 'bold',
                                  }}
                                >
                                  html:
                                </span>
                                <p>{node.html}</p>
                              </div>
                              <div className={classes.html}>
                                <span
                                  style={{
                                    display: 'block',
                                    fontWeight: 'bold',
                                  }}
                                >
                                  id:
                                </span>
                                <p>{item.id}</p>
                              </div>
                              {node.impact && (
                                <div className={classes.impact}>
                                  <span
                                    style={{
                                      paddingRight: 1 + 'rem',
                                      fontWeight: 'bold',
                                    }}
                                  >
                                    impact:
                                  </span>
                                  <p>{node.impact}</p>
                                </div>
                              )}
                              <div className={classes.target}>
                                <span
                                  style={{
                                    paddingRight: 1 + 'rem',
                                    fontWeight: 'bold',
                                  }}
                                >
                                  target:
                                </span>
                                <p>{node.target}</p>
                              </div>
                              <div className={classes.target}>
                                <span
                                  style={{
                                    paddingRight: 1 + 'rem',
                                    fontWeight: 'bold',
                                  }}
                                >
                                  suggestion:
                                </span>
                                <div className={classes.wrapper}>
                                  <a
                                    className={classes.a}
                                    target="_blank"
                                    rel="noreferrer"
                                    href={item.helpUrl}
                                  >
                                    {item.helpUrl}
                                  </a>
                                </div>
                              </div>
                              <div className={classes.target}>
                                <span
                                  style={{
                                    display: 'block',
                                    paddingRight: 1 + 'rem',
                                    fontWeight: 'bold',
                                  }}
                                >
                                  tags:
                                </span>
                                {item.tags.map((tag) => (
                                  <p
                                    key={Math.random()}
                                    style={{ display: 'inline-block' }}
                                  >
                                    {tag}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </li>
                        ))
                      : node.all.map((el) => (
                          <li key={Math.random()}>
                            <div className={classes.node}>
                              <div className={classes.message}>
                                <h4>
                                  {`${nodeIndex + 1}.`} {el.message}
                                </h4>
                              </div>
                              <div className={classes.html}>
                                <span
                                  style={{
                                    display: 'block',
                                    fontWeight: 'bold',
                                  }}
                                >
                                  html:
                                </span>
                                <p>{node.html}</p>
                              </div>
                              <div className={classes.html}>
                                <span
                                  style={{
                                    display: 'block',
                                    fontWeight: 'bold',
                                  }}
                                >
                                  id:
                                </span>
                                <p>{item.id}</p>
                              </div>
                              {node.impact && (
                                <div className={classes.impact}>
                                  <span
                                    style={{
                                      paddingRight: 1 + 'rem',
                                      fontWeight: 'bold',
                                    }}
                                  >
                                    impact:
                                  </span>
                                  <p>{node.impact}</p>
                                </div>
                              )}
                              <div className={classes.target}>
                                <span
                                  style={{
                                    paddingRight: 1 + 'rem',
                                    fontWeight: 'bold',
                                  }}
                                >
                                  target:
                                </span>
                                <p>{node.target}</p>
                              </div>
                              <div className={classes.target}>
                                <span
                                  style={{
                                    paddingRight: 1 + 'rem',
                                    fontWeight: 'bold',
                                  }}
                                >
                                  suggestion:
                                </span>
                                <div className={classes.wrapper}>
                                  <a
                                    className={classes.a}
                                    target="_blank"
                                    rel="noreferrer"
                                    href={item.helpUrl}
                                  >
                                    {item.helpUrl}
                                  </a>
                                </div>
                              </div>
                              <div className={classes.target}>
                                <span
                                  style={{
                                    display: 'block',
                                    paddingRight: 1 + 'rem',
                                    fontWeight: 'bold',
                                  }}
                                >
                                  tags:
                                </span>
                                {item.tags.map((tag) => (
                                  <p
                                    key={Math.random()}
                                    style={{ display: 'inline-block' }}
                                  >
                                    {tag}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </li>
                        ))}
                    {node.none.length > 0 &&
                      node.none.map((el) => (
                        <li
                          className={classes.li}
                          key={Math.random()}
                        >
                          <div className={classes.node}>
                            <div className={classes.message}>
                              <h4>
                                {`${nodeIndex + 1}.`} {el.message}
                              </h4>
                            </div>
                            <div className={classes.html}>
                              <span
                                style={{
                                  display: 'block',
                                  fontWeight: 'bold',
                                }}
                              >
                                html:
                              </span>
                              <p>{node.html}</p>
                            </div>
                            <div className={classes.html}>
                              <span
                                style={{
                                  display: 'block',
                                  fontWeight: 'bold',
                                }}
                              >
                                id:
                              </span>
                              <p>{item.id}</p>
                            </div>
                            {node.impact && (
                              <div className={classes.impact}>
                                <span
                                  style={{
                                    paddingRight: 1 + 'rem',
                                    fontWeight: 'bold',
                                  }}
                                >
                                  impact:
                                </span>
                                <p>{node.impact}</p>
                              </div>
                            )}
                            <div className={classes.target}>
                              <span
                                style={{
                                  paddingRight: 1 + 'rem',
                                  fontWeight: 'bold',
                                }}
                              >
                                target:
                              </span>
                              <p>{node.target}</p>
                            </div>
                            <div className={classes.target}>
                              <span
                                style={{
                                  paddingRight: 1 + 'rem',
                                  fontWeight: 'bold',
                                }}
                              >
                                suggestion:
                              </span>
                              <div className={classes.wrapper}>
                                <a
                                  className={classes.a}
                                  target="_blank"
                                  rel="noreferrer"
                                  href={item.helpUrl}
                                >
                                  {item.helpUrl}
                                </a>
                              </div>
                            </div>
                            <div className={classes.target}>
                              <span
                                style={{
                                  display: 'block',
                                  paddingRight: 1 + 'rem',
                                  fontWeight: 'bold',
                                }}
                              >
                                tags:
                              </span>
                              {item.tags.map((tag) => (
                                <p
                                  key={Math.random()}
                                  style={{ display: 'inline-block' }}
                                >
                                  {tag}
                                </p>
                              ))}
                            </div>
                          </div>
                        </li>
                      ))}
                  </ol>
                ))}
              </div>
            ) : (
              <div className={classes.inapplicable}>
                <ol
                  className={classes.ol}
                  start={1}
                  key={Math.random()}
                >
                  <span style={{ paddingRight: 0.5 + 'rem' }}></span>{' '}
                  <div className={classes.html}>
                    <span
                      style={{
                        display: 'block',
                        fontWeight: 'bold',
                      }}
                    >
                      id:
                    </span>
                    <p>{item.id}</p>
                  </div>
                  <div className={classes.target}>
                    <span
                      style={{
                        paddingRight: 1 + 'rem',
                        fontWeight: 'bold',
                      }}
                    >
                      suggestion:
                    </span>
                    <div className={classes.wrapper}>
                      <a
                        className={classes.a}
                        target="_blank"
                        rel="noreferrer"
                        href={item.helpUrl}
                      >
                        {item.helpUrl}
                      </a>
                    </div>
                  </div>
                  <div className={classes.target}>
                    <span
                      style={{
                        display: 'block',
                        paddingRight: 1 + 'rem',
                        fontWeight: 'bold',
                      }}
                    >
                      tags:
                    </span>
                    {item.tags.map((tag) => (
                      <p
                        key={Math.random()}
                        style={{ display: 'inline-block' }}
                      >
                        {tag}
                      </p>
                    ))}
                  </div>
                </ol>
              </div>
            )}
          </div>
        ))}
      {allIssuesAndBestPractice &&
        (category === 'violations' ||
          category === 'best practice included') && (
          <div className={classes.description}>
            {!isActiveBestPractice
              ? withoutBestPractice.map((node, nodeIndex) => (
                  <ol
                    className={classes.ol}
                    start={nodeIndex + 1}
                    key={Math.random()}
                  >
                    <li
                      className={classes.li}
                      key={Math.random()}
                    >
                      <div className={classes.node}>
                        <div className={classes.message}>
                          <h4>
                            {`${nodeIndex + 1}.`} {node.help}
                          </h4>
                        </div>
                        <div className={classes.html}>
                          <span
                            style={{
                              display: 'block',
                              fontWeight: 'bold',
                            }}
                          >
                            html:
                          </span>
                          <p>{node.source}</p>
                        </div>
                        <div className={classes.html}>
                          <span
                            style={{
                              display: 'block',
                              fontWeight: 'bold',
                            }}
                          >
                            id:
                          </span>
                          <p>{node.ruleId}</p>
                        </div>
                        {node.impact && (
                          <div className={classes.impact}>
                            <span
                              style={{
                                paddingRight: 1 + 'rem',
                                fontWeight: 'bold',
                              }}
                            >
                              impact:
                            </span>
                            <p>{node.impact}</p>
                          </div>
                        )}
                        <div className={classes.target}>
                          <span
                            style={{
                              paddingRight: 1 + 'rem',
                              fontWeight: 'bold',
                            }}
                          >
                            target:
                          </span>
                          <p>{node.selector.map((sel) => sel)}</p>
                        </div>
                        <div className={classes.target}>
                          <span
                            style={{
                              paddingRight: 1 + 'rem',
                              fontWeight: 'bold',
                            }}
                          >
                            suggestion:
                          </span>
                          <div className={classes.wrapper}>
                            <a
                              className={classes.a}
                              target="_blank"
                              rel="noreferrer"
                              href={node.helpUrl}
                            >
                              {node.helpUrl}
                            </a>
                          </div>
                        </div>
                        <div className={classes.target}>
                          <span
                            style={{
                              display: 'block',
                              paddingRight: 1 + 'rem',
                              fontWeight: 'bold',
                            }}
                          >
                            tags:
                          </span>
                          {node.tags.map((tag) => (
                            <p
                              key={Math.random()}
                              style={{ display: 'inline-block' }}
                            >
                              {tag}
                            </p>
                          ))}
                        </div>
                      </div>
                    </li>
                  </ol>
                ))
              : allIssuesAndBestPractice.map((node, nodeIndex) => (
                  <ol
                    className={classes.ol}
                    start={nodeIndex + 1}
                    key={Math.random()}
                  >
                    <li
                      className={classes.li}
                      key={Math.random()}
                    >
                      <div className={classes.node}>
                        <div className={classes.message}>
                          <h4>
                            {`${nodeIndex + 1}.`} {node.help}
                          </h4>
                        </div>
                        <div className={classes.html}>
                          <span
                            style={{
                              display: 'block',
                              fontWeight: 'bold',
                            }}
                          >
                            html:
                          </span>
                          <p>{node.source}</p>
                        </div>
                        <div className={classes.html}>
                          <span
                            style={{
                              display: 'block',
                              fontWeight: 'bold',
                            }}
                          >
                            id:
                          </span>
                          <p>{node.ruleId}</p>
                        </div>
                        {node.impact && (
                          <div className={classes.impact}>
                            <span
                              style={{
                                paddingRight: 1 + 'rem',
                                fontWeight: 'bold',
                              }}
                            >
                              impact:
                            </span>
                            <p>{node.impact}</p>
                          </div>
                        )}
                        <div className={classes.target}>
                          <span
                            style={{
                              paddingRight: 1 + 'rem',
                              fontWeight: 'bold',
                            }}
                          >
                            target:
                          </span>
                          <p>{node.selector.map((sel) => sel)}</p>
                        </div>
                        <div className={classes.target}>
                          <span
                            style={{
                              paddingRight: 1 + 'rem',
                              fontWeight: 'bold',
                            }}
                          >
                            suggestion:
                          </span>
                          <div className={classes.wrapper}>
                            <a
                              className={classes.a}
                              target="_blank"
                              rel="noreferrer"
                              href={node.helpUrl}
                            >
                              {node.helpUrl}
                            </a>
                          </div>
                        </div>
                        <div className={classes.target}>
                          <span
                            style={{
                              display: 'block',
                              paddingRight: 1 + 'rem',
                              fontWeight: 'bold',
                            }}
                          >
                            tags:
                          </span>
                          {node.tags.map((tag) => (
                            <p
                              key={Math.random()}
                              style={{ display: 'inline-block' }}
                            >
                              {tag}
                            </p>
                          ))}
                        </div>
                      </div>
                    </li>
                  </ol>
                ))}
          </div>
        )}
    </div>
  );
}

export default ReportItem;
