import { Box, Collapse, Divider, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from '@mui/material';
import React, { useState } from 'react'

import HistoryIcon from '@mui/icons-material/History';
import styled from '@emotion/styled';

const History = () => {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
      setOpen(!open);
    };
    const Titrelist = styled(Box)(({ theme }) => ({
       
        varient:"h6",  color:"#191970"
    
    }));
    return (
        <List>
            
            <ListItemButton>
                            <ListItemIcon>
                                <HistoryIcon sx={{ color: "#191970" }} />
                            </ListItemIcon>
                            <Typography varient="h6" mr={2} color="#191970"> <ListItemText > History </ListItemText></Typography>

                        </ListItemButton>
        </List>

    )
}
export default History