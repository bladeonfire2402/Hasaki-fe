import PropTypes from 'prop-types';


const PrimaryButtonPropTypes = {
    text: PropTypes.string.isRequired,  // Bắt buộc phải có text
    onClickfun: PropTypes.func,         // Không bắt buộc
    size: PropTypes.number,             // size phải là số nếu có truyền vào
};

const TitleText_PropTypes={
    title:PropTypes.string.isRequired,
    color:PropTypes.string
}

export {PrimaryButtonPropTypes,TitleText_PropTypes}