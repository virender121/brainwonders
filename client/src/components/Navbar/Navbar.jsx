import React from 'react';
import { Menubar } from 'primereact/menubar';
// import 'primeicons/primeicons.css'; 
// import 'font-awesome/css/all.min.css';

const Navbar = () => {
  const items = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      command: () => {
        window.location = '/';
      },
    },
    {
      label: 'Users',
      icon: 'pi pi-users',
      command: () => {
        window.location = '/users';
      },
    },
    {
      label: 'About',
      icon: 'pi pi-info',
      command: () => {
        window.location = '/about';
      },
    },
  ];

  const style = {
    backgroundColor: '#ff5f00', 
    color: '#ffffff', 
    fontWeight: 'bold', 
    height: '60px', 
  };

  return (
    <div>
      <Menubar model={items} style={style} />
    </div>
  );
};

export default Navbar;
