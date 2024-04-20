import logo from "/logo2.png";

const WhoAreWe = () => {
  return (
    <div className="mt-[70px] flex flex-row items-center w-[100%] px-[100px] sm:px-[10px] sm:flex-col">
      <div className="w-[40%]">
        <img src={logo} alt="" />
      </div>

      <div className="w-[60%] sm:w-[100%]">
        <h1 className="font-inter font-semibold text-[43px] text-[#164C28] leading-[53px] text-center">
          Who Are We?
        </h1>
        <p className="font-inter font-normal text-[15px] text-[#717171] leading-[25px] mt-[19px] sm:text-center">
          Rawcycling is more than just a platform - it's a movement towards a
          cleaner, greener future. We provide a significant opportunity for
          Nigerians to address life's essentials while fostering an environment
          conducive for all. By combating one of our biggest adversaries - solid
          waste - we strive to transform communities and protect our planet. At
          Rawcycling, we believe in the power of sustainable solutions to
          revolutionize waste management and promote recycling. Our commitment
          lies in making a positive impact on the environment and society.
          Through innovative approaches and community-driven initiatives, we aim
          to empower individuals and drive lasting change. Join us at
          Rawcycling, where we're reshaping waste management and championing
          sustainability through creative solutions and collective action.
          Together, let's harness the power of recycling to create tangible
          benefits for individuals, communities, and our planet.
        </p>

        <div className="mt-[38px]">
          <h2 className="font-inter font-semibold text-[23px] text-[#164C28] leading-[33px] sm:text-center">
            Olusola Ayanfeoluwa
          </h2>
          <p className="font-inter font-semibold text-[23px] text-[#89939E] leading-[33px] sm:text-center">
            CEO Rawcycling
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
