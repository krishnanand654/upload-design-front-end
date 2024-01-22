import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbarx() {
    return (
        <>
            <Navbar data-bs-theme="dark" className='nav' style={{ position: 'fixed', width: "100%", borderBottom: '1px solid #313131' }}>
                <Container>
                    <Navbar.Brand href="#home" style={{ fontWeight: '900' }}>CodeCops.</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar >


        </>
    );
}

export default Navbarx;