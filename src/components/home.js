import React,{useState} from 'react';
import './home.css';
import { Grid, Modal, Fade} from '@material-ui/core'
import img1 from '../assets/image1.jpg';
import bgimg from '../assets/bgimg.jpg';
import heroimg from '../assets/heroimg.jpg';
import logo from '../assets/logo.png';
import { useNavigate, Link } from 'react-router-dom';
import leftimg from '../assets/leftimg.jpg';

const Home = () => {
    const [loginOpen, setLoginOpen] = useState(false)
    const handleLoginOpen = () => setLoginOpen(true)
    const handleLoginClose = () => setLoginOpen(false)
  
    const [signUpOpen, setSignupOpen] = useState(false)
    const handleSignupOpen = () => setSignupOpen(true)
    const handleSignupClose = () => setSignupOpen(false)
    
    const navigate = useNavigate()
    const cards = [
        {
            img : [heroimg],
            purpose: 'Book of the Day',
            booktitle: 'A Touch of Eternity',
            languages: '(English, Paperback, Durjoy Datta,)',
            price: '₹174',
            originalprice:'₹250',
        },
        {
            img : [heroimg],
            purpose: 'Book of the Day',
            booktitle: 'A Touch of Eternity',
            languages: '(English, Paperback, Durjoy Datta,)',
            price: '₹174',
            originalprice:'₹250',
        },
    ]
    return (
        <div className='whole' style={{height:'100vh', backgroundColor:'black'}}>
        <div className='Background' style={{position:'absolute', zIndex:'0', color:'#FFFFFF', width:'100%'}}><img alt="" src={bgimg} style={{width:'100%'}}></img></div>
        <Grid item container xs={12}>
            
            <header>
                <div className='Header' style={{position:'relative', zIndex:'2',width:'100%', background:'none', top:'0%'}}>
                    <img alt="" src={logo} style={{position:'absolute', padding:'40px 0 0 76px', background:'none'}}/>
                    <button onClick={handleSignupOpen} style={{position:'absolute', display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', padding:'10.8306px', width:'120px',margin:'50px 0 0 1080px', background:'#FFFFFF', border:'none', borderRadius:'7.57056px'}}>Signup</button>
                    <button onClick={handleLoginOpen} style={{position:'absolute', display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', padding:'10.8306px', width:'120px',margin:'50px 0 0 1220px', background:'none', border: '1.08306px solid #FFFFFF', boxSizing: 'border-box', borderRadius:'7.57056px', color:'#FFFFFF'}}>Login</button>
                    <button style={{position:'absolute', display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', padding:'10.8306px', width:'90.88px',margin:'50px 0 0 1340px', background:'none',border:'none', borderRadius:'7.57056px', color:'#FFFFFF'}}>Cart</button>
                </div>
            </header>

            <Modal open={loginOpen} onClose={handleLoginClose}>
                <Fade in={loginOpen}>
                <Grid item container xs={12}>
                    <form className='signup-modal'>
                    <Grid item xs={2} className='leftimg'>
                        <img alt="" src={leftimg} style={{position:'absolute',width:'40%', float:'left',zIndex:'-1', flex:'1', height:'100%',left:'-2px', borderRadius:'2% 0 0 2%'}}/></Grid>
                        <Grid item xs={10} className='leftimg' style={{display:'flex',flexWrap: 'wrap', alignItems:'stretch'}}>
                            <p style={{position:'absolute', color:'#F24E1E', width: '72.3px', height: '39.84px', left:'635px', top:'160px',fontstyle: 'normal', fontWeight: '500', fontSize: '26.561px', lineHeight: '40px'}}>Login</p>
                            <p style={{position:'absolute',color:'#FFFFFF', width: '216px', height: '26.4px', left:'635px', top:'200px',fontstyle: 'normal', fontWeight: '300', fontSize: '17.7073px', lineHeight: '40px'}}>Welcome back to Office!</p>
                            <input placeholder='Email e.g : vincidiui@gmail.com' className='nameInput' style={{position:'absolute', padding: '12px', color:'white', background: 'rgba(255, 255, 255, 0.15)', width:'20rem', left:'635px', top: '275px', borderRadius:'9.55724px', border:'none'}}/>
                            <input placeholder='Password' className='nameInput' style={{position:'absolute', padding: '12px', color:'white', background: 'rgba(255, 255, 255, 0.15)', width:'20rem', left:'635px', top: '327px', borderRadius:'9.55724px', border:'none'}}/>
                            <input onClick={()=>{navigate('/')}} type="submit" value="Proceed in" className='imageInputSubmit' style={{position:'absolute', background:'#F24E1E', width:'21.55rem', height:'2.75rem', left:'635px', top: '400px', alignItems: 'center',borderRadius:'9.55724px', padding: '12px', border:'none', color:'white'}} />
                        </Grid>
                    </form>    
                </Grid></Fade>
            </Modal>

            <Modal open={signUpOpen} onClose={handleSignupClose}>
                <Fade in={signUpOpen}>
                <Grid item container xs={12}>
                    <form className='signup-modal'>
                    <Grid item xs={2} className='leftimg'>
                        <img alt="" src={leftimg} style={{position:'absolute',width:'40%', float:'left',zIndex:'-1', flex:'1', height:'100%',left:'-2px', borderRadius:'2% 0 0 2%'}}/></Grid>
                        <Grid item xs={10} className='leftimg' style={{display:'flex',flexWrap: 'wrap', alignItems:'stretch'}}>
                            <p style={{position:'absolute', color:'#F24E1E', width: '72.3px', height: '39.84px', left:'635px', top:'160px',fontstyle: 'normal', fontWeight: '500', fontSize: '26.561px', lineHeight: '40px'}}>Signup</p>
                            <p style={{position:'absolute',color:'#FFFFFF', width: '216px', height: '26.4px', left:'635px', top:'200px',fontstyle: 'normal', fontWeight: '300', fontSize: '17.7073px', lineHeight: '40px'}}>Welcome back to Office!</p>
                            <input placeholder='Email e.g : vincidiui@gmail.com' className='nameInput' style={{position:'absolute', padding: '12px', color:'white', background: 'rgba(255, 255, 255, 0.15)', width:'20rem', left:'635px', top: '275px', borderRadius:'9.55724px', border:'none'}}/>
                            <input placeholder='Password' className='nameInput' style={{position:'absolute', padding: '12px', color:'white', background: 'rgba(255, 255, 255, 0.15)', width:'20rem', left:'635px', top: '327px', borderRadius:'9.55724px', border:'none'}}/>
                            <input onClick={()=>{navigate('/')}} type="submit" value="Proceed in" className='imageInputSubmit' style={{position:'absolute', background:'#F24E1E', width:'21.55rem', height:'2.75rem', left:'635px', top: '400px', alignItems: 'center',borderRadius:'9.55724px', padding: '12px', border:'none', color:'white'}} />
                        </Grid>
                    </form>    
                </Grid></Fade>
            </Modal>

            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {cards.map((e,index) => (
                    <div key={index} style={{width: '94.5rem', top:'0%'}}>
                        <div style={{position: 'absolute', height: '15rem', zIndex:'1', background:'none', top:'0%' }}>
                             <img alt="" src={e.img} style={{position: 'absolute', width: '15rem', padding:'170px 0 0 76px', background:'none'}} />
                             <div style={{position: 'absolute', top:'10rem', left:'25rem',width:'20rem', background:'none'}} >
                                <p style={{color: 'rgba(255, 255, 255, 0.65)', fontSize:'17.6291px', fontWeight:'normal', height:'5px'}} >{e.purpose}</p>
                                <p style={{color: 'white', fontSize:'31.0029px', fontWeight:'600', width:'410px', height:'25px', top:'5%'}} >{e.booktitle}</p>
                                <p style={{color: 'rgba(255, 255, 255, 0.65)', fontSize:'23.5055px', fontWeight:'600', width:'410px', height:'24px'}} >{e.languages}</p>
                                <p style={{position:'absolute', color: 'white', fontSize:'38.1964px', fontWeight:'600', width:'10px', height:'0px'}} >{e.price}</p>&emsp;
                                <p style={{position:'absolute',color: 'rgba(255, 255, 255, 0.65)', fontSize:'26.4437px', fontWeight:'normal', width:'10px', height:'0px', top:'100%', left:'35%', textDecorationLine:'line-through'}} >{e.originalprice}</p>    

                                <button style={{position:'absolute', display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', padding:'12.7867px', width:'155.14px', height:'50px', margin:'110px 0 0 0px',fontSize:'16.421px', background:'#FFFFFF', border:'none', borderRadius:'8.09379px'}}>Buy Now</button>&emsp;
                                <button style={{position:'absolute', display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', padding:'10.8306px', width:'155.14px', height:'50px', margin:'110px 0 0 170px',fontSize:'16.421px', color:'white', background:'rgba(255, 255, 255, 0.2)', border:'none', borderRadius:'7.57056px'}}>Read Now</button>                                                             
                             </div>
                        </div>
                    </div>
                ))}

                <div style={{position:'relative',zIndex:'3', top:'37rem', padding:'0 0 0 76px'}}> <p style={{zIndex:'3', color:'white', fontWeight:'500', fontSize:'27.9441px'}}>New Releases</p></div>

            </div>
        </Grid></div>
    )
}
 
export default Home;