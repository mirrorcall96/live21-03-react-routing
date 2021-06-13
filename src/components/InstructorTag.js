import { Link } from "react-router-dom";
import { GoToProfile, TagWrapper, Emoji, Name } from "./styles";

const InstructorTag = ({ instructor, goTo }) => {
  const { emoji, name, slug } = instructor;
  return (
      <Link to={`/instructors/${slug}`} >
      <TagWrapper>
        <Emoji>{emoji}</Emoji>
        <Name>{name}</Name>
        <GoToProfile>Go to profile</GoToProfile>
      </TagWrapper>
      </Link>
  );
};

export default InstructorTag;
