import React from 'react';
import './style.css';

const Card = (props) => {
    return (
        <div className="card" sortid={props.sortid} key={props.sortId} onClick={()=>props.clickCard( props.clicked, props.sortid)}>
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>
                            {props.name}
                        </strong>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Card;