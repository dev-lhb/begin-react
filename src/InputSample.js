import React, { useState, useRef } from 'react';

const InputSample = () => {
    const [texts, setTexts] = useState({
        name : '',
        nickname : '',
    })

    const nameInput = useRef();
    const { name, nickname } = texts;

    const onChange = (e) => {
        const { value, name } = e.target;
        setTexts({
            ...texts,
            [name] : value,
        })
    }

    const onReset = () => {
        setTexts({
            name : '',
            nickname: '',
        })
        nameInput.current.focus();
    }

    return (
        <div>
            <input name="name" onChange={onChange} value={name} ref={nameInput}/>
            <input name="nickname" onChange={onChange} value={nickname} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>{name}({nickname})</b>
            </div>
        </div>
    )
}

export default InputSample;