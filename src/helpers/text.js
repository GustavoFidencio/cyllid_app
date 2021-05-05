import React from 'react';

import { Text } from 'react-native';

export const TextClean = React.memo(({ children, style, lines = 1 }) =>
    <Text
        style={style}
        numberOfLines={lines}
        allowFontScaling={false}
    >
        {children}
    </Text>
)