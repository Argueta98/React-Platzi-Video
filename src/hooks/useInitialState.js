import {useState, useEffect} from 'react';

const useIniatialState = (API) => {
    const [ videos , setVideos] = useState({myList:[], trends:[], originals: []});
    //const API = 'http://localhost:3000/initalState';

    useEffect(()=>{
        fetch(API)
        .then(response => response.json())
        .then(data => setVideos(data));
    },[]);
    return videos;

};

export default useIniatialState;