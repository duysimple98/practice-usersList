const Home = () => {
  return (
    <div className="home-container">
      <pre>
        <b>Yêu cầu:</b>
        <p>
          Sử dụng API từ trang web{" "}
          <a href="https://reqres.in/" target="_blank" rel="noreferrer">
            https://reqres.in/
          </a>{" "}
          để tạo website. Sử dụng thư viện React để tạo một màn hình website cơ
          bản bao gồm các chức năng:
        </p>
        <ol>
          <li>Đăng nhập</li>
          <li>Thêm User</li>
          <li>Sửa User</li>
          <li>Xoá User</li>
          <li>Hiển thị tất cả các User</li>
          <li>Tìm kiếm User theo Id</li>
          <li>Sắp xếp theo FirstName</li>
          <li>Import User từ file .csv</li>
          <li>Export User ra file .csv</li>
        </ol>
        <p>
          Tự do tùy chỉnh html, css, để có một website nhẹ nhàng, khoa học và
          đẹp.
        </p>
        <p>
          Commit và đẩy source code lên github public. Triển khai website lên
          Heroku để demo.
        </p>
        <p>
          <b>Result:</b> Thời gian hoàn thành: 1-3 ngày
        </p>
        <p>Gửi link Heroku và Github link lại email này</p>
        <p>Thời gian phản hồi 2 ngày làm việc kể từ ngày nhận được bài thi.</p>
        <p>
          Yêu cầu backend (optional - không bắt buộc): Sử dụng python django
          rest framework, tạo các api như trên trang web:
          <a href="https://reqres.in/" target="_blank" rel="noreferrer">
            https://reqres.in/
          </a>
        </p>
      </pre>
    </div>
  );
};

export default Home;
