import { styled, Box, Typography,Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: black;
    line-height: 1.6;
`;

const SubHeading = styled(Typography)`
    font-weight: bold;
    margin-top: 15px;
`;

const SocialIcon = styled(Link)`
    margin-right: 10px;
    color: #FF1493;
    &:hover {
        color: #000; /* Change the color on hover as per your design */
    }

`;
const InstagramLink = styled(SocialIcon)`
    color: deepPink; /* Change the color for Instagram link */
`;

const GitHubLink = styled(SocialIcon)`
    color: navy; /* Change the color for GitHub link */
`;
const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">
                    <em>Welcome Thynkers!</em>
                </Typography>    
                <Typography variant="h5">
                    <strong>Connect with Us - We Love to Hear from You!</strong>
                </Typography>
                <Text>
                    Welcome to our contact page! We're thrilled that you want to get in touch with us. 
                    Whether you have a question, suggestion, or just want to say hello, we're all ears. Feel free to reach out using any of the options below.
                </Text>

                <section>
                    <SubHeading>
                        Drop us a Line:
                    </SubHeading>
                    <Text>
                        We've kept things simple and convenient with our contact form. Just fill in your details and message, and we'll get back to you in a jiffy!
                    </Text>
                </section>

                <section>
                    <SubHeading>
                        Passionate About Sharing Knowledge:
                    </SubHeading>
                    <Text>
                        At Thynk Space, we are driven by our love for knowledge and our commitment to sharing valuable insights with our readers.
                        If you have any questions, need further information, or have feedback on our content, we're all ears!
                    </Text>
                </section>

                <section>
                    <SubHeading>
                        Let's Start a Conversation:
                    </SubHeading>
                    <Text>
                        We're eager to engage with our audience. Hit us up, and let's have a meaningful conversation. We promise to respond promptly and thoughtfully to all your queries.
                    </Text>
                </section>

                <section>
                    <SubHeading>
                        Reach Out to Our Team:
                    </SubHeading>
                    <Text>
                        Email: <Link href="mailto:contact@yourblogname.com" color="#0000FF">contact@yourblogname.com</Link> <br/>
                        Prefer the good old email? No worries! Drop us a line at the provided address, and we'll make sure to get back to you ASAP.
                    </Text>
                </section>

                <section>
                    <SubHeading>
                        Connect on Social Media:
                    </SubHeading>
                    <Text>
                        Looking for more ways to stay in the loop? Connect with us on our social media channels. 
                        We're active on <GitHubLink href="#" target="_blank" rel="noopener noreferrer">GitHub</GitHubLink>, 
                        <InstagramLink href="#" target="_blank" rel="noopener noreferrer" color = "#FF1493">Instagram</InstagramLink>, 
                        [list other social media platforms], and we'd love to have you join our online community!
                    </Text>
                </section>

                <section>
                    <SubHeading>
                        Meet the Team Behind the Blog:
                    </SubHeading>
                    <Text>
                        Curious to know who's running the show? Learn more about our passionate team of writers, editors, and creatives on our "About Us" page. 
                        We believe in building a strong bond with our readers!
                    </Text>
                </section>

                <section>
                    <SubHeading>
                        Prompt and Courteous Replies:
                    </SubHeading>
                    <Text>
                        We understand your time is precious, and we promise to respect that. 
                        Our team is dedicated to responding to your messages within [X] hours, ensuring you get the support and answers you need without any unnecessary delays.
                    </Text>
                </section>

                <section>
                    <SubHeading>
                        Share Your Thoughts:
                    </SubHeading>
                    <Text>
                        We value feedback from our readers immensely. Your insights help us improve and tailor our content to your interests and needs. So don't hesitate to let us know what you think!
                    </Text>
                </section>

                <section>
                    <SubHeading>
                        Your Information is Safe with Us:
                    </SubHeading>
                    <Text>
                        Rest assured, any information you share with us will be treated with the utmost confidentiality. 
                        We follow strict privacy protocols, and your details will never be shared with any third parties.
                    </Text>
                </section>
            </Wrapper>
        </Box>
    );
}

export default Contact;
