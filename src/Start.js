import React from 'react'

const Start = ({name}) => {
    return (
        <div>
            <h1 className="title">나는 <span className="name">{name}</span> 에 대해 얼마나 알고 있을까?</h1>
            <input className="input-box" type="text" placeholder="내 이름"></input>
            <input className="btn-submit" type="submit" value="시작하기"/>
        </div>
    )
}

export default Start
