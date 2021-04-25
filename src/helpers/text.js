import React from 'react';

export const Text = React.memo(({ children, style, lines = 1 }) =>
    <Text
        style={style}
        numberOfLines={lines}
        allowFontScaling={false}
    >
        {children}
    </Text>
)