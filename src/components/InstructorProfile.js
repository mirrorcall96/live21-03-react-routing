import { useParams } from "react-router";
import { Button, ButtonsWrapper } from "./styles";
import { Link } from "react-router-dom";

const InstructorProfile = ({ instructors, goTo }) => {
  let instructorSlug=useParams().instructorSlug;
  const instructor = instructors.find(
    (instructor) => instructor.slug === instructorSlug
  );

  if (!instructor) goTo("/404");

  const { name, emoji, github, description } = instructor;

  const goToGitHub = () => window.open(`https://github.com/${github}`);

  return (
    <>
      <h1>{emoji}</h1>
      <h2>{name}</h2>
      <p>{description}</p>

      <ButtonsWrapper>
        <Link to="/">
          <Button color="tomato" textColor="white">
            Go back home
          </Button>
        </Link>
        <Link>
        <Button onClick={goToGitHub}>Go to GitHub</Button>
        </Link>
      </ButtonsWrapper>
    </>
  );
};

export default InstructorProfile;
