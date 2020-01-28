import React, {useReducer} from 'react';
import './createNewLesson.css';
import postLessonData from '../../utils/postLessonData'

const initialState = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password1: '',
    password2: '',
    location: ''
}

function reducer(state, { field, value }) {
    return {
        ...state,
        [field]: value
    }
}    

const Signup = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // if(state) {
    //     console.log(state);
    // }

    const onChange = e => {
        dispatch({ field: e.target.name, value: e.target.value })
    }

    const { photo, dishName, lessonLength, lessonDates, lessonHours, location, distanceToTravel, skillLevel, ingredients, description, dietaryOptions } = state;

    const handleSubmit = (event) => {
      event.preventDefault();
      alert("congratulations, you created a lesson");
      postLessonData(state);
    }

    return (
      <form className="lesson-form" onSubmit={handleSubmit} >
        <div>
          <label>Photo</label>
          <input type="file" name="dishPhoto" defaultValue={photo} required onChange={onChange}/>
        </div>
        <div>
          <label>What's the name of your dish?</label>
          <input type="text" name="dishName" defaultValue={dishName} required onChange={onChange}/>
        </div>
        <div>
          <label>Leeson Length</label>
          <input type="text" name="lessonLength" defaultValue={lessonLength} required onChange={onChange}/>
        </div>
        <div>
          <label>Select the date and time you are available to teach:</label>
          {/* create html where they can add more than 1 input time and date */}
          <input type="date" name="lessonDates" defaultValue={lessonDates} required onChange={onChange}/>
          <input type="time" name="lessonHours" defaultValue={lessonHours} required onChange={onChange}/>
        </div>
        <div>
          <label>Location</label>
          <input type="text" name="location" defaultValue={location} onChange={onChange}/>
        </div>
        <div>
          <label>What distance are you willing to travel?</label>
          <input type="text" name="distanceToTravel" defaultValue={distanceToTravel} onChange={onChange}/>
        </div>
        <div>
          <label>What skill level do you believe this lesson would be suitable for?</label>
          <input type="radio" name="skillLevel" defaultValue={skillLevel} onChange={onChange}/>
          <input type="radio" name="skillLevel" defaultValue={skillLevel} onChange={onChange}/>
          <input type="radio" name="skillLevel" defaultValue={skillLevel} onChange={onChange}/>
        </div>
        <div>
          <label>Ingredients:</label>
          <input type="textarea" name="ingredients" defaultValue={ingredients} onChange={onChange}/>
        </div>        
        <div>
          <label>Description:</label>
          <input type="textarea" name="description" defaultValue={description} onChange={onChange}/>
        </div>
        <div>
            <p>Tick all that apply:</p>
          <label>Vegetarian</label>
          <input type="checkbox" name="dietaryOptions" defaultValue={dietaryOptions} onChange={onChange}/>
          <label>Vegan</label>
          <input type="checkbox" name="dietaryOptions" defaultValue={dietaryOptions} onChange={onChange}/>          
          <label>Pescatarian</label>
          <input type="checkbox" name="dietaryOptions" defaultValue={dietaryOptions} onChange={onChange}/>          
          <label>Meat</label>
          <input type="checkbox" name="dietaryOptions" defaultValue={dietaryOptions} onChange={onChange}/>          
          <label>Organic</label>
          <input type="checkbox" name="dietaryOptions" defaultValue={dietaryOptions} onChange={onChange}/>          
          <label>Dairy Free</label>
          <input type="checkbox" name="dietaryOptions" defaultValue={dietaryOptions} onChange={onChange}/>          
          <label>Gluten Free</label>
          <input type="checkbox" name="dietaryOptions" defaultValue={dietaryOptions} onChange={onChange}/>          
          <label>Halal</label>
          <input type="checkbox" name="dietaryOptions" defaultValue={dietaryOptions} onChange={onChange}/>          
          <label>Kosher</label>
          <input type="checkbox" name="dietaryOptions" defaultValue={dietaryOptions} onChange={onChange}/>          
          <label>Paleo</label>
          <input type="checkbox" name="dietaryOptions" defaultValue={dietaryOptions} onChange={onChange}/>        
          </div>
        <button type="submit" defaultValue="submit" >Sign Up</button>
      </form>
    )
  }
  export default Signup;