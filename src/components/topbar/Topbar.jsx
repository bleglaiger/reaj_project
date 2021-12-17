import { AddAlert, NotificationsNone } from "@mui/icons-material";
import React from "react";
import "./topbar.css";


export default function TopBar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">QuartSisGroup</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <AddAlert />
                        <span className="topIconBadge">2</span>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};