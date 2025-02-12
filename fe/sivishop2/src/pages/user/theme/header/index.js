import React, {memo} from 'react';
import "./styles.scss";
import { AiOutlineFacebook, AiFillMail, AiFillInstagram, AiFillLinkedin, AiOutlineGlobal, AiOutlineUser } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { formatter } from 'utils/formatter';
const Header = () => {
    return (
        <div className='header-top'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6 col-header-top header-top-left'>
                        <ul>
                            <li>
                                <AiFillMail /> 
                                <span>hello@gmail.com</span>
                            </li>
                            <li>
                                Miễn phí ship đơn hàng từ {formatter(200000)}
                            </li>
                        </ul>
                    </div>
                    <div className='col-6 col-header-top header-top-right'>
                        <ul>
                            <li>
                                <Link to={""}>
                                    <AiOutlineFacebook />
                                </Link>   
                            </li>
                            <li>
                                <Link to={""}>
                                    <AiFillInstagram />
                                </Link> 
                            </li>
                            <li>
                                <Link to={""}>
                                    <AiFillLinkedin />
                                </Link> 
                            </li>
                            <li>
                                <Link to={""}>
                                    <AiOutlineGlobal />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <AiOutlineUser />
                                </Link>
                                <span>Đăng nhập</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Header);