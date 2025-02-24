import PropTypes from 'prop-types';


const PrimaryButtonPropTypes = {
    text: PropTypes.string.isRequired,  // Bắt buộc phải có text
    onClickfun: PropTypes.func,         // Không bắt buộc
    size: PropTypes.number,             // size phải là số nếu có truyền vào
};

const TitleText_PropTypes={
    title:PropTypes.string.isRequired,
    color:PropTypes.string,
    otherStyle:PropTypes.string
}

const Container_PropTypes={
    bgColor:PropTypes.string,
    flexType:PropTypes.string , //Row or col
    align:PropTypes.bool.isRequired, //Truyền true thì bật align center
    justify:PropTypes.bool.isRequired ,// Truyền true thì bật justify center
    gap:PropTypes.string,
    padding:PropTypes.string,
    otherStyle:PropTypes.string,
}

export {PrimaryButtonPropTypes,TitleText_PropTypes,Container_PropTypes}