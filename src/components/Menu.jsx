import React, { useState, useEffect } from 'react';
import '../styles/Menu.css'; 
import menuIcon from '../assets/images/menu.svg';
import menuRotIcon from '../assets/images/menu-rot.svg';
import menu01 from '../assets/assets/menu/menu-01.jpg';
import menu02 from '../assets/assets/menu/menu-02.jpg';
import menu03 from '../assets/assets/menu/menu-03.jpg';
import menu04 from '../assets/assets/menu/menu-04.jpg';
import menu05 from '../assets/assets/menu/menu-05.jpg';
import menu06 from '../assets/assets/menu/menu-06.jpg';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  const menuItems = [
    { image: menu01, text: 'O SPOLOČNOSTI' },
    { image: menu02, text: 'ČO PONÚKA LEONIDES?' },
    { image: menu03, text: 'POTREBY ĽUDÍ' },
    { image: menu04, text: 'ZMEŇ SVOJ ŽIVOT' },
    { image: menu05, text: 'PARTNERI' },
    { image: menu06, text: 'KONTAKT' },
  ];

  return (
    <div className="menu-container">
      {!isOpen && (
        <button className="menu-toggle" onClick={toggleMenu}>
          <img src={menuIcon} alt="Menu" />
        </button>
      )}

      <div className={`menu ${isOpen ? 'open' : ''}`}>
        {isOpen && (
          <button className="menu-close" onClick={toggleMenu}>
            <img src={menuRotIcon} alt="Zavrieť menu" />
          </button>
        )}

        <div className="menu-items">
          {menuItems.map((item, index) => (
            <div className="menu-item" key={index}>
              <img src={item.image} alt={item.text} />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;