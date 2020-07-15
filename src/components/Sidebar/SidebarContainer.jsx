import React from "react";
import Sidebar from "./Sidebar";
import {connect} from "react-redux";

/*const SidebarContainer = (props) => {
    debugger;
    let state = props.store.sidebarPage;
    return (
        <Sidebar friends={state.friends} />
    );
}*/
let mapStateToProps = (state) => {
    return {
        friends : state.sidebarPage.friends
    }
}
let mapDispatchToProps = () => {
    return {

    }
}
const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);
export default SidebarContainer;