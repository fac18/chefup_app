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
    location: '',
    distanceToTravel: '',
    skillLevel: '',
    ingredients: '',
    description: '',
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
      <Form className="lesson-form">
        <div>
          <Label for="dishPhoto">Photo</Label>
          <Input type="file" name="dishPhoto" id="dishPhoto" defaultValue={photo} required onChange={onChange}/>
        </div>
        <div>
          <Label for="dishName">What's the name of your dish?</Label>
          <Input type="text" name="dishName" id="dishName" defaultValue={dishName} required onChange={onChange}/>
        </div>
        <div>
          <label for="lessonLength">Lesson Length</label>
          <Input type="text" name="lessonLength" id="lessonLength" defaultValue={lessonLength} required onChange={onChange}/>
        </div>
        <div>
          <p>Select the date and time you are available to teach:</p>
          {/* create html where they can add more than 1 input time and date */}
          <Label for="lessonDates"><Input type="date" name="lessonDates" id="lessonDates" defaultValue={lessonDates} required onChange={onChange}/></Label>
          <Label for="lessonHours"><Input type="time" name="lessonHours" id="lessonHours" defaultValue={lessonHours} required onChange={onChange}/></Label>
        </div>
        <div>
          <Label for="location">Location</Label>
          <Input type="text" name="location" id="location" defaultValue={location} onChange={onChange}/>
        </div>
        <div>
          <Label for="distanceToTravel">What distance are you willing to travel?</Label>
          <Input type="text" name="distanceToTravel" id="distanceToTravel" defaultValue={distanceToTravel} onChange={onChange}/>
        </div>
        <div>
          <p>What skill level do you believe this lesson would be suitable for?</p>
          <Label for="beginner"><Input type="radio" name="skillLevel" id="beginner" defaultValue={skillLevel[0]} onChange={onChange}/></Label>
          <Label for="intermediate"><Input type="radio" name="skillLevel" id="intermediate" defaultValue={skillLevel[1]} onChange={onChange}/></Label>
          <Label for="advanced"><Input type="radio" name="skillLevel" id="advanced" defaultValue={skillLevel[2]} onChange={onChange}/></Label>
        </div>
        <div>
            <p>Ingredients:</p>
          <Label><Input type="textarea" name="ingredients" defaultValue={ingredients} onChange={onChange}/></Label>
        </div>        
        <div>
            <p>Description:</p>
          <Label for="description"><Input type="textarea" name="description" id="description" defaultValue={description} onChange={onChange}/></Label>
        </div>
        <div>
            <p>Tick all that apply:</p>
            <p>Vegetarian</p>
          <Label for="vegetarian"><Input type="checkbox" id="vegetarian" name="dietaryOptions" defaultValue={dietaryOptions} onChange={onChange}/></Label>
          <p>Vegan</p>
          <Label for="vegan"><Input type="checkbox" id="vegan" name="dietaryOptions" defaultValue={dietaryOptions} onChange={onChange}/></Label>
          <p>Pescatarian</p>
          <Label for="pescatarian"><Input type="checkbox" id="pescatarian" name="dietaryOptions" defaultValue={dietaryOptions} onChange={onChange}/></Label>
          <p>Meat</p>
          <Label for="meat"><Input type="checkbox" id="meat" name="dietaryOptions" defaultValue={dietaryOptions} onChange={onChange}/></Label>
          <p>Organic</p>
          <Label for="organic"><Input type="checkbox" id="organic" name="dietaryOptions" defaultValue={dietaryOptions} onChange={onChange}/></Label>
          <p>Dairy Free</p>
          <Label for="dairyFree"><Input type="checkbox" id="dairyFree" name="dietaryOptions" defaultValue={dietaryOptions} onChange={onChange}/></Label>
          <p>Gluten Free</p>
          <Label for="glutenFree"><Input type="checkbox" id="glutenFree" name="dietaryOptions" defaultValue={dietaryOptions} onChange={onChange}/></Label>
          <p>Halal</p>
          <Label for="halal"><Input type="checkbox" id="halal" name="dietaryOptions" defaultValue={dietaryOptions} onChange={onChange}/></Label>
          <p>Kosher</p>
          <Label for="kosher"><Input type="checkbox" id="kosher" name="dietaryOptions" defaultValue={dietaryOptions} onChange={onChange}/></Label>
          <p>Paleo</p>
          <Label for="paleo"><Input type="checkbox" id="paleo" name="dietaryOptions" defaultValue={dietaryOptions} onChange={onChange}/></Label>
          </div>
        <Label><button type="submit">Sign Up</button></Label>
      </Form>
    )
  }
  export default CreateNewLesson;