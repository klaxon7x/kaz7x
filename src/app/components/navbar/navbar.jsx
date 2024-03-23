"use client";
import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';




export const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text: "home",
        },
        {
            text: "about",
        },
        {
            text: "blogs",
        },
        {
            text: "contact",
        },
        {
            text: "fuck off",
        },
    ];
    return (
        <nav>
            <div className="nav-logo-container">
                <h1> kazx007</h1>
            </div>
            <ul className='navbar-links-container'>
                <a>home</a>
                <a>about</a>
                <a>blogs</a>
                <a>contact</a>
                <a href="https://www.facebook.com/swudhead666" target="_blank"><FacebookIcon /></a>
                <a href="https://github.com/klaxon7x" target="_blank"><GitHubIcon /></a>
                <a href="" target="_blank"><LinkedInIcon /></a>

            </ul>
            <div className="navbar-menu-container">
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div>

            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={() => setOpenMenu(false)}
                    onKeyDown={() => setOpenMenu(false)}
                >
                    <List>
                        {menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </Box>
            </Drawer>

        </nav>
    )
};

export default Navbar
