import profilePicture from "../../assets/minhafoto.png";
import LinkButton from "../LinkButton";
import Title from "../Title";
import ProfileSection from "./ProfileSection";
import styles from "./styles.module.css";

export default function Profile(props) {
  return (
    <div id={styles.card}>
      <img src={profilePicture} alt="profile picture" />
      <Title>{props.name}</Title>
      <ProfileSection>{props.bio}</ProfileSection>
      <ProfileSection>{props.email}</ProfileSection>
      <ProfileSection>{props.phone}</ProfileSection>
      <ProfileSection>
        <div id={styles.links}>
          <LinkButton href={props.githubURl} target="_blank">
            GitHub
          </LinkButton>

          <LinkButton href={props.linkedinUrl} target="_blank">
            LinkedIn
          </LinkButton>

          <LinkButton href={props.twitterUrl} target="_blank">
            Twitter
          </LinkButton>
        </div>
      </ProfileSection>
    </div>
  );
}
