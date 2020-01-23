import React from ('react');


const RecipeCard = () =>{
  return (
    <article>
      <header className="class_image">
        <img src="" alt="class image" />
      </header>
      <footer className="class_details">
        <div className="class_first_line">
          <img src="" alt="chef_image" />
          <div className="name_location_rating_container">
            <div class="name_location_container">
              <span className="chef_name"></span>
              <span className="class_location"></span>
            </div>
            <span className="class_rating"></span>
          </div>
          <span className="class_price"> </span>
        </div>
        <div className="class_second_line">
          <span className="class_name"></span>
        </div>
        <div className="class_third_line">
          <a className="class_link" href="url">learn more</a>
        </div>
      </footer>
    </article>
  )

}

export default RecipeCard;