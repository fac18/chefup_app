import React, {useReducer} from 'react';
import './createNewLesson.css';

// Link to how to useReducer for our future reference
//https://medium.com/javascript-in-plain-english/react-controlled-forms-with-hooks-538762aab935

const initialState = {
    photo: '',
    dishName: '',
    lessonLength: '',
    lessonDates: '',
    lessonHours: '',
    location: ''
    distanceToTravel: '',
    skillLevel: ['Beginner, Intermediate, Advanced'],
    ingredients: '',
    description: ''
    dietaryOptions: ''
}

function reducer(state, { field, value }) {
    return {
        ...state,
        [field]: value
    }
}    

const CreateNewLesson = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // if(state) {
    //     console.log(state);
    // }

    const onChange = e => {
        dispatch({ field: e.target.name, value: e.target.value })
    }

    const { photo, dishName, lessonLength, lessonDates, lessonHours, location, distanceToTravel, skillLevel, ingredients, description, dietaryOptions } = state;

    return (
      <form className="lesson-form">
        <div>
          <label for="dishPhoto">Photo</label>
          <input type="file" name="dishPhoto" id="dishPhoto" defaultValue={photo} required onChange={onChange}/>
        </div>
        <div>
          <label for="dishName">What's the name of your dish?</label>
          <input type="text" name="dishName" id="dishName" defaultValue={dishName} required onChange={onChange}/>
        </div>
        <div>
          <label for="lessonLength">Lesson Length</label>
          <input type="text" name="lessonLength" id="lessonLength" defaultValue={lessonLength} required onChange={onChange}/>
        </div>
        <div>
          <p>Select the date and time you are available to teach:</p>
          {/* create html where they can add more than 1 input time and date */}
          <label for="lessonDates"><input type="date" name="lessonDates" id="lessonDates" defaultValue={lessonDates} required onChange={onChange}/></label>
          <label for="lessonHours"><input type="time" name="lessonHours" id="lessonHours" defaultValue={lessonHours} required onChange={onChange}/></label>
        </div>
        <div>
          <label for="location">Location</label>
          <input type="text" name="location" id="location" defaultValue={location} onChange={onChange}/>
        </div>
        <div>
          <label for="distanceToTravel">What distance are you willing to travel?</label>
          <input type="text" name="distanceToTravel" id="distanceToTravel" defaultValue={distanceToTravel} onChange={onChange}/>
        </div>
        <div>
          <p>What skill level do you believe this lesson would be suitable for?</p>
          <label for="beginner"><input type="radio" name="skillLevel" id="beginner" defaultValue={skillLevel[0]} onChange={onChange}/></label>
          <label for="intermediate"><input type="radio" name="skillLevel" id="intermediate" defaultValue={skillLevel[1]} onChange={onChange}/></label>
          <label for="advanced"><input type="radio" name="skillLevel" id="advanced" defaultValue={skillLevel[2]} onChange={onChange}/></label>
        </div>
        <div>
            <p>Ingredients:</p>
          <label><input type="textarea" name="ingredients" defaultValue={ingredients} onChange={onChange}/></label>
        </div>        
        <div>
            <p>Description:</p>
          <label for="description"><input type="textarea" name="description" id="description" defaultValue={description} onChange={onChange}/></label>
        </div>
        <div>
            <p>Tick all that apply:</p>
            <p>Vegetarian</p>
          <label for="vegetarian"><input type="checkbox" id="vegetarian" name="dietaryOptions" defaultValue={dietaryOptions} onChange={onChange}/></label>
          <p>Vegan</p>
          <label for="vegan"><input type="checkbox" id="vegan" name="dietaryOptions" defaultValue={dietaryOptions} onChange={onChange}/></label>
          <p>Pescatarian</p>
          <label for="pescatarian"><input type="checkbox" id="pescatarian" name="dietaryOptions" defaultValue={dietaryOptions} onChange={onChange}/></label>
          <p>Meat</p>
          <label for="meat"><input type="checkbox" id="meat" name="dietaryOptions" defaultValue={dietaryOptions} onChange={onChange}/></label>
          <p>Organic</p>
          <label for="organic"><input type="checkbox" id="organic" name="dietaryOptions" defaultValue={dietaryOptions} onChange={onChange}/></label>
          <p>Dairy Free</p>
          <label for="dairyFree"><input type="checkbox" id="dairyFree" name="dietaryOptions" defaultValue={dietaryOptions} onChange={onChange}/></label>
          <p>Gluten Free</p>
          <label for="glutenFree"><input type="checkbox" id="glutenFree" name="dietaryOptions" defaultValue={dietaryOptions} onChange={onChange}/></label>
          <p>Halal</p>
          <label for="halal"><input type="checkbox" id="halal" name="dietaryOptions" defaultValue={dietaryOptions} onChange={onChange}/></label>
          <p>Kosher</p>
          <label for="kosher"><input type="checkbox" id="kosher" name="dietaryOptions" defaultValue={dietaryOptions} onChange={onChange}/></label>
          <p>Paleo</p>
          <label for="paleo"><input type="checkbox" id="paleo" name="dietaryOptions" defaultValue={dietaryOptions} onChange={onChange}/></label>
          </div>
        <label><button type="submit">Sign Up</button></label>
      </form>
    )
  }
  export default CreateNewLesson;