import React from 'react';
import classes from './ListItem.css';

const ListItem = (props) => (

  <div className="col-md-6 col-sm-12 col-xs-12" >
                    <div className={classes.list}>
                        <div className={classes.listheader}>
                            <div  className={classes.listheaderimage}>
                                <img className="img-responsive" src={props.book.cover} alt={props.book.title}/>
                            </div>
                        </div>
                        <div className={classes.listcontent}>
                            <h6>
                                <a href={props.book.url} className={classes.textblack}>
                                    {props.book.title}
                                </a>
                            </h6>
                            <h6>
                                <span className={classes.listmeta}>
                                    <span className={classes.listmetaitem}>{props.book.author}</span>
                                </span>
                            </h6>
                            <span className={classes.listmeta}>
                            <span className={classes.listmetaitem}><strong>isbn</strong>: {props.book.isbn}</span>
                            <span  className={classes.listmetaitem}><strong>men</strong>: {props.book.men}</span>
                            <span  className={classes.listmetaitem}><strong>stron</strong>: {props.book.pages_count}</span>
                            <span  className={classes.listmetaitem}><strong>poziom</strong>:
                                {props.book.levels.map((level, index)=>{
                                   return (
                                       <div key={index}>
                                           <span>{level.school}</span> , <span>{level.class}</span>
                                       </div>
                                   )
                                })}
                            </span>
                            <span  className={classes.listmetaitem}><strong>temat</strong>: {props.book.subject}</span>
                            <span  className={classes.listmetaitem}><strong>typ</strong>: {props.book.type}</span>
                            </span>
                            <a href={props.book.url} target="blank">Więcej</a>
                        </div>
                    </div>
                </div>
);

export default ListItem;
