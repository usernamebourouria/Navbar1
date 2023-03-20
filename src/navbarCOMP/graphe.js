import { Box, Collapse, Divider, Drawer, IconButton, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from '@mui/material';
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import RadarIcon from '@mui/icons-material/Radar';
import MapIcon from '@mui/icons-material/Map';
import HistoryIcon from '@mui/icons-material/History';
import styled from '@emotion/styled';
import { Route, Routes } from 'react-router-dom/dist';
import Temperature from '../Data/temerature';

const Graph = () => {
 
    const Titrelist = styled(Box)(({ theme }) => ({

        varient: "h6", color: "#191970"

    }));
    return (

        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            aria-label="contacts"
        >
            <ListItem disablePadding>

                <ListItemIcon>
                    < AutoGraphIcon sx={{ color: "#191970" }} />
                </ListItemIcon>
                <ListItemText primary="Graph:" sx={{ color: "#191970" }} />

            </ListItem>

            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                        <ThermostatIcon sx={{ color: "#191970" }} />
                    </ListItemIcon>
                 <Titrelist>  <Link to="/temperature"> <ListItemText primary="temperature" /></Link> </Titrelist>
                </ListItemButton>
            </List>
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                        <RadarIcon sx={{ color: "#191970" }} />
                    </ListItemIcon>
                    <Titrelist> <ListItemText primary="Rssi" /></Titrelist>
                </ListItemButton>
            </List>

        </List>

    )
}
export default Graph