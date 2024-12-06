<<<<<<< HEAD
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw Error('useAuthContext must be used inside AuthContextProvider');
  }
  return context;
};
=======
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw Error('useAuthContext must be used inside AuthContextProvider');
  }
  return context;
};
>>>>>>> 548b19fd0cde63362fe5c272ae168f6681eaf6a8
