import { styled, Box, Typography } from '@mui/material';
import owlImage from '../images/owl3.png';

const Image = styled(Box)`
    width: 100%;
    background-color: #FFD886; 
    height: 60vh;
    display: flex;
    flex-direction: row; 
    align-items: center;
    justify-content: space-between; 
    padding-left: 20px; 
    text-align: center;
`;

const Heading = styled(Typography)`
    margin-left: 6.7rem;
    font-size: 70px;
    color: black;
    line-height: 1;
    font-family: 'Ubuntu', sans-serif; 
    margin-right: 20px; 
    padding-right: 0px;
    padding-left: 20px;
`;

const SubHeading = styled(Typography)`
    margin-left: 7rem;
    font-size: 20px;
    color: black;
    font-family: 'Ubuntu', sans-serif; 
    max-width: 680px;
    padding-right: 0px;
    padding-left: 30px;
`;

const ImageContainer = styled(Box)`
    width: 60%; 
    height: 90%;
    margin-top: 10px; 
`;

const Banner = () => {
    return (
        <Image>
            <div>
                <Heading>THYNK UNLIMITED</Heading>
                <SubHeading>
                    <br />
                    <Typography variant="h3" sx={{ fontSize: '30px', fontFamily: 'Roboto' }}>
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
                    style={{ width: 'calc(320px + 10%)', height: 'calc(300px + 20%)' }}
                />
            </ImageContainer>
        </Image>
    );
};

export default Banner;
