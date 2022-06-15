import React from 'react';
import ImgWithEvents from '../../../../../components/ImgWithEvents/ImgWithEvents';
import cl from '../Wrapper.module.css';

export default function Info() {
  return (
    <div className={cl.info}>
      <div className={cl.info_wrapper}>
        <div className={cl.info_left}>
          <ImgWithEvents
            link="
            https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/59f9f99513af5894a5a8f11b/pexelsphoto907142.jpeg"
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
            There is nothing like the aroma and taste of freshly-baked bread. We
            use traditional methods (without additives or preservatives) to
            ensure the best taste and quality possible. You can find us working
            in the wee hours of the morning mixing, kneading, and making each
            loaf by hand.
          </p>
          <div className={cl.info_line} />

          <img
            src="
            https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/d2057c146d09515b941c9ea9/pexelsphoto1028711.jpeg"
            alt="cake"
          />
        </div>
      </div>
    </div>
  );
}
