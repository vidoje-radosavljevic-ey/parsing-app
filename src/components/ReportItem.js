import React from 'react';
import classes from './ReportItem.module.scss';

function ReportItem({ reportData, category }) {
  return (
    <div className={classes.report}>
      {reportData &&
        reportData.map((item, index) => (
          <div key={Math.random()}>
            <div className={classes.help}>
              {`${index + 1})`}
              <span style={{ paddingRight: 0.5 + 'rem' }}></span>{' '}
              <h3>{item.help}</h3>
            </div>
            {/* <p>{item.description}</p> */}
            {category !== 'inapplicable' ? (
              <div className={classes.description}>
                {item.nodes.map((node, nodeIndex) => (
                  <ol
                    start={nodeIndex + 1}
                    key={Math.random()}
                  >
                    {node.any.length > 0
                      ? node.any.map((el) => (
                          <li key={Math.random()}>
                            <div className={classes.node}>
                              <div className={classes.message}>
                                <h4>{el.message}</h4>
                              </div>
                              <div className={classes.html}>
                                <span
                                  style={{
                                    display: 'block',
                                    fontWeight: 'bold',
                                    marginLeft: 1 + 'rem',
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
                                    marginLeft: 1 + 'rem',
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
                                      marginLeft: 1 + 'rem',
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
                                    marginLeft: 1 + 'rem',
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
                                    marginLeft: 1 + 'rem',
                                  }}
                                >
                                  suggestion:
                                </span>
                                <a href={item.helpUrl}>{item.helpUrl}</a>
                              </div>
                              <div className={classes.target}>
                                <span
                                  style={{
                                    display: 'block',
                                    paddingRight: 1 + 'rem',
                                    fontWeight: 'bold',
                                    marginLeft: 1 + 'rem',
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
                                <h4>{el.message}</h4>
                              </div>
                              <div className={classes.html}>
                                <span
                                  style={{
                                    display: 'block',
                                    fontWeight: 'bold',
                                    marginLeft: 1 + 'rem',
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
                                    marginLeft: 1 + 'rem',
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
                                      marginLeft: 1 + 'rem',
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
                                    marginLeft: 1 + 'rem',
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
                                    marginLeft: 1 + 'rem',
                                  }}
                                >
                                  suggestion:
                                </span>
                                <a href={item.helpUrl}>{item.helpUrl}</a>
                              </div>
                              <div className={classes.target}>
                                <span
                                  style={{
                                    display: 'block',
                                    paddingRight: 1 + 'rem',
                                    fontWeight: 'bold',
                                    marginLeft: 1 + 'rem',
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
                  start={1}
                  key={Math.random()}
                >
                  <span style={{ paddingRight: 0.5 + 'rem' }}></span>{' '}
                  <div className={classes.html}>
                    <span
                      style={{
                        display: 'block',
                        fontWeight: 'bold',
                        marginLeft: 1 + 'rem',
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
                        marginLeft: 1 + 'rem',
                      }}
                    >
                      suggestion:
                    </span>
                    <a href={item.helpUrl}>{item.helpUrl}</a>
                  </div>
                  <div className={classes.target}>
                    <span
                      style={{
                        display: 'block',
                        paddingRight: 1 + 'rem',
                        fontWeight: 'bold',
                        marginLeft: 1 + 'rem',
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
    </div>
  );
}

export default ReportItem;
