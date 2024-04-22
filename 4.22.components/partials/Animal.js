const Animal = (props) => {
  console.log(props);
  if (props.size == "small") {
    return (
      <li>
        <h1>
          {props.type} {props.icon} {props.size}
        </h1>
      </li>
    );
  } else {
    return <></>;
  }
};

export default Animal;
