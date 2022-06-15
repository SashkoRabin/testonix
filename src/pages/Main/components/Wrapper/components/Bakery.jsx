import React from 'react';
import cl from '../Wrapper.module.css';

export default function Bakery() {
  return (
    <div className={cl.bakery}>
      <div className={cl.bakery_content}>
        <div className={cl.bakery_text}>
          <h2>
            Our Bakery offers classic, scratch-made baked goods for every
            occasion.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit animi
            sunt temporibus repudiandae obcaecati voluptatum soluta, unde harum
            fugit vero.
          </p>
        </div>
        <div className={cl.bakery_line} />
        <div className={cl.about_bakery}>
          <div className={cl.ab_left} />
          <div className={cl.ab_right}>
            <p>
              Our bakery and store-front hours are Monday-Friday 8:30-6:00pm and
              Saturday’s 10:00-2:00pm. Our phone and order hours are
              Monday-Friday 8:30-3:00pm and Saturday’s 10:00-2:00pm. Whether you
              are searching for a special birthday cake or simply looking for a
              sweet ending to an everyday meal, The Cake Shop offers something
              for everyone. This is a one of a kind bakery, where the aroma of
              home-style baking weakens even the strongest will.
            </p>
            <div className={cl.ab_right_img} />
          </div>
        </div>
      </div>
    </div>
  );
}
