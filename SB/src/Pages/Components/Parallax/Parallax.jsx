import { useEffect } from 'react';
import Header from "../../Components/Header/Header"

import './Parallax.scss';

import Bar1 from './Prison/Bar 1.png';
import Bar2 from './Prison/Bar 2.png';
import Bar3 from './Prison/Bar 3.png';
import Bar4 from './Prison/Bar 4.png';
import Bar5 from './Prison/Bar 5.png';
import Bar6 from './Prison/Bar 6.png';

import Left from './Prison/Left Hand.png';
import Right from './Prison/Right Hand.png';



const Parallax = () => {
    useEffect(() => {
        const bars = document.querySelectorAll('.prison-bar');

        const handleScroll = () => {
            bars.forEach((bar) => {
                const scrollOffset = window.scrollY;
                const speed = 0.5; 
                const yPos = -(scrollOffset * speed);
                bar.style.transform = `translateY(${yPos}px)`;
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="Parallax">
            <Header />
            <div className="parallax-container">
                <div className="prison-bar bar-1">
                    <img src={Bar1} alt="prison bars" />
                </div>
                <div className="prison-bar bar-2">
                    <img src={Bar2} className='B2' alt="prison bars" />
                    <img src={Left} className='LH' alt="Left Hand" />
                </div>
                <div className="prison-bar bar-3">
                    <img src={Bar3} alt="prison bars" />
                </div>
                <div className="prison-bar bar-4">
                    <img src={Bar4} alt="prison bars" />
                    <img src={Right} className='RH' alt="Right Hand" />
                </div>
                <div className="prison-bar bar-5">
                    <img src={Bar5} alt="prison bars" />
                </div>
                <div className="prison-bar bar-6">
                    <img src={Bar6} alt="prison bars" />
                </div>
            </div>
            <div className="Logo">
                <h1><span className="S">S</span>urveillance <span className="B">B</span>ureau</h1>
            </div>


        </div>
    );
};

export default Parallax;
