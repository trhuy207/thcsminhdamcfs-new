import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <>
            <br />
                <div className="container">
                    <div className="card">
                        <div className="card-header" style={{backgroundColor: "#0593a1", color: "whitesmoke"}}>
                            <h1>THCS Minh Đạm Confession</h1>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Chào mừng các bạn đã đến với THCS Minh Đạm confession!! </h5>
                            <p className="card-text">
                                Tại đây bản hãy gửi những tâm tư, tình cảm, ... của bản thân mà không lo bị lộ danh tính nè <br />Chúc Các Bạn Một Ngày Vui Vẻ!<br />
                                <br />
                                LƯU Ý :
                                AD sẽ không duyệt những cfs mang tính gây war, xúc phạm nhau hay có những từ ngữ thô tục đâu nhé!
                                Có thể confession sẽ bị trễ vì con ad lười hoặc bận 
                                Hết rùi hihi, cảm ơn mọi người đã đọc :33
                                <br />
                                <li><i>Giờ duyệt: 5h30 - 12h - 14h - 19h (có thể sẽ trễ một chút do ad khá bận ạ)</i></li>
                            </p>
                        </div>
                    </div>
                </div>
                <br />
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Mọi người có tâm sự gì nè</h5>
                            <form action="" method="POST">  
                                <div className="form-group">
                                    <textarea id="message" name="message" className="form-control" placeholder="Xin mời để lại tâm sự" rows="2" required></textarea>
                                </div>   
                                <br/>
                                <button className="btn btn-primary me-2" type="submit" name="submit">Gửi nè! </button>
                                <button className="btn btn-danger" type="reset">Xóa Thông Tin Nhập!</button>
                            </form>
                        </div>
                    </div>
                </div>
                <br />
            </>
        );
    }
}

export default Home;