import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>...Loading chunk</div>}>
            <Routes>
                {routeConfig.map((routeProps) => <Route key={routeProps.path} {...routeProps} />)}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;