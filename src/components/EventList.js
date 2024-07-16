// import './EventList.css';
import styles from './EventList.module.css';
import React from 'react'

export default function EventList(props) {
    const Events = props.events;
    const handleClick = props.handleClick;

    return (
        <>
            {
                Events.map((event , index) => (
                    <div className={styles.card} key={event.id}>
                        <h2>{index + 1} - {event.title}</h2>
                        <button id={styles.btn} onClick={() => {handleClick(event.id)}}>Delete</button>
                    </div>
                ))
            }
        </>
    )
}
