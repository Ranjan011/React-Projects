import React from "react";

const Dropped = ({index, dropped, drop, setDrop, list, setList}) => {
    return (
        <div className='toDo' key={index}>
        <div className='left recycle'>
            <i className="fas fa-redo-alt" title="Retrieve" 
            onClick={() => {
                setList([...list, {id:dropped.id, text:dropped.text}]);
                setDrop(drop.filter((obj2) => {
                    return obj2.id !== dropped.id;
                }))
            }}></i>
        </div>

        <div className='top'>
            <p className="textCross">{dropped.text}</p>
        </div>

        <div className='bottom'>
            <p>{new Intl.DateTimeFormat('en-US', {year:'numeric', month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit', second:'2-digit'}).format(dropped.id)}</p>
        </div>

        <div className='right close'>
            <i value='false' className='fas fa-trash-alt' title='Remove'
            onClick={() => {
                setDrop(drop.filter((obj2) => {
                    return obj2.id !== dropped.id;
                }))
            }}></i>
        </div>
    </div>
    )
}

export default Dropped;