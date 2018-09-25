import React, {Component} from 'react';

class Footer extends Component{
     render(){
        return (
          <footer id="ereaders-footer" className="ereaders-footer-one">
            <div classNameName="ereaders-footer-widget">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="ereaders-footer-newslatter">
                      <h2>Subscribe to Our Newsletter</h2>
                      <p>Aenean ultricies iaculis cursus. Mauris enim tellus, finibus in felis a, sollicitudin iaculis dolor. Donec sollicitudin orci id efficitur dapibus.</p>
                      <form>
                        <input value="Enter Your Email Address" onblur="if(this.value == '') { this.value ='Enter Your Email Address'; }" onfocus="if(this.value =='Enter Your Email Address') { this.value = ''; }" tabindex="0" type="email" />
                        <input type="submit" value="Subscribe" />
                      </form>
                      <a href="index.html" className="ereaders-footer-logo"><img src="images/footer-logo.png" alt="" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ereaders-copyright">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <p><i className="fa fa-copyright"></i> 2017, All Right Reserved - by <a href="index.html">EyeCix</a></p>
                    <ul className="footer-social-network">
                      <li><a href="https://en-gb.facebook.com/login/" className="fa fa-facebook"></a></li>
                      <li><a href="https://www.linkedin.com/uas/login" className="fa fa-linkedin"></a></li>
                      <li><a href="https://twitter.com/login?lang=en" className="fa fa-twitter"></a></li>
                      <li><a href="https://www.pinterest.com/login/" className="fa fa-pinterest-p"></a></li>
                      <li><a href="https://en-gb.facebook.com/login/" className="fa fa-google-plus"></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <script type="text/javascript" src="https://s3.amazonaws.com/assessts-book/js/jquery.js"></script>
            <script type="text/javascript" src="https://s3.amazonaws.com/assessts-book/js/jquery-ui.js"></script>
            <script type="text/javascript" src="https://s3.amazonaws.com/assessts-book/js/bootstrap.min.js"></script>
            <script type="text/javascript" src="https://s3.amazonaws.com/assessts-book/js/slick.slider.min.js"></script>
            <script type="text/javascript" src="https://s3.amazonaws.com/assessts-book/js/fancybox.pack.js"></script>
            <script type="text/javascript" src="https://s3.amazonaws.com/assessts-book/js/isotope.min.js"></script>
            <script type="text/javascript" src="https://s3.amazonaws.com/assessts-book/js/progressbar.js"></script>
            <script type="text/javascript" src="https://s3.amazonaws.com/assessts-book/js/jquery.countdown.min.js"></script>
            <script type="text/javascript" src="https://s3.amazonaws.com/assessts-book/js/circle-chart.js"></script>
            <script type="text/javascript" src="https://s3.amazonaws.com/assessts-book/js/numscroller.js"></script>
            <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAs_m2ywm-bE8z9YM_WmtPaIQNIosN4Dxo&callback=initMap"></script>
            <script type="text/javascript" src="https://s3.amazonaws.com/assessts-book/js/functions.js"></script>
          </footer>
        )
     }
}
export default Footer;
