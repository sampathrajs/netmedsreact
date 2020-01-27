
import React, {useEffect, useState} from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import {TextInput} from './fields/TextInput';
import {CheckboxInput} from './fields/CheckboxInput';
import {DateInput} from './fields/DateInput';

export const UserForm = ({initialvalue,saveUser}) => {
  return (
    <>
      <Formik
        initialValues={initialvalue}
        validationSchema={Yup.object({
          name: Yup.string()
            .required('Required'),
          dob: Yup.date()          
            .required('Required'),
          salary: Yup.number()
            .required('Required'),
          skills: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must any one of the skills.'),
        })}
        onSubmit={(values) => {
          saveUser(values);
        }}
      >
        <Form>
          <TextInput
            label="Name"
            name="name"
            type="text"
            placeholder="Name"
          />
          <DateInput
            label="Date of birth"
            name="dob"
            type="date"
            placeholder="date of birth"
          />
          <TextInput
            label="Salary"
            name="salary"
            type="number"
            placeholder="20000"
          />
          <CheckboxInput name="skills">
            java script
          </CheckboxInput>

          <button type="submit" className="btn btn-primary">Submit</button>
        </Form>
      </Formik>
    </>
  );
};
