import React from "react";
import Sidebar from "./Sidebar";

const SidebarContainer = (props) => {
    debugger;
    let state = props.store.sidebarPage;
    return (
        <Sidebar friends={state.friends} />
    );
}
export default SidebarContainer;