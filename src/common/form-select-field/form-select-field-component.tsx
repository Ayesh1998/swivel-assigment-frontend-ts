import React, { FC, ChangeEvent } from "react";
import { Col, Form, Row } from "react-bootstrap";
import InputErrorMessageComponent from "../../components/input-error-message/input-error-message-component";
import { IGenderOptions } from "../../models/interfaces";
import "./form-select-field-styles.css";

export interface IFormSelectFieldComponentProps {
  fieldValue: string;
  fieldName: string;
  fieldLabel: string;
  fieldError: string | undefined;
  inputHandler: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: IGenderOptions[];
}

const FormSelectFieldComponent: FC<IFormSelectFieldComponentProps> = ({
  fieldValue,
  fieldError,
  inputHandler,
  fieldName,
  fieldLabel,
  options,
}) => {
  return (
    <div>
      <Form.Group className="mb-3">
        <Row>
          <Col md={4} className="mt-auto">
            <Form.Label className="form-labels">{fieldLabel}</Form.Label>
          </Col>
          <Col md={8}>
            <Form.Select
              className={fieldError && "input-error"}
              value={fieldValue}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => inputHandler(e)}
              name={fieldName}
            >
              <option>Select</option>
              {options.map((option, index) => (
                <option value={option.value} key={index}>
                  {option.label}
                </option>
              ))}
            </Form.Select>
          </Col>
          {fieldError && <InputErrorMessageComponent error={fieldError} />}
        </Row>
      </Form.Group>
    </div>
  );
};

export default FormSelectFieldComponent;
