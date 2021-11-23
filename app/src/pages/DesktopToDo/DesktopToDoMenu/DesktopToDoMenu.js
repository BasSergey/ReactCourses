import React, { useState } from 'react'
// import DesktopAnimatedStrip from '../DesktopAnimatedStrip/DesktopAnimatedStrip';
// import animStrip from "../../../../img/animStrip.svg";
const DesktopToDoMenu = ({ header, items, active, setActive }) => {
    const [menuActive, setmenuActive] = useState(false);
    const [animatedStripActive, setanimatedStripActive] = useState(false);
    return (
        <div
            className={active ? "toDoMenu" : "toDoMenu active"}
            onClick={() => setActive(false)}
        >
            <div
                className="toDoMenu__content"
                onMouseOver={(e) => e.stopPropagation()}
                onMouseOut={(e) => e.stopPropagation()}
                onClick={(e) => e.stopPropagation()}>

                <ul className="toDoMenu__icon">
                    {items.map((items) => (
                        <>
                            <li>
                                {/* <a href={items.href} > */}
                                    {/* <img 
                                        className={items.className} 
                                        // src={items.src} 
                                        onClick={() => setanimatedStripActive(!animatedStripActive)}
                                        active={animatedStripActive}
                                        setActive={setanimatedStripActive}>
                                    </img> */}
                                {/* </a> */}
                            </li>
                        </>
                    ))}
                </ul>


            </div>

        </div>
    );
};
export default DesktopToDoMenu;