import React     from "react";
import PropTypes from 'prop-types';

const Article = ( props ) => {

    const {headerArticle, data, headerStyles, dataStyles} = props;
    return (
        <>
            <div className={headerStyles}>{headerArticle}</div>
            <div className={dataStyles}>
                {data}
            </div>
        </>
    );
};

Article.propTypes = {
    headerArticle: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
    headerStyles: PropTypes.string,
    dataStyles: PropTypes.string,

};

export default Article;