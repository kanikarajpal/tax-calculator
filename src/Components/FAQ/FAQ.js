import "./FAQStyle.css";
import { FAQ_DATA } from "../../utils/data";

const FAQ = () => {
  return (
    <div className="FAQdiv">
      <div className="faqHeading">Frequently Asked Questions</div>
      {FAQ_DATA.map((item, id) => {
        return (
          <div className="faqDiv" key={id}>
            <div className="faqQues">
              {id + 1}. {item?.question}
            </div>
            <p className="answerDiv">{item?.paragraph1}</p>
            {item?.paragraph2 && (
              <p className="answerDiv">{item?.paragraph2}</p>
            )}
            {item.bullets && (
              <ul className="list">
                {item.bullets.map((bullet, index) => {
                  return (
                    <li key={index}>
                      <span className="bulletHeading">{bullet.heading} - </span>
                      <span>{bullet.desc}</span>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;
