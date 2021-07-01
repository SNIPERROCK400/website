import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
  return (
    <div >
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center p-md-2">
          <ul class="navbar-nav">
            <li class="nav-item active">
             <Link href="/">
             <a class="nav-link">Home</a>
             </Link>
            </li>
            <li class="nav-item">
            <Link href="/Services">
             <a class="nav-link">Services</a>
             </Link>
            </li>
            <li class="nav-item">
            <Link href="/about">
             <a class="nav-link">Aboutus</a>
             </Link>
            </li>
            <li class="nav-item">
            <Link href="/Contacts">
             <a class="nav-link">Contacts</a>
             </Link>
            </li>
          </ul>
        </nav>
    </div>
   
  )
}

export default Navigation