import style from './PostLittle.module.scss'

export function PostLittle (props: { title: string, img?: string }): React.ReactElement {
        return (
            <>
                <div>
                    <div className={style.wrap} >
                        <h5>{props.title}</h5 >
                        <img src={props.img} className={style.img} />
                    </div>
                </div>
            </>
        )
}