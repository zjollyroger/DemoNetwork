import React from "react";
import Preloader from "../common/Preloader/Preloader";

export const WithSuspenseWrap = (Component) => {
    const LazySuspenseComponent = (props) => {
        return(
            <React.Suspense fallback={Preloader}>
                <Component {...props}/>
            </React.Suspense>
        )};
    return <LazySuspenseComponent/>;
}