const token = process.env.REACT_APP_TOKEN;
var Airtable = require("airtable");
var base = new Airtable({ apiKey: { token } }).base("appnneO9UdlcBo0C3");

base("Table 1").create(
  [
    {
      fields: {
        lesson_name: "Sushi rolls\n",
        teacher: "Alex",
        location: "London",
        price: 25,
        ingredients:
          "200 g sushi rice\n1 tablespoon rice vinegar\n2 sheets of nori\n¼ of a cucumber\n¼ of a red pepper\n½ a carrot\n½ a small ripe avocado",
        time: "6pm",
        lesson_duration: "3:00",
        distance: "2 km",
        travel: "true",
        level: "beginner",
        lesson_description:
          "Super easy healthy vegetarian sushi rolls.  Healthy lunch idea.",
        date: "2020-02-22",
        Tags: ["Vegetarian", "Vegan", "Gluten-free", "Dairy-free"],
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
      }
    }
  ],
  (err, records) => {
    if (err) {
      console.error(err);
      return;
    }
    records.forEach(record => {
      console.log(record.getId());
    });
  }
);
