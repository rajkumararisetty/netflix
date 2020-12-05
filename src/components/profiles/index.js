import { Container, Title, List, Item, Picture, Name } from "./styles/profiles";

export default function Profiles({ children, ...resetProps }) {
  return <Container {...resetProps}>{children}</Container>;
}

Profiles.Title = function ProfilesTitle({ children, ...resetProps }) {
  return <Title {...resetProps}>{children}</Title>;
};

Profiles.List = function ProfilesList({ children, ...resetProps }) {
  return <List {...resetProps}>{children}</List>;
};

Profiles.Item = function ProfilesItem({ children, ...resetProps }) {
  return <Item {...resetProps}>{children}</Item>;
};

Profiles.Picture = function ProfilesPicture({ src, ...resetProps }) {
  return (
    <Picture
      {...resetProps}
      src={src ? `/images/users/${src}.png` : `/images/misc/loading.gif`}
    />
  );
};

Profiles.Name = function ProfilesName({ children, ...resetProps }) {
  return <Name {...resetProps}>{children}</Name>;
};
