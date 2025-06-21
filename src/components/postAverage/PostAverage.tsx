import style from './PostAverage.module.scss'

export function PostAverage(props: { img: string, title: string }): React.ReactElement {
    return (
        <>
            <div>
                <div className={style.wrap}>
                    <img src={props.img} className={style.img} />
                    <h6 className={style.bigWrap}>{props.title}</h6 >
                </div>
            </div>
        </>
    )
}