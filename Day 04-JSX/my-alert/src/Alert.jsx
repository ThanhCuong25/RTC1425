import './bootstrap-5.0.2/css/bootstrap.css';

const Alert = (props) => {
    return (
        <div className={props.classAlert} role="alert">
            <p>Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại.</p>
        </div>
    )
}
export default Alert;