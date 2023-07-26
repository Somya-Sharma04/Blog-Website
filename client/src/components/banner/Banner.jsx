import { styled, Box, Typography } from '@mui/material';
import owlImage from '../images/owl3.png';

const Image = styled(Box)`
    width: 100%;
    background-color: #FFD886; /* Set the background color to yellow */
    height: 70vh;
    display: flex;
    flex-direction: row; /* Change the flex-direction to row */
    align-items: center;
    justify-content: space-between; /* Add space between heading and image */
    padding-left: 20px; /* Add some left padding to move the content to the left */
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: black;
    line-height: 1;
    font-family: 'Merriweather', serif;
    margin-right: 20px; /* Add margin to create space between heading and image */
    padding-right: 0px;
    padding-left: 20px;
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    color: black;
    font-family: 'Merriweather', serif;
    max-width: 680px;
    padding-right: 0px;
    padding-left: 30px;
`;

const ImageContainer = styled(Box)`
    width: 30%;
    height: 100%;
    margin-right: 50px; /* Adjust the margin to move the image and text closer */
    margin-left: 50px; /* Add left margin to move the image slightly to the right */
`;

const Banner = () => {
    return (
        <Image>
            <div>
                <Heading>THYNK UNLIMITED</Heading>
                <SubHeading>
                    <br />
                    <Typography variant="h3" sx={{ fontSize: '30px',fontFamily: 'Merriweather'  }}>
                        <b>Create A Blog With Limitless Thinking.</b>
                    </Typography>
                    {/* <br />
                    Stand out with a professionally-designed blog website that can be customized to fit your brand. Build, manage, and promote your blog with Squarespace’s built-in suite of design and marketing tools.
                    <br /> */}
                    Express Yourself, Share Your Stories, and Connect with the World!
                </SubHeading>
            </div>
            <ImageContainer>
                <img
                    src={owlImage}
                    alt="Owl Image"
                    style={{ width: 'calc(350px + 10%)', height: 'calc(300px + 20%)' }}
                />
            </ImageContainer>
        </Image>
    );
};

export default Banner;
