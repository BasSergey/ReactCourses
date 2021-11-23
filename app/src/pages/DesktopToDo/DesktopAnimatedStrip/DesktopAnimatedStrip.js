import React, { useState } from "react";
// import animStrip from "../../../../img/animStrip.svg";

const DesktopAnimatedStrip = ({ header, items, active, setActive }) => {
    const [menuActive, setmenuActive] = useState(false);

    return (
        <div
            className={active ? "animated__strip" : "animated__strip active"}
            onClick={() => setActive(false)}
        >
            <div
                className="animated__strip__content"
                onMouseOver={(e) => e.stopPropagation()}
                onMouseOut={(e) => e.stopPropagation()}
                onClick={(e) => e.stopPropagation()}
            >

                {/* <img src={animStrip}></img> */}
            </div>
        </div>
    );
};
export default DesktopAnimatedStrip;