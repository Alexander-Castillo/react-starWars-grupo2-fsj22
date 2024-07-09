import '../../../assets/css/Footer.css'

export const Footer = () => {
    return (
        <footer className="bg-dark text-center text-lg-start text-white py-3">
            {/* -- Copyright -- */}
            <div className="container-fluid p-3">
                <div className="row">
                    <div className="col-md-4">
                        <h5>Star Wars Fan Project</h5>
                    </div>
                    <div className="col-md-4">
                        <a className="text-warning" href="#">Privacy Policy</a>
                    </div>
                    <div className="col-md-4">
                        <a className="text-warning" href="#">Terms of Service</a>
                    </div>
                </div>
                <div className="text-center mt-3">
                    © 2024 Star Wars Fan Project. All Rights Reserved.
                </div>
            </div>
        </footer>
    )
}