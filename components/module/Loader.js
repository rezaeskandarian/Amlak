import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <ThreeDots
        color="#304ffe"
        height={45}
        ariaLabel="three-dots-loading"
        visible={true}
        wrapperStyle={{ margin: "auto" }}
      />
    </div>
  );
};

export default Loader;
