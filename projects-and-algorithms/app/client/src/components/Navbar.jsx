import {useEffect, useState} from 'react';
import {AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, Tooltip, MenuItem, Badge} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo2 from '../images/logoWhite.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { userAuth } from '../contexts/userAuth';

//VARIABLES DECLARATIONS
const settings = ['Cuenta', 'Salir'];


//FUNCTIONS DECLATARION
function ResponsiveAppBar(props) {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const {isLoggedIn, setIsLoggedIn, setCartPressed} = useContext(userAuth);
    const navigate = useNavigate();
    

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleCartPressed = e =>{
    e.preventDefault();
    setCartPressed(true);
    isLoggedIn ?  navigate('/cart') :  navigate('/login');
  }
  useEffect( ()=>{
    setIsLoggedIn(window.localStorage.getItem('loginStatus', JSON.stringify(isLoggedIn)))
  }, [isLoggedIn])
  
    
  return (
    
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/" style={{width:180, marginRight:"2rem"}}> 
            <img  src={logo2} alt="Logo" id={"logo"}/>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem>
                <Typography textAlign="center">Menu</Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center">Contacto</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to="/" style={{color: "white", textDecoration: 'none'}}> 
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Menu
              </Button>
            </Link>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Contacto
              </Button>
          </Box>
          
          {!isLoggedIn? 
          <div style={{display:'flex'}}>
          <Link to="/login" style={{textDecoration: 'none'}}>
            <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <LoginIcon sx={{mr:1 }} />
                  Iniciar sesión
            </Button>
          </Link>
          <Link to="/register" style={{textDecoration: 'none'}}>
            <Button
                  onClick={handleCloseNavMenu}
                  sx={{ m: 2, color: 'white', display: 'block' }}
                >
                  <PersonAddAltIcon sx={{mr:2}}/>
                  Registrarme
            </Button>
          </Link>
        </div>
        : null}
        <Box sx={{ flexGrow: 0 }}>
        {isLoggedIn ? 
            <Tooltip title="Configuraciones">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <AccountCircleIcon sx={{m:2}}/>
              </IconButton>
            </Tooltip>
        : null}
        {/* <Link to="/cart" style={{textDecoration: 'none'}}> */}
            <Button
                  onClick={e=>handleCartPressed(e)}
                  sx={{ m: 1, color: 'white' }}
                >
                  <Badge color="secondary" badgeContent={props.itemCount}>
                  <ShoppingCartIcon sx={{mr:2}}/>
                  </Badge>
            </Button>
          {/* </Link> */}
        
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;