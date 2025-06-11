import Navbar from "./Navbar";


const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-[url('/profile-picture.jpg')] 


 bg-cover"
      style={{ backgroundSize: '35%',backgroundPosition :"left 120px top 100px" }}
    >
      <Navbar/>
      <div className="container grid lg:grid-col-2 h-[calc(100vh-60px)]">
<div className="hidden lg:block">
  <div className="  text-[100px] sm:text-[80px] font-bold leading-tight flex justify-center items-center text-right pl-80 ml-20 pt-14 ">
    <div>
      <p data-aos="zoom-in-up">I am</p>
      <p data-aos="zoom-in-up">Qari Hafiz</p>
      <p data-aos="zoom-in-up">Ubaid ur rahman</p>
    </div>

  </div>

</div>
      </div>
    </div>
  );
}

export default Hero;














