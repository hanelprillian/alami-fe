import React from 'react';

export const GlobalContext = React.createContext({
    GLOBAL: {
        CONTACT_NUMBER: '',
        SET_CONTACT_NUMBER: () => {},
    }
});
