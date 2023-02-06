import React from 'react'

function ErrorPage() {
    return (
        <div className="container my-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-12">
                    <div className="alert alert-danger" role="alert">
                        <h4 className="alert-heading">Error!</h4>
                        <p>Przepraszamy, coś poszło nie tak. Proszę spróbować ponownie później.</p>
                        <p className="mb-0">Jeśli problem nadal występuje, skontaktuj się z pomocą techniczną.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ErrorPage
