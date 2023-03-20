import './App.css';
import getImageUrl from './utils';
import Counter from './Counter';
import Sculptures from './Sculptures';

const renderList = (arr) => {
  let tempStr = '';
  arr.forEach((award, index) => {
    if (arr.length - 1 === index) {
      tempStr += `${award}`;
    } else {
      tempStr += `${award}, `;
    }
  });
  return tempStr;
};

const Profile = ({ name, img, profession, awards, discovery }) => (
  <section className="profile">
    <h2>{name}</h2>
    <img
      className={img.class}
      src={getImageUrl(img.src)}
      alt={img.alt}
      width={img.size}
      height={img.size}
    />
    <ul>
      <li>
        <b>Profession: </b>
        {profession}
      </li>
      <li>
        <b>Awards: {awards.length} </b>( {renderList(awards)} )
      </li>
      <li>
        <b>Discovered: </b>
        {discovery}
      </li>
    </ul>
  </section>
);

export default function App() {
  return (
    <div className="container">
      <section className="section">
        <Sculptures />
      </section>
      <hr />
      <section className="section">
        <h1>Notable Scientists</h1>
        <Profile
          name={'Maria Skłodowska-Curie'}
          img={{
            class: 'avatar',
            src: 'szV5sdG',
            size: 70,
            alt: 'Maria Skłodowska-Curie',
          }}
          profession={'physicist and chemist'}
          awards={[
            'Nobel Prize in Physics',
            'Nobel Prize in Chemistry',
            'Davy Medal',
            'Matteucci Medal',
          ]}
          discovery={'polonium (element)'}
        />
        <Profile
          name={'Katsuko Saruhashi'}
          img={{
            class: 'avatar',
            src: 'YfeOqp2',
            size: 70,
            alt: 'Katsuko Saruhashi',
          }}
          profession={'geochemist'}
          awards={['Miyake Prize for geochemistry', 'Tanaka Prize']}
          discovery={'a method for measuring carbon dioxide in seawater'}
        />
      </section>
      <hr />
      <section className="section">
        <Counter />
      </section>
    </div>
  );
}
