import './Video.css';

export function Video( title , bgColor)
{
    let Bg = 'dark';
    let Topic = 'React Js';
    return (
    <>
    <div className="pic">
        <img src="./valley.jpg" className="pic" alt="Katherine" />
        <div className={Bg}>{Topic} Tutorial - Components </div>
    </div> 
    </>
    )
}

export default Video;