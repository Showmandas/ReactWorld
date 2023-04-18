import { getAuth } from 'firebase/auth';
import React, { createContext } from 'react';
import app from '../../firebase/firebase.config';



export const AuthContext=createContext(null);

const auth=getAuth(app)
const AuthProvider = ({children}) => {
    const user={displayName:'showman'}
    return (
        <div>
            <AuthContext.Provider value={user}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;