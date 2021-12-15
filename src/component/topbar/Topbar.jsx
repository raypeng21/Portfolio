import './topbar.scss';
// import Person from '@mui/icons-material';

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href='#intro' className='logo'>RayPeng</a>
                    <div className="itemcontainer">
                        {/* <PersonIcon/> */}
                        <span>+1 (306)514-3325</span>
                    </div>
                    <div className="itemcontainer">
                        {/* <PersonIcon/> */}
                        <span>raypeng21@gmail.com</span>
                    </div>
                </div>

                <div className="right">
                    <div className="hbg" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>

                    </div>

                </div>
            </div>
        </div>
    )
}
