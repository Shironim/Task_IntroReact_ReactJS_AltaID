// import logo from './logo.svg';
// import './App.css';
import Logo from './assets/img/logo-ALTA-v2@2x.png';
import './assets/css/bootstrap.min.css';
import './assets/css/main.css';

function ContactUs() {
  return (
    <div className="App">
      <div class="container-fluid">
        <div class="row d-flex align-items-center ">
          <div class="col-md-4 form-img">
            <div class="kotak w-100 text-center">
              <img class="alta" alt="Alta ID Logo" src={Logo} />
            </div>
          </div>
          <div class="col-md-8 isi-form">
            <h3>Contact Us</h3>
            <form>
              <div class="form-group rincian-form">
                <label for="nama" class="required">Full Name</label>
                <input type="fullname" class="form-control" id="namalengkap" placeholder="Your Full Name Here.." />
              </div>
              <div class="form-group rincian-form">
                <label for="alamatemail" class="required">Email Address</label>
                <input type="email" class="form-control" id="emailbaru" aria-describedby="emailHelp" placeholder="example@domail.com" />
              </div>
              <div class="form-group rincian-form">
                <label for="telepon" class="required">Phone Number</label>
                <input type="text" class="form-control" id="phonenumber" aria-describedby="nomorbaru" placeholder="08573890xxxxx" />
              </div>
              <div class="form-group rincian-form">
                <label for="kewarganegaraan">Nationality</label>
                <select class="form-control">
                  <option>Selected</option>
                </select>
                <div class="form-group">
                  <label for="message">Message:</label>
                  <textarea class="form-control" rows="5" id="message"></textarea>
                </div>
              </div>
              <input type="submit" class="tombol" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;