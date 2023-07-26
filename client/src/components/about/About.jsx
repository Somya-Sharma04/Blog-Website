import { Box, styled, Typography } from '@mui/material';
import monkeyImage from '../images/monkey.png';

const Banner = styled(Box)`
    width: 100%;
    background-color: #FFD886;
    background-image: url(${monkeyImage});
    background-repeat: no-repeat;
    height: 70vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
`;

const BannerContent = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 20px;
    margin-bottom: 20px;
`;

const Heading = styled(Typography)`
    font-size: 45px;
    font-weight: bold;
    color: blavk;
    margin-left: 40%;
    text-align: centre;
    justify-content: centre;
`;

const SubHeading = styled(Typography)`
  font-size: 20px;
  color: black;
  margin-top: 10px;
  margin-left: 40%;
  animation: fadeIn 2s ease-in-out;
  opacity: 1;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;


const Wrapper = styled(Box)`
    padding: 20px;
`;

const Text = styled(Typography)`
    color: #000000;
`;

const Section = styled(Box)`
    background-color: #F2F2F2; /* Add the desired background color for each section */
    padding: 20px;
    margin-top: 20px;
`;

const About = () => {
    return (
    
    <Box>
      <Banner>
        <BannerContent>
          <Heading sx={{ fontFamily: 'Merriweather' }}>ABOUT US</Heading>
         
          <SubHeading sx={{ fontFamily: 'Merriweather' }}>
            We're a proud non-profit organisation building open source technology for blogging.
            Today Ghost powers many users; from individual bloggers who are just getting started,<br/>
            to large teams of writers and editors at some of the largest organisations in the world.
          </SubHeading>
        </BannerContent>
      </Banner>
            <Wrapper>
                <Section>
                    <Typography variant="h3" sx={{ fontFamily: 'Merriweather' }}>¡ Adios Amigos !</Typography>
                    <Text variant="h5" color="#000000" sx={{ fontFamily: 'Merriweather' }}>At Thynk Unlimited, we believe that everyone has a unique voice and a story worth sharing. 
                    Whether you're a seasoned writer, a passionate hobbyist, or someone looking to start their writing journey, this is the perfect platform for you. 
                    We provide a user-friendly and intuitive interface that empowers you to create and publish captivating blogs effortlessly.<br />
                    </Text>

                    <Text variant="h5" color="#000000" sx={{ fontFamily: 'Merriweather' }}>Express Yourself, Share Your Stories, and Connect with the World!</Text>
                </Section>

                <Section>
                    <Typography variant="h3" sx={{ fontFamily: 'Merriweather' }}>Why Choose Us ?</Typography>
                    <Text variant="h5" color="#000000" sx={{ fontFamily: 'Merriweather' }}>
                        ~ Simple and Intuitive Interface: We've designed our platform with user-friendliness in mind. Creating and publishing blogs is a breeze, even for those new to blogging.
                        <br />
                        ~ Freedom of Expression: YourBlogSpace is a space where you can be yourself. Write about your interests, experiences, and opinions without any restrictions.
                        <br />
                        ~ Reach a Global Audience: Share your ideas with the world. Our platform enables your blogs to reach readers from every corner of the globe.
                        <br />
                        ~ Diverse Blogging Categories: Whether you're into travel, technology, food, lifestyle, or any other niche, we've got you covered. Our extensive list of blogging categories caters to all interests.
                        <br />
                        ~ Engage with the Community: Connect with like-minded individuals, engage in discussions, and build a community around your passions.
                    </Text>
                </Section>

                <Section>
                    <Typography variant="h3" sx={{ fontFamily: 'Merriweather' }}>How It Works:</Typography>
                    <Text variant="h5" color="#000000" sx={{ fontFamily: 'Merriweather' }}>
                        ~ Sign Up: Creating an account on YourBlogSpace is quick and easy. Simply sign up using your email or social media accounts.
                        <br />
                        ~ Create Your Blog: Once you're signed in, you can start crafting your blog using our intuitive editor. Format your text, add images, and make your blog visually appealing.
                        <br />
                        ~ Choose a Category: Select the most suitable category for your blog from our diverse range of options. This helps readers discover your content more easily.
                        <br />
                        ~ Publish and Share: When you're satisfied with your masterpiece, hit the publish button, and watch your blog go live on our platform. Share it across your social networks to increase visibility.
                        <br />
                        ~ Engage and Interact: The journey doesn't end with publishing. Respond to comments, interact with readers, and be part of the vibrant YourBlogSpace community.
                    </Text>
                </Section>

                <Section>
                    <Typography variant="h3" sx={{ fontFamily: 'Merriweather' }}>Join Us Today:</Typography>
                    <Text variant="h5" color="#000000" sx={{ fontFamily: 'Merriweather' }}>
                        Are you ready to embark on a journey of self-expression, creativity, and connection? 
                        Sign up with us and start sharing your unique perspective with the world. 
                        Whether you're an aspiring writer or an experienced blogger, 
                        we welcome you to be a part of our growing community of passionate storytellers.
                        <br />
                    </Text>
                    <Text variant="h5" color="#000000" sx={{ fontFamily: 'Merriweather' }}>
                        Start your blogging adventure at YourBlogSpace and let your voice be heard! Happy blogging!
                    </Text>
                </Section>

                <Section>
                    <Typography variant="h3" sx={{ fontFamily: 'Merriweather' }}>¡ Hasta luego, amigos !</Typography>
                </Section>
            </Wrapper>
        </Box>
    );
};

export default About;
