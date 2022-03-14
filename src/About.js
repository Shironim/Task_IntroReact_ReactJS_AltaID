// import logo from './logo.svg';
// import './App.css';
import Logo from './assets/img/logo-ALTA@2x.png';
import SideImg from './assets/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg';
import './assets/css/bootstrap.min.css';
import './assets/css/main.css';

function ContactUs() {
  return (
    <div className="App">
      <header>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-8 col-md-12 col-sm-12 col-12">
              <div class="alterra">
                <a href="index.html"><img class="logo-atas" alt="Logo Alta ID" src={Logo} /></a>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12 col-12">
              {/* <!-- <div class="container"> --> */}
              <div class="row align-items-center navig">
                <div class="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right"><a href="index.html">HOME</a></div>
                <div class="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-center"><a href="about.html" class="aktif">ABOUT</a></div>
                <div class="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right"><a href="form.html">CONTACT</a></div>
              </div>
              {/* <!-- </div> --> */}
            </div>
          </div>
        </div>
      </header>
      <div class="container-fluid about-me">
        <h1 class="container pl-2 pt-5 pb-5">
          ABOUT ME.
        </h1>
      </div>
      <div class="container">
        <div class="row pt-5 pb-5 ">
          <div class="col-lg-7 col-md-12 col-sm-12 col-12 pl-5">
            <div class="about-anne">
              <p>
                Hello! I’m Anne Sullivan, a full-stack engineer based in Malang, IDN who enjoys building things
                that live on the internet. I develop exceptional websites and web apps that provide intuitive,
                pixel-perfect user interfaces with efficient and modern backends.
              </p>
              <p>
                Shortly after graduating from Alterra Academy, I joined the engineering team at Alterra where I
                work on a wide variety of interesting and meaningful projects on a daily basis.
              </p>
              <p>
                Here’s few technologies I’ve been working with recently :
              </p>
            </div>
            <div>
              <table class="tabel-anne">
                <tr>
                  <td>HTML & CSS</td>
                  <td>Serverless</td>
                  <td>Scrum</td>
                </tr>
                <tr>
                  <td>Programming</td>
                  <td>Restful API</td>
                  <td>Test-Driven Dev</td>
                </tr>
                <tr>
                  <td>Database</td>
                  <td>Javascript</td>
                  <td>Software Testing</td>
                </tr>
                <tr>
                  <td>Git & Github</td>
                  <td>Sigle Page App</td>
                  <td>UX/UI Designer</td>
                </tr>
              </table>
            </div>
          </div>
          <div class="col-lg-5 col-md-12 col-sm-12 col-12 pr-5">
            <div class="foto-id text-lg-right text-md-center text-sm-center">
              <img alt="Side" src={SideImg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
