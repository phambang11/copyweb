import React, {memo} from 'react';
import Header from '../header';
import Footer from '../footer';
import './styles.scss';
const MaterLayout = ({children, ...props}) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default memo(MaterLayout);