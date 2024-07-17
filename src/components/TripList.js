import "./TripList.css";
import React, { useCallback, useEffect, useState } from 'react'

export default function TripList() {
    const [trips , setTrips] = useState([])
    const [url , setUrl] = useState('http://localhost:3000/trips');

    // fetch(url)
    // .then(response => response.json())
    // .then(json => setTrips(json))
    // .catch(error => console.log(error))

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(json => setTrips(json))
        .catch(error => console.log(error))
    } , [url])

    // const fetchTrips = async() => {
    //     const response = await fetch(url);
    //     const json = await response.json();
    //     setTrips(json);
    // }

    // useEffect(() => {
    //     fetchTrips()
    // } , [])

    // const fetchTrips = useCallback( async() => {
    //     const response = await fetch(url);
    //     const json = await response.json();
    //     setTrips(json);
    // } , [url]);

    // useEffect(() => {
    //     fetchTrips()
    // } , [fetchTrips])




    console.log(trips);





    // fetch("http://localhost:3000/trips")
    // .then(response => response.json())
    // .then(json => console.log(json))
    // .then(json => setTrips(json))
    // .catch(error => console.log(error))
    // until clg json everything is ok but after it we decided to setTitle it because of rerendering everyTime we have infinite loop 

    // useEffect(() => {
    //     fetch(url)
    //     .then(response => response.json())
    //     .then(json => setTrips(json))
    //     .catch(error => console.log(error))
    // } , [url] );
    // the best method

    // const fetchTrips = async() => {
    //     const response = await fetch(url);
    //     const json = await response.json();
    //     setTrips(json);
    // }

    // useEffect(() => {
    //     fetchTrips()
    // } , [fetchTrips]) 
    // if in [] use url we don't have loop

    // const fetchTrips = useCallback(async() => {
    //     const response = await fetch(url);
    //     const json = await response.json();
    //     setTrips(json)
    // } , [url])


    // useEffect(() => {
    //     fetchTrips()
    // }, [fetchTrips])








    // console.log(trips);


    return (
        <div className="trip-list">
            <h2>Trip List</h2>
            <ul>
                {trips.map((trip) => (
                    <li key={trip.id}>
                        <h3>{trip.title}</h3>
                        <p>{trip.price} - {trip.loc}</p>
                    </li>
                ))}
            </ul>
            <div className="filters">
                    <button onClick={() => setUrl('http://localhost:3000/trips?loc=iran')}>Iranian Trips</button>
                    <button onClick={() => setUrl('http://localhost:3000/trips')}>All Trips</button>
            </div>
        </div>
    )
}
