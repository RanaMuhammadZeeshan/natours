import React from 'react'
import { Link } from 'react-router-dom'

import nat1 from '../assets/img/nat-1-large.jpg'
import nat2 from '../assets/img/nat-2-large.jpg'
import nat3 from '../assets/img/nat-3-large.jpg'
import FeatureCard from '../components/FeatureCard/FeatureCard'

const HomePage = () => {
  return (
    <React.Fragment>
      <section className="section-about">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
            Excitin tours for adventurous people
          </h2>
        </div>

        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary  u-margin-bottom-small">
              You&apos;re going to fall in love with nature
            </h3>
            <p className="paragraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <h3 className="heading-tertiary u-margin-bottom-small">
              Live adventures like you never have before
            </h3>
            <p className="paragraph">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>

            <Link to={'#'} className="btn-text">
              Learn more &rarr;
            </Link>
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              <img
                src={nat1}
                alt="nature adventure tour 1"
                className="composition__photo composition__photo--p1"
              />
              <img
                src={nat2}
                alt="nature adventure tour 2"
                className="composition__photo composition__photo--p2"
              />
              <img
                src={nat3}
                alt="nature adventure tour 3"
                className="composition__photo composition__photo--p3"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-features">
        <div className="row">
          <div className="col-1-of-4">
            <FeatureCard
              icon={'icon-basic-world'}
              title="Explore the world"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry."
            />
          </div>
          <div className="col-1-of-4">
            <FeatureCard
              icon={'icon-basic-compass'}
              title="Meet nature"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry."
            />
          </div>
          <div className="col-1-of-4">
            <FeatureCard
              icon={'icon-basic-map'}
              title="Find your way"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry."
            />
          </div>
          <div className="col-1-of-4">
            <FeatureCard
              icon={'icon-basic-heart'}
              title="Live a healthier life"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry."
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default HomePage
