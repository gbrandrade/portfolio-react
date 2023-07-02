import Profile from "./components/Profile";

export default function App() {
  return (
    <div className="app">
      <Profile
        name="Gabriel"
        bio="Software developer"
        phone="+5583912345678"
        email="gabrielmonteiro.adr@gmail.com"
        githubURl="https://github.com/gbrandrade"
        linkedinUrl="https://www.linkedin.com/in/gabrielmntr/"
        twitterUrl="https://twitter.com/"
      />
    </div>
  );
}
