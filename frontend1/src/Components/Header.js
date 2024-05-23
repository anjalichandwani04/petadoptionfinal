import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({allCategories}) => {

    const location = useLocation();
    return (
        <>
        <Toolbar sx ={{borderBottom: 1, borderColor: 'divider'}}>
            <Typography
            component="h2"
            varian="h5"
            color="inherit"
            align="center"
            sx={{flex: 1}}>
                < img src='images/logo.png' width="200"/>
            </Typography>           

        </Toolbar>

        <Toolbar component="nav" variant="dense"
            sx={{justifyContent: 'space-between', overflowX: 'auto'}}>
                {allCategories.map((category) => (
                    <Link 
                    key={category.id} 
                    to={category.name}
                    className={location.pathname === category.url ? 'activeNavLink' : ''}
                    >
                        {category.title}
                        </Link>

                ))}
                

            </Toolbar>
        
        </>
    )
}

export default Header;

