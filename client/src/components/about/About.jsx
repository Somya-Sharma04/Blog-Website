import { Box, styled, Typography } from '@mui/material';
import monkeyImage from '../images/monkey.png';

const Banner = styled(Box)`
  width: 100%;
  background-color: #FFD886;
  background-image: url(${monkeyImage});
  background-repeat: no-repeat;
  height: 50vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
`;

const fadeInKeyframes = `
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const BannerContent = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 55%; 
  margin-left: 35%; 
  margin-bottom: 20px;
  text-align: center;
`;

const Heading = styled(Typography)`
  font-size: 45px;
  font-weight: bold;
  color: black;
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;
  opacity: 0;
  animation: fadeIn 1s ease-in-out forwards; /* Apply the fade-in animation */
  animation-delay: 0.5s;
  ${fadeInKeyframes}
`;

const SubHeading = styled(Typography)`
  font-size: 20px;
  color: black;
  margin-top: 10px;
  font-family: 'Roboto', sans-serif;
  opacity: 0;
  animation: fadeIn 1s ease-in-out forwards; /* Apply the fade-in animation */
  animation-delay: 1s;
  ${fadeInKeyframes}
`;


const Wrapper = styled(Box)`
    padding: 20px;
`;

const Text = styled(Typography)`
    color: #000000;
`;

const Section = styled(Box)`
  font-family: 'Roboto', sans-serif;
  border: 4px solid #FFD886;
  background-color: #F2F2F2; 
  padding: 40px;
  margin-top: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s ease-in-out; 
  cursor: pointer;

  &:hover {
    transform: translateY(-5px); 
    background-color: white;
  }
`;

const About = () => {
    return (
    
    <Box>
      <Banner>
        <BannerContent>
          <Heading>ABOUT  US</Heading>
          <SubHeading>
            We're a proud non-profit organisation building open source technology for blogging.
            Today we power many users, from individual bloggers who are just getting started,<br />
            to large teams of writers and editors at some of the largest organisations in the world.
          </SubHeading>
        </BannerContent>
      </Banner>
            <Wrapper>
                <Section>
                    <Typography variant="h3" sx={{ marginBottom: '10px', color: '#994d00'}}>Hey Thynkers !</Typography>
                    <Text variant="h5" color="#000000" >At Thynk Unlimited, we believe that everyone has a unique voice and a story worth sharing. 
                    Whether you're a seasoned writer, a passionate hobbyist, or someone looking to start their writing journey, this is the perfect platform for you. 
                    We provide a user-friendly and intuitive interface that empowers you to create and publish captivating blogs effortlessly.<br />
                    </Text>

                    <Text variant="h5" color="#000000" >Express Yourself, Share Your Stories, and Connect with the World!</Text>
                </Section>

                <Section>
                    <Typography variant="h3" sx={{ marginBottom: '10px', color: '#994d00'}}>Why Choose Us ?</Typography>
                    <Text variant="h5" color="#000000" >
                        ~ Simple and Intuitive Interface: We've designed our platform with user-friendliness in mind. Creating and publishing blogs is a breeze, even for those new to blogging.
                        <br />
                        ~ Freedom of Expression: Thynk Unlimited provides a space where you can be yourself. Write about your interests, experiences, and opinions without any restrictions.
                        <br />
                        ~ Reach a Global Audience: Share your ideas with the world. Our platform enables your blogs to reach readers from every corner of the globe.
                        <br />
                        ~ Diverse Blogging Categories: Whether you're into travel, technology, food, lifestyle, or any other niche, we've got you covered. Our extensive list of blogging categories caters to all interests.
                        <br />
                        ~ Engage with the Community: Connect with like-minded individuals, engage in discussions, and build a community around your passions.
                    </Text>
                </Section>

                <Section>
                    <Typography variant="h3" sx={{ marginBottom: '10px', color: '#994d00'}}>How It Works:</Typography>
                    <Text variant="h5" color="#000000" >
                        ~ Sign Up: Creating an account on Thynk Unlimited is quick and easy. Simply sign up using your email or social media accounts.
                        <br />
                        ~ Create Your Blog: Once you're signed in, you can start crafting your blog using our intuitive editor. Format your text, add images, and make your blog visually appealing.
                        <br />
                        ~ Choose a Category: Select the most suitable category for your blog from our diverse range of options. This helps readers discover your content more easily.
                        <br />
                        ~ Publish and Share: When you're satisfied with your masterpiece, hit the publish button, and watch your blog go live on our platform. Share it across your social networks to increase visibility.
                        <br />
                        ~ Engage and Interact: The journey doesn't end with publishing. Respond to comments, interact with readers, and be part of the vibrant Thynk Unlimited community.
                    </Text>
                </Section>

                <Section>
                    <Typography variant="h3" sx={{ marginBottom: '10px', color: '#994d00'}}>Join Us Today:</Typography>
                    <Text variant="h5" color="#000000" sx={{ fontFamily: 'Merriweather' }}>
                        Are you ready to embark on a journey of self-expression, creativity, and connection? 
                        Sign up with us and start sharing your unique perspective with the world. 
                        Whether you're an aspiring writer or an experienced blogger, 
                        we welcome you to be a part of our growing community of passionate storytellers.
                        <br />
                    </Text>
                    <Text variant="h5" color="#000000" >
                        Start your blogging adventure at Thynk Unlimited and let your voice be heard! Happy blogging!
                    </Text>
                </Section>

                <Section>
                    <Typography variant="h3" sx={{ marginBottom: '10px', color: '#994d00'}}>Hope You Got To Know Us !</Typography>
                </Section>
            </Wrapper>
        </Box>
    );
};

export default About;
