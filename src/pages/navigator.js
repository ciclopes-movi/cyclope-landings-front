import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Riders from "./riders";
import Host from "./host";
import Onboarding from "./onboarding";
import Home from "./home";

function Navigator(props) {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/riders">Riders</Link>
                        </li>
                        <li>
                            <Link to="/host">Host</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/riders">
                        <Riders />
                    </Route>
                    <Route path="/host">
                        <Host />
                    </Route>  
                    <Route path="/onboarding">
                        <Onboarding />
                    </Route>                 
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Navigator;
