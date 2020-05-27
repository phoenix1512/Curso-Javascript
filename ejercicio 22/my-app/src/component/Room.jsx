import React, { useEffect, useState } from 'react'

const Room = (props) => {
    const [lightBulbStatus, setLightbulbStatus] = useState(false)
    const [name, setName] = useState()

    const changeLightBulbStatus = () => { setLightbulbStatus(lightBulbStatus => !lightBulbStatus) }

    useEffect(() => { setName(props.name) });

    return (
        <div>
            <img src={lightBulbStatus ? "/images/focoOn.png" : "/images/focoOff.png"} onClick={changeLightBulbStatus} className="img-fluid mx-auto d-block" alt="foco" />
            <h4>{name}</h4>
        </div>
    )
}

export default Room
