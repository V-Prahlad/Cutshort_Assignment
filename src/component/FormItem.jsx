import { useState } from 'react';
import SingleIcon from '../assets/user.svg';
import GroupIcon from '../assets/people.svg';
import Completed from '../assets/completed.png';

const FormItem = ({ item, onChange, answer }) => {
  const [currentValue, setCurrentValue] = useState(answer || null);
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);

  const handleChange = (value) => {
    setCurrentValue(value);
    onChange(value, item.value);
  };

  const handleActive = () => {
    setActive(!active);
    setActive2(false);
  };
  const handleActiveTwo = () => {
    setActive2(!active2);
    setActive(false);
  };

  switch (item.type) {
    case 'first':
      return (
        <div>
          <div className="first__title">
            <h1>{item.heading}</h1>
            <p>{item.title}</p>
          </div>
          <div className="first__section">
            <form className="first__form">
              <label>{item.fullName}</label>
              <input
                type="text"
                placeholder="Steve Jobs"
                onChange={(e) => handleChange(e.target.value, item.value)}
              />
              <label>{item.displayName}</label>
              <input
                type="text"
                placeholder="Steve"
                onChange={(e) => handleChange(e.target.value, item.value)}
              />
            </form>
          </div>
        </div>
      );
      break;
    case 'second':
      return (
        <div>
          <div className="first__title">
            <h1>{item.heading}</h1>
            <p>{item.title}</p>
          </div>
          <div className="first__section">
            <form className="first__form">
              <label>{item.workspaceName}</label>
              <input
                type="text"
                placeholder="Steve Jobs"
                onChange={(e) => handleChange(e.target.value, item.value)}
                // value={currentValue}
              />
              <label>
                {item.workspaceUrl}{' '}
                <span style={{ color: '#C6CEDD' }}>(optional)</span>
              </label>
              <input
                type="url"
                placeholder="Example"
                onChange={(e) => handleChange(e.target.value, item.value)}
                // value={currentValue}
              />
            </form>
          </div>
        </div>
      );
      break;
    case 'third':
      return (
        <div>
          <div className="first__title">
            <h1>{item.heading}</h1>
            <p>{item.title}</p>
          </div>
          <div className="first__section">
            <form className="select__form">
              <div
                onClick={handleActive}
                className={active ? 'selcted__form' : 'single__select'}>
                <img src={SingleIcon} alt="" />
                <h5>{item.fortTitle}</h5>
                <p>{item.forDesc}</p>
              </div>
              <div
                onClick={handleActiveTwo}
                className={active2 ? 'selcted__form' : 'multi__select'}>
                <img src={GroupIcon} alt="" />
                <h5>{item.withTitle}</h5>
                <p>{item.withDesc}</p>
              </div>
            </form>
          </div>
        </div>
      );
    case 'four':
      return (
        <div>
          <div className="first__title">
            <img style={{ marginTop: '40px' }} src={Completed} alt="" />
            <h1 style={{ marginTop: '70px' }}>{item.heading}</h1>
            <p style={{ marginBottom: '30px' }}>{item.title}</p>
          </div>
        </div>
      );
  }
};

export default FormItem;
