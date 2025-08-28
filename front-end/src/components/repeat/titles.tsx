type TitleProp = {
    title: string
}

const Title = ({ title }: TitleProp) => {
    return(
        <div id="h1-div">
            <div />
            <h1>{title}</h1>
            <div />
        </div>
    )
}

export default Title