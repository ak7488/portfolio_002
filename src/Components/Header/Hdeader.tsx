import './Header.css';
import {AiFillGithub, AiFillTwitterCircle} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md';
import {IoMdDocument} from 'react-icons/io'
import {BsFillSunFill, BsMoonStarsFill} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { REDUX_STATE } from '../../Types';
import { changeMode } from '../../store/actions';

const Header = () => {
    const dispatch = useDispatch();
    const {isDarkMode} = useSelector((state:REDUX_STATE) => state);
    return (
        <header className='header'>
            <img src='/src/favicon.svg' className='header_logo' />
            <div className="header_links">
                <span className='header_link'>
                    {isDarkMode ? <BsMoonStarsFill onClick={() => {
                        dispatch(changeMode(false))
                    }} /> :<BsFillSunFill onClick={() => {
                        dispatch(changeMode(true))
                    }} />}
                </span>
                <a href='https://google.com' target="_blank" className='header_link'>
                    <AiFillGithub />
                    <p>GitHub</p>
                </a>
                <a href='https://google.com' target="_blank" className='header_link'>
                    <AiFillTwitterCircle />
                    <p>Twitter</p>
                </a>
                <a href='https://google.com' target="_blank" className='header_link'>
                    <MdEmail />
                    <p>Email</p>
                </a>
                <a href='https://google.com' target="_blank" className='header_link'>
                    <IoMdDocument />
                    <p>Resume</p>
                </a>
            </div>
        </header>
    )
};

export default Header;