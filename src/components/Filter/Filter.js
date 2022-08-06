import { LabelFind, FindInput } from "./Filter.styled";
import PropTypes from 'prop-types';

const Filter = ({value, onChange}) => (
    <LabelFind>Find contacts by name
        <FindInput
            type='text'
            value={value}
            onChange={onChange}
        />
    </LabelFind>
);

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Filter;

