import { styled, Box, Typography, Link } from "@mui/material";
import { GitHub, Instagram, Email } from "@mui/icons-material";

const ContactPage = styled(Box)`
  background-color: #f9f9f9;
  min-height: 100vh;
`;

const Banner = styled(Box)`
  background-image: url(http://mrtaba.ir/image/bg2.jpg);
  width: 100%;
  height: 50vh;
  background-position: center center;
  background-size: cover;
`;

const Wrapper = styled(Box)`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  color: #333;
`;

const Heading = styled(Typography)`
  margin-top: 30px;
  font-family: 'Ubuntu', sans-serif;
`;

const SubHeading = styled(Typography)`
  font-weight: bold;
  margin-top: 20px;
`;

const Text = styled(Typography)`
  line-height: 1.6;
`;

const section = styled('section')`
  margin-bottom: 40px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #ccc;
  }
`;


const SocialIcon = styled(Link)`
  margin-right: 10px;
  color: #FF1493;
  &:hover {
    color: #000;
  }
`;

const InstagramLink = styled(SocialIcon)`
  color: deepPink;
`;

const GitHubLink = styled(SocialIcon)`
  color: navy;
`;


const Contact = () => {
  return (
    <ContactPage>
      <Banner />
      <Wrapper>
        <Heading variant="h3">
          Welcome Thynkers!
        </Heading>
        <Heading variant="h5">
          <strong>Connect with Us - We Love to Hear from You!</strong>
        </Heading>
        <Text>
          Welcome to our contact page! We're thrilled that you want to get in
          touch with us. Whether you have a question, suggestion, or just want
          to say hello, we're all ears. Feel free to reach out using any of the
          options below.
        </Text>

        <section>
          <SubHeading>Drop us a Line:</SubHeading>
          <Text>
            We've kept things simple and convenient with our contact form. Just
            fill in your details and message, and we'll get back to you in a
            jiffy!
          </Text>
        </section>

        <section>
          <SubHeading>Passionate About Sharing Knowledge:</SubHeading>
          <Text>
            At Thynk Space, we are driven by our love for knowledge and our
            commitment to sharing valuable insights with our readers. If you
            have any questions, need further information, or have feedback on
            our content, we're all ears!
          </Text>
        </section>

        <section>
          <SubHeading>Let's Start a Conversation:</SubHeading>
          <Text>
            We're eager to engage with our audience. Hit us up, and let's have a
            meaningful conversation. We promise to respond promptly and
            thoughtfully to all your queries.
          </Text>
        </section>

        <section>
          <SubHeading>Reach Out to Our Team:</SubHeading>
          <Text>
            Email:{" "}
            <Link href="mailto:contact@yourblogname.com" color="#0000FF">
              contact@yThynkers.com
            </Link>{" "}
            <br />
            Prefer the good old email? No worries! Drop us a line at the
            provided address, and we'll make sure to get back to you ASAP.
          </Text>
        </section>

        <section>
          <SubHeading>Connect on Social Media:</SubHeading>
          <Text>
            Looking for more ways to stay in the loop? Connect with us on our
            social media channels. We're active on{" "}
            <GitHubLink href="#" target="_blank" rel="noopener noreferrer">
            <ion-icon name="logo-github"></ion-icon>
            </GitHubLink>
            , 
            <InstagramLink
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              color="#FF1493"
            >
            <ion-icon name="logo-instagram"></ion-icon>
            </InstagramLink>
            , and we'd love to have you
            join our online community!
          </Text>
        </section>

        <section>
          <SubHeading>Meet the Team Behind the Blog:</SubHeading>
          <Text>
            Curious to know who's running the show? Learn more about our
            passionate team of writers, editors, and creatives on our "About Us"
            page. We believe in building a strong bond with our readers!
          </Text>
        </section>

        <section>
          <SubHeading>Prompt and Courteous Replies:</SubHeading>
          <Text>
            We understand your time is precious, and we promise to respect that.
            Our team is dedicated to responding to your messages within 2
            hours, ensuring you get the support and answers you need without any
            unnecessary delays.
          </Text>
        </section>

        <section>
          <SubHeading>Share Your Thoughts:</SubHeading>
          <Text>
            We value feedback from our readers immensely. Your insights help us
            improve and tailor our content to your interests and needs. So don't
            hesitate to let us know what you think!
          </Text>
        </section>

        <section>
          <SubHeading>Your Information is Safe with Us:</SubHeading>
          <Text>
            Rest assured, any information you share with us will be treated with
            the utmost confidentiality. We follow strict privacy protocols, and
            your details will never be shared with any third parties.
          </Text>
        </section>
      </Wrapper>
    </ContactPage>
  );
};

export default Contact;
