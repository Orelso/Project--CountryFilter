import { green } from "@mui/material/colors";

const Country = ({onShow, ...props}) => {
  const {
    name: { common },
    region,
  } = props;
  
  return (
    <div>
      <p>
        {common}: {region}{" "}
        <button style={{backgroundColor: '#FCF6F5FF', color: '#89ABE3FF', borderRadius: 5}} onClick={() => onShow(props)}>show</button>
      </p>
    </div>
  );
};

export default Country;
