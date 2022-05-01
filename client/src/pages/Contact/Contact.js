import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <form method='POST'>
                        <div className="mb-3">
                            <label className="form-label">Tên của bạn</label>
                            <input type="text" className="form-control" id="name" required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" id="email"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Số Điện Thoại</label>
                            <input type="email" className="form-control" id="email"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Link Facebook</label>
                            <input type="text" className="form-control" id="fbLink" required/>
                            <div id="fbLink" className="form-text">Chúng tôi sẽ liên hệ để trả lời thắc mắc của bạn qua link facebook của bạn!.</div>
                        </div>
                        <button type="submit" className="btn btn-primary">Gửi</button>
                    </form>
                </div>
            </>
        );
    }
}

export default Contact;