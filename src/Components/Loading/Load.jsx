import style from './Load.module.css';

function Load(props) {
    return <div className={props.load ? style.loaded : style.loading}></div>;
};

export default Load;
