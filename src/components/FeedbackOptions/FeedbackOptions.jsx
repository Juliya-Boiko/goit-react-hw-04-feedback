import PropTypes from 'prop-types';
import { PrimaryButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ handlerGood, handlerNeutral, handlerBad }) => {
    return (
        <div>
            <PrimaryButton type='button' onClick={handlerGood}>Good</PrimaryButton> 
            <PrimaryButton type='button' onClick={handlerNeutral}>Neutral</PrimaryButton>
            <PrimaryButton type='button' onClick={handlerBad}>Bad</PrimaryButton>
        </div>
    );
}

FeedbackOptions.propTypes = {
    handlerGood: PropTypes.func.isRequired,
    handlerNeutral: PropTypes.func.isRequired,
    handlerBad: PropTypes.func.isRequired,
}