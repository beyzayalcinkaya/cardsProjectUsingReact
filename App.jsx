import "bulma/css/bulma.css";
import "./App.css";
import "./style.css";
import Course from "./Course";
import Angular from "./images/angular.jpg";
import bootstrap5 from "./images/bootstrap5.png";
import ccsharp from "./images/ccsharp.png";
import kompleweb from "./images/kompleweb.jpg";

function App() {
  return (
    <div className="App">
      <section
        class="hero is-info"
        style={{
          backgroundColor: "#333",
        }}
      >
        <div class="hero-body">
          <p
            class="title"
            style={{
              color: "white",
              textAlign: "center",
            }}
          >
            MERHABA
          </p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={Angular}
                title="angular"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus, 
              velit vitae gravida ullamcorper, purus lacus tristique orci, pulvinar pharetra felis"
              />
            </div>
            <div className="column">
              <Course
                image={bootstrap5}
                title="bootstrap5"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus, 
              velit vitae gravida ullamcorper, purus lacus tristique orci, pulvinar pharetra felis "
              />
            </div>
            <div className="column">
              <Course
                image={ccsharp}
                title="ccsharp"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus, 
              velit vitae gravida ullamcorper, purus lacus tristique orci, pulvinar pharetra felis"
              />
            </div>
            <div className="column">
              <Course
                image={kompleweb}
                title="kompleweb"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus, 
              velit vitae gravida ullamcorper, purus lacus tristique orci, pulvinar pharetra felis"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
