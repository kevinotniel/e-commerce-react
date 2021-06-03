import Link from 'next/link'
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

const About = () => {
    const isClientRender = () => ![typeof window, typeof document].includes('undefined');
    console.log(">>", isClientRender());
    return(
        <div>
            <h1>About Page!</h1>
            <Link href="/">
                  <a>Menuju Home Page</a>
            </Link>
            <Avatar alt="Banana" 
                src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/94/9486b5fb9e44e4d3dbae0111020e1cbb1b237a93.jpg" />
            <Chip label="Ini adalah Chip" />
        </div>
    )
}

export default About;