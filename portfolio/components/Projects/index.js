import Image from "next/image";
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
            <h1>Meal Recipe Finder App</h1>
            <p>
              Created with vanilla HTML, CSS, JavaScript & use of asynchronous
              function API Calls
            </p>
            <a
              href="https://github.com/SchoolOfCode/w3d5-fetch-recipe-challange-luke-lilly"
              target="blank"
            >
              <Image src={MealRecipefinder} alt="Photo of Meal Recipe Finder" />
            </a>
          </li>
          <br></br>
          <br></br>
          <li>
            <h1>Cocktail Recipe Finder App</h1>
            <p>
              Created with vanilla HTML, CSS, JavaScript & use of asynchronous
              function API calls
            </p>
            <a
              href="https://github.com/lukechaplin/christmascocktails"
              target="blank"
            >
              <Image
                src={CocktailRecipeFinder}
                alt="Photo of Cocktial Recipe Finder"
              />
            </a>
          </li>
          <br></br>
          <br></br>
          <li>
            <h1>To Do List</h1>
            <p>Created with React</p>
            <a
              href="https://github.com/SchoolOfCode/w7d4_react-hackathon-room-36-lilly-luke-andilham"
              target="blank"
            >
              <Image src={ToDoList} alt="Photo of To Do List" />
            </a>
          </li>
          <br></br>
          <br></br>
          <li>
            <h1>5-Day Weather Forecast App</h1>
            <p>
              Created with React, CSS & use of asynchronous function API calls
            </p>
            <a
              href="https://github.com/SchoolOfCode/w8_d5-hackathon_react-app-with-api-data-room-37"
              target="blank"
            >
              <Image src={weatherapp} alt="Photo of 5-Day Weather App" />
            </a>
          </li>
          <br></br>
          <br></br>
          <li>
            <h1>5-Day Weather Forecast App (Gatsby)</h1>
            <p>
              Created with React, Gatsby & use of asynchronous function API
              calls
            </p>
            <a
              href="https://github.com/SchoolOfCode/hackathon-next-gatsby-room-16-antonio-and-luke"
              target="blank"
            >
              <Image
                src={Weatherappgatsby}
                alt="Photo of 5-Day Weather App made with Gatsby"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
