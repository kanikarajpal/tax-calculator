import "./FormStyle.css";
import { BiCheck } from "react-icons/bi";
import {
  ANNUAL_INCOME_OPTIONS,
  TYPES_OF_INVESTMENT,
  INITIAL_RESULT,
  INITIAL_VALUES,
} from "../../utils/data";
import { calculateTax } from "../../utils/helper";
import { useState, useEffect } from "react";
import { InputContainer } from "../index";

const Form = () => {
  const [currValues, setCurrValues] = useState(INITIAL_VALUES);
  const [resValues, setResValues] = useState(INITIAL_RESULT);

  const handleChange = (name, value) => {
    setCurrValues({ ...currValues, [name]: value });
  };

  useEffect(() => {
    const res = calculateTax(currValues);

    setResValues(res);
  }, [currValues]);

  return (
    <div className="form">
      <div className="formUpperDiv">
        <div className="formItem">
          <label className="label">Financial year</label>
          <div className="inputWrapper">
            <select>
              <option className="option">FY 2023-24</option>
            </select>
          </div>
        </div>
        <div className="formItem">
          <label>Country</label>
          <div className="inputWrapper">
            <select className="select">
              <option className="option" value="australia">
                Australia
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="formLowerDiv">
        <InputContainer
          label="Enter purchase price of crypto"
          name="purchasePrice"
          value={currValues?.purchasePrice}
          handleChange={handleChange}
        />

        <InputContainer
          label="Enter sale price of crypto"
          name="salePrice"
          value={currValues?.salePrice}
          handleChange={handleChange}
        />
        <InputContainer
          label="Enter your expenses"
          name="expenses"
          value={currValues?.expenses}
          handleChange={handleChange}
        />

        <div className="investmentTypeDiv">
          <label>Investment Type</label>
          <div className="typeDiv">
            {TYPES_OF_INVESTMENT?.map((type, id) => {
              return (
                <div className="shortDiv" key={id}>
                  <button
                    name="investmentType"
                    value={type.value}
                    className={`${
                      currValues?.investmentType === type?.value
                        ? "inputContainer activeTermDiv "
                        : "inputContainer"
                    }`}
                    onClick={() => {
                      handleChange("investmentType", type?.value);
                    }}
                  >
                    {type.value}
                    {currValues?.investmentType === type?.value && (
                      <BiCheck className="tickIcon" />
                    )}
                  </button>
                  <div className="shortText"> {type?.icon} 12 months</div>
                </div>
              );
            })}{" "}
          </div>
        </div>
        <div className="IncomeDiv">
          <label>Select your Annual Income</label>
          <div className="inputWrapper">
            <select
              value={currValues?.annualIncome}
              onChange={(e) => {
                handleChange("annualIncome", e.target.value);
              }}
            >
              {ANNUAL_INCOME_OPTIONS?.map((option, id) => (
                <option className="option" key={id} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="taxDiv">
          <div className="taxHeading">Tax Rate</div>
          <div className="taxText">{currValues?.annualIncome}</div>
        </div>
        {currValues?.investmentType === TYPES_OF_INVESTMENT[1].value && (
          <>
            <InputContainer
              label="Capital gains amount"
              name="capitalGain"
              value={resValues?.capitalGain}
              disabled={true}
            />
            <InputContainer
              label="Discount for long term gains"
              name="longTermDiscount"
              value={resValues?.longTermDiscount}
              disabled={true}
            />
          </>
        )}

        <div className="resultDiv">
          <div className="resultUpperDiv">Net Capital gains tax amount</div>
          <div className="resultLowerDiv">$ {resValues?.netCapital}</div>
        </div>
        <div className="lower">
          <div className="resultUpperDiv">The tax you need to pay*</div>
          <div className="lowerBlue">$ {resValues?.tax}</div>
        </div>
      </div>
    </div>
  );
};

export default Form;
