
function ProfileCard(props){
    const {titulo, arroba, img} = props;
    return(
        <div className="contenedor_profile">
            <img src={img} alt="asd"/>
            <h3>{titulo}</h3>
            <h4>{arroba}</h4>
        </div>
    )
}

export default ProfileCard;