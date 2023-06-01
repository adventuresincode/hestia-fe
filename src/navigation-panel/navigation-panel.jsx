import React, { useState } from "react";
import './navigation-panel.scss';

function Navigation() {

    const [navList, setNavlist] = useState(false);
    const showNavlist = () => setNavlist(!navList);
    return (
        <div className={navList ? 'navlist active' : 'navlist'}>
            <button className="hamburger" type="button" onClick={showNavlist}>
                <div></div>
            </button>

            <ul id='nav-list' onClick={showNavlist}>
                <li>
                    <span class="nav-text">
                        Dashboard
                    </span>
                </li>
                <li>
                    <span class="nav-text">
                        Fleets
                    </span>
                </li>
                <li>
                    <span class="nav-text">
                        Clusters
                    </span>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;