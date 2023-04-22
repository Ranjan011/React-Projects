import React from "react";

const Important = ({index, imp, important, completed, setCompleted, setImportant}) => {
    return (
        <div className='toDo' key={index}>
        <div className='left tick'>
        <i className='fas fa-check' title='Done' style={{color:'#073dbf'}}
                onClick={() => {
                    setCompleted([...completed, {id:imp.id, text:imp.text}]);
                    setImportant(important.filter((obj2) => {
                        return obj2.id !== imp.id;
                    }))
                }}
                ></i>
        </div>

        <div className='top'>
            <p className="textCross">{imp.text}</p>
        </div>

        <div className='bottom'>
            <p>{new Intl.DateTimeFormat('en-US', {year:'numeric', month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit', second:'2-digit'}).format(imp.id)}</p>
        </div>

        <div className='right close'>
            {/* <i value='false' className='fas fa-trash-alt' title='Remove'
            onClick={() => {
                setCompleted(important.filter((obj2) => {
                    return obj2.id !== complete.id;
                }))
            }}></i> */}
        </div>
    </div>
    )
}

export default Important;