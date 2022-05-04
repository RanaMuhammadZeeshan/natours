import React from 'react'
import { Link } from 'react-router-dom'

import nat1 from '../assets/img/nat-1-large.jpg'
import nat2 from '../assets/img/nat-2-large.jpg'
import nat3 from '../assets/img/nat-3-large.jpg'
import secondaryCardImage from '../assets/img/nat-5.jpg'
import primaryCardImage from '../assets/img/nat-6.jpg'
import tertiaryCardImage from '../assets/img/nat-7.jpg'
import storyImage1 from '../assets/img/nat-8.jpg'
import storyImage2 from '../assets/img/nat-9.jpg'
import bgVideo1 from '../assets/img/video.mp4'
import bgVideo2 from '../assets/img/video.webm'
import BookForm from '../components/BookForm/BookForm'

import Card from '../components/Card/Card'
import FeatureCard from '../components/FeatureCard/FeatureCard'
import LinkButton from '../components/LinkButton/LinkButton'
import Story from '../components/Story/Story'

const HomePage = () => {
  const detailListPrimary = [
    '7 day tours',
    'Up to 40 people',
    '6 tour guides',
    'Sleep in provided tents',
    'Difficulty: medium',
  ]
  const detailListSecondary = [
    '7 day tours',
    'Up to 30 people',
    '2 tour guides',
    'Sleep in cozy hotels',
    'Difficulty: easy',
  ]
  const detailListTertiary = [
    '5 day tours',
    'Up to 15 people',
    '3 tour guides',
    'Sleep in provided tents',
    'Difficulty: hard',
  ]

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

      <section className="section-tours">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">Most popular tours</h2>
        </div>

        <div className="row">
          <div className="col-1-of-3">
            <Card
              cardType={'secondary'}
              image={secondaryCardImage}
              lightColor={'#ffb900'}
              darkColor={'#ff7730'}
              heading={'The sea explorer'}
              detailList={detailListSecondary}
              price={'275'}
              popupContent={` Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.`}
            />
          </div>
          <div className="col-1-of-3">
            <Card
              cardType={'primary'}
              image={primaryCardImage}
              lightColor={'#7ed56f'}
              darkColor={'#28b485'}
              heading={'The Forest Hiker'}
              detailList={detailListPrimary}
              price={'497'}
              popupContent={` Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.`}
            />
          </div>
          <div className="col-1-of-3">
            <Card
              cardType={'tertiary'}
              image={tertiaryCardImage}
              lightColor={'#2998ff'}
              darkColor={'#5643fa'}
              heading={'The Snow Adventurer'}
              detailList={detailListTertiary}
              price={'897'}
              popupContent={` Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.`}
            />
          </div>
        </div>

        <div className="u-center-text u-margin-top-huge">
          <LinkButton
            linkTo={'#'}
            content="Discover all tours"
            classNames={'btn--green'}
          />
        </div>
      </section>

      <section className="section-stories">
        <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop>
            <source src={bgVideo1} type="video/mp4" />
            <source src={bgVideo2} type="video/webm" />
            Your browser is not supported
          </video>
        </div>
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">we make people genuinely happy</h2>
        </div>

        <div className="row">
          <Story
            authorName={'Mary Smith'}
            content=" It is a long established fact that a reader will be distracted
          by the readable content of a page when looking at its layout. It
          is a long established fact that a reader will be distracted by
          the readable content of a page when looking at its layout."
            title={'I had the best week ever with my family'}
            image={storyImage1}
          />
        </div>
        <div className="row">
          <Story
            authorName={'Jack Wilson'}
            content=" It is a long established fact that a reader will be distracted
          by the readable content of a page when looking at its layout. It
          is a long established fact that a reader will be distracted by
          the readable content of a page when looking at its layout."
            title={'WOW! My life is completely different now'}
            image={storyImage2}
          />
        </div>
        <div className="u-center-text u-margin-top-huge">
          <Link to={'#'} className="btn-text">
            Read all stories &rarr;
          </Link>
        </div>
      </section>

      <section className="section-book">
        <div className="row">
          <div className="book">
            <div className="book__form">
              <BookForm />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default HomePage
