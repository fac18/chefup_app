import { filterByInput } from "./filterByInput";

const lessonArray = [
  {
    title: "Sushi rolls↵",
    description:
      "Super easy healthy vegetarian sushi rolls.  Healthy lunch idea.",
    teacher: "Alex",
    time: "6pm",
    duration: "3:00"
  },
  {
    title: "Seared Scallops with Brown Butter and Lemon Pan Sauce",
    description:
      "Beautiful scallops cooked perfectly.   An elegant meal to be mastered and shared with friends ",
    teacher: "Sarah",
    time: "6:30pm",
    duration: "3:00"
  },
  {
    title: "Spaghetti and meatballs",
    description:
      "A simple tomato sauce with lots of flavour is perf…lassic. This is designed to be a low cost recipe.",
    teacher: "Mike",
    time: "7pm",
    duration: "2:00"
  },
  {
    title: "Healthy Salmon",
    description: undefined,
    teacher: "Sue",
    time: "5pm",
    duration: "2:00"
  }
];

test("filterByInput works as expected", () => {
  expect(filterByInput("sa", lessonArray).length).toBe(2);
});
