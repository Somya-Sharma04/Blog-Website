import { AppBar, Toolbar, styled, Button, InputBase, alpha } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

import { useNavigate } from 'react-router-dom';
import img2 from '../images/blogsite_logo.png';

const Component = styled(AppBar)`
  background: #FFFFFF;
  color: black;
  height: 60px; /* Adjust the height of the header */
`;

const Container = styled(Toolbar)`
  display: flex;
  justify-content: flex-start; /* Align items to the left */
  align-items: center;
  gap: 20px; /* Add some spacing between logo, links, and search bar */

  & > .logo {
    width: 40px; /* Set the width of your logo */
    height: auto; /* Adjust the height to maintain aspect ratio */
    margin-right: 10px; /* Add some spacing between logo and links */
  }

  & > a {
    padding: 20px;
    color: #000;
    text-decoration: none;
  }

  & > .search {
    position: relative;
    border-radius: 20px; /* Make the edges round */
    background-color: alpha(#000, 0.15);
    border: 1px solid #000; /* Add a border around the search bar */
    &:hover {
      background-color: alpha(#000, 0.25);
    }
    margin-left: auto; /* Push the search bar to the right */
    width: 250px; /* Set the width of the search bar */
    display: flex;
    align-items: center;
  }

  & > .searchIcon {
    padding: 4px; /* Adjust the padding to reduce the icon size */
    margin-right: 8px; /* Add space between search icon and border */
    pointer-events: none;
    display: flex;
    align-items: center;
    font-size: 20px; /* Decrease the size of the search icon */
  }

  & > .inputRoot {
    color: 'inherit';
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
        <Link to='/account'>ACCOUNT </Link>
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
      </Container>
    </Component>
  )
}

export default Header;
