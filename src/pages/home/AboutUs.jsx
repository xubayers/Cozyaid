function AboutUs() {
  return (
    <div className="hero mt-12">
      <div className="hero-content  flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co.com/WK60gcG/Screen-Shot-2022-03-22-at-14-08-05.webp"
          className="sm:max-w-sm rounded-lg lg:h-96 md:h-60 object-right object-cover shadow-sm"
        />
        <div>
          <h1 className="md:text-4xl text-2xl font-bold md:mt-0 mt-3">
            About <span className="text-myPrimary"> CozyAit</span>
          </h1>
          <p className="py-6">
            {" "}
            CozyAid is a heartfelt initiative dedicated to spreading warmth and
            compassion during the cold winter months. Every year, countless
            individuals across Bangladesh struggle to stay warm due to a lack of
            proper clothing, and we believe no one should have to face the harsh
            cold alone. Our platform bridges the gap between generous donors and
            those in need, creating a seamless and transparent way to contribute
            to society.
          </p>
          <h1 className="md:text-2xl text-xl font-bold">
            How You Can Contribute
          </h1>
          <p className="py-6">
            {" "}
            <span className="font-semibold"> Donate Winter Clothes</span>:
            Choose a campaign and specify the quantity of clothing you would
            like to donate.
            <br />
            <span className="font-semibold">Spread the Word:</span> Share
            CozyAid with your friends and family to amplify our impact.
            <br />
            <span className="font-semibold">Volunteer:</span> Join our team to
            help distribute donations and make a difference in your community.
          </p>
          <p className="">
            Together, we can make winter a season of hope, warmth, and
            compassion for everyone.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
