import { useLocation } from 'react-router-dom'
import React from 'react'

export default function Contact() {
    const queryString = useLocation().search;
    // console.log(queryString);
    const queryParams = new URLSearchParams(queryString);
    // console.log(queryParams);
    const name = queryParams.get('name');
    // console.log(name);
    return (
        <div>
            {name && <h2>{name} join us . . . </h2>}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cumque animi aspernatur harum quos laborum sunt numquam natus accusantium? Corrupti dolor obcaecati sapiente adipisci placeat repellendus libero laudantium veniam possimus?</p>
        </div>
    )
}
