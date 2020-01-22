import React from ('react');


const RecipeCard = () =>{
  return (
    <div>
      <section className="class_image">
        <img src="" alt="class image" />
      </section>
      <section className="class_details">
        <section className="class_first_line">
          <img src="" alt="chef_image" />
          <section className="name_location_rating_container">
            <section class="name_location_container">
              <span className="chef_name"></span>
              <span className="class_location"></span>
            </section>
            <span className="class_rating"></span>
          </section>
          <span className="class_price"> </span>
        </section>
        <section className="class_second_line">
          <span className="class_name"></span>
        </section>
        <section className="class_third_line">
          <a className="class_link" href="url">learn more</a>
        </section>
      </section>
    </div>
  )

}

export default RecipeCard;