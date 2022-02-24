import MealRecipefinder from "../../MealRecipefinder.png";
import CocktailRecipeFinder from "../../CocktailRecipeFinder.png";
import ToDoList from "../../ToDoList.png";
import weatherapp from "../../weatherapp.png";
import Weatherappgatsby from "../../Weatherappgatsby.png";

export default function MyProjects() {
  return (
    <div>
      <p>
        Below you wil find thumbnail links to my current pinned projects in
        github, feel free to take a look at my other respositories on there too.
      </p>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <ul>
          <li>
            <h1 class="font-bold">Meal Recipe Finder App</h1>
            <br></br>
            <p>
              Created with vanilla HTML, CSS, JavaScript & use of asynchronous
              function API Calls
            </p>
            <br></br>
            <a
              href="https://github.com/SchoolOfCode/w3d5-fetch-recipe-challange-luke-lilly"
              target="blank"
            >
              <div class=" max-w-screen-lg mx-auto pb-10 flex justify-center -z-10">
                <img
                  src={MealRecipefinder.src}
                  alt="Photo of Meal Recipe Finder"
                />
              </div>
            </a>
          </li>
          <br></br>
          <br></br>
          <li>
            <h1 class="font-bold">Cocktail Recipe Finder App</h1>
            <br></br>
            <p>
              Created with vanilla HTML, CSS, JavaScript & use of asynchronous
              function API calls
            </p>
            <br></br>
            <a
              href="https://github.com/lukechaplin/christmascocktails"
              target="blank"
            >
              <div class="max-w-screen-lg mx-auto pb-10 flex justify-center -z-10">
                <img
                  src={CocktailRecipeFinder.src}
                  alt="Photo of Cocktial Recipe Finder"
                />
              </div>
            </a>
          </li>
          <br></br>
          <br></br>
          <li>
            <h1 class="font-bold">To Do List</h1>
            <br></br>
            <p>Created with React</p>
            <br></br>
            <a
              href="https://github.com/SchoolOfCode/w7d4_react-hackathon-room-36-lilly-luke-andilham"
              target="blank"
            >
              <div class="max-w-screen-lg mx-auto pb-10 flex justify-center -z-10">
                <img src={ToDoList.src} alt="Photo of To Do List" />
              </div>
            </a>
          </li>
          <br></br>
          <br></br>
          <li>
            <h1 class="font-bold">5-Day Weather Forecast App</h1>
            <br></br>
            <p>
              Created with React, CSS & use of asynchronous function API calls
            </p>
            <br></br>
            <a
              href="https://github.com/SchoolOfCode/w8_d5-hackathon_react-app-with-api-data-room-37"
              target="blank"
            >
              <div class="max-w-screen-lg mx-auto pb-10 flex justify-center -z-10">
                <img src={weatherapp.src} alt="Photo of 5-Day Weather App" />
              </div>
            </a>
            <br></br>
          </li>
          <br></br>
          <br></br>
          <li>
            <h1 class="font-bold">5-Day Weather Forecast App (Gatsby)</h1>
            <br></br>
            <p>
              Created with React, Gatsby & use of asynchronous function API
              calls
            </p>
            <br></br>
            <a
              href="https://github.com/SchoolOfCode/hackathon-next-gatsby-room-16-antonio-and-luke"
              target="blank"
            >
              <div class="max-w-screen-lg mx-auto pb-10 flex justify-center -z-10">
                <img
                  src={Weatherappgatsby.src}
                  alt="Photo of 5-Day Weather App made with Gatsby"
                />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
