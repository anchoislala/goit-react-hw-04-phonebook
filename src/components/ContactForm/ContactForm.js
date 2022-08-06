import { Formik } from 'formik';
import * as yup from 'yup';
import { AddButton, Label, InfoInput, InfoForm, ErrorInfo } from "./ContactForm.styled";
import PropTypes from 'prop-types';

const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.number().required(),
})

const initialValues = {
    name: '',
    number: '',
}

const ContactForm = ({ onSubmit }) => {

    const handleSubmit = (values, {resetForm}) => {

        onSubmit(values);
        resetForm();
    };

        return (
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={schema}
            >
                <InfoForm autoComplete="off">
                    <Label htmlFor='name'>Name
                        <InfoInput type="text" name="name"/>
                        <ErrorInfo name="name" component='div'/>
                    </Label>

                    <Label htmlFor='number'>Number
                        <InfoInput type="tel" name="number"/>
                        <ErrorInfo name="number" component='div'/>
                    </Label>

                    <AddButton type="submit">Add contact</AddButton>
                </InfoForm>
            </Formik>
        );
    };

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;