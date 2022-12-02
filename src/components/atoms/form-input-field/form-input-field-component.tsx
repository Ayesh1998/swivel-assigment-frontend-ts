import React, { FC, ChangeEvent } from "react";
import { Col, Form, Row } from "react-bootstrap";
import InputErrorMessageComponent from "../input-error-message/input-error-message-component";
import "./form-input-field-component.css";

export interface IFormInputFieldComponentProps {
  fieldValue: string;
  fieldName: string;
  fieldPlaceholder: string;
  type: string;
  fieldLabel: string;
  fieldError: string | undefined;
  inputHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FormInputFieldComponent: FC<IFormInputFieldComponentProps> = ({
  fieldValue,
  fieldError,
  inputHandler,
  fieldName,
  fieldPlaceholder,
  type,
  fieldLabel,
}) => {
  return (
    <div>
      <Form.Group className="mb-3">
        <Row>
          <Col md={4} className="mt-auto">
            <Form.Label className="form-labels">{fieldLabel}</Form.Label>
          </Col>
          <Col md={8}>
            <Form.Control
              className={fieldError && "input-error"}
              onChange={(e: ChangeEvent<HTMLInputElement>) => inputHandler(e)}
              value={fieldValue}
              type={type}
              placeholder={fieldPlaceholder}
              name={fieldName}
            />
          </Col>
          {fieldError && <InputErrorMessageComponent error={fieldError} />}
        </Row>
      </Form.Group>
    </div>
  );
};

export default FormInputFieldComponent;
