import React from 'react';
import Card from './common/Card';

const AboutSection = () => (
  <Card padding="2em">
    <section className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eu pulvinar magna. Phasellus semper scelerisque purus eu
                viverra. Suspendisse venenatis nibh augue, eu aliquam lacus.
                Mauris tellus felis, pellentesque eget dictum a, sagittis eget
                nisi.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eu pulvinar magna. Phasellus semper scelerisque purus eu
                viverra. Suspendisse venenatis nibh augue, eu aliquam lacus.
                Mauris tellus felis, pellentesque eget dictum a, sagittis eget
                nisi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Card>
);

export default AboutSection;
