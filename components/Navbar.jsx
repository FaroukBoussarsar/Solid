import Link from 'next/link'

const Navbar = (props) => {
    return (
        <div>
            <ul>
                <li><Link href="/"><a className="active" href="#home">Home</a></Link></li>
                <li><Link href="/dances"><a href="#news">Dance</a></Link></li>
              
                <li><Link href="/about"><a href="#about">About</a></Link></li>
            </ul>
            <style jsx>
                {`
       ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
      }
      
      li {
        float: left;
      }
      
      li a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
      }
      
      li a:hover {
        background-color: #111;
        }
      `}</style>
        </div>
    )
}
export default Navbar