export default function Card(props)
{
    return (
        <img src={props.img} alt="" style={{width: props.width, height: props.height}}/>
    )
}