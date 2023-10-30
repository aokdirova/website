import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
const Tech = () => {
  return (
    <>
      <h1 className='pb-8'>Click balls to move them around</h1>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map(({ name, icon }) => {
          return (
            <div className='w-28 h-28 cursor-pointer' key={name}>
              <BallCanvas icon={icon} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
