import React from 'react';
import cl from './Wrapper.module.css';

const Wrapper = () => {
  const date = new Date();
  const day = date.getDate();
  const year = date.getFullYear();
  let prefix = 'th';
  const month = date.toLocaleString('en', { month: 'short' });
  if (day === 1) prefix = 'st';
  if (day === 2) prefix = 'nd';
  if (day === 3) prefix = 'rd';

  return (
    <div className="wrapper">
      <div className={cl.cake}>
        <div className={cl.cake_info}>
          <div className={cl.cake_text}>
            <img
              src="https://images01.nicepage.com/thumbs/a1389d7bc73adea1e1c1fb7e/62ab4a46dace59d4bd6e61a6/Untitled2_150.png"
              alt="logo"
            />
            <h1>Tasty & Fresh</h1>
            <h4>BAKERY</h4>
            <div className={cl.cake_line}></div>
          </div>
        </div>
      </div>
      <div className={cl.bakery}>
        <div className={cl.bakery_content}>
          <div className={cl.bakery_text}>
            <h2>
              Our Bakery offers classic, scratch-made baked goods for every
              occasion.
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
              animi sunt temporibus repudiandae obcaecati voluptatum soluta,
              unde harum fugit vero.
            </p>
          </div>
          <div className={cl.bakery_line}></div>
          <div className={cl.about_bakery}>
            <div className={cl.ab_left}></div>
            <div className={cl.ab_right}>
              <p>
                Our bakery and store-front hours are Monday-Friday 8:30-6:00pm
                and Saturday’s 10:00-2:00pm. Our phone and order hours are
                Monday-Friday 8:30-3:00pm and Saturday’s 10:00-2:00pm. Whether
                you are searching for a special birthday cake or simply looking
                for a sweet ending to an everyday meal, The Cake Shop offers
                something for everyone. This is a one of a kind bakery, where
                the aroma of home-style baking weakens even the strongest will.
              </p>
              <div className={cl.ab_right_img}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={cl.menu}>
        <div className={cl.menu_coffee}></div>
        <div className={cl.menu_text}>
          <h2>Today`s Menu</h2>
          <p className={cl.menu_date}>
            {day + prefix + ' ' + month + ' ' + year}
          </p>
          <p className={cl.menu_dish}>
            Delight in three layers of cake paired with two generous layers of
            filling. DeEtta's uses real buttercream, offers a variety of flavors
            and fillings, and tailors everything — from taste to design — to
            your personal preferences.
          </p>
          <div className={cl.menu_line}></div>
          <a href="*" className={cl.menu_view}>
            view menu
          </a>
        </div>
        <div className={cl.menu_food}></div>
      </div>
      <div className={cl.shop}>
        <div className={cl.shop_text}>
          <h2>Visit Our Online Shop</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
            facilis eligendi sequi dolor, exercitationem ullam obcaecati alias
            similique, eaque, fugiat cumque doloribus neque facere quibusdam
            quod commodi autem sit voluptatem quas sint quam veniam quia in!
            Minus fuga harum quisquam!
          </p>
          <a href="*" className={cl.shop_view}>
            shop
          </a>
        </div>
      </div>
      <div className={cl.info}>
        <div className={cl.info_wrapper}>
          <div className={cl.info_left}>
            <img
              src="https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/59f9f99513af5894a5a8f11b/pexelsphoto907142.jpeg"
              alt="cake"
            />
            <p>
              Danishes, muffins, and scones ... oh my! Start your morning off
              right with a sweet treat from our bakery. Need a little pick-me-up
              any time of day? Look no further than our delicious selection of
              cookies, brownies, macarons, eclairs, and other goodies.
            </p>
          </div>
          <div className={cl.info_right}>
            <p>
              There is nothing like the aroma and taste of freshly-baked bread.
              We use traditional methods (without additives or preservatives) to
              ensure the best taste and quality possible. You can find us
              working in the wee hours of the morning mixing, kneading, and
              making each loaf by hand.
            </p>
            <div className={cl.info_line}></div>

            <img
              src="https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/d2057c146d09515b941c9ea9/pexelsphoto1028711.jpeg"
              alt="cake"
            />
          </div>
        </div>
      </div>
      <div className={cl.contacts}>
        <div className={cl.contacts_img1}></div>
        <div className={cl.contacts_text}>
          <h2>Our Contacts</h2>
          <p className={cl.contacts_me}>
            mok Street <br />
            Big city, 28001 <br />
            sashrabin@gmail.com <br />
            +380(95)-163-2772
          </p>
          <p className={cl.contacts_timetable}>
            Tuesday 6:30AM – 6:00PM
            <br />
            Wednesday 6:30AM – 6:00PM
            <br />
            Thursday 6:30AM – 6:00PM
            <br />
            Friday 6:30AM – 6:00PM
            <br />
            Saturday 6:30AM – 2:00PM
            <br />
            Sunday 8:00AM - 12:00PM
            <br />
            Monday CLOSED
          </p>
          <div className={cl.contacts_line}></div>
          <a href="*" className={cl.contacts_contact}>
            contact us
          </a>
        </div>
        <div className={cl.contacts_img2}></div>
      </div>
    </div>
  );
};

export default Wrapper;
