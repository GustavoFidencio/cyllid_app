import React from 'react';

import { ActivityIndicator } from 'react-native';

export const Load = React.memo(({ size = 20, style, color = 'white' }) =>
    <ActivityIndicator
        size={size}
        style={style}
        color={color}
    />
)