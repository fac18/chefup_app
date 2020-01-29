const token = process.env.REACT_APP_TOKEN;
var Airtable = require("airtable");
var base = new Airtable({ apiKey: token }).base("appnneO9UdlcBo0C3");

Airtable.configure({
  endpointUrl: "https://api.airtable.com/v0/appnneO9UdlcBo0C3/Table%201",
  apiKey: { token }
});

const postLessonData = ({
  photo,
  dishName,
  lessonLength,
  lessonDates,
  lessonHours,
  location,
  distanceToTravel,
  skillLevel,
  ingredients,
  description,
  dietaryOptions
}) => {
  console.log("api key", token);
  console.log("dietaryOptions at postLessonData", dietaryOptions);
  base("Table 1").create([
    {
      fields: {
        // lesson_id: "1",
        lesson_name: dishName,
        chef_image:
          "https://airtable.com/tbl5vlOrQjCPQ5Wrl/viwbNivzUaYOsHqfU/recZurudDogIPnylo",
        teacher: "test",
        location: location,
        price: 25,
        ingredients: ingredients,
        time: lessonHours,
        lesson_duration: lessonLength,
        distance: distanceToTravel,
        travel: "true",
        level: skillLevel,
        lesson_description: description,
        date: lessonDates,
        Tags: dietaryOptions,
        main_recipe_image: [
          {
            url:
              "https://dl.airtable.com/.attachments/bf5cbb29de451c0b64fb24dffd554dba/e5dd3ff2/image11.png"
          }
        ],
        chef_image: [
          {
            url:
              "https://dl.airtable.com/.attachments/8a66297eab915671c3e5c57f627897b4/d0b5674c/Profile-photo1.png"
          }
        ],
        additional_recipe_images: [
          {
            url:
              "https://dl.airtable.com/.attachments/97bab34f8567a8c9f92d0971b137722c/604cc7c7/Rectangle763.png"
          },
          {
            url:
              "https://dl.airtable.com/.attachments/b3bd04fe198de3aba77bc2ac3cf46824/7c39e1a1/Rectangle773.png"
          },
          {
            url:
              "https://dl.airtable.com/.attachments/3c8a3a8c8fa1ae480b5a753fb545a52b/437ffc50/Rectangle783.png"
          },
          {
            url:
              "https://dl.airtable.com/.attachments/3301e6c89c6aa7444ac6d054e5322065/f60f5544/Rectangle753.png"
          }
        ]

        // }
        // ],
        // (err, records) => {
        //   if (err) {
        //     console.error(err);
        //     return;
        //   }
        //   // records.forEach(record => {
        //   //   console.log(record.getId());
        //   // });
        // }
      }
    }
  ]);
};

export default postLessonData;
