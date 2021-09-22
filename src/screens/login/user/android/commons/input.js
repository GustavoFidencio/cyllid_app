import React, { useRef, useEffect, memo } from 'react';

import { InputValidation } from "cyllid/src/helpers";

export const Input = memo(({ name, error, focus, change, showKeyboard }) => {

    const refInput = useRef(null);

    useEffect(() => {
        if (!showKeyboard) refInput.current.blur();
    }, [showKeyboard]);

    return (
        <>
            <InputValidation
                ref={refInput}
                value={name}
                title={'Usuário'}
                setValue={change}
                placeholder={'Digite seu usuário'}
                error={error && 'Usuário Inválido'}
                setShow={enable => enable && focus()}
            />
        </>
    )
})