import { AppBar, Toolbar, styled, Button, InputBase, alpha } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

import { useNavigate } from 'react-router-dom';
import img2 from '../images/blogsite_logo.png';

const Component = styled(AppBar)`
  background: #FFFFFF;
  color: black;
  height: 60px;
`;

const Container = styled(Toolbar)`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: 25px;

  & > .logo {
    width: 60px; 
    height: auto;
    margin-right: 10px;
  }

  & > a {
    padding: 20px;
    color: #000;
    text-decoration: none;
    font-weight: bold; 
    font-family: 'Ubuntu', sans-serif;
  }

  & > .logout {
    margin-left: auto; 
    font-size: 24px;
  }

  & > .search {
    position: relative;
    border-radius: 20px;
    background-color: #bfbfbf;
    border: 1px solid #ddd;
    &:hover {
      background-color: #e1e1e1; 
    }
    flex: 0.5;
    display: flex;
    align-items: center;
    padding: 8px; 
    margin: 0 10px; 
  }

  & > .searchIcon {
    padding: 4px;
    margin-right: 5px;
    pointer-events: none;
    display: flex;
    align-items: center;
    font-size: 24px; 
  }

  & > .inputRoot {
    flex: 1; 
  }

  & > .inputInput {
    padding: 8px;
    padding-left: 0;
    width: 100%;
  }
`;

const Header = () => {
  const navigate = useNavigate();

  const logout = async () => navigate('/account');

  return (
    <Component>
      <Container>
        <img className="logo" src={img2} alt="blog" />
        <Link to='/'>HOME</Link>
        <Link to='/about'>ABOUT US</Link>
        <Link to='/contact'>CONTACT</Link>
        <div className="search">
          <div className="searchIcon">
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search..."
            classes={{
              root: 'inputRoot',
              input: 'inputInput',
            }}
          />
        </div>
        <Link to='/account' className="logout"><ion-icon name="log-out-outline"></ion-icon></Link>
      </Container>
    </Component>

  )
}

export default Header;
